/*
    写在前面：
    为了保持在功能演示方面的简洁， demo不会做任何合法性校验
*/

// 本demo用到的唯一一个CGI，获取usersig （什么是usersig? 请看 https://www.qcloudtrtc.com/webrtcapi/ )
// 如果您不了解非对称加密，可以这样简单理解：
// 你有公钥 和 私钥 两把钥匙，腾讯云有一把钥匙（公玥）
// 你把数据丢盒子里，并且用私钥上锁，然后把上了锁的盒子给到腾讯云
// 腾讯云可以用公钥这把钥匙来解开这把锁，拿到里面的数据。
// 所以你需要的是
// 去控制台把私钥下载下来，用TLS工具算一个签名（usersig)

//不要把您的sdkappid填进来就用这个cgi去测，测试demo的cgi没有您的私钥，臣妾做不到啊
var FetchSigCgi = 'https://www.qcloudtrtc.com/sxb_dev/?svc=account&cmd=authPrivMap';
var sdkappid,
    accountType = 14418, // accounttype 还是在文档中会找到
    userSig,
    username,
    localStream;


function onKickout() {
    alert("on kick out!");
}

var i = 0;
function switchRole() {
    i++;
    RTC.changeSpearRole(i%2 == 0 ? "wp1280":"user");
}

function onRelayTimeout(msg) {
    alert("onRelayTimeout!" + (msg ? JSON.stringify(msg) : ""));
}

function createVideoElement( id, isLocal ){
    var videoDiv=document.createElement("div");
    videoDiv.innerHTML = '<video id="'+id+'" autoplay'+ (isLocal ? 'muted':'') +' playsinline ></video>';
    document.querySelector("#remote-video-wrap").appendChild(videoDiv);

    return document.getElementById(id);
}

//是否safari
var isSafari = false;
WebRTCAPI.detectRTC({screenshare: false}, function(data){
    isSafari = data.isSafari;
})


function onLocalStreamAdd(info) {
    if (info.stream && info.stream.active === true)
    {
        var id = "local";
        var video = document.getElementById(id);
        if(!video){
            createVideoElement(id, true);
        }
        var video = document.getElementById(id)
        video.srcObject = info.stream;
        video.muted = true
        video.autoplay = true
        video.playsinline = true

    }
}


function onRemoteStreamUpdate( info ) {
    console.debug( info )
    if (info.stream && info.stream.active === true)
    {
        var id = info.videoId;
        var video = document.getElementById(id);
        if(!video){
            video = createVideoElement(id);
        }
        video.srcObject = info.stream;
    } else{
        console.log('欢迎用户'+ info.userId+ '加入房间');
    }
}


function onRemoteStreamRemove( info ) {
    console.log( info.userId+ ' 断开了连接');
    var videoNode = document.getElementById( info.videoId );
    if( videoNode ){
        videoNode.srcObject = null;
        document.querySelector("#remote-video-wrap").removeChild(videoNode);
    }
}

function onWebSocketClose() {
    ;
}


function gotStream( opt ,succ){
    RTC.getLocalStream({
        video:true,
        audio:true,
        videoDevice:opt.videoDevice
    },function(info){
        var stream = info.stream;
        localStream = stream;
        succ ( stream )
    });
}

function initRTC(opts){
    // 初始化
    window.RTC = new WebRTCAPI({
        // "debug":{
        //     log:true
        // },
        "userId": opts.userId,
        "userSig": opts.userSig,
        "sdkAppId": opts.sdkappid,
        "closeLocalMedia":true
    });
    
    
    RTC.createRoom({
        roomid : opts.roomid * 1,
        privMap: 255
    },function(){
        if(isSafari){
            var videoDevice = {
                facingMode:{
                    ideal:'user'
                }
            };
        }else{
            var videoDevice = videoDevices[0];
        }
        gotStream({
            videoDevice: videoDevice
        },function(stream){
            RTC.startRTC({
                stream: stream,
                role: 'user'
            });
        })
    });


    // 远端流新增/更新
    RTC.on("onRemoteStreamUpdate",onRemoteStreamUpdate)
    // 本地流新增
    RTC.on("onLocalStreamAdd",onLocalStreamAdd)
    // 远端流断开
    RTC.on("onRemoteStreamRemove",onRemoteStreamRemove)
    // 重复登录被T
    RTC.on("onKickout",onKickout)
    // 服务器超时
    RTC.on("onRelayTimeout",onRelayTimeout)
    // 服务器超时
    RTC.on("onErrorNotify",function(error){
        console.error( error );
    }) 
    //枚举设备
    listDevices();
}
$("#userId").val("video_"+ parseInt(Math.random()*100000000));

function push(){
    //推流
    login(  );

}

