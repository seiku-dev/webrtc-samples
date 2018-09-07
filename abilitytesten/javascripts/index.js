"use strict";


var isWebRTCSupported = false;
['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function(item) {
    if (isWebRTCSupported) {
        return;
    }
    if (item in window) {
        isWebRTCSupported = true;
    }
});

try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var audioContext = new AudioContext();
} catch (e) {
    console.log('Failed to instantiate an audio context, error: ' + e);
}
function onTitleClick(id) {
    var targetId = "#";
    if (id == "camera-title") {
        targetId += "camera-detail";
    } else if (id == "mic-title") {
        targetId += "mic-detail";
    } else if (id == "connection-title") {
        targetId += "connection-detail";
    } else if (id == "support-title") {
        targetId += "support-detail";
    } else if (id == "browser-title") {
        targetId += "browser-detail";
    } else {
        console.error("wrong id : " + id);
        return;
    }
    if ($(targetId).is(":visible")) {
        $(targetId).hide();
    } else {
        $(targetId).show();
    }
}

function resetUI() {
    var camera = $("#camera-title");
    var mic =  $("#mic-title");
    var connection =  $("#connection-title");
    var support = $("#support-title");
    var browser = $("#browser-title");

    camera.off("click").on("click", function () {
        onTitleClick(this.id);
    });
    mic.off("click").on("click", function () {
        onTitleClick(this.id);
    });
    connection.off("click").on("click", function () {
        onTitleClick(this.id);
    });
    support.off("click").on("click", function () {
        onTitleClick(this.id);
    });
    browser.off("click").on("click", function () {
        onTitleClick(this.id);
    });

    camera[0].innerText = text.Camera;
    mic[0].innerText = text.Mic;
    connection[0].innerText = text.Connection;
    support[0].innerText = text.Support;

    camera.css("background", "#E2E2E2");
    mic.css("background", "#E2E2E2");
    connection.css("background", "#E2E2E2");
    support.css("background", "#E2E2E2");

    $("#camera-detail").hide();
    $("#browser-detail").hide();
    $("#mic-detail").hide();
    $("#connection-detail").hide();
    $("#support-detail").hide();

    $("#camera-detail")[0].innerText = "";
    $("#mic-detail")[0].innerText = "";
    $("#connection-detail")[0].innerText = "";
    $("#support-detail")[0].innerText = "";
    $("#browser-detail")[0].innerText = "";
}

function checkTBSVersion(ua) {
    //ua = "Mozilla/5.0 (Linux; Android 7.1.1; vivo X9 Build/NMF26F; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/53.0.2785.49 Mobile MQQBrowser/6.2 TBS/043501 Safari/537.36 MicroMessenger/6.5.13.1100 NetType/WIFI Language/zh_CN";
    var list = ua.split(" ");
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (item.indexOf("TBS") !== -1 || item.indexOf("tbs") !== -1) {
            var versionStr = item.split("/")[1];
            var version = parseInt(versionStr) || 0;
            if (version <= 43600) {
                alert("您的TBS版本号(" + versionStr + ")过低，not supportWebRTC，请升级!");
            }
        }
    }
}

function init() {

    resetUI();
    // $("#us")[0].innerText = navigator.userAgent;
    $("#stunserver").val("stun:webrtc.qq.com:8800");
    $("#start-btn").off("click").on("click", function () {
        resetUI();
        startAudioTest();
        startBrowserTest();
    });
    checkTBSVersion(navigator.userAgent);
}

function startLoadingInner(text, dom, step) {
    for (var i = 0; i < step; i++) {
        text += ".";
    }
    dom.innerText = text;
}

function startLoading(text, dom) {
    intervalID = setInterval(function (text, dom) {
        startLoadingInner(text, dom, intervalStep);
        intervalStep++;
        if (intervalStep > 3) {
            intervalStep = 1;
        }
    }, 500, text, dom)
}

function stopLoading() {
    clearInterval(intervalID);
}


var audioMessage = "";
var videoMessage = "";
var supportMessage = "";
var connectionMessage = "";
var intervalID = 0;
var intervalStep = 1;
var text = {
    Mic : "Microphone",
    MicTest : "Microphone detect",
    Camera : "Camera",
    CameraTest : "Camera detect",
    Support : "分辨率",
    SupportTest : "support的分辨率检测",
    Connection : "Connectivity",
    ConnectionTest : "Connectivity test",
    Browser : "Browser"
};
init();

