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
    userId,
    userSig,
    username;


function onKickout() {
    alert("on kick out!");
}

function onRelayTimeout(msg) {
    alert("onRelayTimeout!" + (msg ? JSON.stringify(msg) : ""));
}

function createVideoElement(id, isLocal) {
    var videoDiv = document.createElement("div");
    videoDiv.innerHTML = '<video id="' + id + '" autoplay ' + (isLocal ? 'muted' : '') + ' playsinline ></video>';
    document.querySelector("#remote-video-wrap").appendChild(videoDiv);

    return document.getElementById(id);
}

function onLocalStreamAdd(info) {
    if (info.stream && info.stream.active === true) {
        var id = "local";
        var video = document.getElementById(id);
        if (!video) {
            createVideoElement(id, true);
        }
        var video = document.getElementById(id)
        video.srcObject = info.stream;
        video.muted = true
        video.autoplay = true
        video.playsinline = true

    }
}


function onPeerConnectionAdd(info) {
    console.debug('onPeerConnectionAdd', info)
    //A用户跟所有人建连
    if( userId === 'userA'){
        RTC.startRTC(info)
        return;
    }
    //其他用户只跟A进行P2P连接
    console.error("info.userId", info.userId)
    if( info.userId === 'userA' ){
        RTC.startRTC(info)
    }
}


function onRemoteStreamUpdate(info) {
    console.debug(info)
    if (info.stream && info.stream.active === true) {
        var id = info.videoId;
        var video = document.getElementById(id);
        if (!video) {
            video = createVideoElement(id);
        }
        video.srcObject = info.stream;
    } else {
        console.log('欢迎用户' + info.userId + '加入房间');
    }
}


function onRemoteStreamRemove(info) {
    console.log(info.userId + ' 断开了连接');
    var videoNode = document.getElementById(info.videoId);
    if (videoNode) {
        videoNode.srcObject = null;
        document.getElementById(info.videoId).parentElement.removeChild(videoNode);
    }
}

function onWebSocketClose() {
    RTC.quit();
}

function initRTC(opts) {
    window.RTC = new WebRTCAPI({
        userId: opts.userId,
        userSig: opts.userSig,
        sdkAppId: opts.sdkappid,
        accountType: opts.accountType,        
        peerAddNotify: true //peer connection 通知
    });
    
    RTC.createRoom({
        roomid: opts.roomid * 1,
        privateMapKey: opts.privateMapKey,
        role: "user"
    }, function (info) {
        console.warn("init succ", info)
        RTC.startRTC();
    }, function (error) {
        console.error("init error", error)
    });

    // P2P连接通知
    RTC.on("onPeerConnectionAdd", onPeerConnectionAdd)

    // 远端流新增/更新
    RTC.on("onRemoteStreamUpdate", onRemoteStreamUpdate)
    // 本地流新增
    RTC.on("onLocalStreamAdd", onLocalStreamAdd)
    // 远端流断开
    RTC.on("onRemoteStreamRemove", onRemoteStreamRemove)
    // 重复登录被T
    RTC.on("onKickout", onKickout)
    // 服务器超时
    RTC.on("onRelayTimeout", onRelayTimeout)
    // just for debugging
    // RTC.on("*",function(e){
    //     console.debug(e)
    // });
    RTC.on("onErrorNotify", function (info) {
        console.warn(info)
    });
    RTC.on("onStreamNotify", function (info) {
        console.warn('onStreamNotify', info)
    });
    RTC.on("onWebSocketNotify", function (info) {
        console.warn('onWebSocketNotify', info)
    });
    RTC.on("onUserDefinedWebRTCEventNotice", function (info) {
        // console.error( 'onUserDefinedWebRTCEventNotice',info )
    });
}

function push(userId) {
    //推流
    login({userId:userId});


}

function stopRTC() {
    RTC.stopRTC(0, function (info) {
        console.debug(info)
    }, function (info) {
        console.debug(info)
    });
}

function stopWs() {
    RTC.global.websocket.close();
}

function startRTC() {
    RTC.startRTC({
        
    }, function (info) {
        console.debug(info)
    }, function (info) {
        console.debug(info)
    });
}

function chooseVideo(index) {
    //获取设备重新推流
    RTC.getVideoDevices(function (videoDevices) {
        window.videoDevices = videoDevices;
        RTC.chooseVideoDevice(videoDevices[index]);
    });
}

function chooseAudio(index) {
    //获取设备重新推流
    RTC.getAudioDevices(function (audioDevices) {
        window.audioDevices = audioDevices;
        console.info('choose audio', audioDevices[index])
        RTC.chooseAudioDevice(audioDevices[index]);
    });
}

Bom = {
    /**
     * @description 读取location.search
     *
     * @param {String} n 名称
     * @return {String} search值
     * @example
     * 		$.bom.query('mod');
     */
    query: function (n) {
        var m = window.location.search.match(new RegExp("(\\?|&)" + n + "=([^&]*)(&|$)"));
        return !m ? "" : decodeURIComponent(m[2]);
    },
    getHash: function (n) {
        var m = window.location.hash.match(new RegExp("(#|&)" + n + "=([^&]*)(&|$)"));
        return !m ? "" : decodeURIComponent(m[2]);
    }
};

function login( opt ) {
    sdkappid = Bom.query("sdkappid") || $("#sdkappid").val();
    userId = opt.userId
    $.ajax({
        type: "POST",
        url: FetchSigCgi,
        dataType: 'json',
        data: JSON.stringify({
            pwd: "12345678",
            appid: parseInt(sdkappid),
            roomnum: parseInt($("#roomid").val()),
            privMap: 255,
            identifier: userId,
            accounttype: accountType
        }),
        success: function (json) {
            if (json && json.errorCode === 0) {
                //一会儿进入房间要用到
                var userSig = json.data.userSig;
                var privateMapKey = json.data.privMapEncrypt;
                // 页面处理，显示视频流页面
                $("#video-section").show();
                $("#input-container").hide();

                initRTC({
                    "userId": userId,
                    "userSig": userSig,
                    "privateMapKey": privateMapKey,
                    "sdkappid": sdkappid,
                    "accountType": accountType,
                    "roomid": $("#roomid").val()
                });

            } else {
                console.error(json);
            }
        },
        error: function (err) {
            console.error(err);
        }
    })
}