var videoDevices = [];
var audioDevices = [];
var speakerDevices = [];
var speakerIndex = 0;
var audioIndex = 0;
var videoIndex = 0;

function listDevices(){
    //枚举摄像头
    RTC.getVideoDevices(function(devices) {
        videoDevices = devices
        var deviceJsonList = [];
        var html = '';
        for(var a in devices){
            console.debug( devices[a])
            deviceJsonList.push({
                label: devices[a].label,
                deviceId: devices[a].deviceId
            })
            html += '<p>'+JSON.stringify({
                label: devices[a].label,
                deviceId: devices[a].deviceId
            })+'</p>'
        }
        $("#videoDevices").html(  html  );
    });

    
    //枚举麦克风
    RTC.getAudioDevices(function(devices) {
        audioDevices = devices
        var deviceJsonList = [];
        var html = '';
        for(var a in devices){
            console.debug( devices[a])
            deviceJsonList.push({
                label: devices[a].label,
                deviceId: devices[a].deviceId
            })
            html += '<p>'+JSON.stringify({
                label: devices[a].label,
                deviceId: devices[a].deviceId
            })+'</p>'
        }
        $("#audioDevices").html( html );
    });
    
    //枚举麦克风
    RTC.getSpeakerDevices(function(devices) {
        speakerDevices = devices
        var deviceJsonList = [];
        var html = '';
        for(var a in devices){
            console.debug( devices[a])
            deviceJsonList.push({
                label: devices[a].label,
                deviceId: devices[a].deviceId
            })
            html += '<p>'+JSON.stringify({
                label: devices[a].label,
                deviceId: devices[a].deviceId
            })+'</p>'
        }
        $("#speakerDevices").html( html );
    });
}

// 切换设备
function switchVideoDevice() {
    videoIndex ++;
    if(videoIndex == videoDevices.length )videoIndex = 0;

    if( isSafari ){
        //采集音视频流
        RTC.getLocalStream({
            video:true,
            audio:true,
            videoDevice: {
                facingMode: {
                    ideal: videoIndex === 0 ? 'user': 'environment'
                }
            }
        },function(info){
            //更新音视频流
            RTC.updateStream( {
                stream: info.stream
            })
        });
    }else{
        if( localStream ){
            localStream.getTracks().forEach(track => {
              track.stop();
            });
            localStream = null
        }
        if( RTC.global.localStream ){
            RTC.global.localStream.getTracks().forEach(track => {
              track.stop();
            });
            RTC.global.localStream = null
        }
        console.debug('switchVideoDevice',videoIndex, videoDevices[videoIndex])
        RTC.getLocalStream({
            video: true,
            audio:true,
            videoDevice: videoDevices[videoIndex]
        }, function(info){
            localStream = info.stream;
            RTC.updateStream({
                role: 'user', // or other role 
                stream: info.stream
            })
        })
    }
}

function switchAudioDevice(){
    audioIndex ++;
    if( audioIndex ==  audioDevices.length ) audioIndex = 0;
    RTC.getLocalStream({
        audio: true,
        video: true,
        attributes: {
            audioDevice: audioDevices[audioIndex]
        }
    }, function(info){
        RTC.updateStream({
            role: 'user', // or other role 
            stream: info.stream
        })
    })
}

function switchSpeakerDevice(){
    speakerIndex ++;
    if( speakerIndex ==  speakerDevices.length ) speakerIndex = 0;
    $("#remote-video-wrap video").each(function(index, video){
        RTC.chooseSpeakerDevice( video, speakerDevices[speakerIndex] );
    })
}

function login(  ){
    sdkappid = $("#sdkappid").val();
    userId = $("#userId").val();
    //请使用英文半角/数字作为用户名
    $.ajax({
        type: "POST",
        url: FetchSigCgi,
        dataType: 'json',
        data:JSON.stringify({
            pwd: "12345678",
            appid: parseInt(sdkappid),
            roomnum:parseInt($("#roomid").val()),
            privMap:255,
            identifier : userId,
            accounttype: accountType
        }),
        success: function (json) {
            if(json && json.errorCode === 0 ){
                //一会儿进入房间要用到
                userSig = json.data.userSig;
                privMapEncrypt = json.data.privMapEncrypt;
                // 页面处理，显示视频流页面
                $("#video-section").show();
                $("#input-container").hide();

                initRTC({
                    "userId": userId,
                    "userSig": userSig,
                    "privMapEncrypt": privMapEncrypt,
                    "sdkappid": sdkappid,
                    "accountType": accountType,
                    "roomid": $("#roomid").val()
                });
            }else{
                console.error(json);
            }
        },
        error: function (err){
            console.error(err);
        }
    })
}