function onAudioTestMessage(str) {
    audioMessage += str + "\r\n";
}
function onAudioTestDone(result) {
    stopLoading();
    $("#mic-detail")[0].innerText = audioMessage;
    audioMessage = "";
    var titleText = null;

    // console.debug( 'dddddddd', result )
    if (result == 0) {
        $("#mic-title").css("background", "#90dc90");
        titleText = text.MicTest + " ok !!!";

        audioInputTest()
    } else {
        $("#mic-title").css("background", "#dc9090");
        titleText = text.MicTest + " failed !!!";
    }
    $("#mic-title")[0].innerText = titleText;
    startVideoTest();
}
function onVideoTestMessage(str) {
    videoMessage += str + "\r\n";
}
function onVideoTestDone(result) {
    stopLoading();
    $("#camera-detail")[0].innerText = videoMessage;
    videoMessage = "";
    var titleText = null;
    if (result == 0) {
        $("#camera-title").css("background", "#90dc90");
        titleText = text.CameraTest + " ok !!!";
    } else {
        $("#camera-title").css("background", "#dc9090");
        titleText = text.CameraTest + " failed !!!";
    }
    $("#camera-title")[0].innerText = titleText;
    // startSupportTest();
    startConnectionTest();
}
function onSupportTestMessage(str) {
    supportMessage += str + "\r\n";
}
function onSupportTestDone(result) {
    stopLoading();
    $("#support-detail")[0].innerText = supportMessage;
    supportMessage = "";
    var titleText = null;
    if (result == 0) {
        $("#support-title").css("background", "#90dc90");
        titleText = text.SupportTest + " ok !!!";
    } else {
        $("#support-title").css("background", "#dc9090");
        titleText = text.SupportTest + " failed !!!";
    }
    $("#support-title")[0].innerText = titleText;

    startConnectionTest();
}
function onConnectionTestMessage(str) {
    connectionMessage += str + "\r\n";
}
function onConnectionTestDone(result) {
    stopLoading();
    $("#connection-detail")[0].innerText = connectionMessage;
    connectionMessage = "";
    var titleText = null;

    if (result == 0) {
        $("#connection-title").css("background", "#90dc90");
        titleText = text.ConnectionTest + " ok !!!";
    } else {
        $("#connection-title").css("background", "#dc9090");
        titleText = text.ConnectionTest + " failed !!!";
    }
    $("#connection-title")[0].innerText = titleText;
    disableButton(false, "start-btn");
}

function disableButton(isDisable, id) {
    var queryId = "#" + id;
    $(queryId).prop("disable", isDisable);
}

function startAudioTest() {
    disableButton(true, "start-btn");
    startLoading(text.MicTest, $("#mic-title")[0]);
    if(!isWebRTCSupported){
        onAudioTestDone(-1);
        return;
    }
    if(false && isMobile.iOS()){
        //IOS无法遍历设备，默认认为support
       onAudioTestDone(0);
       return;
    }
    var audioTest = new WebRTCTest();
    audioTest.setListener({
        onMessage : onAudioTestMessage,
        done : onAudioTestDone
    });
    var micTest = new MicTest(audioTest);
    micTest.run();
}

function startVideoTest() {
    if(!isWebRTCSupported){
        onVideoTestDone(-1);
        return;
    }
    startLoading(text.CameraTest, $("#camera-title")[0]);
    var videoTest = new WebRTCTest();
    videoTest.setListener({
        onMessage : onVideoTestMessage,
        done : onVideoTestDone
    });
    var camTest = new CameraTest(videoTest, [ [640,360], [640,480]]);
    camTest.run();
}

function startSupportTest() {

    if(!isWebRTCSupported || (!isMobile.safari() && isMobile.iOS() )){
        onSupportTestDone(-1);
        return;
    }
    startLoading(text.SupportTest, $("#support-title")[0]);
    var supportTest = new WebRTCTest();
    supportTest.setListener({
        onMessage : onSupportTestMessage,
        done : onSupportTestDone
    });
    var resolutionArray = [
        // [160, 120], [320, 180], [320, 240], [640, 360], [640, 480], [768, 576],
        // [1024, 576], [1280, 720], [1280, 768], [1280, 800], [1920, 1080],
        // [1920, 1200], [3840, 2160], [4096, 2160]
          [1280,720],[960,540], [640,360], [640,480], [480,264], [320,180]
    ];



    var supTest = new CameraTest(supportTest, resolutionArray);
    supTest.run();
}

var FetchSigCgi = 'https://www.qcloudtrtc.com/sxb_dev/?svc=doll&cmd=fetchsig';
function getUserSig( callback ){
    
    $.ajax({
        type: "POST",
        url: FetchSigCgi,
        dataType: 'json',
        data:JSON.stringify({
            appid: 1400027849,
            id : "neallin"
        }),
        success: function (json) {
            if(json && json.errorCode === 0 ){
                //一会儿进入房间要用到
                var url = "wss://webrtc.qq.com:8687/?userSig="+json.data.userSig+"&sdkAppid=1400027849&identifier=neallin";
                var url = 'wss://webrtc.qq.com:8687/?userSig=eJxNztFOgzAUgOF34dpMWsIi3oFDNhwqk*C2mDQFCjvOlY6WRrL47laCyXr5-Sfn9GJl67cZLcu254qoQTDr3rKtm5GhYlxBDawzWBR0YioEVIQq4nTV1bSsjmRMxiZi3wI6RmitxhXIHt8UNesktNw4tpGLsHMdFZz*foJcjNAdQp5rPOilBM6knGVMKlPlAdT-cWgMJOHuYZUuksilns3zZhE6m6-aFfFj8XH7GuW79gnmfbAsjzRSp2T-mfirgx-X2fkFB89LHZ*3td4PXIfzvH2PuFhvHR95PlapHppNmlk-v*2-XR0_&sdkAppid=1400095367&identifier=bba';
                callback(url );
            }else{
                console.error(json);
            }
        },
        error: function (err){
            console.error(err);
        }
    })
}

var websocket = null;
function getRelayIp(callback ,error){
    if (websocket) {
        try {
            websocket.close();
            websocket = null;
        } catch (e) {
            console.error(e);
        }
    }
    getUserSig( function(url){
        
        websocket = new WebSocket(url);

        websocket.onmessage = callback;
        websocket.onopen = wsonopen;
        websocket.onerror = error;
        websocket.onclose = wsonclose;
    })
}
// getRelayIp();
function wsonopen(data){
    console.debug(data);
}

function wsonclose(data){
    console.debug(data);
}

function wsonclose(data){
    console.debug(data);
}
function wsonclose(data){
    console.debug(data);
}

function startConnectionTest() {
    if(!isWebRTCSupported){
        onConnectionTestDone(-1);
        return;
    }
    getRelayIp(function(data){

        //IOS默认认为support
        if(isMobile.iOS() && isMobile.safari()){
           onConnectionTestDone(0);
           return;
        }
        var json = JSON.parse(data.data);
        var ip = json.content.relayip;
        startLoading(text.ConnectionTest, $("#connection-title")[0]);
        var connectionTest = new WebRTCTest();
        connectionTest.setListener({
            onMessage : onConnectionTestMessage,
            done : onConnectionTestDone
        });
        var conTest = new ConnectionTest(connectionTest , 'stun:'+ip+":8800");
        conTest.run();
    },function(){
        onConnectionTestDone(-1);
    });

}




function checkTBSVersion(ua) {
    var list = ua.split(" ");
    for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (item.indexOf("TBS") !== -1 || item.indexOf("tbs") !== -1) {
            var versionStr = item.split("/")[1];
            var version = parseInt(versionStr) || 0;
            return version
        }
    }
    return null;
}

function startBrowserTest(){
    $("#browser-detail")[0].innerText = "";
    var titleText = null;
    $("#browser-title")[0].innerText = titleText;

    $("#browser-detail")[0].innerText = navigator.userAgent;
    var isMobileBrowser = false;
    for(var a in isMobile){
        if( isMobile[a]() ){
            isMobileBrowser = true
            console.debug(a)
            console.debug(isMobile[a]())
            titleText = a + ":";
            var version = checkTBSVersion(navigator.userAgent);
            if( a === 'Android' && version && version < 43600 ){
                $("#browser-title").css("background", "#dc9090");
                titleText =  "TBS (version:"+ version + ") not support !!!";
            }
            else if(!isWebRTCSupported || (!isMobile.safari() && isMobile.iOS())) {
                $("#browser-title").css("background", "#dc9090");
                titleText = a + "browser not support !!!";
                onVideoTestDone(-1);
                onSupportTestDone(-1);
            }else{
                if( isMobile.safari() && isMobile.iOS()  ){
                    //ios 11 版本 11.0.3 以下not support
                    var matches = (navigator.userAgent).match(/OS (\d+)_(\d+)_?(\d+)?/);
                    if(matches && matches[1]>=11 && (matches[2]>=1 || matches[3] >= 3) ){
                        $("#browser-title").css("background", "#90dc90");
                        titleText =  matches[0] + " Browser support !!!";
                    }else{
                        $("#browser-title").css("background", "#dc9090");
                        titleText =  matches[0] + "  not support !!!";
                    }
                }else{
                    $("#browser-title").css("background", "#90dc90");
                    titleText =  a + " Browser support !!!";
                }
            }
            $("#browser-title")[0].innerText = titleText;
            break;
        }
    }

    if( !isMobileBrowser){
        if(isWebRTCSupported){
            titleText =  "browser  support !!!";
            $("#browser-title").css("background", "#90dc90");
            $("#browser-title")[0].innerText = titleText;
        }else{

            titleText = "browser  not support !!!";
            $("#browser-title").css("background", "#dc9090");
            $("#browser-title")[0].innerText = titleText;
        }
    }
}


