(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Constants = {
    HOST_NAME: 'qcloud.rtc.qq.com',
    WS_URL: "wss://qcloud.rtc.qq.com:8687",
    WEBRTC_CGI_URL: "https://qcloud.rtc.qq.com:8687/api/uploadlog",

    BK_HOST_NAME: 'bk.rtc.qq.com',
    BK_WS_URL: "wss://bk.rtc.qq.com:8687",
    BK_WEBRTC_CGI_URL: "https://bk.rtc.qq.com:8687/api/uploadlog",

    BACKUP_WEBRTC_CGI_URL: "https://ilivelog.qcloud.com/",
    WEBRTC_STUN_SERVER: "",
    ConstraintsMode: 0,
    ICE_BUILD_STATE: {
        SUC: 0,
        SDP_FAILED: 1,
        CANDIDATE_FAILED: 2,
        H264_NOT_SUPPORT: 3,
        GET_STUN_IP_FAILED: 4
    },
    Version: "3.4.1",
    RTC_EVENT: {
        ON_PEER_SDP: "on_peer_sdp",
        ON_UPDATE_PEER_SDP: "on_update_peer_sdp",
        ON_PEER_CANDIDATE: "on_peer_candidate",
        ON_BIND_SESSION: "on_bind_session",
        ON_MEDIA_CHANGE: "on_media_change",
        ON_START_CHAT: "on_start_chat",
        ON_QUIT_CHAT: "on_quit_chat",
        ON_CREATE_ROOM: "on_create_room",
        ON_CREATE_PEER: "on_create_peer",
        ON_CLOSE_PEER: "on_close_peer",
        ON_QUALITY_REPORT: "on_quality_report",
        ON_GET_USER_MEDIA: "on_get_user_media",
        ON_GET_USER_MEDIA_OK: "on_get_user_media_ok",
        ON_GET_USER_MEDIA_FAILED: "on_get_user_media_failed",
        ON_GET_LOACL_SDP_FAILED: "on_get_local_sdp_failed",
        ON_SET_REMOTE_SDP_FAILED: "on_set_remote_sdp_failed",
        ON_GET_LOCAL_CANDIDATE_FAILED: "on_get_local_candidate_failed",
        ON_SET_REMOTE_CANDIDATE_FAILED: "on_set_remote_candidate_failed",
        ON_GET_SRC_PEER_CONNECTION_FAILED: "on_get_srctinyid_peerconnection_failed",
        ON_SET_REMOTE_CANDIDATE_SUC: "on_set_remote_candidate_suc",
        ON_SET_REMOTE_SDP_SUC: "on_set_remote_sdp_suc",
        ON_ICE_COMPLETE: "on_ice_complete",
        ON_ICE_BROKEN: "on_ice_broken",
        ON_START_WEBRTC_FAILED_WITHOUT_CALLBACK: "on_start_webrtc_failed_without_callback",
        ON_CREATE_PEERCONNECTION_FAILED: "on_create_peerconnection_failed",
        ON_END_REPORT: "on_end_report",
        ON_SPEAR_ROLE_CHANGE: "on_spear_role_change",
        ON_REBUILD_SESSION: "on_rebuild_session",
        ON_START_WEBRTC: "on_start_webrtc",
        ON_UPLOAD_WEB_LOG: "on_upload_web_log",
        INIT_END_REPORT: "init_end_report",
        ON_GET_MAX_TIMEMS: "on_get_max_timems",
        ON_NOT_SUPPORT_H264: "on_not_support_h264",
        ON_STUN_FAILED: "on_stun_failed",
        ON_STREAM_NOTIFY: "on_stream_notify",
        UPDATE_MUTE_STAT: "on_change_av_state"
    },

    KEY_TAG: {
        WEBSOCKET_TAG: "websocket_tag",
        SDP_TAG: "sdp_tag",
        CANDIDATE_TAG: "candidate_tag",
        USER_MEDIA_TAG: "user_media_tag",
        UPDATE_VIDEO_SSRC_TAG: "update_video_ssrc_tag",
        UPDATE_AUDIO_SSRC_TAG: "update_audio_ssrc_tag",
        UPDATE_LOCAL_MEDIA_STREAM_TAG: "update_local_media_stream_tag",
        UPDATE_SUB_VIDEO_TAG: "update_sub_video_tag",
        RTC_LOG_TAG: "rtc_log_tag",
        WEBSOCKET_BUILD_FAILED_TAG: "websocket_build_failed_tag",
        WEBSOCKET_REBUILD_TAG: "websocket_rebuild_tag",
        REPORT_TIME_OUT_TAG: "report_timeout"
    },

    MEDIA_CHANGE: {
        OPEN_VIDEO: 1,
        CLOSE_VIDEO: 2,
        OPEN_AUDIO: 3,
        CLOSE_AUDIO: 4
    },
    WS_MAX_RETRY_COUNT: 3,
    WS_RETRY_DIST: 3000,

    WS_CMD: {
        SDP: 0x2,
        CANDIDATE: 0x4,
        MEDIA_CHANGE: 0x0d,
        START_CHAT: 0x06,
        QUIT_CHAT: 0x08,
        CLOSE_PEER: 0x09,
        CLOSE_PEER_RES: 0x0a,
        ON_STAGE: 0x0c,
        WS_INIT_OK: 0x13,
        WS_INIT_FAILED: 0x50,
        CREATE_ROOM_RESULT: 0x14,
        NOTIFY_CREATE_PEER_CONNECTION: 0x10, //通知建立新peerconnection
        NOTIFY_CREATE_PEER_CONNECTION_RES: 0x11, //通知建立新peerconnection
        NOTIFY_CLOSE_PEER_CONNECTION: 0x12, //通知关闭peerconnection
        NOTIFY_CHANGE_CONSTRAINTS: 0x20, //通知改变上行视频分辨率、帧率
        NOTIFY_SUB_VIDEO_STATE: 0x30, //通知增加辅路
        NOTIFY_UPDATE_AUDIO_SSRC: 0x32, //通知更新音频ssrc
        NOTIFY_UPDATE_VIDEO_SSRC: 0x34, //通知更新主路视频ssrc
        NOTIFY_MAX_TIMEMS: 0x302, //通知当前上行音频、视频数据的最大时间戳
        NOTIFY_RECONNECT_DC: 0x211,
        ACTIVE_USER_STAT_UPDATED: 0x17, // PUSH_SPEC_USER_LIST_REQ: 0x17
        NOTIFY_RECONNECT_WS_RES: 0x202
    },

    STREAM_TYPE: {
        NONE: 0,
        AUDIO: 1, //音频
        MAIN: 2, //主路
        AID: 7 //辅路
    },

    STREAM_MISD: {
        MAIN: '5Y2wZK8nANNAoVw6dSAHVjNxrD1ObBM2kBPV',
        AID: '224d130c-7b5c-415b-aaa2-79c2eb5a6df2'
    },

    USER_DEFINED_EVENT: {
        WEBSOCKET_INIT: "websocket_init",
        WEBSOCKET_INIT_OK: "websocket_init_ok",
        RECEIVE_CREATE_PEER: "receive_create_pc",
        BEGIN_CREATE_PEER: "begin_create_pc",
        CREATE_PC_SUC: "create_pc_suc",
        CREATE_PC_FAILED: "create_pc_failed",
        BEGIN_START_WEBRTC: "begin_start_webrtc",
        GET_LOCAL_SDP_SUC: "get_local_sdp_suc",
        GET_LOCAL_SDP_FAILED: "get_local_sdp_failed",
        RECEIVE_REMOTE_SDP: "receive_remote_sdp",
        SET_REMOTE_SDP_SUC: "set_remote_sdp_suc",
        SET_REMOTE_SDP_FAILED: "set_remote_sdp_failed",
        GET_LOCAL_CANDIDATE_SUC: "get_local_candidate_suc",
        GET_LOCAL_STUN_IP_FAILED: "get_local_stun_ip_failed",
        RECEIVE_REMOTE_CANDIDATE: "receive_remote_candidate",
        SET_REMOTE_CANDIDATE_SUC: "set_remote_candidate_suc",
        SET_REMOTE_CANDIDATE_FAILED: "set_remote_candidate_failed",
        ON_ICE_STATE_CHANGE: "on_ice_state_change",
        ON_ICE_GATHERING_STATE_CHANGE: "on_ice_gathering_state_change",
        ON_WEBSOCKET_CLOSE_BY_NETWORK_BROKEN: "on_websocket_close_by_network_broken",
        NOTICE_PEERCONNECTION: "notice_pc",
        NOTIFY_NO_SIG_AFTER_PRECONNECTION: "notice_no_sig_after_preconnection"
    },
    OPTIONAL: {
        optional: [{
            DtlsSrtpKeyAgreement: true
        }]
    },

    ERROR_CODE: {
        SUCC: 0, // 
        PARAM_MISSING: 10001, // 参数缺失
        PARAM_INVALID: 10016, // 参数缺失
        NOT_SUPPORT: 10002, // 
        INIT_WS_FAILED: 10005, // 初始化ws失败
        ENTER_ROOM_ERROR: 10006, //进房失败 
        CREATE_PEERCONNECTION_FAILED: 10007, // PeerConnection 创建失败
        GET_USERMEDIA_FAILED: 10008, // getUserMedia 失败
        GET_LOCALSDP_FAILED: 10009, // getLocalSdp 失败
        GET_LOCAL_CANDIDATE_FAILED: 10011,
        GET_ANSWER_SDP_FAILED: 10013, // getLocalSdp 失败
        ON_ICE_BROKEN: 10014,
        ON_ICE_CLOSE: 10015,
        INIT_SDK_FAILED: 11000,
        SET_REMOTE_SDP_FAILED: 10012,
        NOT_FOUND: 10031, // NOT_FOUND
        NOT_INITED: 10032, // 尚未初始化
        START_RTC_FAILED: 10033,
        STOP_RTC_FAILED: 10034, //STOP RTC FAILED
        WS_CLOSE: 10035,
        WS_ERROR: 10036,
        UPDATE_VIDEO_SSRC_FAILED: 10037,
        UPDATE_AUDIO_SSRC_FAILED: 10038,
        NOT_FOUND_PEER: 10039,
        CHOOSE_SPEARK_FAILED: 10040,
        DTLS_CONNECTION_TIMEOUT: 10041, // DTLS connection timeout (3s)
        WS_RECONNECT_FAILED: 10042, // websocket reconnect failed
        TLS_VERIFY_ERROR: 70236
    },
    ERROR_MSG: {
        SECURITY_ERROR: "由于浏览器安全限制，获取/枚举音视频设备接口必须在https域名或localhost下访问"
    },
    getConfiguration: function getConfiguration() {
        var config = {
            iceServers: [],
            bundlePolicy: "max-bundle",
            rtcpMuxPolicy: "require",
            tcpCandidatePolicy: "disable",
            IceTransportsType: "nohost"
        };
        if (Constants.WEBRTC_STUN_SERVER) {
            config.iceServers = [{
                urls: Constants.WEBRTC_STUN_SERVER
            }];
        }
        return config;
    },

    setHostname: function setHostname(domain) {
        this.HOST_NAME = domain;
        this.WS_URL = "wss://" + domain + ":8687";
        this.WEBRTC_CGI_URL = "https://" + domain + ":8687/api/uploadlog";
    },

    setBkHostname: function setBkHostname(domain) {
        this.BK_HOST_NAME = domain;
        this.BK_WS_URL = "wss://" + domain + ":8687";
        this.BK_WEBRTC_CGI_URL = "https://" + domain + ":8687/api/uploadlog";
    }
};

module.exports = Constants;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = __webpack_require__(4);
var Constants = __webpack_require__(0);
var fly = __webpack_require__(5);
var debugout = __webpack_require__(18);
var debugout = new debugout();
debugout.realTimeLoggingOn = false;
/* 
var BJ_WEBRTC = require('@tencent/im-badjs-webrtc/dist/bj-report');
if (BJ_WEBRTC) {
return;
var ignores = [
    '"isTrigger":true,"namespace":"","namespace_re":null', // 腾讯视频使用jquery处理已移除元素事件的错误
    '58mingtian.cn', // 已知的外部js爬虫脚本，量比较大
    'Unexpected identifier after numeric literal', // badjs中存在1e3，会被低版本Edge浏览器解析为变量报错
    "Expected ';'", // IE浏览器已做跳转处理
];
BJ_WEBRTC.init({
    id: 1429,
    ignore: [
        function(error){
            var str = JSON.stringify(error.msg);
            if (error.level === 4) {
            for (var i = 0; i < ignores.length; i++) {
                if (str.indexOf(ignores[i]) > -1 || str.indexOf(encodeURIComponent(ignores[i])) > -1) {
                BJ_WEBRTC.info(error);
                return true;
                }
            }
            }
            return false;
        },
    ],
    url: "//badjs2.qq.com/badjs",
    repeat: 1,
    jsErrorMSID: 3233841,
    debugMSID: 3234595,
    infoMSID: 3234596,
    errorMSID: 3234597,
});
// BJ_REPORT.tryJs().spyAll();
}
*/
var debugMode = false;
var uploadlogSwitcher = true;
var vConsole = null;
var uploadLogRetry = 0;
var uploadLogMaxRetryTimes = 5;
var LogCGI = Constants.BACKUP_WEBRTC_CGI_URL;
var SDKAPPID = null;

function badjsReport(_msid, _msg, level, delay) {
    return;
    level = level || 2;
    if (BJ_WEBRTC) {
        var data = {
            ext: { msid: _msid },
            href: location.href,
            level: level,
            msg: _msg + '[sdkappid | ' + SDKAPPID + ']'
        };
        if (!delay) {
            BJ_WEBRTC.report(data);
        } else {
            // BJ_WEBRTC.push( data );
        }
    }
};

function badjsInit(sdkappid) {
    SDKAPPID = sdkappid;
};

var RTCLog = new function () {
    var TAG = "WEBRTC_API : ";
    this._uploadLogOpen = Util.query('uploadlog') || false;
    if (Util.query("debug")) {
        createVConsole();
    }
    this.LOG_LEVEL = {
        RTC_LOG_DEBUG: "RTC_LOG_DEBUG",
        RTC_LOG_INFO: "RTC_LOG_INFO",
        RTC_LOG_WARN: "RTC_LOG_WARN",
        RTC_LOG_ERROR: "RTC_LOG_ERROR"
    };
    this.error = function (msg, obj) {
        if (uploadlogSwitcher) {
            badjsReport(null, msg, 4);
        }
        debugout.log("[ERROR]" + msg + (obj ? JSON.stringify(obj) : ""));
        if (!debugMode) {
            return;
        }
        if (!obj) {
            console.error(TAG + msg);
        } else {
            console.error(TAG + msg, obj);
        }
    };
    this.debug = function (msg, obj) {
        if (!debugMode) {
            return;
        }
        debugout.log("[DEBUG]" + msg + (obj ? JSON.stringify(obj) : ""));
        if (uploadlogSwitcher) {
            badjsReport(null, msg, 1, true);
        }
        if (!obj) {
            console.log(TAG + msg);
        } else {
            console.log(TAG + msg, obj);
        }
    };
    this.info = function (msg, obj) {
        debugout.log("[INFO]" + msg + (obj ? JSON.stringify(obj) : ""));
        if (!debugMode) {
            return;
        }
        if (uploadlogSwitcher) {
            badjsReport(null, msg, 2, true);
        }
        if (!obj) {
            console.info(TAG + msg);
        } else {
            console.info(TAG + msg, obj);
        }
    };
    this.warn = function (msg, obj) {
        debugout.log("[WARN]" + msg + (obj ? JSON.stringify(obj) : ""));
        if (!debugMode) {
            return;
        }
        if (!obj) {
            console.warn(TAG + msg);
        } else {
            console.warn(TAG + msg, obj);
        }
    };
}();

function uploadWebLog(global, msg, obj, tag) {
    try {
        if (!Constants.WEBRTC_CGI_URL) {
            console.warn("CGI URL not ready!");
            return;
        }
        var sendData = JSON.stringify({
            index: "webrtc",
            type: "websdk",
            localip: global.localip,
            relayip: global.relayip,
            signalip: global.signalip,
            tinyid: global.config && global.config.tinyid,
            userId: global.config && global.config.userId,
            appid: global.config && global.config.sdkAppId,
            roomId: global.roomid || 0,
            sdkappid: String(global.config && global.config.sdkAppId),
            tag: tag,
            version: Constants.Version,
            log: msg
        });

        if (!uploadlogSwitcher) return;
        fly.post(LogCGI, sendData, { parseJson: false }).catch(function (error) {
            if (uploadLogRetry < uploadLogMaxRetryTimes) {
                uploadLogRetry++;
                // console.warn("upload log error, but dont't worry , it won't affect your business.  ", error);
            } else {
                LogCGI = LogCGI === Constants.WEBRTC_CGI_URL ? Constants.BACKUP_WEBRTC_CGI_URL : Constants.WEBRTC_CGI_URL;
                uploadLogRetry = 0;
            }
        });
    } catch (e) {
        if (uploadLogRetry < uploadLogMaxRetryTimes) {
            uploadLogRetry++;
            console.error("upload log error : ", e);
        } else {
            LogCGI = LogCGI === Constants.WEBRTC_CGI_URL ? Constants.BACKUP_WEBRTC_CGI_URL : Constants.WEBRTC_CGI_URL;
            uploadLogRetry = 0;
        }
    }
}
function debug(info) {

    debugMode = info.log || false;
    uploadlogSwitcher = typeof info.uploadLog === 'undefined' ? true : info.uploadLog;
    if (debugMode) {
        console.log("-------------调试模式----------------");
        debugout.recordLogs = true;
    } else {
        debugout.recordLogs = false;
    }
    if (!uploadlogSwitcher) {
        console.log("-------------不上报----------------");
    }

    if (info.vconsole) {
        createVConsole();
    } else if (!info.vconsole && vConsole) {
        vConsole.destroy();
        vConsole = null;
    }
}

function createVConsole() {
    var scriptEle = document.createElement("script");
    scriptEle.src = '//sqimg.qq.com/expert_qq/vConsole/vconsole.min.js';
    document.body.appendChild(scriptEle);
    scriptEle.onload = function () {
        window.vConsole = new VConsole();
    };
};

function printEnvironmentInfo(global) {
    var css = "color:#00a4ff;font-family:Microsoft Yahei";
    var str = [' domain:', Constants.HOST_NAME, " sdkappid:", global.config.sdkAppId];
    console.log("%c %s", css, str.join(" "));
}
function printRelayInfo() {
    var css = "color:#00a4ff;font-family:Microsoft Yahei";
    console.log("%c %s", css, Constants.WEBRTC_STUN_SERVER);
}
(function () {
    try {
        var css = "color:#00a4ff;font-family:Microsoft Yahei";
        var str = ['Version:' + Constants.Version, ' ', '感谢您选择腾讯视频云', '我们为您准备了辅助开发的快捷访问地址，访问你在开发中定位问题：', ' ', '错误码：https://cloud.tencent.com/document/product/647/17016', ' ', '常见问题：https://cloud.tencent.com/document/product/647/17017'];
        console.log("%c %s", css, str.join("\n"));
    } catch (e) {}
})();

module.exports = {
    printEnvironmentInfo: printEnvironmentInfo,
    printRelayInfo: printRelayInfo,
    uploadWebLog: uploadWebLog,
    debug: debug,
    RTCLog: RTCLog,
    badjsReport: badjsReport,
    badjsInit: badjsInit,
    debugout: debugout
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Browser = __webpack_require__(6);
var DectectRTC = {
    TBS_MIN_VERSION: 43600,
    h264Support: false,
    checkTBSVersion: function checkTBSVersion() {
        var list = navigator.userAgent.split(" ");
        var isTBS = false;
        var TBSVersion = 0;
        for (var i = 0; i < list.length; i++) {
            var item = list[i];
            if (item.indexOf("TBS") !== -1 || item.indexOf("tbs") !== -1) {
                isTBS = true;
                var versionStr = item.split("/")[1];
                var version = parseInt(versionStr) || 0;
                TBSVersion = version;
            }
        }
        return {
            isTBS: isTBS,
            TBSversion: TBSVersion,
            isTBSValid: TBSVersion >= this.TBS_MIN_VERSION
        };
    },
    checkH264Support: function checkH264Support(callback) {
        var peer = new RTCPeerConnection(null);
        peer.createOffer({
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1
        }).then(function (data) {
            if (data.sdp.toLowerCase().indexOf("h264") === -1) {
                callback(false);
            } else {
                callback(true);
            }
            peer.close();
        }, function (data) {
            callback(false);
        });
    },

    support: function support(opts, callback) {
        if (typeof opts === 'function') {
            this.doCheck({ screenshare: true }, opts);
        } else {
            this.doCheck(opts, callback);
        }
    },
    doCheck: function doCheck(opts, callback) {
        var isWebRTCSupported = false;
        ['RTCPeerConnection', 'webkitRTCPeerConnection', 'RTCIceGatherer'].forEach(function (item) {
            if (isWebRTCSupported) {
                return;
            }
            if (item in window) {
                isWebRTCSupported = true;
            }
        });
        var TBSInfo = this.checkTBSVersion();
        if (!TBSInfo.isTBS) {
            if (this.isFF()) {
                isWebRTCSupported = false;
            } else if (this.isSafari() && navigator.platform.indexOf("Mac") === -1) {
                var iOSVersion = this.iOSVersion();
                if (iOSVersion && (iOSVersion[1] == 11 && iOSVersion[2] >= 1 || iOSVersion[1] > 11)) {} else {
                    isWebRTCSupported = false;
                }
            }
        }

        var ret = {
            support: isWebRTCSupported,
            isTBS: TBSInfo.isTBS,
            isTBSValid: TBSInfo.isTBSValid,
            TBSversion: TBSInfo.TBSversion,
            isSafari: this.isSafari(),
            iOSVersion: this.iOSVersion(),
            screenshare: false,
            isFF: this.isFF()
        };
        this.checkH264Support(function (support) {
            ret.h264Support = support;
            if (!support) {
                ret.support = false;
            }
            if (!opts.screenshare && callback) {
                delete ret.screenshare;
                callback(ret);
                return;
            }
            if (!opts.screenshareApi) {
                opts.screenshareApi = 'native';
            }

            // chrome 72 版本以后无需安装插件
            if (opts.screenshareApi && opts.screenshareApi !== 'extension' && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && parseFloat(Browser.client.version) >= 72 && Browser.client.type === 'chrome') {
                console.debug('[DetectRTC]: chrome 72 版本以后无需安装插件');
                ret.screenshare = true;
                callback(ret);
                return;
            }
            var extensionId = opts.extensionId || null;
            ScreenChromeExtensionUtil.getChromeExtensionStatus(extensionId, function (extensionResult) {
                if (extensionResult === 'installed-enabled') {
                    ScreenChromeExtensionUtil.isChromeExtensionAvailable(function (isAvailable) {
                        if (!isAvailable) {
                            // alert('检测没有通过，请先安装chrome屏幕分享插件');
                        } else {
                            // alert('检测通过，可以进入Demo');
                            ret.screenshare = true;
                        }
                        if (callback) {
                            callback(ret);
                        }
                    });
                } else {
                    if (callback) {
                        callback(ret);
                    }
                }
            });
        });
        return ret;
    },
    isTBS: function isTBS() {
        var result = this.checkTBSVersion();
        return result.isTBS;
    },
    isSafari: function isSafari() {
        return navigator.userAgent.toLowerCase().indexOf('safari/') > -1 && navigator.userAgent.toLowerCase().indexOf('chrome/') === -1;
    },
    iOSVersion: function iOSVersion() {
        var matches = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return matches && [parseInt(matches[1]), parseInt(matches[2]), parseInt(matches[3] || 0)] || false;
    },
    isFF: function isFF() {
        return navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
    },
    isChrome: function isChrome() {
        return (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
        );
    },
    isUnifiedPlanDefault: function isUnifiedPlanDefault() {
        // old browser doesn't support this interface and it's in plan-b
        if (typeof RTCRtpTransceiver === 'undefined') {
            return false;
        }
        // Safari supports addTransceiver() but not Unified Plan when
        // currentDirection is not defined.
        if (!('currentDirection' in RTCRtpTransceiver.prototype)) return false;
        // If Unified Plan is supported, addTransceiver() should not throw.
        var tempPc = new RTCPeerConnection();
        var canAddTransceiver = false;
        try {
            tempPc.addTransceiver('audio');
            canAddTransceiver = true;
        } catch (e) {}
        tempPc.close();
        return canAddTransceiver;
    },
    detectMediaDevice: function detectMediaDevice(callback) {
        var hasAudio = false;
        var hasVideo = false;
        try {
            navigator.mediaDevices.enumerateDevices().then(function (devices) {
                devices.forEach(function (device) {
                    if (device && device.kind === "videoinput") {
                        hasVideo = true;
                    } else if (device && device.kind === "audioinput") {
                        hasAudio = true;
                    }
                });
                if (callback) {
                    callback({
                        hasAudio: hasAudio,
                        hasVideo: hasVideo
                    });
                }
            }).catch(function (err) {
                if (callback) {
                    callback({
                        hasAudio: hasAudio,
                        hasVideo: hasVideo
                    });
                }
            });
        } catch (e) {
            if (callback) {
                callback({
                    hasAudio: hasAudio,
                    hasVideo: hasVideo
                });
            }
        }
    }
};

module.exports = DectectRTC;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*判断是否是内网IP*/
function isInnerIPFn(ipAddress) {

    var isInnerIp = false; //默认给定IP不是内网IP      
    var ipNum = getIpNum(ipAddress);
    /** 
     * 私有IP：A类  10.0.0.0    -10.255.255.255 
     *       B类  172.16.0.0  -172.31.255.255    
     *       C类  192.168.0.0 -192.168.255.255   
     *       D类   127.0.0.0   -127.255.255.255(环回地址)  
     **/
    var aBegin = getIpNum("10.0.0.0");
    var aEnd = getIpNum("10.255.255.255");
    var bBegin = getIpNum("172.16.0.0");
    var bEnd = getIpNum("172.31.255.255");
    var cBegin = getIpNum("192.168.0.0");
    var cEnd = getIpNum("192.168.255.255");
    var dBegin = getIpNum("127.0.0.0");
    var dEnd = getIpNum("127.255.255.255");
    isInnerIp = isInner(ipNum, aBegin, aEnd) || isInner(ipNum, bBegin, bEnd) || isInner(ipNum, cBegin, cEnd) || isInner(ipNum, dBegin, dEnd);
    return isInnerIp;
}
function getIpNum(ipAddress) {
    /*获取IP数*/
    var ip = ipAddress.split(".");
    var a = parseInt(ip[0]);
    var b = parseInt(ip[1]);
    var c = parseInt(ip[2]);
    var d = parseInt(ip[3]);
    var ipNum = a * 256 * 256 * 256 + b * 256 * 256 + c * 256 + d;
    return ipNum;
}

function isInner(userIp, begin, end) {
    return userIp >= begin && userIp <= end;
}

var Util = {
    query: function query(n) {
        var m = window.location.search.match(new RegExp("(\\?|&)" + n + "=([^&]*)(&|$)"));
        return !m ? "" : decodeURIComponent(m[2]);
    },
    getHash: function getHash(n) {
        var m = window.location.hash.match(new RegExp("(#|&)" + n + "=([^&]*)(&|$)"));
        return !m ? "" : decodeURIComponent(m[2]);
    },
    cloneObj: function (_cloneObj) {
        function cloneObj(_x) {
            return _cloneObj.apply(this, arguments);
        }

        cloneObj.toString = function () {
            return _cloneObj.toString();
        };

        return cloneObj;
    }(function (obj) {
        var str,
            newobj = obj.constructor === Array ? [] : {};
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) !== 'object') {
            return;
        } else if (window.JSON) {
            str = JSON.stringify(obj), newobj = JSON.parse(str);
        } else {
            for (var i in obj) {
                newobj[i] = _typeof(obj[i]) === 'object' ? cloneObj(obj[i]) : obj[i];
            }
        }
        return newobj;
    }),
    takeSnapshot: function takeSnapshot(succ, fail) {
        function _takeSnapshot(video) {
            var canvas = document.createElement('canvas');
            canvas.width = video.videoWidth || video.clientWidth;
            canvas.height = video.videoHeight || video.clientHeight;

            var context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            succ && succ(canvas.toDataURL('image/png'));
        }
        var media = this;
        return _takeSnapshot(media);
    },
    isInnerIPFn: isInnerIPFn
};
HTMLVideoElement.prototype.takeSnapshot = Util.takeSnapshot;
module.exports = Util;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

//For browser entry
var Fly= __webpack_require__(17)
var fly= new Fly;
module.exports = fly;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = window.document,
    navigator = window.navigator,
    agent = navigator.userAgent.toLowerCase(),

//IE8+支持.返回浏览器渲染当前文档所用的模式
//IE6,IE7:undefined.IE8:8(兼容模式返回7).IE9:9(兼容模式返回7||8)
//IE10:10(兼容模式7||8||9)
IEMode = document.documentMode,

//chorme
chrome = window.chrome || false,
    System = {
    //user-agent
    agent: agent,
    //是否为IE
    isIE: /msie/.test(agent),
    //是否为IE
    isIPhone: /iphone/.test(agent),
    //是否为IE
    isElectron: /electron/.test(agent),
    //Gecko内核
    isGecko: agent.indexOf("gecko") > 0 && agent.indexOf("like gecko") < 0,
    //webkit内核
    isWebkit: agent.indexOf("webkit") > 0,
    //是否为标准模式
    isStrict: document.compatMode === "CSS1Compat",
    //是否支持subtitle
    supportSubTitle: function supportSubTitle() {
        return "track" in document.createElement("track");
    },
    //是否支持scoped
    supportScope: function supportScope() {
        return "scoped" in document.createElement("style");
    },
    //获取IE的版本号
    ieVersion: function ieVersion() {
        try {
            return agent.match(/msie ([\d.]+)/)[1] || 0;
        } catch (e) {
            return IEMode;
        }
    },
    //Opera版本号
    operaVersion: function operaVersion() {
        try {
            if (window.opera) {
                return agent.match(/opera.([\d.]+)/)[1];
            } else if (agent.indexOf("opr") > 0) {
                return agent.match(/opr\/([\d.]+)/)[1];
            }
        } catch (e) {

            return 0;
        }
    },
    //描述:version过滤.如31.0.252.152 只保留31.0
    versionFilter: function versionFilter() {
        if (arguments.length === 1 && typeof arguments[0] === "string") {
            var version = arguments[0];
            start = version.indexOf(".");
            if (start > 0) {
                end = version.indexOf(".", start + 1);
                if (end !== -1) {
                    return version.substr(0, end);
                }
            }
            return version;
        } else if (arguments.length === 1) {
            return arguments[0];
        }
        return 0;
    }
};

try {
    //浏览器类型(IE、Opera、Chrome、Safari、Firefox)
    System.type = System.isIE ? "ie" : window.opera || agent.indexOf("opr") > 0 ? "opera" : agent.indexOf("chrome") > 0 ? "chrome" :
    //safari也提供了专门的判定方式
    window.openDatabase ? "safari" : agent.indexOf("firefox") > 0 ? "firefox" : 'unknow';

    //版本号
    System.version = System.type === "ie" ? System.ieVersion() : System.type === "firefox" ? agent.match(/firefox\/([\d.]+)/)[1] : System.type === "chrome" ? agent.match(/chrome\/([\d.]+)/)[1] : System.type === "opera" ? System.operaVersion() : System.type === "safari" ? agent.match(/version\/([\d.]+)/)[1] : "0";

    //浏览器外壳
    System.shell = function () {
        //遨游浏览器
        if (agent.indexOf("maxthon") > 0) {
            System.version = agent.match(/maxthon\/([\d.]+)/)[1] || System.version;
            return "maxthon";
        }
        //QQ浏览器
        if (agent.indexOf("qqbrowser") > 0) {
            System.version = agent.match(/qqbrowser\/([\d.]+)/)[1] || System.version;
            return "qqbrowser";
        }

        //搜狗浏览器
        if (agent.indexOf("se 2.x") > 0) {
            return 'sougou';
        }

        //Chrome:也可以使用window.chrome && window.chrome.webstore判断
        if (chrome && System.type !== "opera") {
            var external = window.external,
                clientInfo = window.clientInformation,

            //客户端语言:zh-cn,zh.360下面会返回undefined
            clientLanguage = clientInfo.languages;

            //猎豹浏览器:或者agent.indexOf("lbbrowser")>0
            if (external && 'LiebaoGetVersion' in external) {
                return 'liebao';
            }
            //百度浏览器
            if (agent.indexOf("bidubrowser") > 0) {
                System.version = agent.match(/bidubrowser\/([\d.]+)/)[1] || agent.match(/chrome\/([\d.]+)/)[1];
                return "baidu";
            }
            //360极速浏览器和360安全浏览器
            if (System.supportSubTitle() && typeof clientLanguage === "undefined") {
                //object.key()返回一个数组.包含可枚举属性和方法名称
                var storeKeyLen = Object.keys(chrome.webstore).length,
                    v8Locale = "v8Locale" in window;
                return storeKeyLen > 1 ? '360qucik' : '360secure';
            }
            return "chrome";
        }
        return System.type;
    };

    //浏览器名称(如果是壳浏览器,则返回壳名称)
    System.name = System.shell();
    //对版本号进行过滤过处理
    System.version = System.versionFilter(System.version);
} catch (e) {}

module.exports = {
    client: System
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
    name: 'version',
    reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: '%s %s %d %s IP%d %s'
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: '%d %d'
  }],
  c: [{ //c=IN IP4 10.47.197.26
    name: 'connection',
    reg: /^IN IP(\d) (\S*)/,
    names: ['version', 'ip'],
    format: 'IN IP%d %s'
  }],
  b: [{ //b=AS:4000
    push: 'bandwidth',
    reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
    names: ['type', 'limit'],
    format: '%s:%s'
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
    // NB: special - pushes to session
    // TODO: rtp/fmtp should be filtered by the payloads found here?
    reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
    names: ['type', 'port', 'protocol', 'payloads'],
    format: '%s %d %s %s'
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-\.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          'rtpmap:%d %s/%s/%s':
          o.rate ?
          'rtpmap:%d %s/%s':
          'rtpmap:%d %s';
      }
    },
    { //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: 'fmtp:%d %s'
    },
    { //a=control:streamid=0
      name: 'control',
      reg: /^control:(.*)/,
      format: 'control:%s'
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          'rtcp:%d %s IP%d %s':
          'rtcp:%d';
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: 'rtcp-fb:%d trr-int %d'
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          'rtcp-fb:%s %s %s':
          'rtcp-fb:%s %s';
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:(\d+)(?:\/(\w+))? (\S*)(?: (\S*))?/,
      names: ['value', 'direction', 'uri', 'config'],
      format: function (o) {
        return 'extmap:%d' + (o.direction ? '/%s' : '%v') + ' %s' + (o.config ? ' %s' : '');
      }
    },
    { //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          'crypto:%d %s %s %s':
          'crypto:%d %s %s';
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: 'setup:%s'
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: 'mid:%s'
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: 'msid:%s'
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: 'ptime:%d'
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: 'maxptime:%d'
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: 'ice-ufrag:%s'
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: 'ice-pwd:%s'
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: 'fingerprint:%s %s'
    },
    { //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0 network-id 3 network-cost 10
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0 network-id 3 network-cost 10
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0 network-id 3 network-cost 10
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation', 'network-id', 'network-cost'],
      format: function (o) {
        var str = 'candidate:%s %d %s %d %s %d typ %s';

        str += (o.raddr != null) ? ' raddr %s rport %d' : '%v%v';

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? ' tcptype %s' : '%v';

        if (o.generation != null) {
          str += ' generation %d';
        }

        str += (o['network-id'] != null) ? ' network-id %d' : '%v';
        str += (o['network-cost'] != null) ? ' network-cost %d' : '%v';
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: 'remote-candidates:%s'
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: 'ice-options:%s'
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: 'ssrcs',
      reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
      names: ['id', 'attribute', 'value'],
      format: function (o) {
        var str = 'ssrc:%d';
        if (o.attribute != null) {
          str += ' %s';
          if (o.value != null) {
            str += ':%s';
          }
        }
        return str;
      }
    },
    { //a=ssrc-group:FEC 1 2
      //a=ssrc-group:FEC-FR 3004364195 1080772241
      push: 'ssrcGroups',
      // token-char = %x21 / %x23-27 / %x2A-2B / %x2D-2E / %x30-39 / %x41-5A / %x5E-7E
      reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: 'ssrc-group:%s %s'
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: 'msidSemantic',
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: 'msid-semantic: %s %s' // space after ':' is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: 'group:%s %s'
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { //a=sctpmap:5000 webrtc-datachannel 1024
      name: 'sctpmap',
      reg: /^sctpmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['sctpmapNumber', 'app', 'maxMessageSize'],
      format: function (o) {
        return (o.maxMessageSize != null) ?
          'sctpmap:%s %s %s' :
          'sctpmap:%s %s';
      }
    },
    { //a=x-google-flag:conference
      name: 'xGoogleFlag',
      reg: /^x-google-flag:([^\s]*)/,
      format: 'x-google-flag:%s'
    },
    { //a=rid:1 send max-width=1280;max-height=720;max-fps=30;depend=0
      push: 'rids',
      reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
      names: ['id', 'direction', 'params'],
      format: function (o) {
        return (o.params) ? 'rid:%s %s %s' : 'rid:%s %s';
      }
    },
    { //a=imageattr:97 send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320] recv [x=330,y=250]
      //a=imageattr:* send [x=800,y=640] recv *
      //a=imageattr:100 recv [x=320,y=240]
      push: 'imageattrs',
      reg: new RegExp(
        //a=imageattr:97
        '^imageattr:(\\d+|\\*)' +
        //send [x=800,y=640,sar=1.1,q=0.6] [x=480,y=320]
        '[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)' +
        //recv [x=330,y=250]
        '(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?'
      ),
      names: ['pt', 'dir1', 'attrs1', 'dir2', 'attrs2'],
      format: function (o) {
        return 'imageattr:%s %s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //a=simulcast:send 1,2,3;~4,~5 recv 6;~7,~8
      //a=simulcast:recv 1;4,5 send 6;7
      name: 'simulcast',
      reg: new RegExp(
        //a=simulcast:
        '^simulcast:' +
        //send 1,2,3;~4,~5
        '(send|recv) ([a-zA-Z0-9\\-_~;,]+)' +
        //space + recv 6;~7,~8
        '(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?' +
        //end
        '$'
      ),
      names: ['dir1', 'list1', 'dir2', 'list2'],
      format: function (o) {
        return 'simulcast:%s %s' + (o.dir2 ? ' %s %s' : '');
      }
    },
    { //Old simulcast draft 03 (implemented by Firefox)
      //  https://tools.ietf.org/html/draft-ietf-mmusic-sdp-simulcast-03
      //a=simulcast: recv pt=97;98 send pt=97
      //a=simulcast: send rid=5;6;7 paused=6,7
      name: 'simulcast_03',
      reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
      names: ['value'],
      format: 'simulcast: %s'
    },
    {
      //a=framerate:25
      //a=framerate:29.97
      name: 'framerate',
      reg: /^framerate:(\d+(?:$|\.\d+))/,
      format: 'framerate:%s'
    },
    { // RFC4570
      //a=source-filter: incl IN IP4 239.5.2.31 10.1.15.5
      name: 'sourceFilter',
      reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
      names: ['filterMode', 'netType', 'addressTypes', 'destAddress', 'srcList'],
      format: 'source-filter: %s %s %s %s %s'
    },
    { //a=bundle-only
      name: 'bundleOnly',
      reg: /^(bundle-only)/
    },
    { //a=label:1
      name: 'label',
      reg: /^label:(.+)/,
      format: 'label:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-5
      name:'sctpPort',
      reg: /^sctp-port:(\d+)$/,
      format: 'sctp-port:%s'
    },
    {
      // RFC version 26 for SCTP over DTLS
      // https://tools.ietf.org/html/draft-ietf-mmusic-sctp-sdp-26#section-6
      name:'maxMessageSize',
      reg: /^max-message-size:(\d+)$/,
      format: 'max-message-size:%s'
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ['value']
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = '%s';
    }
  });
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by alykoshin on 10.12.15.
 */

var noop = function () {};
var methods = [
  'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
  'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
  'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
  'timeStamp', 'trace', 'warn'
];


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  * Prevents errors on console methods when no console present.
//  * Exposes a global 'debug' function that preserves line numbering and formatting.
var _debug = function (obj) {
  var that = {};

  that.obj = obj;

  var method;
  var con;
  if ( typeof window !== 'undefined') {
    window.console = window.console || {};
    con = window.console;
  } else {
    con = console || {};
  }

  if (!con['debug']) { con.debug = con.log; } // IE does not support debug.

  var length = methods.length;
  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if ( ! con[method] ) { // .hasOwnProperty(method) ) { // !con[method] ) {
      con[method] = noop; // Disable for con
      that[method]    = noop; // and for this object too
    } else {
      if (Function.prototype.bind) {
        that[method] = Function.prototype.bind.call(con[method], con, '%s'); // '%s' does not works for group
      } else {
        that[method] = Function.prototype.apply.call(con[method], con, 'xyz',arguments);
      }
    }
  }
  //if(that.obj) {
  //  con.log('>>>>>>>>>>>>', that.obj.debugId, that.obj);
  // }
  //  if (!con.debug) { // IE does not support con.debug
  //    that.debug = Function.prototype.bind.call(con.log,   con, pref + ' **** debug:   %s');;
  //  } else {
  //    that.debug = Function.prototype.bind.call(con.debug, con, pref + ' **** debug: %s');
  //  }

  /** Rewrite specific methods **/
  if (Function.prototype.bind) {
    // con.log('_debug(): if (Function.prototype.bind) ');
    var pref = '[' + ( (that.obj && that.obj.debugId) ? that.obj.debugId : 'null') +']';


    that.error = Function.prototype.bind.call(con.error, con, pref + ' * error: %s');
    that.warn  = Function.prototype.bind.call(con.warn , con, pref + ' ** warn:  %s');
    that.info  = Function.prototype.bind.call(con.info,  con, pref + ' *** info:  %s');
    if (!con.debug) { // IE does not support con.debug
      that.debug = Function.prototype.bind.call(con.log,   con);//pref + ' **** debug:   %s');;
    } else {
      that.debug = Function.prototype.bind.call(con.debug, con);//pref + ' **** debug: %s');
    }
    that.log   = Function.prototype.bind.call(con.log,   con, pref + ' ***** log:   %s');
    //    that.group = Function.prototype.bind.call(con.group, con, '%s');
    that.group = Function.prototype.bind.call(con.log, con, pref + ' GROUP:   %s');
    //    that.groupCollapsed = Function.prototype.bind.call(con.groupCollapsed, con, '%s');
    that.groupCollapsed = Function.prototype.bind.call(con.log, con, pref + ' GROUP: %s');
    //    if (!that.assert) { that.assert = Function.prototype.bind.call(con.error, con, '* assert: %s'); }
    //  } else {
    //    that.error = function() { Function.prototype.apply.call(con.error, con, arguments); };
    //    that.warn  = function() { Function.prototype.apply.call(con.warn , con, arguments); };
    //    that.info  = function() { Function.prototype.apply.call(con.info,  con, arguments); };
    //    that.debug = function() { Function.prototype.apply.call(con.debug, con, arguments); };
    //    that.log   = function() { Function.prototype.apply.call(con.log,   con, arguments); };
  }

  return that;
};
function _no_debug() {
  var that = {};

  var length = methods.length;
  while (length--) {
    var method = methods[length];
    that[method] = noop;
  }
  return that;
}
//var debug = _no_debug();
var debugObj = _debug();
//var debug = console;

var assert     = function(condition, message) {
  if (!condition) {
    throw message ? 'Assertion failed: \'' + message +'\'': 'Assertion failed.';
  }
};
//var assert = debug.assert;

//assert(false, 'test-message');

//window.console = null;


////////////////////////////////////////////////////////////////////////////////

if (true) {
  var exports = debugObj;
  //exports.debug = debugObj;
  exports.assert = assert;

  module.exports = exports;
}

if (typeof window !== 'undefined') {
  window.debug = debugObj;
  window.assert  = assert;
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
__webpack_require__(12);
module.exports = __webpack_require__(13);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    var g;if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }g.adapter = f();
  }
})(function () {
  var define, module, exports;return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;if (!f && c) return require(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
          }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];return o(n || r);
          }, p, p.exports, r, e, n, t);
        }return n[i].exports;
      }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
        o(t[i]);
      }return o;
    }return r;
  }()({ 1: [function (require, module, exports) {}, {}], 2: [function (require, module, exports) {
      /* eslint-env node */
      'use strict';

      // SDP helpers.

      var SDPUtils = {};

      // Generate an alphanumeric identifier for cname or mids.
      // TODO: use UUIDs instead? https://gist.github.com/jed/982883
      SDPUtils.generateIdentifier = function () {
        return Math.random().toString(36).substr(2, 10);
      };

      // The RTCP CNAME used by all peerconnections from the same JS.
      SDPUtils.localCName = SDPUtils.generateIdentifier();

      // Splits SDP into lines, dealing with both CRLF and LF.
      SDPUtils.splitLines = function (blob) {
        return blob.trim().split('\n').map(function (line) {
          return line.trim();
        });
      };
      // Splits SDP into sessionpart and mediasections. Ensures CRLF.
      SDPUtils.splitSections = function (blob) {
        var parts = blob.split('\nm=');
        return parts.map(function (part, index) {
          return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
        });
      };

      // returns the session description.
      SDPUtils.getDescription = function (blob) {
        var sections = SDPUtils.splitSections(blob);
        return sections && sections[0];
      };

      // returns the individual media sections.
      SDPUtils.getMediaSections = function (blob) {
        var sections = SDPUtils.splitSections(blob);
        sections.shift();
        return sections;
      };

      // Returns lines that start with a certain prefix.
      SDPUtils.matchPrefix = function (blob, prefix) {
        return SDPUtils.splitLines(blob).filter(function (line) {
          return line.indexOf(prefix) === 0;
        });
      };

      // Parses an ICE candidate line. Sample input:
      // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
      // rport 55996"
      SDPUtils.parseCandidate = function (line) {
        var parts;
        // Parse both variants.
        if (line.indexOf('a=candidate:') === 0) {
          parts = line.substring(12).split(' ');
        } else {
          parts = line.substring(10).split(' ');
        }

        var candidate = {
          foundation: parts[0],
          component: parseInt(parts[1], 10),
          protocol: parts[2].toLowerCase(),
          priority: parseInt(parts[3], 10),
          ip: parts[4],
          address: parts[4], // address is an alias for ip.
          port: parseInt(parts[5], 10),
          // skip parts[6] == 'typ'
          type: parts[7]
        };

        for (var i = 8; i < parts.length; i += 2) {
          switch (parts[i]) {
            case 'raddr':
              candidate.relatedAddress = parts[i + 1];
              break;
            case 'rport':
              candidate.relatedPort = parseInt(parts[i + 1], 10);
              break;
            case 'tcptype':
              candidate.tcpType = parts[i + 1];
              break;
            case 'ufrag':
              candidate.ufrag = parts[i + 1]; // for backward compability.
              candidate.usernameFragment = parts[i + 1];
              break;
            default:
              // extension handling, in particular ufrag
              candidate[parts[i]] = parts[i + 1];
              break;
          }
        }
        return candidate;
      };

      // Translates a candidate object into SDP candidate attribute.
      SDPUtils.writeCandidate = function (candidate) {
        var sdp = [];
        sdp.push(candidate.foundation);
        sdp.push(candidate.component);
        sdp.push(candidate.protocol.toUpperCase());
        sdp.push(candidate.priority);
        sdp.push(candidate.address || candidate.ip);
        sdp.push(candidate.port);

        var type = candidate.type;
        sdp.push('typ');
        sdp.push(type);
        if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
          sdp.push('raddr');
          sdp.push(candidate.relatedAddress);
          sdp.push('rport');
          sdp.push(candidate.relatedPort);
        }
        if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
          sdp.push('tcptype');
          sdp.push(candidate.tcpType);
        }
        if (candidate.usernameFragment || candidate.ufrag) {
          sdp.push('ufrag');
          sdp.push(candidate.usernameFragment || candidate.ufrag);
        }
        return 'candidate:' + sdp.join(' ');
      };

      // Parses an ice-options line, returns an array of option tags.
      // a=ice-options:foo bar
      SDPUtils.parseIceOptions = function (line) {
        return line.substr(14).split(' ');
      };

      // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
      // a=rtpmap:111 opus/48000/2
      SDPUtils.parseRtpMap = function (line) {
        var parts = line.substr(9).split(' ');
        var parsed = {
          payloadType: parseInt(parts.shift(), 10) // was: id
        };

        parts = parts[0].split('/');

        parsed.name = parts[0];
        parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
        parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
        // legacy alias, got renamed back to channels in ORTC.
        parsed.numChannels = parsed.channels;
        return parsed;
      };

      // Generate an a=rtpmap line from RTCRtpCodecCapability or
      // RTCRtpCodecParameters.
      SDPUtils.writeRtpMap = function (codec) {
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        var channels = codec.channels || codec.numChannels || 1;
        return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
      };

      // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
      // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
      SDPUtils.parseExtmap = function (line) {
        var parts = line.substr(9).split(' ');
        return {
          id: parseInt(parts[0], 10),
          direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
          uri: parts[1]
        };
      };

      // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
      // RTCRtpHeaderExtension.
      SDPUtils.writeExtmap = function (headerExtension) {
        return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
      };

      // Parses an ftmp line, returns dictionary. Sample input:
      // a=fmtp:96 vbr=on;cng=on
      // Also deals with vbr=on; cng=on
      SDPUtils.parseFmtp = function (line) {
        var parsed = {};
        var kv;
        var parts = line.substr(line.indexOf(' ') + 1).split(';');
        for (var j = 0; j < parts.length; j++) {
          kv = parts[j].trim().split('=');
          parsed[kv[0].trim()] = kv[1];
        }
        return parsed;
      };

      // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
      SDPUtils.writeFmtp = function (codec) {
        var line = '';
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        if (codec.parameters && Object.keys(codec.parameters).length) {
          var params = [];
          Object.keys(codec.parameters).forEach(function (param) {
            if (codec.parameters[param]) {
              params.push(param + '=' + codec.parameters[param]);
            } else {
              params.push(param);
            }
          });
          line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
        }
        return line;
      };

      // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
      // a=rtcp-fb:98 nack rpsi
      SDPUtils.parseRtcpFb = function (line) {
        var parts = line.substr(line.indexOf(' ') + 1).split(' ');
        return {
          type: parts.shift(),
          parameter: parts.join(' ')
        };
      };
      // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
      SDPUtils.writeRtcpFb = function (codec) {
        var lines = '';
        var pt = codec.payloadType;
        if (codec.preferredPayloadType !== undefined) {
          pt = codec.preferredPayloadType;
        }
        if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
          // FIXME: special handling for trr-int?
          codec.rtcpFeedback.forEach(function (fb) {
            lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
          });
        }
        return lines;
      };

      // Parses an RFC 5576 ssrc media attribute. Sample input:
      // a=ssrc:3735928559 cname:something
      SDPUtils.parseSsrcMedia = function (line) {
        var sp = line.indexOf(' ');
        var parts = {
          ssrc: parseInt(line.substr(7, sp - 7), 10)
        };
        var colon = line.indexOf(':', sp);
        if (colon > -1) {
          parts.attribute = line.substr(sp + 1, colon - sp - 1);
          parts.value = line.substr(colon + 1);
        } else {
          parts.attribute = line.substr(sp + 1);
        }
        return parts;
      };

      SDPUtils.parseSsrcGroup = function (line) {
        var parts = line.substr(13).split(' ');
        return {
          semantics: parts.shift(),
          ssrcs: parts.map(function (ssrc) {
            return parseInt(ssrc, 10);
          })
        };
      };

      // Extracts the MID (RFC 5888) from a media section.
      // returns the MID or undefined if no mid line was found.
      SDPUtils.getMid = function (mediaSection) {
        var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
        if (mid) {
          return mid.substr(6);
        }
      };

      SDPUtils.parseFingerprint = function (line) {
        var parts = line.substr(14).split(' ');
        return {
          algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
          value: parts[1]
        };
      };

      // Extracts DTLS parameters from SDP media section or sessionpart.
      // FIXME: for consistency with other functions this should only
      //   get the fingerprint line as input. See also getIceParameters.
      SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
        var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
        // Note: a=setup line is ignored since we use the 'auto' role.
        // Note2: 'algorithm' is not case sensitive except in Edge.
        return {
          role: 'auto',
          fingerprints: lines.map(SDPUtils.parseFingerprint)
        };
      };

      // Serializes DTLS parameters to SDP.
      SDPUtils.writeDtlsParameters = function (params, setupType) {
        var sdp = 'a=setup:' + setupType + '\r\n';
        params.fingerprints.forEach(function (fp) {
          sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
        });
        return sdp;
      };
      // Parses ICE information from SDP media section or sessionpart.
      // FIXME: for consistency with other functions this should only
      //   get the ice-ufrag and ice-pwd lines as input.
      SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
        var lines = SDPUtils.splitLines(mediaSection);
        // Search in session part, too.
        lines = lines.concat(SDPUtils.splitLines(sessionpart));
        var iceParameters = {
          usernameFragment: lines.filter(function (line) {
            return line.indexOf('a=ice-ufrag:') === 0;
          })[0].substr(12),
          password: lines.filter(function (line) {
            return line.indexOf('a=ice-pwd:') === 0;
          })[0].substr(10)
        };
        return iceParameters;
      };

      // Serializes ICE parameters to SDP.
      SDPUtils.writeIceParameters = function (params) {
        return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
      };

      // Parses the SDP media section and returns RTCRtpParameters.
      SDPUtils.parseRtpParameters = function (mediaSection) {
        var description = {
          codecs: [],
          headerExtensions: [],
          fecMechanisms: [],
          rtcp: []
        };
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].split(' ');
        for (var i = 3; i < mline.length; i++) {
          // find all codecs from mline[3..]
          var pt = mline[i];
          var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
          if (rtpmapline) {
            var codec = SDPUtils.parseRtpMap(rtpmapline);
            var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
            // Only the first a=fmtp:<pt> is considered.
            codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
            codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
            description.codecs.push(codec);
            // parse FEC mechanisms from rtpmap lines.
            switch (codec.name.toUpperCase()) {
              case 'RED':
              case 'ULPFEC':
                description.fecMechanisms.push(codec.name.toUpperCase());
                break;
              default:
                // only RED and ULPFEC are recognized as FEC mechanisms.
                break;
            }
          }
        }
        SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
          description.headerExtensions.push(SDPUtils.parseExtmap(line));
        });
        // FIXME: parse rtcp.
        return description;
      };

      // Generates parts of the SDP media section describing the capabilities /
      // parameters.
      SDPUtils.writeRtpDescription = function (kind, caps) {
        var sdp = '';

        // Build the mline.
        sdp += 'm=' + kind + ' ';
        sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
        sdp += ' UDP/TLS/RTP/SAVPF ';
        sdp += caps.codecs.map(function (codec) {
          if (codec.preferredPayloadType !== undefined) {
            return codec.preferredPayloadType;
          }
          return codec.payloadType;
        }).join(' ') + '\r\n';

        sdp += 'c=IN IP4 0.0.0.0\r\n';
        sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

        // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
        caps.codecs.forEach(function (codec) {
          sdp += SDPUtils.writeRtpMap(codec);
          sdp += SDPUtils.writeFmtp(codec);
          sdp += SDPUtils.writeRtcpFb(codec);
        });
        var maxptime = 0;
        caps.codecs.forEach(function (codec) {
          if (codec.maxptime > maxptime) {
            maxptime = codec.maxptime;
          }
        });
        if (maxptime > 0) {
          sdp += 'a=maxptime:' + maxptime + '\r\n';
        }
        sdp += 'a=rtcp-mux\r\n';

        if (caps.headerExtensions) {
          caps.headerExtensions.forEach(function (extension) {
            sdp += SDPUtils.writeExtmap(extension);
          });
        }
        // FIXME: write fecMechanisms.
        return sdp;
      };

      // Parses the SDP media section and returns an array of
      // RTCRtpEncodingParameters.
      SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
        var encodingParameters = [];
        var description = SDPUtils.parseRtpParameters(mediaSection);
        var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
        var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

        // filter a=ssrc:... cname:, ignore PlanB-msid
        var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
          return SDPUtils.parseSsrcMedia(line);
        }).filter(function (parts) {
          return parts.attribute === 'cname';
        });
        var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
        var secondarySsrc;

        var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
          var parts = line.substr(17).split(' ');
          return parts.map(function (part) {
            return parseInt(part, 10);
          });
        });
        if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
          secondarySsrc = flows[0][1];
        }

        description.codecs.forEach(function (codec) {
          if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
            var encParam = {
              ssrc: primarySsrc,
              codecPayloadType: parseInt(codec.parameters.apt, 10)
            };
            if (primarySsrc && secondarySsrc) {
              encParam.rtx = { ssrc: secondarySsrc };
            }
            encodingParameters.push(encParam);
            if (hasRed) {
              encParam = JSON.parse(JSON.stringify(encParam));
              encParam.fec = {
                ssrc: primarySsrc,
                mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
              };
              encodingParameters.push(encParam);
            }
          }
        });
        if (encodingParameters.length === 0 && primarySsrc) {
          encodingParameters.push({
            ssrc: primarySsrc
          });
        }

        // we support both b=AS and b=TIAS but interpret AS as TIAS.
        var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
        if (bandwidth.length) {
          if (bandwidth[0].indexOf('b=TIAS:') === 0) {
            bandwidth = parseInt(bandwidth[0].substr(7), 10);
          } else if (bandwidth[0].indexOf('b=AS:') === 0) {
            // use formula from JSEP to convert b=AS to TIAS value.
            bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
          } else {
            bandwidth = undefined;
          }
          encodingParameters.forEach(function (params) {
            params.maxBitrate = bandwidth;
          });
        }
        return encodingParameters;
      };

      // parses http://draft.ortc.org/#rtcrtcpparameters*
      SDPUtils.parseRtcpParameters = function (mediaSection) {
        var rtcpParameters = {};

        // Gets the first SSRC. Note tha with RTX there might be multiple
        // SSRCs.
        var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
          return SDPUtils.parseSsrcMedia(line);
        }).filter(function (obj) {
          return obj.attribute === 'cname';
        })[0];
        if (remoteSsrc) {
          rtcpParameters.cname = remoteSsrc.value;
          rtcpParameters.ssrc = remoteSsrc.ssrc;
        }

        // Edge uses the compound attribute instead of reducedSize
        // compound is !reducedSize
        var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
        rtcpParameters.reducedSize = rsize.length > 0;
        rtcpParameters.compound = rsize.length === 0;

        // parses the rtcp-mux attrіbute.
        // Note that Edge does not support unmuxed RTCP.
        var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
        rtcpParameters.mux = mux.length > 0;

        return rtcpParameters;
      };

      // parses either a=msid: or a=ssrc:... msid lines and returns
      // the id of the MediaStream and MediaStreamTrack.
      SDPUtils.parseMsid = function (mediaSection) {
        var parts;
        var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
        if (spec.length === 1) {
          parts = spec[0].substr(7).split(' ');
          return { stream: parts[0], track: parts[1] };
        }
        var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
          return SDPUtils.parseSsrcMedia(line);
        }).filter(function (msidParts) {
          return msidParts.attribute === 'msid';
        });
        if (planB.length > 0) {
          parts = planB[0].value.split(' ');
          return { stream: parts[0], track: parts[1] };
        }
      };

      // Generate a session ID for SDP.
      // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
      // recommends using a cryptographically random +ve 64-bit value
      // but right now this should be acceptable and within the right range
      SDPUtils.generateSessionId = function () {
        return Math.random().toString().substr(2, 21);
      };

      // Write boilder plate for start of SDP
      // sessId argument is optional - if not supplied it will
      // be generated randomly
      // sessVersion is optional and defaults to 2
      // sessUser is optional and defaults to 'thisisadapterortc'
      SDPUtils.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
        var sessionId;
        var version = sessVer !== undefined ? sessVer : 2;
        if (sessId) {
          sessionId = sessId;
        } else {
          sessionId = SDPUtils.generateSessionId();
        }
        var user = sessUser || 'thisisadapterortc';
        // FIXME: sess-id should be an NTP timestamp.
        return 'v=0\r\n' + 'o=' + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
      };

      SDPUtils.writeMediaSection = function (transceiver, caps, type, stream) {
        var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

        // Map ICE parameters (ufrag, pwd) to SDP.
        sdp += SDPUtils.writeIceParameters(transceiver.iceGatherer.getLocalParameters());

        // Map DTLS parameters to SDP.
        sdp += SDPUtils.writeDtlsParameters(transceiver.dtlsTransport.getLocalParameters(), type === 'offer' ? 'actpass' : 'active');

        sdp += 'a=mid:' + transceiver.mid + '\r\n';

        if (transceiver.direction) {
          sdp += 'a=' + transceiver.direction + '\r\n';
        } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
          sdp += 'a=sendrecv\r\n';
        } else if (transceiver.rtpSender) {
          sdp += 'a=sendonly\r\n';
        } else if (transceiver.rtpReceiver) {
          sdp += 'a=recvonly\r\n';
        } else {
          sdp += 'a=inactive\r\n';
        }

        if (transceiver.rtpSender) {
          // spec.
          var msid = 'msid:' + stream.id + ' ' + transceiver.rtpSender.track.id + '\r\n';
          sdp += 'a=' + msid;

          // for Chrome.
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' ' + msid;
          if (transceiver.sendEncodingParameters[0].rtx) {
            sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' ' + msid;
            sdp += 'a=ssrc-group:FID ' + transceiver.sendEncodingParameters[0].ssrc + ' ' + transceiver.sendEncodingParameters[0].rtx.ssrc + '\r\n';
          }
        }
        // FIXME: this should be written by writeRtpDescription.
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
        if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
          sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc + ' cname:' + SDPUtils.localCName + '\r\n';
        }
        return sdp;
      };

      // Gets the direction from the mediaSection or the sessionpart.
      SDPUtils.getDirection = function (mediaSection, sessionpart) {
        // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
        var lines = SDPUtils.splitLines(mediaSection);
        for (var i = 0; i < lines.length; i++) {
          switch (lines[i]) {
            case 'a=sendrecv':
            case 'a=sendonly':
            case 'a=recvonly':
            case 'a=inactive':
              return lines[i].substr(2);
            default:
            // FIXME: What should happen here?
          }
        }
        if (sessionpart) {
          return SDPUtils.getDirection(sessionpart);
        }
        return 'sendrecv';
      };

      SDPUtils.getKind = function (mediaSection) {
        var lines = SDPUtils.splitLines(mediaSection);
        var mline = lines[0].split(' ');
        return mline[0].substr(2);
      };

      SDPUtils.isRejected = function (mediaSection) {
        return mediaSection.split(' ', 2)[1] === '0';
      };

      SDPUtils.parseMLine = function (mediaSection) {
        var lines = SDPUtils.splitLines(mediaSection);
        var parts = lines[0].substr(2).split(' ');
        return {
          kind: parts[0],
          port: parseInt(parts[1], 10),
          protocol: parts[2],
          fmt: parts.slice(3).join(' ')
        };
      };

      SDPUtils.parseOLine = function (mediaSection) {
        var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
        var parts = line.substr(2).split(' ');
        return {
          username: parts[0],
          sessionId: parts[1],
          sessionVersion: parseInt(parts[2], 10),
          netType: parts[3],
          addressType: parts[4],
          address: parts[5]
        };
      };

      // a very naive interpretation of a valid SDP.
      SDPUtils.isValidSDP = function (blob) {
        if (typeof blob !== 'string' || blob.length === 0) {
          return false;
        }
        var lines = SDPUtils.splitLines(blob);
        for (var i = 0; i < lines.length; i++) {
          if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
            return false;
          }
          // TODO: check the modifier a bit more.
        }
        return true;
      };

      // Expose public methods.
      if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') {
        module.exports = SDPUtils;
      }
    }, {}], 3: [function (require, module, exports) {
      (function (global) {
        /*
         *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
         *
         *  Use of this source code is governed by a BSD-style license
         *  that can be found in the LICENSE file in the root of the source
         *  tree.
         */
        /* eslint-env node */

        'use strict';

        var adapterFactory = require('./adapter_factory.js');
        module.exports = adapterFactory({ window: global.window });
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, { "./adapter_factory.js": 4 }], 4: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */

      'use strict';

      var utils = require('./utils');
      // Shimming starts here.
      module.exports = function (dependencies, opts) {
        var window = dependencies && dependencies.window;

        var options = {
          shimChrome: true,
          shimFirefox: true,
          shimEdge: true,
          shimSafari: true
        };

        for (var key in opts) {
          if (hasOwnProperty.call(opts, key)) {
            options[key] = opts[key];
          }
        }

        // Utils.
        var logging = utils.log;
        var browserDetails = utils.detectBrowser(window);

        // Uncomment the line below if you want logging to occur, including logging
        // for the switch statement below. Can also be turned on in the browser via
        // adapter.disableLog(false), but then logging from the switch statement below
        // will not appear.
        // require('./utils').disableLog(false);

        // Browser shims.
        var chromeShim = require('./chrome/chrome_shim') || null;
        var edgeShim = require('./edge/edge_shim') || null;
        var firefoxShim = require('./firefox/firefox_shim') || null;
        var safariShim = require('./safari/safari_shim') || null;
        var commonShim = require('./common_shim') || null;

        // Export to the adapter global object visible in the browser.
        var adapter = {
          browserDetails: browserDetails,
          commonShim: commonShim,
          extractVersion: utils.extractVersion,
          disableLog: utils.disableLog,
          disableWarnings: utils.disableWarnings
        };

        // Shim browser if found.
        switch (browserDetails.browser) {
          case 'chrome':
            if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
              logging('Chrome shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming chrome.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = chromeShim;
            commonShim.shimCreateObjectURL(window);

            chromeShim.shimGetUserMedia(window);
            chromeShim.shimMediaStream(window);
            chromeShim.shimSourceObject(window);
            chromeShim.shimPeerConnection(window);
            chromeShim.shimOnTrack(window);
            chromeShim.shimAddTrackRemoveTrack(window);
            chromeShim.shimGetSendersWithDtmf(window);
            chromeShim.shimSenderReceiverGetStats(window);
            chromeShim.fixNegotiationNeeded(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'firefox':
            if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
              logging('Firefox shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming firefox.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = firefoxShim;
            commonShim.shimCreateObjectURL(window);

            firefoxShim.shimGetUserMedia(window);
            firefoxShim.shimSourceObject(window);
            firefoxShim.shimPeerConnection(window);
            firefoxShim.shimOnTrack(window);
            firefoxShim.shimRemoveStream(window);
            firefoxShim.shimSenderGetStats(window);
            firefoxShim.shimReceiverGetStats(window);
            firefoxShim.shimRTCDataChannel(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'edge':
            if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
              logging('MS edge shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming edge.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = edgeShim;
            commonShim.shimCreateObjectURL(window);

            edgeShim.shimGetUserMedia(window);
            edgeShim.shimPeerConnection(window);
            edgeShim.shimReplaceTrack(window);
            edgeShim.shimGetDisplayMedia(window);

            // the edge shim implements the full RTCIceCandidate object.

            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          case 'safari':
            if (!safariShim || !options.shimSafari) {
              logging('Safari shim is not included in this adapter release.');
              return adapter;
            }
            logging('adapter.js shimming safari.');
            // Export to the adapter global object visible in the browser.
            adapter.browserShim = safariShim;
            commonShim.shimCreateObjectURL(window);

            safariShim.shimRTCIceServerUrls(window);
            safariShim.shimCreateOfferLegacy(window);
            safariShim.shimCallbacksAPI(window);
            safariShim.shimLocalStreamsAPI(window);
            safariShim.shimRemoteStreamsAPI(window);
            safariShim.shimTrackEventTransceiver(window);
            safariShim.shimGetUserMedia(window);

            commonShim.shimRTCIceCandidate(window);
            commonShim.shimMaxMessageSize(window);
            commonShim.shimSendThrowTypeError(window);
            break;
          default:
            logging('Unsupported browser!');
            break;
        }

        return adapter;
      };
    }, { "./chrome/chrome_shim": 5, "./common_shim": 7, "./edge/edge_shim": 1, "./firefox/firefox_shim": 8, "./safari/safari_shim": 10, "./utils": 11 }], 5: [function (require, module, exports) {

      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils.js');
      var logging = utils.log;

      /* iterates the stats graph recursively. */
      function walkStats(stats, base, resultSet) {
        if (!base || resultSet.has(base.id)) {
          return;
        }
        resultSet.set(base.id, base);
        Object.keys(base).forEach(function (name) {
          if (name.endsWith('Id')) {
            walkStats(stats, stats.get(base[name]), resultSet);
          } else if (name.endsWith('Ids')) {
            base[name].forEach(function (id) {
              walkStats(stats, stats.get(id), resultSet);
            });
          }
        });
      }

      /* filter getStats for a sender/receiver track. */
      function filterStats(result, track, outbound) {
        var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
        var filteredResult = new Map();
        if (track === null) {
          return filteredResult;
        }
        var trackStats = [];
        result.forEach(function (value) {
          if (value.type === 'track' && value.trackIdentifier === track.id) {
            trackStats.push(value);
          }
        });
        trackStats.forEach(function (trackStat) {
          result.forEach(function (stats) {
            if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
              walkStats(result, stats, filteredResult);
            }
          });
        });
        return filteredResult;
      }

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimMediaStream: function shimMediaStream(window) {
          window.MediaStream = window.MediaStream || window.webkitMediaStream;
        },

        shimOnTrack: function shimOnTrack(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
              get: function get() {
                return this._ontrack;
              },
              set: function set(f) {
                if (this._ontrack) {
                  this.removeEventListener('track', this._ontrack);
                }
                this.addEventListener('track', this._ontrack = f);
              },
              enumerable: true,
              configurable: true
            });
            var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
            window.RTCPeerConnection.prototype.setRemoteDescription = function () {
              var pc = this;
              if (!pc._ontrackpoly) {
                pc._ontrackpoly = function (e) {
                  // onaddstream does not fire when a track is added to an existing
                  // stream. But stream.onaddtrack is implemented so we use that.
                  e.stream.addEventListener('addtrack', function (te) {
                    var receiver;
                    if (window.RTCPeerConnection.prototype.getReceivers) {
                      receiver = pc.getReceivers().find(function (r) {
                        return r.track && r.track.id === te.track.id;
                      });
                    } else {
                      receiver = { track: te.track };
                    }

                    var event = new Event('track');
                    event.track = te.track;
                    event.receiver = receiver;
                    event.transceiver = { receiver: receiver };
                    event.streams = [e.stream];
                    pc.dispatchEvent(event);
                  });
                  e.stream.getTracks().forEach(function (track) {
                    var receiver;
                    if (window.RTCPeerConnection.prototype.getReceivers) {
                      receiver = pc.getReceivers().find(function (r) {
                        return r.track && r.track.id === track.id;
                      });
                    } else {
                      receiver = { track: track };
                    }
                    var event = new Event('track');
                    event.track = track;
                    event.receiver = receiver;
                    event.transceiver = { receiver: receiver };
                    event.streams = [e.stream];
                    pc.dispatchEvent(event);
                  });
                };
                pc.addEventListener('addstream', pc._ontrackpoly);
              }
              return origSetRemoteDescription.apply(pc, arguments);
            };
          } else {
            // even if RTCRtpTransceiver is in window, it is only used and
            // emitted in unified-plan. Unfortunately this means we need
            // to unconditionally wrap the event.
            utils.wrapPeerConnectionEvent(window, 'track', function (e) {
              if (!e.transceiver) {
                Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
              }
              return e;
            });
          }
        },

        shimGetSendersWithDtmf: function shimGetSendersWithDtmf(window) {
          // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
            var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
              return {
                track: track,
                get dtmf() {
                  if (this._dtmf === undefined) {
                    if (track.kind === 'audio') {
                      this._dtmf = pc.createDTMFSender(track);
                    } else {
                      this._dtmf = null;
                    }
                  }
                  return this._dtmf;
                },
                _pc: pc
              };
            };

            // augment addTrack when getSenders is not available.
            if (!window.RTCPeerConnection.prototype.getSenders) {
              window.RTCPeerConnection.prototype.getSenders = function () {
                this._senders = this._senders || [];
                return this._senders.slice(); // return a copy of the internal state.
              };
              var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
              window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
                var pc = this;
                var sender = origAddTrack.apply(pc, arguments);
                if (!sender) {
                  sender = shimSenderWithDtmf(pc, track);
                  pc._senders.push(sender);
                }
                return sender;
              };

              var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
              window.RTCPeerConnection.prototype.removeTrack = function (sender) {
                var pc = this;
                origRemoveTrack.apply(pc, arguments);
                var idx = pc._senders.indexOf(sender);
                if (idx !== -1) {
                  pc._senders.splice(idx, 1);
                }
              };
            }
            var origAddStream = window.RTCPeerConnection.prototype.addStream;
            window.RTCPeerConnection.prototype.addStream = function (stream) {
              var pc = this;
              pc._senders = pc._senders || [];
              origAddStream.apply(pc, [stream]);
              stream.getTracks().forEach(function (track) {
                pc._senders.push(shimSenderWithDtmf(pc, track));
              });
            };

            var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              var pc = this;
              pc._senders = pc._senders || [];
              origRemoveStream.apply(pc, [stream]);

              stream.getTracks().forEach(function (track) {
                var sender = pc._senders.find(function (s) {
                  return s.track === track;
                });
                if (sender) {
                  pc._senders.splice(pc._senders.indexOf(sender), 1); // remove sender
                }
              });
            };
          } else if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
            var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
            window.RTCPeerConnection.prototype.getSenders = function () {
              var pc = this;
              var senders = origGetSenders.apply(pc, []);
              senders.forEach(function (sender) {
                sender._pc = pc;
              });
              return senders;
            };

            Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
              get: function get() {
                if (this._dtmf === undefined) {
                  if (this.track.kind === 'audio') {
                    this._dtmf = this._pc.createDTMFSender(this.track);
                  } else {
                    this._dtmf = null;
                  }
                }
                return this._dtmf;
              }
            });
          }
        },

        shimSenderReceiverGetStats: function shimSenderReceiverGetStats(window) {
          if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
            return;
          }

          // shim sender stats.
          if (!('getStats' in window.RTCRtpSender.prototype)) {
            var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
            if (origGetSenders) {
              window.RTCPeerConnection.prototype.getSenders = function () {
                var pc = this;
                var senders = origGetSenders.apply(pc, []);
                senders.forEach(function (sender) {
                  sender._pc = pc;
                });
                return senders;
              };
            }

            var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
            if (origAddTrack) {
              window.RTCPeerConnection.prototype.addTrack = function () {
                var sender = origAddTrack.apply(this, arguments);
                sender._pc = this;
                return sender;
              };
            }
            window.RTCRtpSender.prototype.getStats = function () {
              var sender = this;
              return this._pc.getStats().then(function (result) {
                /* Note: this will include stats of all senders that
                 *   send a track with the same id as sender.track as
                 *   it is not possible to identify the RTCRtpSender.
                 */
                return filterStats(result, sender.track, true);
              });
            };
          }

          // shim receiver stats.
          if (!('getStats' in window.RTCRtpReceiver.prototype)) {
            var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
            if (origGetReceivers) {
              window.RTCPeerConnection.prototype.getReceivers = function () {
                var pc = this;
                var receivers = origGetReceivers.apply(pc, []);
                receivers.forEach(function (receiver) {
                  receiver._pc = pc;
                });
                return receivers;
              };
            }
            utils.wrapPeerConnectionEvent(window, 'track', function (e) {
              e.receiver._pc = e.srcElement;
              return e;
            });
            window.RTCRtpReceiver.prototype.getStats = function () {
              var receiver = this;
              return this._pc.getStats().then(function (result) {
                return filterStats(result, receiver.track, false);
              });
            };
          }

          if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
            return;
          }

          // shim RTCPeerConnection.getStats(track).
          var origGetStats = window.RTCPeerConnection.prototype.getStats;
          window.RTCPeerConnection.prototype.getStats = function () {
            var pc = this;
            if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
              var track = arguments[0];
              var sender;
              var receiver;
              var err;
              pc.getSenders().forEach(function (s) {
                if (s.track === track) {
                  if (sender) {
                    err = true;
                  } else {
                    sender = s;
                  }
                }
              });
              pc.getReceivers().forEach(function (r) {
                if (r.track === track) {
                  if (receiver) {
                    err = true;
                  } else {
                    receiver = r;
                  }
                }
                return r.track === track;
              });
              if (err || sender && receiver) {
                return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
              } else if (sender) {
                return sender.getStats();
              } else if (receiver) {
                return receiver.getStats();
              }
              return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
            }
            return origGetStats.apply(pc, arguments);
          };
        },

        shimSourceObject: function shimSourceObject(window) {
          var URL = window && window.URL;

          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
            if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
              // Shim the srcObject property, once, when HTMLMediaElement is found.
              Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                get: function get() {
                  return this._srcObject;
                },
                set: function set(stream) {
                  var self = this;
                  // Use _srcObject as a private property for this shim
                  this._srcObject = stream;
                  if (this.src) {
                    URL.revokeObjectURL(this.src);
                  }

                  if (!stream) {
                    this.src = '';
                    return undefined;
                  }
                  this.src = URL.createObjectURL(stream);
                  // We need to recreate the blob url when a track is added or
                  // removed. Doing it manually since we want to avoid a recursion.
                  stream.addEventListener('addtrack', function () {
                    if (self.src) {
                      URL.revokeObjectURL(self.src);
                    }
                    self.src = URL.createObjectURL(stream);
                  });
                  stream.addEventListener('removetrack', function () {
                    if (self.src) {
                      URL.revokeObjectURL(self.src);
                    }
                    self.src = URL.createObjectURL(stream);
                  });
                }
              });
            }
          }
        },

        shimAddTrackRemoveTrackWithNative: function shimAddTrackRemoveTrackWithNative(window) {
          // shim addTrack/removeTrack with native variants in order to make
          // the interactions with legacy getLocalStreams behave as in other browsers.
          // Keeps a mapping stream.id => [stream, rtpsenders...]
          window.RTCPeerConnection.prototype.getLocalStreams = function () {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
              return pc._shimmedLocalStreams[streamId][0];
            });
          };

          var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
          window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
            if (!stream) {
              return origAddTrack.apply(this, arguments);
            }
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};

            var sender = origAddTrack.apply(this, arguments);
            if (!this._shimmedLocalStreams[stream.id]) {
              this._shimmedLocalStreams[stream.id] = [stream, sender];
            } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
              this._shimmedLocalStreams[stream.id].push(sender);
            }
            return sender;
          };

          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};

            stream.getTracks().forEach(function (track) {
              var alreadyExists = pc.getSenders().find(function (s) {
                return s.track === track;
              });
              if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
              }
            });
            var existingSenders = pc.getSenders();
            origAddStream.apply(this, arguments);
            var newSenders = pc.getSenders().filter(function (newSender) {
              return existingSenders.indexOf(newSender) === -1;
            });
            this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
          };

          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            delete this._shimmedLocalStreams[stream.id];
            return origRemoveStream.apply(this, arguments);
          };

          var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
          window.RTCPeerConnection.prototype.removeTrack = function (sender) {
            var pc = this;
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            if (sender) {
              Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
                var idx = pc._shimmedLocalStreams[streamId].indexOf(sender);
                if (idx !== -1) {
                  pc._shimmedLocalStreams[streamId].splice(idx, 1);
                }
                if (pc._shimmedLocalStreams[streamId].length === 1) {
                  delete pc._shimmedLocalStreams[streamId];
                }
              });
            }
            return origRemoveTrack.apply(this, arguments);
          };
        },

        shimAddTrackRemoveTrack: function shimAddTrackRemoveTrack(window) {
          if (!window.RTCPeerConnection) {
            return;
          }
          var browserDetails = utils.detectBrowser(window);
          // shim addTrack and removeTrack.
          if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
            return this.shimAddTrackRemoveTrackWithNative(window);
          }

          // also shim pc.getLocalStreams when addTrack is shimmed
          // to return the original streams.
          var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
          window.RTCPeerConnection.prototype.getLocalStreams = function () {
            var pc = this;
            var nativeStreams = origGetLocalStreams.apply(this);
            pc._reverseStreams = pc._reverseStreams || {};
            return nativeStreams.map(function (stream) {
              return pc._reverseStreams[stream.id];
            });
          };

          var origAddStream = window.RTCPeerConnection.prototype.addStream;
          window.RTCPeerConnection.prototype.addStream = function (stream) {
            var pc = this;
            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};

            stream.getTracks().forEach(function (track) {
              var alreadyExists = pc.getSenders().find(function (s) {
                return s.track === track;
              });
              if (alreadyExists) {
                throw new DOMException('Track already exists.', 'InvalidAccessError');
              }
            });
            // Add identity mapping for consistency with addTrack.
            // Unless this is being used with a stream from addTrack.
            if (!pc._reverseStreams[stream.id]) {
              var newStream = new window.MediaStream(stream.getTracks());
              pc._streams[stream.id] = newStream;
              pc._reverseStreams[newStream.id] = stream;
              stream = newStream;
            }
            origAddStream.apply(pc, [stream]);
          };

          var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};

            origRemoveStream.apply(pc, [pc._streams[stream.id] || stream]);
            delete pc._reverseStreams[pc._streams[stream.id] ? pc._streams[stream.id].id : stream.id];
            delete pc._streams[stream.id];
          };

          window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
            var pc = this;
            if (pc.signalingState === 'closed') {
              throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            }
            var streams = [].slice.call(arguments, 1);
            if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
              return t === track;
            })) {
              // this is not fully correct but all we can manage without
              // [[associated MediaStreams]] internal slot.
              throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
            }

            var alreadyExists = pc.getSenders().find(function (s) {
              return s.track === track;
            });
            if (alreadyExists) {
              throw new DOMException('Track already exists.', 'InvalidAccessError');
            }

            pc._streams = pc._streams || {};
            pc._reverseStreams = pc._reverseStreams || {};
            var oldStream = pc._streams[stream.id];
            if (oldStream) {
              // this is using odd Chrome behaviour, use with caution:
              // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
              // Note: we rely on the high-level addTrack/dtmf shim to
              // create the sender with a dtmf sender.
              oldStream.addTrack(track);

              // Trigger ONN async.
              Promise.resolve().then(function () {
                pc.dispatchEvent(new Event('negotiationneeded'));
              });
            } else {
              var newStream = new window.MediaStream([track]);
              pc._streams[stream.id] = newStream;
              pc._reverseStreams[newStream.id] = stream;
              pc.addStream(newStream);
            }
            return pc.getSenders().find(function (s) {
              return s.track === track;
            });
          };

          // replace the internal stream id with the external one and
          // vice versa.
          function replaceInternalStreamId(pc, description) {
            var sdp = description.sdp;
            Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
              var externalStream = pc._reverseStreams[internalId];
              var internalStream = pc._streams[externalStream.id];
              sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
            });
            return new RTCSessionDescription({
              type: description.type,
              sdp: sdp
            });
          }
          function replaceExternalStreamId(pc, description) {
            var sdp = description.sdp;
            Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
              var externalStream = pc._reverseStreams[internalId];
              var internalStream = pc._streams[externalStream.id];
              sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
            });
            return new RTCSessionDescription({
              type: description.type,
              sdp: sdp
            });
          }
          ['createOffer', 'createAnswer'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              var pc = this;
              var args = arguments;
              var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
              if (isLegacyCall) {
                return nativeMethod.apply(pc, [function (description) {
                  var desc = replaceInternalStreamId(pc, description);
                  args[0].apply(null, [desc]);
                }, function (err) {
                  if (args[1]) {
                    args[1].apply(null, err);
                  }
                }, arguments[2]]);
              }
              return nativeMethod.apply(pc, arguments).then(function (description) {
                return replaceInternalStreamId(pc, description);
              });
            };
          });

          var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
          window.RTCPeerConnection.prototype.setLocalDescription = function () {
            var pc = this;
            if (!arguments.length || !arguments[0].type) {
              return origSetLocalDescription.apply(pc, arguments);
            }
            arguments[0] = replaceExternalStreamId(pc, arguments[0]);
            return origSetLocalDescription.apply(pc, arguments);
          };

          // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

          var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
          Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
            get: function get() {
              var pc = this;
              var description = origLocalDescription.get.apply(this);
              if (description.type === '') {
                return description;
              }
              return replaceInternalStreamId(pc, description);
            }
          });

          window.RTCPeerConnection.prototype.removeTrack = function (sender) {
            var pc = this;
            if (pc.signalingState === 'closed') {
              throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
            }
            // We can not yet check for sender instanceof RTCRtpSender
            // since we shim RTPSender. So we check if sender._pc is set.
            if (!sender._pc) {
              throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
            }
            var isLocal = sender._pc === pc;
            if (!isLocal) {
              throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
            }

            // Search for the native stream the senders track belongs to.
            pc._streams = pc._streams || {};
            var stream;
            Object.keys(pc._streams).forEach(function (streamid) {
              var hasTrack = pc._streams[streamid].getTracks().find(function (track) {
                return sender.track === track;
              });
              if (hasTrack) {
                stream = pc._streams[streamid];
              }
            });

            if (stream) {
              if (stream.getTracks().length === 1) {
                // if this is the last track of the stream, remove the stream. This
                // takes care of any shimmed _senders.
                pc.removeStream(pc._reverseStreams[stream.id]);
              } else {
                // relying on the same odd chrome behaviour as above.
                stream.removeTrack(sender.track);
              }
              pc.dispatchEvent(new Event('negotiationneeded'));
            }
          };
        },

        shimPeerConnection: function shimPeerConnection(window) {
          var browserDetails = utils.detectBrowser(window);

          // The RTCPeerConnection object.
          if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              // Translate iceTransportPolicy to iceTransports,
              // see https://code.google.com/p/webrtc/issues/detail?id=4869
              // this was fixed in M56 along with unprefixing RTCPeerConnection.
              logging('PeerConnection');
              if (pcConfig && pcConfig.iceTransportPolicy) {
                pcConfig.iceTransports = pcConfig.iceTransportPolicy;
              }

              return new window.webkitRTCPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype = window.webkitRTCPeerConnection.prototype;
            // wrap static methods. Currently just generateCertificate.
            if (window.webkitRTCPeerConnection.generateCertificate) {
              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function get() {
                  return window.webkitRTCPeerConnection.generateCertificate;
                }
              });
            }
          }
          if (!window.RTCPeerConnection) {
            return;
          }

          var origGetStats = window.RTCPeerConnection.prototype.getStats;
          window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
            var pc = this;
            var args = arguments;

            // If selector is a function then we are in the old style stats so just
            // pass back the original getStats format to avoid breaking old users.
            if (arguments.length > 0 && typeof selector === 'function') {
              return origGetStats.apply(this, arguments);
            }

            // When spec-style getStats is supported, return those when called with
            // either no arguments or the selector argument is null.
            if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
              return origGetStats.apply(this, []);
            }

            var fixChromeStats_ = function fixChromeStats_(response) {
              var standardReport = {};
              var reports = response.result();
              reports.forEach(function (report) {
                var standardStats = {
                  id: report.id,
                  timestamp: report.timestamp,
                  type: {
                    localcandidate: 'local-candidate',
                    remotecandidate: 'remote-candidate'
                  }[report.type] || report.type
                };
                report.names().forEach(function (name) {
                  standardStats[name] = report.stat(name);
                });
                standardReport[standardStats.id] = standardStats;
              });

              return standardReport;
            };

            // shim getStats with maplike support
            var makeMapStats = function makeMapStats(stats) {
              return new Map(Object.keys(stats).map(function (key) {
                return [key, stats[key]];
              }));
            };

            if (arguments.length >= 2) {
              var successCallbackWrapper_ = function successCallbackWrapper_(response) {
                args[1](makeMapStats(fixChromeStats_(response)));
              };

              return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
            }

            // promise-support
            return new Promise(function (resolve, reject) {
              origGetStats.apply(pc, [function (response) {
                resolve(makeMapStats(fixChromeStats_(response)));
              }, reject]);
            }).then(successCallback, errorCallback);
          };

          // add promise support -- natively available in Chrome 51
          if (browserDetails.version < 51) {
            ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function () {
                var args = arguments;
                var pc = this;
                var promise = new Promise(function (resolve, reject) {
                  nativeMethod.apply(pc, [args[0], resolve, reject]);
                });
                if (args.length < 2) {
                  return promise;
                }
                return promise.then(function () {
                  args[1].apply(null, []);
                }, function (err) {
                  if (args.length >= 3) {
                    args[2].apply(null, [err]);
                  }
                });
              };
            });
          }

          // promise support for createOffer and createAnswer. Available (without
          // bugs) since M52: crbug/619289
          if (browserDetails.version < 52) {
            ['createOffer', 'createAnswer'].forEach(function (method) {
              var nativeMethod = window.RTCPeerConnection.prototype[method];
              window.RTCPeerConnection.prototype[method] = function () {
                var pc = this;
                if (arguments.length < 1 || arguments.length === 1 && _typeof(arguments[0]) === 'object') {
                  var opts = arguments.length === 1 ? arguments[0] : undefined;
                  return new Promise(function (resolve, reject) {
                    nativeMethod.apply(pc, [resolve, reject, opts]);
                  });
                }
                return nativeMethod.apply(this, arguments);
              };
            });
          }

          // shim implicit creation of RTCSessionDescription/RTCIceCandidate
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
              return nativeMethod.apply(this, arguments);
            };
          });

          // support for addIceCandidate(null or undefined)
          var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
          window.RTCPeerConnection.prototype.addIceCandidate = function () {
            if (!arguments[0]) {
              if (arguments[1]) {
                arguments[1].apply(null);
              }
              return Promise.resolve();
            }
            return nativeAddIceCandidate.apply(this, arguments);
          };
        },

        fixNegotiationNeeded: function fixNegotiationNeeded(window) {
          utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
            var pc = e.target;
            if (pc.signalingState !== 'stable') {
              return;
            }
            return e;
          });
        },

        shimGetDisplayMedia: function shimGetDisplayMedia(window, getSourceId) {
          if (!window.navigator || !window.navigator.mediaDevices || 'getDisplayMedia' in window.navigator.mediaDevices) {
            return;
          }
          // getSourceId is a function that returns a promise resolving with
          // the sourceId of the screen/window/tab to be shared.
          if (typeof getSourceId !== 'function') {
            console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
            return;
          }
          window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
            return getSourceId(constraints).then(function (sourceId) {
              var widthSpecified = constraints.video && constraints.video.width;
              var heightSpecified = constraints.video && constraints.video.height;
              var frameRateSpecified = constraints.video && constraints.video.frameRate;
              constraints.video = {
                mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: sourceId,
                  maxFrameRate: frameRateSpecified || 3
                }
              };
              if (widthSpecified) {
                constraints.video.mandatory.maxWidth = widthSpecified;
              }
              if (heightSpecified) {
                constraints.video.mandatory.maxHeight = heightSpecified;
              }
              return window.navigator.mediaDevices.getUserMedia(constraints);
            });
          };
          window.navigator.getDisplayMedia = function (constraints) {
            utils.deprecated('navigator.getDisplayMedia', 'navigator.mediaDevices.getDisplayMedia');
            return window.navigator.mediaDevices.getDisplayMedia(constraints);
          };
        }
      };
    }, { "../utils.js": 11, "./getusermedia": 6 }], 6: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils.js');
      var logging = utils.log;

      // Expose public methods.
      module.exports = function (window) {
        var browserDetails = utils.detectBrowser(window);
        var navigator = window && window.navigator;

        var constraintsToChrome_ = function constraintsToChrome_(c) {
          if ((typeof c === "undefined" ? "undefined" : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
            return c;
          }
          var cc = {};
          Object.keys(c).forEach(function (key) {
            if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
              return;
            }
            var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
            if (r.exact !== undefined && typeof r.exact === 'number') {
              r.min = r.max = r.exact;
            }
            var oldname_ = function oldname_(prefix, name) {
              if (prefix) {
                return prefix + name.charAt(0).toUpperCase() + name.slice(1);
              }
              return name === 'deviceId' ? 'sourceId' : name;
            };
            if (r.ideal !== undefined) {
              cc.optional = cc.optional || [];
              var oc = {};
              if (typeof r.ideal === 'number') {
                oc[oldname_('min', key)] = r.ideal;
                cc.optional.push(oc);
                oc = {};
                oc[oldname_('max', key)] = r.ideal;
                cc.optional.push(oc);
              } else {
                oc[oldname_('', key)] = r.ideal;
                cc.optional.push(oc);
              }
            }
            if (r.exact !== undefined && typeof r.exact !== 'number') {
              cc.mandatory = cc.mandatory || {};
              cc.mandatory[oldname_('', key)] = r.exact;
            } else {
              ['min', 'max'].forEach(function (mix) {
                if (r[mix] !== undefined) {
                  cc.mandatory = cc.mandatory || {};
                  cc.mandatory[oldname_(mix, key)] = r[mix];
                }
              });
            }
          });
          if (c.advanced) {
            cc.optional = (cc.optional || []).concat(c.advanced);
          }
          return cc;
        };

        var shimConstraints_ = function shimConstraints_(constraints, func) {
          if (browserDetails.version >= 71) {
            return func(constraints);
          }
          constraints = JSON.parse(JSON.stringify(constraints));
          if (constraints && _typeof(constraints.audio) === 'object') {
            var remap = function remap(obj, a, b) {
              if (a in obj && !(b in obj)) {
                obj[b] = obj[a];
                delete obj[a];
              }
            };
            constraints = JSON.parse(JSON.stringify(constraints));
            remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
            remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
            constraints.audio = constraintsToChrome_(constraints.audio);
          }
          if (constraints && _typeof(constraints.video) === 'object') {
            // Shim facingMode for mobile & surface pro.
            var face = constraints.video.facingMode;
            face = face && ((typeof face === "undefined" ? "undefined" : _typeof(face)) === 'object' ? face : { ideal: face });
            var getSupportedFacingModeLies = browserDetails.version < 66;

            if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
              delete constraints.video.facingMode;
              var matches;
              if (face.exact === 'environment' || face.ideal === 'environment') {
                matches = ['back', 'rear'];
              } else if (face.exact === 'user' || face.ideal === 'user') {
                matches = ['front'];
              }
              if (matches) {
                // Look for matches in label, or use last cam for back (typical).
                return navigator.mediaDevices.enumerateDevices().then(function (devices) {
                  devices = devices.filter(function (d) {
                    return d.kind === 'videoinput';
                  });
                  var dev = devices.find(function (d) {
                    return matches.some(function (match) {
                      return d.label.toLowerCase().indexOf(match) !== -1;
                    });
                  });
                  if (!dev && devices.length && matches.indexOf('back') !== -1) {
                    dev = devices[devices.length - 1]; // more likely the back cam
                  }
                  if (dev) {
                    constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
                  }
                  constraints.video = constraintsToChrome_(constraints.video);
                  logging('chrome: ' + JSON.stringify(constraints));
                  return func(constraints);
                });
              }
            }
            constraints.video = constraintsToChrome_(constraints.video);
          }
          logging('chrome: ' + JSON.stringify(constraints));
          return func(constraints);
        };

        var shimError_ = function shimError_(e) {
          if (browserDetails.version >= 64) {
            return e;
          }
          return {
            name: {
              PermissionDeniedError: 'NotAllowedError',
              PermissionDismissedError: 'NotAllowedError',
              InvalidStateError: 'NotAllowedError',
              DevicesNotFoundError: 'NotFoundError',
              ConstraintNotSatisfiedError: 'OverconstrainedError',
              TrackStartError: 'NotReadableError',
              MediaDeviceFailedDueToShutdown: 'NotAllowedError',
              MediaDeviceKillSwitchOn: 'NotAllowedError',
              TabCaptureError: 'AbortError',
              ScreenCaptureError: 'AbortError',
              DeviceCaptureError: 'AbortError'
            }[e.name] || e.name,
            message: e.message,
            constraint: e.constraint || e.constraintName,
            toString: function toString() {
              return this.name + (this.message && ': ') + this.message;
            }
          };
        };

        var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
          shimConstraints_(constraints, function (c) {
            navigator.webkitGetUserMedia(c, onSuccess, function (e) {
              if (onError) {
                onError(shimError_(e));
              }
            });
          });
        };

        navigator.getUserMedia = getUserMedia_;

        // Returns the result of getUserMedia as a Promise.
        var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
          return new Promise(function (resolve, reject) {
            navigator.getUserMedia(constraints, resolve, reject);
          });
        };

        if (!navigator.mediaDevices) {
          navigator.mediaDevices = {
            getUserMedia: getUserMediaPromise_,
            enumerateDevices: function enumerateDevices() {
              return new Promise(function (resolve) {
                var kinds = { audio: 'audioinput', video: 'videoinput' };
                return window.MediaStreamTrack.getSources(function (devices) {
                  resolve(devices.map(function (device) {
                    return { label: device.label,
                      kind: kinds[device.kind],
                      deviceId: device.id,
                      groupId: '' };
                  }));
                });
              });
            },
            getSupportedConstraints: function getSupportedConstraints() {
              return {
                deviceId: true, echoCancellation: true, facingMode: true,
                frameRate: true, height: true, width: true
              };
            }
          };
        }

        // A shim for getUserMedia method on the mediaDevices object.
        // TODO(KaptenJansson) remove once implemented in Chrome stable.
        if (!navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia = function (constraints) {
            return getUserMediaPromise_(constraints);
          };
        } else {
          // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
          // function which returns a Promise, it does not accept spec-style
          // constraints.
          var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (cs) {
            return shimConstraints_(cs, function (c) {
              return origGetUserMedia(c).then(function (stream) {
                if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                  stream.getTracks().forEach(function (track) {
                    track.stop();
                  });
                  throw new DOMException('', 'NotFoundError');
                }
                return stream;
              }, function (e) {
                return Promise.reject(shimError_(e));
              });
            });
          };
        }

        // Dummy devicechange event methods.
        // TODO(KaptenJansson) remove once implemented in Chrome stable.
        if (typeof navigator.mediaDevices.addEventListener === 'undefined') {
          navigator.mediaDevices.addEventListener = function () {
            logging('Dummy mediaDevices.addEventListener called.');
          };
        }
        if (typeof navigator.mediaDevices.removeEventListener === 'undefined') {
          navigator.mediaDevices.removeEventListener = function () {
            logging('Dummy mediaDevices.removeEventListener called.');
          };
        }
      };
    }, { "../utils.js": 11 }], 7: [function (require, module, exports) {
      /*
       *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var SDPUtils = require('sdp');
      var utils = require('./utils');

      module.exports = {
        shimRTCIceCandidate: function shimRTCIceCandidate(window) {
          // foundation is arbitrarily chosen as an indicator for full support for
          // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
          if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
            return;
          }

          var NativeRTCIceCandidate = window.RTCIceCandidate;
          window.RTCIceCandidate = function (args) {
            // Remove the a= which shouldn't be part of the candidate string.
            if ((typeof args === "undefined" ? "undefined" : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
              args = JSON.parse(JSON.stringify(args));
              args.candidate = args.candidate.substr(2);
            }

            if (args.candidate && args.candidate.length) {
              // Augment the native candidate with the parsed fields.
              var nativeCandidate = new NativeRTCIceCandidate(args);
              var parsedCandidate = SDPUtils.parseCandidate(args.candidate);
              var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

              // Add a serializer that does not serialize the extra attributes.
              augmentedCandidate.toJSON = function () {
                return {
                  candidate: augmentedCandidate.candidate,
                  sdpMid: augmentedCandidate.sdpMid,
                  sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
                  usernameFragment: augmentedCandidate.usernameFragment
                };
              };
              return augmentedCandidate;
            }
            return new NativeRTCIceCandidate(args);
          };
          window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

          // Hook up the augmented candidate in onicecandidate and
          // addEventListener('icecandidate', ...)
          utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
            if (e.candidate) {
              Object.defineProperty(e, 'candidate', {
                value: new window.RTCIceCandidate(e.candidate),
                writable: 'false'
              });
            }
            return e;
          });
        },

        // shimCreateObjectURL must be called before shimSourceObject to avoid loop.

        shimCreateObjectURL: function shimCreateObjectURL(window) {
          var URL = window && window.URL;

          if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.HTMLMediaElement && 'srcObject' in window.HTMLMediaElement.prototype && URL.createObjectURL && URL.revokeObjectURL)) {
            // Only shim CreateObjectURL using srcObject if srcObject exists.
            return undefined;
          }

          var nativeCreateObjectURL = URL.createObjectURL.bind(URL);
          var nativeRevokeObjectURL = URL.revokeObjectURL.bind(URL);
          var streams = new Map(),
              newId = 0;

          URL.createObjectURL = function (stream) {
            if ('getTracks' in stream) {
              var url = 'polyblob:' + ++newId;
              streams.set(url, stream);
              utils.deprecated('URL.createObjectURL(stream)', 'elem.srcObject = stream');
              return url;
            }
            return nativeCreateObjectURL(stream);
          };
          URL.revokeObjectURL = function (url) {
            nativeRevokeObjectURL(url);
            streams.delete(url);
          };

          var dsc = Object.getOwnPropertyDescriptor(window.HTMLMediaElement.prototype, 'src');
          Object.defineProperty(window.HTMLMediaElement.prototype, 'src', {
            get: function get() {
              return dsc.get.apply(this);
            },
            set: function set(url) {
              this.srcObject = streams.get(url) || null;
              return dsc.set.apply(this, [url]);
            }
          });

          var nativeSetAttribute = window.HTMLMediaElement.prototype.setAttribute;
          window.HTMLMediaElement.prototype.setAttribute = function () {
            if (arguments.length === 2 && ('' + arguments[0]).toLowerCase() === 'src') {
              this.srcObject = streams.get(arguments[1]) || null;
            }
            return nativeSetAttribute.apply(this, arguments);
          };
        },

        shimMaxMessageSize: function shimMaxMessageSize(window) {
          if (window.RTCSctpTransport || !window.RTCPeerConnection) {
            return;
          }
          var browserDetails = utils.detectBrowser(window);

          if (!('sctp' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
              get: function get() {
                return typeof this._sctp === 'undefined' ? null : this._sctp;
              }
            });
          }

          var sctpInDescription = function sctpInDescription(description) {
            var sections = SDPUtils.splitSections(description.sdp);
            sections.shift();
            return sections.some(function (mediaSection) {
              var mLine = SDPUtils.parseMLine(mediaSection);
              return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
            });
          };

          var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
            // TODO: Is there a better solution for detecting Firefox?
            var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
            if (match === null || match.length < 2) {
              return -1;
            }
            var version = parseInt(match[1], 10);
            // Test for NaN (yes, this is ugly)
            return version !== version ? -1 : version;
          };

          var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
            // Every implementation we know can send at least 64 KiB.
            // Note: Although Chrome is technically able to send up to 256 KiB, the
            //       data does not reach the other peer reliably.
            //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
            var canSendMaxMessageSize = 65536;
            if (browserDetails.browser === 'firefox') {
              if (browserDetails.version < 57) {
                if (remoteIsFirefox === -1) {
                  // FF < 57 will send in 16 KiB chunks using the deprecated PPID
                  // fragmentation.
                  canSendMaxMessageSize = 16384;
                } else {
                  // However, other FF (and RAWRTC) can reassemble PPID-fragmented
                  // messages. Thus, supporting ~2 GiB when sending.
                  canSendMaxMessageSize = 2147483637;
                }
              } else if (browserDetails.version < 60) {
                // Currently, all FF >= 57 will reset the remote maximum message size
                // to the default value when a data channel is created at a later
                // stage. :(
                // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
                canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
              } else {
                // FF >= 60 supports sending ~2 GiB
                canSendMaxMessageSize = 2147483637;
              }
            }
            return canSendMaxMessageSize;
          };

          var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
            // Note: 65536 bytes is the default value from the SDP spec. Also,
            //       every implementation we know supports receiving 65536 bytes.
            var maxMessageSize = 65536;

            // FF 57 has a slightly incorrect default remote max message size, so
            // we need to adjust it here to avoid a failure when sending.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
            if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
              maxMessageSize = 65535;
            }

            var match = SDPUtils.matchPrefix(description.sdp, 'a=max-message-size:');
            if (match.length > 0) {
              maxMessageSize = parseInt(match[0].substr(19), 10);
            } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
              // If the maximum message size is not present in the remote SDP and
              // both local and remote are Firefox, the remote peer can receive
              // ~2 GiB.
              maxMessageSize = 2147483637;
            }
            return maxMessageSize;
          };

          var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
          window.RTCPeerConnection.prototype.setRemoteDescription = function () {
            var pc = this;
            pc._sctp = null;

            if (sctpInDescription(arguments[0])) {
              // Check if the remote is FF.
              var isFirefox = getRemoteFirefoxVersion(arguments[0]);

              // Get the maximum message size the local peer is capable of sending
              var canSendMMS = getCanSendMaxMessageSize(isFirefox);

              // Get the maximum message size of the remote peer.
              var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

              // Determine final maximum message size
              var maxMessageSize;
              if (canSendMMS === 0 && remoteMMS === 0) {
                maxMessageSize = Number.POSITIVE_INFINITY;
              } else if (canSendMMS === 0 || remoteMMS === 0) {
                maxMessageSize = Math.max(canSendMMS, remoteMMS);
              } else {
                maxMessageSize = Math.min(canSendMMS, remoteMMS);
              }

              // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
              // attribute.
              var sctp = {};
              Object.defineProperty(sctp, 'maxMessageSize', {
                get: function get() {
                  return maxMessageSize;
                }
              });
              pc._sctp = sctp;
            }

            return origSetRemoteDescription.apply(pc, arguments);
          };
        },

        shimSendThrowTypeError: function shimSendThrowTypeError(window) {
          if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
            return;
          }

          // Note: Although Firefox >= 57 has a native implementation, the maximum
          //       message size can be reset for all data channels at a later stage.
          //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

          function wrapDcSend(dc, pc) {
            var origDataChannelSend = dc.send;
            dc.send = function () {
              var data = arguments[0];
              var length = data.length || data.size || data.byteLength;
              if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
                throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
              }
              return origDataChannelSend.apply(dc, arguments);
            };
          }
          var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
          window.RTCPeerConnection.prototype.createDataChannel = function () {
            var pc = this;
            var dataChannel = origCreateDataChannel.apply(pc, arguments);
            wrapDcSend(dataChannel, pc);
            return dataChannel;
          };
          utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
            wrapDcSend(e.channel, e.target);
            return e;
          });
        }
      };
    }, { "./utils": 11, "sdp": 2 }], 8: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');

      module.exports = {
        shimGetUserMedia: require('./getusermedia'),
        shimOnTrack: function shimOnTrack(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
              get: function get() {
                return this._ontrack;
              },
              set: function set(f) {
                if (this._ontrack) {
                  this.removeEventListener('track', this._ontrack);
                  this.removeEventListener('addstream', this._ontrackpoly);
                }
                this.addEventListener('track', this._ontrack = f);
                this.addEventListener('addstream', this._ontrackpoly = function (e) {
                  e.stream.getTracks().forEach(function (track) {
                    var event = new Event('track');
                    event.track = track;
                    event.receiver = { track: track };
                    event.transceiver = { receiver: event.receiver };
                    event.streams = [e.stream];
                    this.dispatchEvent(event);
                  }.bind(this));
                }.bind(this));
              },
              enumerable: true,
              configurable: true
            });
          }
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
            Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
              get: function get() {
                return { receiver: this.receiver };
              }
            });
          }
        },

        shimSourceObject: function shimSourceObject(window) {
          // Firefox has supported mozSrcObject since FF22, unprefixed in 42.
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
            if (window.HTMLMediaElement && !('srcObject' in window.HTMLMediaElement.prototype)) {
              // Shim the srcObject property, once, when HTMLMediaElement is found.
              Object.defineProperty(window.HTMLMediaElement.prototype, 'srcObject', {
                get: function get() {
                  return this.mozSrcObject;
                },
                set: function set(stream) {
                  this.mozSrcObject = stream;
                }
              });
            }
          }
        },

        shimPeerConnection: function shimPeerConnection(window) {
          var browserDetails = utils.detectBrowser(window);

          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
            return; // probably media.peerconnection.enabled=false in about:config
          }
          // The RTCPeerConnection object.
          if (!window.RTCPeerConnection) {
            window.RTCPeerConnection = function (pcConfig, pcConstraints) {
              if (browserDetails.version < 38) {
                // .urls is not supported in FF < 38.
                // create RTCIceServers with a single url.
                if (pcConfig && pcConfig.iceServers) {
                  var newIceServers = [];
                  for (var i = 0; i < pcConfig.iceServers.length; i++) {
                    var server = pcConfig.iceServers[i];
                    if (server.hasOwnProperty('urls')) {
                      for (var j = 0; j < server.urls.length; j++) {
                        var newServer = {
                          url: server.urls[j]
                        };
                        if (server.urls[j].indexOf('turn') === 0) {
                          newServer.username = server.username;
                          newServer.credential = server.credential;
                        }
                        newIceServers.push(newServer);
                      }
                    } else {
                      newIceServers.push(pcConfig.iceServers[i]);
                    }
                  }
                  pcConfig.iceServers = newIceServers;
                }
              }
              return new window.mozRTCPeerConnection(pcConfig, pcConstraints);
            };
            window.RTCPeerConnection.prototype = window.mozRTCPeerConnection.prototype;

            // wrap static methods. Currently just generateCertificate.
            if (window.mozRTCPeerConnection.generateCertificate) {
              Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
                get: function get() {
                  return window.mozRTCPeerConnection.generateCertificate;
                }
              });
            }

            window.RTCSessionDescription = window.mozRTCSessionDescription;
            window.RTCIceCandidate = window.mozRTCIceCandidate;
          }

          // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
          ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
            var nativeMethod = window.RTCPeerConnection.prototype[method];
            window.RTCPeerConnection.prototype[method] = function () {
              arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
              return nativeMethod.apply(this, arguments);
            };
          });

          // support for addIceCandidate(null or undefined)
          var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
          window.RTCPeerConnection.prototype.addIceCandidate = function () {
            if (!arguments[0]) {
              if (arguments[1]) {
                arguments[1].apply(null);
              }
              return Promise.resolve();
            }
            return nativeAddIceCandidate.apply(this, arguments);
          };

          // shim getStats with maplike support
          var makeMapStats = function makeMapStats(stats) {
            var map = new Map();
            Object.keys(stats).forEach(function (key) {
              map.set(key, stats[key]);
              map[key] = stats[key];
            });
            return map;
          };

          var modernStatsTypes = {
            inboundrtp: 'inbound-rtp',
            outboundrtp: 'outbound-rtp',
            candidatepair: 'candidate-pair',
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          };

          var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
          window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
            return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
              if (browserDetails.version < 48) {
                stats = makeMapStats(stats);
              }
              if (browserDetails.version < 53 && !onSucc) {
                // Shim only promise getStats with spec-hyphens in type names
                // Leave callback version alone; misc old uses of forEach before Map
                try {
                  stats.forEach(function (stat) {
                    stat.type = modernStatsTypes[stat.type] || stat.type;
                  });
                } catch (e) {
                  if (e.name !== 'TypeError') {
                    throw e;
                  }
                  // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
                  stats.forEach(function (stat, i) {
                    stats.set(i, Object.assign({}, stat, {
                      type: modernStatsTypes[stat.type] || stat.type
                    }));
                  });
                }
              }
              return stats;
            }).then(onSucc, onErr);
          };
        },

        shimSenderGetStats: function shimSenderGetStats(window) {
          if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
            return;
          }
          if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
            return;
          }
          var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
          if (origGetSenders) {
            window.RTCPeerConnection.prototype.getSenders = function () {
              var pc = this;
              var senders = origGetSenders.apply(pc, []);
              senders.forEach(function (sender) {
                sender._pc = pc;
              });
              return senders;
            };
          }

          var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
          if (origAddTrack) {
            window.RTCPeerConnection.prototype.addTrack = function () {
              var sender = origAddTrack.apply(this, arguments);
              sender._pc = this;
              return sender;
            };
          }
          window.RTCRtpSender.prototype.getStats = function () {
            return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
          };
        },

        shimReceiverGetStats: function shimReceiverGetStats(window) {
          if (!((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
            return;
          }
          if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
            return;
          }
          var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
          if (origGetReceivers) {
            window.RTCPeerConnection.prototype.getReceivers = function () {
              var pc = this;
              var receivers = origGetReceivers.apply(pc, []);
              receivers.forEach(function (receiver) {
                receiver._pc = pc;
              });
              return receivers;
            };
          }
          utils.wrapPeerConnectionEvent(window, 'track', function (e) {
            e.receiver._pc = e.srcElement;
            return e;
          });
          window.RTCRtpReceiver.prototype.getStats = function () {
            return this._pc.getStats(this.track);
          };
        },

        shimRemoveStream: function shimRemoveStream(window) {
          if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
            return;
          }
          window.RTCPeerConnection.prototype.removeStream = function (stream) {
            var pc = this;
            utils.deprecated('removeStream', 'removeTrack');
            this.getSenders().forEach(function (sender) {
              if (sender.track && stream.getTracks().indexOf(sender.track) !== -1) {
                pc.removeTrack(sender);
              }
            });
          };
        },

        shimRTCDataChannel: function shimRTCDataChannel(window) {
          // rename DataChannel to RTCDataChannel (native fix in FF60):
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
          if (window.DataChannel && !window.RTCDataChannel) {
            window.RTCDataChannel = window.DataChannel;
          }
        },

        shimGetDisplayMedia: function shimGetDisplayMedia(window, preferredMediaSource) {
          if (!window.navigator || !window.navigator.mediaDevices || 'getDisplayMedia' in window.navigator.mediaDevices) {
            return;
          }
          window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
            if (!(constraints && constraints.video)) {
              var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
              err.name = 'NotFoundError';
              // from https://heycam.github.io/webidl/#idl-DOMException-error-names
              err.code = 8;
              return Promise.reject(err);
            }
            if (constraints.video === true) {
              constraints.video = { mediaSource: preferredMediaSource };
            } else {
              constraints.video.mediaSource = preferredMediaSource;
            }
            return window.navigator.mediaDevices.getUserMedia(constraints);
          };
          window.navigator.getDisplayMedia = function (constraints) {
            utils.deprecated('navigator.getDisplayMedia', 'navigator.mediaDevices.getDisplayMedia');
            return window.navigator.mediaDevices.getDisplayMedia(constraints);
          };
        }
      };
    }, { "../utils": 11, "./getusermedia": 9 }], 9: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var utils = require('../utils');
      var logging = utils.log;

      // Expose public methods.
      module.exports = function (window) {
        var browserDetails = utils.detectBrowser(window);
        var navigator = window && window.navigator;
        var MediaStreamTrack = window && window.MediaStreamTrack;

        var shimError_ = function shimError_(e) {
          return {
            name: {
              InternalError: 'NotReadableError',
              NotSupportedError: 'TypeError',
              PermissionDeniedError: 'NotAllowedError',
              SecurityError: 'NotAllowedError'
            }[e.name] || e.name,
            message: {
              'The operation is insecure.': 'The request is not allowed by the ' + 'user agent or the platform in the current context.'
            }[e.message] || e.message,
            constraint: e.constraint,
            toString: function toString() {
              return this.name + (this.message && ': ') + this.message;
            }
          };
        };

        // getUserMedia constraints shim.
        var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
          var constraintsToFF37_ = function constraintsToFF37_(c) {
            if ((typeof c === "undefined" ? "undefined" : _typeof(c)) !== 'object' || c.require) {
              return c;
            }
            var require = [];
            Object.keys(c).forEach(function (key) {
              if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
                return;
              }
              var r = c[key] = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
              if (r.min !== undefined || r.max !== undefined || r.exact !== undefined) {
                require.push(key);
              }
              if (r.exact !== undefined) {
                if (typeof r.exact === 'number') {
                  r.min = r.max = r.exact;
                } else {
                  c[key] = r.exact;
                }
                delete r.exact;
              }
              if (r.ideal !== undefined) {
                c.advanced = c.advanced || [];
                var oc = {};
                if (typeof r.ideal === 'number') {
                  oc[key] = { min: r.ideal, max: r.ideal };
                } else {
                  oc[key] = r.ideal;
                }
                c.advanced.push(oc);
                delete r.ideal;
                if (!Object.keys(r).length) {
                  delete c[key];
                }
              }
            });
            if (require.length) {
              c.require = require;
            }
            return c;
          };
          constraints = JSON.parse(JSON.stringify(constraints));
          if (browserDetails.version < 38) {
            logging('spec: ' + JSON.stringify(constraints));
            if (constraints.audio) {
              constraints.audio = constraintsToFF37_(constraints.audio);
            }
            if (constraints.video) {
              constraints.video = constraintsToFF37_(constraints.video);
            }
            logging('ff37: ' + JSON.stringify(constraints));
          }
          return navigator.mozGetUserMedia(constraints, onSuccess, function (e) {
            onError(shimError_(e));
          });
        };

        // Returns the result of getUserMedia as a Promise.
        var getUserMediaPromise_ = function getUserMediaPromise_(constraints) {
          return new Promise(function (resolve, reject) {
            getUserMedia_(constraints, resolve, reject);
          });
        };

        // Shim for mediaDevices on older versions.
        if (!navigator.mediaDevices) {
          navigator.mediaDevices = { getUserMedia: getUserMediaPromise_,
            addEventListener: function addEventListener() {},
            removeEventListener: function removeEventListener() {}
          };
        }
        navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function () {
          return new Promise(function (resolve) {
            var infos = [{ kind: 'audioinput', deviceId: 'default', label: '', groupId: '' }, { kind: 'videoinput', deviceId: 'default', label: '', groupId: '' }];
            resolve(infos);
          });
        };

        if (browserDetails.version < 41) {
          // Work around http://bugzil.la/1169665
          var orgEnumerateDevices = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
          navigator.mediaDevices.enumerateDevices = function () {
            return orgEnumerateDevices().then(undefined, function (e) {
              if (e.name === 'NotFoundError') {
                return [];
              }
              throw e;
            });
          };
        }
        if (browserDetails.version < 49) {
          var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (c) {
            return origGetUserMedia(c).then(function (stream) {
              // Work around https://bugzil.la/802326
              if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
                stream.getTracks().forEach(function (track) {
                  track.stop();
                });
                throw new DOMException('The object can not be found here.', 'NotFoundError');
              }
              return stream;
            }, function (e) {
              return Promise.reject(shimError_(e));
            });
          };
        }
        if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
          var remap = function remap(obj, a, b) {
            if (a in obj && !(b in obj)) {
              obj[b] = obj[a];
              delete obj[a];
            }
          };

          var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
          navigator.mediaDevices.getUserMedia = function (c) {
            if ((typeof c === "undefined" ? "undefined" : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
              c = JSON.parse(JSON.stringify(c));
              remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
              remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
            }
            return nativeGetUserMedia(c);
          };

          if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
            var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
            MediaStreamTrack.prototype.getSettings = function () {
              var obj = nativeGetSettings.apply(this, arguments);
              remap(obj, 'mozAutoGainControl', 'autoGainControl');
              remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
              return obj;
            };
          }

          if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
            var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
            MediaStreamTrack.prototype.applyConstraints = function (c) {
              if (this.kind === 'audio' && (typeof c === "undefined" ? "undefined" : _typeof(c)) === 'object') {
                c = JSON.parse(JSON.stringify(c));
                remap(c, 'autoGainControl', 'mozAutoGainControl');
                remap(c, 'noiseSuppression', 'mozNoiseSuppression');
              }
              return nativeApplyConstraints.apply(this, [c]);
            };
          }
        }
        navigator.getUserMedia = function (constraints, onSuccess, onError) {
          if (browserDetails.version < 44) {
            return getUserMedia_(constraints, onSuccess, onError);
          }
          // Replace Firefox 44+'s deprecation warning with unprefixed version.
          utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
          navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
        };
      };
    }, { "../utils": 11 }], 10: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      'use strict';

      var utils = require('../utils');

      module.exports = {
        shimLocalStreamsAPI: function shimLocalStreamsAPI(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getLocalStreams = function () {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              return this._localStreams;
            };
          }
          if (!('getStreamById' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getStreamById = function (id) {
              var result = null;
              if (this._localStreams) {
                this._localStreams.forEach(function (stream) {
                  if (stream.id === id) {
                    result = stream;
                  }
                });
              }
              if (this._remoteStreams) {
                this._remoteStreams.forEach(function (stream) {
                  if (stream.id === id) {
                    result = stream;
                  }
                });
              }
              return result;
            };
          }
          if (!('addStream' in window.RTCPeerConnection.prototype)) {
            var _addTrack = window.RTCPeerConnection.prototype.addTrack;
            window.RTCPeerConnection.prototype.addStream = function (stream) {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              if (this._localStreams.indexOf(stream) === -1) {
                this._localStreams.push(stream);
              }
              var pc = this;
              stream.getTracks().forEach(function (track) {
                _addTrack.call(pc, track, stream);
              });
            };

            window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
              if (stream) {
                if (!this._localStreams) {
                  this._localStreams = [stream];
                } else if (this._localStreams.indexOf(stream) === -1) {
                  this._localStreams.push(stream);
                }
              }
              return _addTrack.call(this, track, stream);
            };
          }
          if (!('removeStream' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.removeStream = function (stream) {
              if (!this._localStreams) {
                this._localStreams = [];
              }
              var index = this._localStreams.indexOf(stream);
              if (index === -1) {
                return;
              }
              this._localStreams.splice(index, 1);
              var pc = this;
              var tracks = stream.getTracks();
              this.getSenders().forEach(function (sender) {
                if (tracks.indexOf(sender.track) !== -1) {
                  pc.removeTrack(sender);
                }
              });
            };
          }
        },
        shimRemoteStreamsAPI: function shimRemoteStreamsAPI(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
            window.RTCPeerConnection.prototype.getRemoteStreams = function () {
              return this._remoteStreams ? this._remoteStreams : [];
            };
          }
          if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
            Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
              get: function get() {
                return this._onaddstream;
              },
              set: function set(f) {
                if (this._onaddstream) {
                  this.removeEventListener('addstream', this._onaddstream);
                }
                this.addEventListener('addstream', this._onaddstream = f);
              }
            });
            var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
            window.RTCPeerConnection.prototype.setRemoteDescription = function () {
              var pc = this;
              if (!this._onaddstreampoly) {
                this.addEventListener('track', this._onaddstreampoly = function (e) {
                  e.streams.forEach(function (stream) {
                    if (!pc._remoteStreams) {
                      pc._remoteStreams = [];
                    }
                    if (pc._remoteStreams.indexOf(stream) >= 0) {
                      return;
                    }
                    pc._remoteStreams.push(stream);
                    var event = new Event('addstream');
                    event.stream = stream;
                    pc.dispatchEvent(event);
                  });
                });
              }
              return origSetRemoteDescription.apply(pc, arguments);
            };
          }
        },
        shimCallbacksAPI: function shimCallbacksAPI(window) {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
            return;
          }
          var prototype = window.RTCPeerConnection.prototype;
          var createOffer = prototype.createOffer;
          var createAnswer = prototype.createAnswer;
          var setLocalDescription = prototype.setLocalDescription;
          var setRemoteDescription = prototype.setRemoteDescription;
          var addIceCandidate = prototype.addIceCandidate;

          prototype.createOffer = function (successCallback, failureCallback) {
            var options = arguments.length >= 2 ? arguments[2] : arguments[0];
            var promise = createOffer.apply(this, [options]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };

          prototype.createAnswer = function (successCallback, failureCallback) {
            var options = arguments.length >= 2 ? arguments[2] : arguments[0];
            var promise = createAnswer.apply(this, [options]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };

          var withCallback = function withCallback(description, successCallback, failureCallback) {
            var promise = setLocalDescription.apply(this, [description]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.setLocalDescription = withCallback;

          withCallback = function withCallback(description, successCallback, failureCallback) {
            var promise = setRemoteDescription.apply(this, [description]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.setRemoteDescription = withCallback;

          withCallback = function withCallback(candidate, successCallback, failureCallback) {
            var promise = addIceCandidate.apply(this, [candidate]);
            if (!failureCallback) {
              return promise;
            }
            promise.then(successCallback, failureCallback);
            return Promise.resolve();
          };
          prototype.addIceCandidate = withCallback;
        },
        shimGetUserMedia: function shimGetUserMedia(window) {
          var navigator = window && window.navigator;

          if (!navigator.getUserMedia) {
            if (navigator.webkitGetUserMedia) {
              navigator.getUserMedia = navigator.webkitGetUserMedia.bind(navigator);
            } else if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
              navigator.getUserMedia = function (constraints, cb, errcb) {
                navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
              }.bind(navigator);
            }
          }
        },
        shimRTCIceServerUrls: function shimRTCIceServerUrls(window) {
          // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
          var OrigPeerConnection = window.RTCPeerConnection;
          window.RTCPeerConnection = function (pcConfig, pcConstraints) {
            if (pcConfig && pcConfig.iceServers) {
              var newIceServers = [];
              for (var i = 0; i < pcConfig.iceServers.length; i++) {
                var server = pcConfig.iceServers[i];
                if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
                  utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
                  server = JSON.parse(JSON.stringify(server));
                  server.urls = server.url;
                  delete server.url;
                  newIceServers.push(server);
                } else {
                  newIceServers.push(pcConfig.iceServers[i]);
                }
              }
              pcConfig.iceServers = newIceServers;
            }
            return new OrigPeerConnection(pcConfig, pcConstraints);
          };
          window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
          // wrap static methods. Currently just generateCertificate.
          if ('generateCertificate' in window.RTCPeerConnection) {
            Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
              get: function get() {
                return OrigPeerConnection.generateCertificate;
              }
            });
          }
        },
        shimTrackEventTransceiver: function shimTrackEventTransceiver(window) {
          // Add event.transceiver member over deprecated event.receiver
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype &&
          // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
          // defined for some reason even when window.RTCTransceiver is not.
          !window.RTCTransceiver) {
            Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
              get: function get() {
                return { receiver: this.receiver };
              }
            });
          }
        },

        shimCreateOfferLegacy: function shimCreateOfferLegacy(window) {
          var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
          window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
            var pc = this;
            if (offerOptions) {
              if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
              }
              var audioTransceiver = pc.getTransceivers().find(function (transceiver) {
                return transceiver.sender.track && transceiver.sender.track.kind === 'audio';
              });
              if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
                if (audioTransceiver.direction === 'sendrecv') {
                  if (audioTransceiver.setDirection) {
                    audioTransceiver.setDirection('sendonly');
                  } else {
                    audioTransceiver.direction = 'sendonly';
                  }
                } else if (audioTransceiver.direction === 'recvonly') {
                  if (audioTransceiver.setDirection) {
                    audioTransceiver.setDirection('inactive');
                  } else {
                    audioTransceiver.direction = 'inactive';
                  }
                }
              } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
                pc.addTransceiver('audio');
              }

              if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
                // support bit values
                offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
              }
              var videoTransceiver = pc.getTransceivers().find(function (transceiver) {
                return transceiver.sender.track && transceiver.sender.track.kind === 'video';
              });
              if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
                if (videoTransceiver.direction === 'sendrecv') {
                  videoTransceiver.setDirection('sendonly');
                } else if (videoTransceiver.direction === 'recvonly') {
                  videoTransceiver.setDirection('inactive');
                }
              } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
                pc.addTransceiver('video');
              }
            }
            return origCreateOffer.apply(pc, arguments);
          };
        }
      };
    }, { "../utils": 11 }], 11: [function (require, module, exports) {
      /*
       *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
       *
       *  Use of this source code is governed by a BSD-style license
       *  that can be found in the LICENSE file in the root of the source
       *  tree.
       */
      /* eslint-env node */
      'use strict';

      var logDisabled_ = true;
      var deprecationWarnings_ = true;

      /**
       * Extract browser version out of the provided user agent string.
       *
       * @param {!string} uastring userAgent string.
       * @param {!string} expr Regular expression used as match criteria.
       * @param {!number} pos position in the version string to be returned.
       * @return {!number} browser version.
       */
      function extractVersion(uastring, expr, pos) {
        var match = uastring.match(expr);
        return match && match.length >= pos && parseInt(match[pos], 10);
      }

      // Wraps the peerconnection event eventNameToWrap in a function
      // which returns the modified event object (or false to prevent
      // the event).
      function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
        if (!window.RTCPeerConnection) {
          return;
        }
        var proto = window.RTCPeerConnection.prototype;
        var nativeAddEventListener = proto.addEventListener;
        proto.addEventListener = function (nativeEventName, cb) {
          if (nativeEventName !== eventNameToWrap) {
            return nativeAddEventListener.apply(this, arguments);
          }
          var wrappedCallback = function wrappedCallback(e) {
            var modifiedEvent = wrapper(e);
            if (modifiedEvent) {
              cb(modifiedEvent);
            }
          };
          this._eventMap = this._eventMap || {};
          this._eventMap[cb] = wrappedCallback;
          return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
        };

        var nativeRemoveEventListener = proto.removeEventListener;
        proto.removeEventListener = function (nativeEventName, cb) {
          if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
            return nativeRemoveEventListener.apply(this, arguments);
          }
          var unwrappedCb = this._eventMap[cb];
          delete this._eventMap[cb];
          return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
        };

        Object.defineProperty(proto, 'on' + eventNameToWrap, {
          get: function get() {
            return this['_on' + eventNameToWrap];
          },
          set: function set(cb) {
            if (this['_on' + eventNameToWrap]) {
              this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
              delete this['_on' + eventNameToWrap];
            }
            if (cb) {
              this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
            }
          },
          enumerable: true,
          configurable: true
        });
      }

      // Utility methods.
      module.exports = {
        extractVersion: extractVersion,
        wrapPeerConnectionEvent: wrapPeerConnectionEvent,
        disableLog: function disableLog(bool) {
          if (typeof bool !== 'boolean') {
            return new Error('Argument type: ' + (typeof bool === "undefined" ? "undefined" : _typeof(bool)) + '. Please use a boolean.');
          }
          logDisabled_ = bool;
          return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
        },

        /**
         * Disable or enable deprecation warnings
         * @param {!boolean} bool set to true to disable warnings.
         */
        disableWarnings: function disableWarnings(bool) {
          if (typeof bool !== 'boolean') {
            return new Error('Argument type: ' + (typeof bool === "undefined" ? "undefined" : _typeof(bool)) + '. Please use a boolean.');
          }
          deprecationWarnings_ = !bool;
          return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
        },

        log: function log() {
          if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
            if (logDisabled_) {
              return;
            }
            if (typeof console !== 'undefined' && typeof console.log === 'function') {
              console.log.apply(console, arguments);
            }
          }
        },

        /**
         * Shows a deprecation warning suggesting the modern and spec-compatible API.
         */
        deprecated: function deprecated(oldMethod, newMethod) {
          if (!deprecationWarnings_) {
            return;
          }
          console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
        },

        /**
         * Browser detector.
         *
         * @return {object} result containing browser and version
         *     properties.
         */
        detectBrowser: function detectBrowser(window) {
          var navigator = window && window.navigator;

          // Returned result object.
          var result = {};
          result.browser = null;
          result.version = null;

          // Fail early if it's not a browser
          if (typeof window === 'undefined' || !window.navigator) {
            result.browser = 'Not a browser.';
            return result;
          }

          if (navigator.mozGetUserMedia) {
            // Firefox.
            result.browser = 'firefox';
            result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
          } else if (navigator.webkitGetUserMedia) {
            // Chrome, Chromium, Webview, Opera.
            // Version matches Chrome/WebRTC version.
            result.browser = 'chrome';
            result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
          } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
            // Edge.
            result.browser = 'edge';
            result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
          } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
            // Safari.
            result.browser = 'safari';
            result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
          } else {
            // Default fallthrough: not supported.
            result.browser = 'Not a supported browser.';
            return result;
          }

          return result;
        }
      };
    }, {}] }, {}, [3])(3);
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.ScreenChromeExtensionUtil = {};
(function (util) {
    // Last time updated on: June 08, 2018

    // Latest file can be found here: https://cdn.webrtc-experiment.com/Screen-Capturing.js

    // Muaz Khan     - www.MuazKhan.com
    // MIT License   - www.WebRTC-Experiment.com/licence
    // Documentation - https://github.com/muaz-khan/Chrome-Extensions/tree/master/Screen-Capturing.js
    // Demo          - https://www.webrtc-experiment.com/Screen-Capturing/

    // ___________________
    // Screen-Capturing.js

    // Source code: https://github.com/muaz-khan/Chrome-Extensions/tree/master/desktopCapture
    // Google AppStore installation path: https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk

    // This JavaScript file is aimed to explain steps needed to integrate above chrome extension
    // in your own webpages

    // Usage:
    // getScreenConstraints(function(screen_constraints) {
    //    navigator.mediaDevices.getUserMedia({ video: screen_constraints }).then(onSuccess).catch(onFailure );
    // });

    // First Step: Download the extension, modify "manifest.json" and publish to Google AppStore
    //             https://github.com/muaz-khan/Chrome-Extensions/tree/master/desktopCapture#how-to-publish-yourself

    // Second Step: Listen for postMessage handler
    // postMessage is used to exchange "sourceId" between chrome extension and you webpage.
    // though, there are tons other options as well, e.g. XHR-signaling, websockets, etc.
    window.addEventListener('message', function (event) {
        if (event.origin != window.location.origin) {
            return;
        }

        onMessageCallback(event.data);
    });

    // and the function that handles received messages

    function onMessageCallback(data) {
        // "cancel" button is clicked
        if (data == 'PermissionDeniedError') {
            chromeMediaSource = 'PermissionDeniedError';
            if (screenCallback) return screenCallback('PermissionDeniedError');else throw new Error('PermissionDeniedError');
        }

        // extension notified his presence
        if (data == 'rtcmulticonnection-extension-loaded') {
            chromeMediaSource = 'desktop';
        }

        // extension shared temp sourceId
        if (data.sourceId && screenCallback) {
            screenCallback(sourceId = data.sourceId, data.canRequestAudioTrack === true);
        }
    }

    // global variables
    var chromeMediaSource = 'screen';
    var sourceId;
    var screenCallback;

    // this method can be used to check if chrome extension is installed & enabled.
    function isChromeExtensionAvailable(callback) {
        if (!callback) return;

        if (chromeMediaSource == 'desktop') return callback(true);

        // ask extension if it is available
        window.postMessage('are-you-there', '*');

        setTimeout(function () {
            if (chromeMediaSource == 'screen') {
                callback(false);
            } else callback(true);
        }, 2000);
    }

    // this function can be used to get "source-id" from the extension
    function getSourceId(callback) {
        if (!callback) throw '"callback" parameter is mandatory.';
        if (sourceId) return callback(sourceId);

        screenCallback = callback;
        window.postMessage('get-sourceId', '*');
    }

    // this function can be used to get "source-id" from the extension
    function getCustomSourceId(arr, callback) {
        if (!arr || !arr.forEach) throw '"arr" parameter is mandatory and it must be an array.';
        if (!callback) throw '"callback" parameter is mandatory.';

        if (sourceId) return callback(sourceId);

        screenCallback = callback;
        window.postMessage({
            'get-custom-sourceId': arr
        }, '*');
    }

    // this function can be used to get "source-id" from the extension
    function getSourceIdWithAudio(callback) {
        if (!callback) throw '"callback" parameter is mandatory.';
        if (sourceId) return callback(sourceId);

        screenCallback = callback;
        window.postMessage('audio-plus-tab', '*');
    }

    // this function can be used to get "source-id" from the extension
    function getSourceIdWithCustom(sources, callback) {
        if (!callback) throw '"callback" parameter is mandatory.';
        if (sourceId) return callback(sourceId);
        screenCallback = callback;
        window.postMessage(sources, '*');
    }
    // this function can be used to get "source-id" from the extension
    function cancelChooseDesktopMedia(callback) {
        console.error('lalalal');
        window.postMessage('cancel-choose-media', '*');
    }

    var isFirefox = typeof window.InstallTrigger !== 'undefined';
    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var isChrome = !!window.chrome && !isOpera;

    function getChromeExtensionStatus(extensionid, callback) {
        if (isFirefox) return callback('not-chrome');

        if (arguments.length != 2) {
            callback = extensionid;
        }
        extensionid = extensionid || 'igbnnaaplbclljbpbhaplekapmfegkmg'; // default extension-id
        var image = document.createElement('img');
        image.src = 'chrome-extension://' + extensionid + '/qcloud.png';
        image.onload = function () {
            chromeMediaSource = 'screen';
            window.postMessage('are-you-there', '*');
            setTimeout(function () {
                if (chromeMediaSource == 'screen') {
                    callback('installed-disabled');
                } else callback('installed-enabled');
            }, 2000);
        };
        image.onerror = function () {
            callback('not-installed');
        };
    }

    function getScreenConstraintsWithAudio(callback) {
        getScreenConstraints({
            type: 'audio'
        }, callback);
    }

    // this function explains how to use above methods/objects
    function getScreenConstraints(opts, callback) {
        var type = opts && opts.type;
        var ideal_width = opts.attributes && opts.attributes.width;
        var ideal_height = opts.attributes && opts.attributes.height;
        var firefoxScreenConstraints = {
            mozMediaSource: 'window',
            mediaSource: 'window'
        };
        if (isFirefox) return callback(null, firefoxScreenConstraints);
        // this statement defines getUserMedia constraints
        // that will be used to capture content of screen
        var screen_constraints = {
            mandatory: {
                chromeMediaSource: chromeMediaSource,
                maxWidth: screen.width > 1920 ? screen.width : 1920,
                maxHeight: screen.height > 1080 ? screen.height : 1080
            },
            optional: []
        };
        if (ideal_width) {
            screen_constraints.mandatory.maxWidth = ideal_width;
            screen_constraints.mandatory.minWidth = ideal_width;
            screen_constraints.mandatory.maxHeight = ideal_height;
            screen_constraints.mandatory.minHeight = ideal_height;
        }

        console.error('screen_constraints', opts, JSON.stringify(screen_constraints));
        // this statement verifies chrome extension availability
        // if installed and available then it will invoke extension API
        // otherwise it will fallback to command-line based screen capturing API
        if (chromeMediaSource == 'desktop' && !sourceId) {
            if (type && type == 'custom') {
                getSourceIdWithCustom(opts.source, function (sourceId, canRequestAudioTrack) {
                    screen_constraints.mandatory.chromeMediaSourceId = sourceId;
                    screen_constraints.canRequestAudioTrack = canRequestAudioTrack;
                    callback(sourceId == 'PermissionDeniedError' ? sourceId : null, screen_constraints);
                });
            } else if (type && type == 'audio') {
                getSourceIdWithAudio(function (sourceId, canRequestAudioTrack) {
                    screen_constraints.mandatory.chromeMediaSourceId = sourceId;

                    if (canRequestAudioTrack) {
                        screen_constraints.canRequestAudioTrack = true;
                    }
                    callback(sourceId == 'PermissionDeniedError' ? sourceId : null, screen_constraints);
                });
            } else {
                getSourceId(function (sourceId) {
                    screen_constraints.mandatory.chromeMediaSourceId = sourceId;
                    callback(sourceId == 'PermissionDeniedError' ? sourceId : null, screen_constraints);
                });
            }
            return;
        }

        // this statement sets gets 'sourceId" and sets "chromeMediaSourceId" 
        if (chromeMediaSource == 'desktop') {
            screen_constraints.mandatory.chromeMediaSourceId = sourceId;
        }

        // now invoking native getUserMedia API
        callback(null, screen_constraints);
    }

    function resetGlobalData() {
        sourceId = null;
        screenCallback = null;
    }

    util.isChromeExtensionAvailable = isChromeExtensionAvailable;
    util.getScreenConstraints = getScreenConstraints;
    util.getChromeExtensionStatus = getChromeExtensionStatus;
    util.resetGlobalData = resetGlobalData;
    util.cancelChooseDesktopMedia = cancelChooseDesktopMedia;
})(ScreenChromeExtensionUtil);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Constants = __webpack_require__(0);
var WebRTCStat = __webpack_require__(14);
var PingUtil = __webpack_require__(15);
var Util = __webpack_require__(4);
var RTCUtil = __webpack_require__(16);
var Report = __webpack_require__(24);
var MediaUtil = __webpack_require__(25);
var Log = __webpack_require__(2);
var DetectRTC = __webpack_require__(3);
var WebSocketClient = __webpack_require__(26);
var StreamHandler = __webpack_require__(27);
var Browser = __webpack_require__(6);
var Emitter = __webpack_require__(28);
var mitt = __webpack_require__(29);
var objectAssign = __webpack_require__(9);
var jparam = __webpack_require__(30);
var SoundMeter = __webpack_require__(31);
var isMobile = __webpack_require__(32);
var getstats = __webpack_require__(33);
WebRTCStat.init();

var onGetMaxTimeMs = function onGetMaxTimeMs(data) {
  Log.RTCLog.info('onGetMaxTimeMs: ' + JSON.stringify(data));
};

var configValidation = function configValidation(config, emitter) {
  var checkList = [['userSig', 'sdkAppId'], //for normal
  ['sdkAppId'] //for pre conn
  ];
  var invalid_list = [];
  checkList[config.preconn].forEach(function (item) {
    if (typeof config[item] === 'undefined') {
      invalid_list.push(item);
    }
  });
  if (invalid_list.length > 0) {
    var errorMsg = 'WebRTC API init failed! config is incorrect! The following parameters is required!';
    console.error(errorMsg, invalid_list);
    emitter.emit('onInitResult', {
      errorCode: Constants.ERROR_CODE.PARAM_MISSING,
      error: '确定参数是否完整 [' + invalid_list + ']'
    });
    return false;
  }
  return true;
};

function isVideoTrackReady(peerConnection) {
  // old browser e.g Chrome M58 doesn't support this interface so assume it's already ready.
  if (typeof RTCRtpReceiver === 'undefined') {
    return true;
  }
  var receiver = peerConnection.getReceivers().find(function (receiver) {
    return receiver.track.kind == 'video';
  });
  if (receiver == undefined) {
    return false;
  }
  var videoTrack = receiver.track;
  return videoTrack && videoTrack.readyState === 'live';
}

function WebRTCAPI(config, succ, fail) {
  var $self = this,
      emitter = this.emitter = mitt();
  var global = this.global = {
    deviceInfo: {
      hasVideo: false,
      hasAudio: false
    },
    usebkurl: false,
    isbkurl: false,
    trybktimer: null,
    inited: false,
    enteredRoom: false,
    checkSigSeq: null,
    relayip: null,
    localip: null,
    signalip: null,
    ostype: null,
    cpunum: 0,
    cpuname: null,
    devicename: null,
    dataport: null,
    stunport: null,
    stunportList: null,
    websocket: null,
    bkwebsocket: null,
    peerConnections: {},
    remoteStreams: {},
    preReportData: null,
    remoteSdps: {},
    config: {},
    reportSto: null,
    reportTime: 0,
    roomid: -1,
    useStrRoomid: 0,
    localStreamStatus: false,
    localStream: null,
    localMediaStatus: {
      audio: true,
      video: true
    },
    specifyConstraints: null, //是否由用户指定Constraints
    constraints: {
      audio: true,
      video: true
    },
    constraintsList: [],
    offerSdpOption: {
      offerToReceiveAudio: true,
      offerToReceiveVideo: true,
      voiceActivityDetection: false
    },
    openIdMap: {},
    tinyIdMap: {},
    retryGetStats: {},
    restartRTCQueue: {},
    destroy: false,
    off: false,
    allowPush: true,
    activeUserStats: [],
    mutedFlag: 0
  };
  config.preconn = config.preconn ? 1 : 0;
  // 字段名映射
  // 统一兼容其他端
  config.openid = config.userID || config.userId || config.openid;
  config.sdkAppId = config.sdkAppID || config.sdkAppId;
  config.privMapEncrypt = config.privateMapKey || config.privMapEncrypt;
  config.privMap = config.privateMap || config.privMap;

  config.screen = config.screen || false;
  config.canvas = config.canvas || false;
  global.config = config;

  global.userMuteFiredMap = new Map();

  if (config.preconn || !config.userSig) {
    global.config.preconn = config.preconn || 0;
  } else {
    global.config.userSig = config.userSig;
    global.config.privMapEncrypt = config.privMapEncrypt;
    global.config.openid = config.openid;
    global.config.srctinyid = config.srctinyid;
  }
  global.config.sdkAppId = config.sdkAppId;
  global.config.accountType = config.accountType;
  global.config.closeLocalMedia = typeof config.closeLocalMedia !== 'undefined' ? config.closeLocalMedia : true;
  global.config.videoActive = typeof config.video !== 'undefined' ? config.video : true;
  global.config.audioActive = typeof config.audio !== 'undefined' ? config.audio : true;

  if (typeof config.wsRetryMaxTimes !== 'undefined') {
    Constants.WS_MAX_RETRY_COUNT = config.wsRetryMaxTimes;
  }
  if (typeof config.wsRetryDist !== 'undefined') {
    Constants.WS_RETRY_DIST = config.wsRetryDist;
  }

  if (typeof config.useCloud === 'undefined' || config.useCloud) {
    Constants.setHostname('qcloud.rtc.qq.com');
    Constants.setBkHostname('bk.rtc.qq.com');
  } else {
    Constants.setHostname('webrtc.qq.com');
    Constants.setBkHostname('bk.webrtc.qq.com');
  }
  var env = Util.query('env');
  if (env) {
    var domain = env + '.rtc.qq.com';
    Constants.setHostname(domain);
    Constants.setBkHostname('qcloud.rtc.qq.com');
    if (env == 'qcloud') {
      Constants.setBkHostname('bk.rtc.qq.com');
    }
  }
  global.jsSdkVersion = config.jsSdkVersion || 1001;
  var version = Util.query('version');
  if (version) {
    global.jsSdkVersion = version;
  }

  Log.printEnvironmentInfo(global);

  //配置debug模式
  if (config.debug) {
    Log.debug(config.debug);
  }

  this.callbacks = {};

  global.rtcReport = new Report(global, emitter);
  global.streamHandler = new StreamHandler(global, emitter);
  global.mediaUtil = new MediaUtil(global, emitter);
  global.rtcUtil = new RTCUtil(global, emitter);

  if (isMobile.any) {
    Constants.ConstraintsMode = 1;
  }

  if (!configValidation(config, emitter)) {
    return;
  }

  this.onPeerConnectionAdd = function (data) {
    var info = {
      userId: data.srcopenid ? data.srcopenid : $self.getUserId(data.srctinyid),
      tinyid: data.srctinyid
    };
    if (config.peerAddNotify) {
      $self.emit('onPeerConnectionAdd', info);
    } else {
      $self.startRTC(data);
    }
  };
  this.onStartRTCResult = function (data) {
    if (data.errorCode === 0) {
      if ($self.callbacks.startRTCSucc) {
        $self.callbacks.startRTCSucc(data);
        $self.callbacks.startRTCSucc = null;
      }
      if (data.srctinyid === 0) {
        global.localStreamStatus = true;
      }
    } else {
      if ($self.callbacks.startRTCError) {
        $self.callbacks.startRTCError(data);
        $self.callbacks.startRTCError = null;
      } else {
        this.onErrorNotify(data);
      }
      Log.RTCLog.error('onStartRTCResult', data);
    }
  };

  this.onCreateRoomResult = function (data) {
    if (data.errorCode === 0) {
      if ($self.callbacks.createRoomSucc) {
        $self.callbacks.createRoomSucc(data);
        $self.callbacks.createRoomSucc = null;
      }
    } else {
      if ($self.callbacks.createRoomError) {
        $self.callbacks.createRoomError(data);
        $self.callbacks.createRoomError = null;
      }
      Log.RTCLog.error('onCreateRoomResult', data);
    }

    $self.emit('onCreateRoomResult', data);
  };

  if (succ) {
    this.connect(succ, fail);
  }

  this.onInitResult = function (data) {
    if (data && data.errorCode === 0) {
      $self.callbacks.initSucc && $self.callbacks.initSucc(data);
    } else {
      if (data.errorCode === -1) {
        data.errorCode = Constants.ERROR_CODE.INIT_SDK_FAILED;
      }
      $self.callbacks.initFail && $self.callbacks.initFail(data);
    }
    if ($self.callbacks.initSucc) {
      $self.callbacks.initSucc = null;
      $self.callbacks.initFail = null;
    }
    $self.emit('onInitResult', data);
  };

  this.onRemoteStreamUpdate = function (data) {
    if (!data.openId) {
      var tinyId = data.videoId.split('_')[0];
      data.openId = $self.getUserId(tinyId);
    }
    data.userId = data.openId;
    $self.emit('onRemoteStreamUpdate', data);
  };

  this.onIceConnectionBuild = function (data) {
    $self.emit('onIceConnectionBuild', data);
  };
  this.onErrorNotify = function (info) {
    $self.emit('onErrorNotify', info);
  };
  this.onStreamNotify = function (info) {
    $self.emit('onStreamNotify', info);
  };
  this.execCallback = function (info) {
    if ($self.callbacks[info.name]) {
      $self.callbacks[info.name](info.data);
    } else {
      this.onErrorNotify(info);
    }
  };
  this.onRemoteStreamRemove = function (videoId) {
    var tinyId = videoId.split('_')[0];
    var info = {
      videoId: videoId,
      openId: $self.getUserId(tinyId),
      userId: $self.getUserId(tinyId)
    };
    $self.emit('onRemoteStreamRemove', info);
  };

  this.onPeerConnectionClose = function (data) {
    Log.RTCLog.info('onPeerConnectionClose : srctinyid = ' + data.srctinyid);
    global.websocket.sessioninfo.peersdp[data.srctinyid + ''] = null;
    for (var i = 0; i < global.websocket.sessioninfo.srcids.length; i++) {
      if (global.websocket.sessioninfo.srcids[i] == data.srctinyid) {
        global.websocket.sessioninfo.srcids.splice(i, 1);
        break;
      }
    }
    var peerConnection = global.peerConnections[data.srctinyid];
    if (peerConnection) {
      for (var videoId in peerConnection.videoStreams) {
        Log.RTCLog.info('onPeerConnectionClose: videoId = ' + videoId);
        // rtclistener.config.onRemoteStreamRemove(videoId);
        emitter.emit('onRemoteStreamRemove', videoId);
      }
      if (peerConnection.signalingState !== 'closed') {
        if (peerConnection.peerStatsResult) {
          //调用一次 nomore
          peerConnection.peerStatsResult.nomore();
        }
        peerConnection.close();
      }
      peerConnection = null;
      delete global.peerConnections[data.srctinyid];
    }

    global.userMuteFiredMap.delete(global.openIdMap[data.srctinyid]);

    if (data.srctinyid == 0) {
      global.streamHandler.releaseLocal();
    }
  };

  this.createPeerConnection = function (srctinyid) {
    Log.RTCLog.debug('createPeerConnection with srctinyid:' + srctinyid);
    var config = Constants.getConfiguration();
    config.sdpSemantics = global.sdpSemantics;
    var optional = Constants.OPTIONAL;

    try {
      var peerConnection = global.tempPeerConnection ? global.tempPeerConnection : new RTCPeerConnection(config, optional);
      global.tempPeerConnection = null, peerConnection.localCandidateList = [];
      peerConnection.hasSetRemoteSdp = false;
      peerConnection.hasSendLocalSdp = false;
      peerConnection.hasSendCandidate = false;
      peerConnection.srctinyid = srctinyid;
      global.peerConnections[srctinyid] = peerConnection;
      peerConnection.onicecandidate = function (e) {
        Log.RTCLog.info('peerConnection.onicecandidate: [' + srctinyid + ']');
        global.rtcUtil.onIceCandidate(e, srctinyid);
      };
      peerConnection.onaddstream = function (e) {
        if (global.sdpSemantics === 'plan-b') {
          Log.RTCLog.info('peerConnection.onaddstream:' + e.stream.id + ',[' + srctinyid + ']');
        }
      };
      peerConnection.oniceconnectionstatechange = function (e) {
        Log.RTCLog.info('peerConnection.oniceconnectionstatechange : ' + JSON.stringify(e) + ',[' + srctinyid + ']');
        global.rtcUtil.onIceConnectionStateChange(e, srctinyid);
      };
      peerConnection.onconnectionstatechange = function (e) {
        if (peerConnection.connectionState === 'connecting') {
          console.log('peerConnection(' + srctinyid + ') is connecting');
          // schedule a timer to check if the connection (typically the DTLS connection)
          // can be completed in 3s, if the timer fired then it must be something wrong
          // in the DTLS connection
          peerConnection.connectTimeoutId = setTimeout(function () {
            console.error('RTCPeerConnection connect timeout');
            $self.emitter.emit('onErrorNotify', {
              errorCode: Constants.ERROR_CODE.DTLS_CONNECTION_TIMEOUT,
              errorMsg: 'DTLS Connection Timeout(3s), please restart RTC'
            });
          }, 3000);
        } else {
          console.log('peerConnection(' + srctinyid + ') state: ' + peerConnection.connectionState);
          if (peerConnection.connectTimeoutId) {
            clearTimeout(peerConnection.connectTimeoutId);
            peerConnection.connectTimeoutId = 0;
          }
        }
      };
      peerConnection.onicegatheringstatechange = function (e) {
        Log.RTCLog.info('peerConnection.onicegatheringstatechange : ' + e.target.iceGatheringState + ',[' + srctinyid + ']');
        global.rtcUtil.onIceGatheringStateChange(e.target.iceGatheringState, srctinyid);
        $self.emitter.emit('onUserDefinedWebRTCEventNotice', {
          event: Constants.USER_DEFINED_EVENT.ON_ICE_GATHERING_STATE_CHANGE,
          info: e
        });
      };
      peerConnection.ontrack = function (e) {
        Log.RTCLog.info('peerConnection.ontrack: streams.length=' + e.streams.length + ',[' + srctinyid + ']');
        if (e.streams.length === 0) return;
        Log.RTCLog.info('peerConnection.ontrack, kind:' + e.track.kind + ' id:' + e.track.id);
        if (srctinyid == '0') {
          return;
        }
        if (global.sdpSemantics === 'plan-b') {
          global.rtcUtil.onAddStream(e.streams[0], e.track.kind, srctinyid);
        } else {
          global.rtcUtil.onAddTrack(e, srctinyid);
        }
      };
      peerConnection.onremovestream = function (e) {
        if (global.sdpSemantics === 'plan-b') {
          Log.RTCLog.info('peerConnection.onremovestream:' + e.stream.id + ',[' + srctinyid + ']');
          global.rtcUtil.onRemoveStream(e.stream, srctinyid);
        }
      };
      peerConnection.onsignalingstatechange = function (e) {
        Log.RTCLog.info('peerConnection.onsignalingstatechange:' + peerConnection.signalingState + ',[' + srctinyid + ']');
      };
      peerConnection.onnegotiationneeded = function (e) {
        Log.RTCLog.info('peerConnection.onnegotiationneeded ' + ',[' + srctinyid + ']');
      };
      $self.emitter.emit('onUserDefinedWebRTCEventNotice', {
        event: Constants.USER_DEFINED_EVENT.CREATE_PC_SUC
      });
    } catch (e) {
      var errorMsg = 'create peer connection failed!!! exception : ' + e;
      $self.emitter.emit('onUserDefinedWebRTCEventNotice', {
        event: Constants.USER_DEFINED_EVENT.CREATE_PC_FAILED,
        info: e
      });
      Log.RTCLog.error(errorMsg);
      if (global.websocket) {
        global.rtcReport.send(Constants.RTC_EVENT.ON_CREATE_PEERCONNECTION_FAILED, errorMsg);
      }
      return false;
    }
    return true;
  };

  this.onWebSocketNotify = function (info) {
    $self.emit('onWebSocketNotify', info);
  };

  this.onWebSocketError = function (e) {
    $self.quit();
    $self.onWebSocketNotify({
      errorCode: Constants.ERROR_CODE.WS_ERROR,
      errorMsg: 'websocket error',
      extInfo: e
    });
  };

  this.onWebSocketClose = function (e) {
    $self.quit();
    $self.onWebSocketNotify({
      errorCode: Constants.ERROR_CODE.WS_CLOSE,
      errorMsg: 'websocket close',
      extInfo: e
    });
  };
  this.onIceConnectionClose = function (info) {
    //为了避免误会以为异常，正常的关闭不在通知
    return;
    $self.onErrorNotify({
      errorCode: Constants.ERROR_CODE.ON_ICE_CLOSE,
      errorMsg: 'ice close',
      extInfo: info
    });
  };
  this.onIceConnectionBroken = function (info) {
    $self.onErrorNotify({
      errorCode: Constants.ERROR_CODE.ON_ICE_BROKEN,
      errorMsg: 'ice broken',
      extInfo: info
    });
  };

  var emitterHandler = {};

  emitterHandler.onPeerConnectionAdd = this.onPeerConnectionAdd;
  emitterHandler.onPeerConnectionClose = this.onPeerConnectionClose;
  emitterHandler.onRemoteStreamRemove = this.onRemoteStreamRemove;
  emitterHandler.onRemoteStreamUpdate = this.onRemoteStreamUpdate;
  emitterHandler.onIceConnectionBuild = this.onIceConnectionBuild;
  emitterHandler.onInitResult = this.onInitResult;
  emitterHandler.onStartRTCResult = this.onStartRTCResult;
  emitterHandler.onCreateRoomResult = this.onCreateRoomResult;
  emitterHandler.onErrorNotify = this.onErrorNotify;
  emitterHandler.onStreamNotify = this.onStreamNotify;
  emitterHandler.execCallback = this.execCallback;
  emitterHandler.onWebSocketClose = this.onWebSocketClose;
  emitterHandler.onWebSocketNotify = this.onWebSocketNotify;
  emitterHandler.onIceConnectionBroken = this.onIceConnectionBroken;
  emitterHandler.onIceConnectionClose = this.onIceConnectionClose;

  emitter.on('*', function (type, e) {
    if (global.off) return;
    if (emitterHandler[type]) {
      emitterHandler[type](e);
    } else {
      $self.emit(type, e);
    }
    Log.uploadWebLog(global, 'emitter:' + type, e, Constants.KEY_TAG.RTC_LOG_TAG);
  });
}

WebRTCAPI.fn = WebRTCAPI.prototype;

WebRTCAPI.fn.connect = function (succ, fail) {
  var global = this.global;
  var emitter = this.emitter;
  var $self = this;
  if (global.inited) {
    console.error('already inited before ');
    return;
  }

  if (succ) {
    this.callbacks.initSucc = succ;
  }
  if (fail) {
    this.callbacks.initFail = fail;
  }
  /* 
    if ( RTCPeerConnection ) {
        global.tempPeerConnection = new RTCPeerConnection(stun, optional);
        global.tempPeerConnection.tempCreateOffer = global.tempPeerConnection.createOffer( global.offerSdpOption );
        global.tempPeerConnection.tempCreateOffer.then( function(offer){
            console.error( 'offer', offer)
            global.tempPeerConnection.setLocalDescription( offer )
        })
    }
     */
  var initWebSocket = function initWebSocket() {
    try {
      //step 1 : init webrtc upload key step
      Log.uploadWebLog(global, 'begin init websocket', null, Constants.KEY_TAG.WEBSOCKET_TAG);

      //set userSig appid identifer in url
      // var identifier = encodeURIComponent(global.config.openid).replace(/'/g, "%27").replace(/"/g, "%22");
      var url = Constants.WS_URL + '?' + jparam({
        sdkAppid: global.config.sdkAppId,
        identifier: global.config.openid,
        userSig: global.config.userSig
      });
      if (global.websocket) {
        var msg = 'create a websocket instance, but the old one does not destroy! close the old one!';
        try {
          Log.uploadWebLog(global, msg, null, Constants.KEY_TAG.WEBSOCKET_TAG);
          global.websocket.close();
        } catch (e) {
          $self.emitter.emit('onErrorNotify', {
            errorCode: Constants.ERROR_CODE.INIT_WS_FAILED,
            errorMsg: msg
          });
        }
        global.websocket = null;
      }

      // emitter.emit("onUserDefinedWebRTCEventNotice",Constants.USER_DEFINED_EVENT.WEBSOCKET_INIT, null)
      emitter.emit('onUserDefinedWebRTCEventNotice', {
        event: Constants.USER_DEFINED_EVENT.WEBSOCKET_INIT
      });

      global.websocket = new WebSocketClient(global);
      global.websocket.onmessage = wsonmessage;
      global.websocket.onopen = wsonopen;
      global.websocket.onclose = wsinitclose;
      global.websocket.onerror = wsiniterror;
      global.websocket.onneedreconnect = wsonneedreconnect;
      global.websocket.open(url);
      //设置定时器，如果1秒之后，主域名还没有连上，则同时使用备域名
      global.websocket.trybktimer = setTimeout(function () {
        if (!global.inited) {
          Log.RTCLog.debug('[BK_Domain]setTimeout, tryBkWS');
          tryBkWS();
        } else {
          Log.RTCLog.debug('[BK_Domain]setTimeout: ws connected!');
        }
      }, 1000);
    } catch (e) {
      var errorStr = 'init web socket failed!!! exception = ' + e.message;
      emitter.emit('onInitResult', {
        errorCode: Constants.ERROR_CODE.INIT_WS_FAILED,
        errorMsg: errorStr
      });
      Log.uploadWebLog(global, errorStr, null, Constants.KEY_TAG.WEBSOCKET_BUILD_FAILED_TAG);
      Log.RTCLog.error(errorStr);
    }
  };

  var tryBkWS = function tryBkWS() {
    if (global.usebkurl) {
      Log.RTCLog.debug('[BK_Domain]tryBkWS:bk url:' + Constants.BK_WS_URL + ' has used');
      return;
    }

    //还未使用备份域名，尝试使用备份域名建立ws连接
    Log.RTCLog.debug('[BK_Domain]tryBkWS:use bk url:' + Constants.BK_WS_URL);

    global.usebkurl = true;
    var bkurl = Constants.BK_WS_URL + '?' + jparam({
      sdkAppid: global.config.sdkAppId,
      identifier: global.config.openid,
      userSig: global.config.userSig
    });

    global.bkwebsocket = new WebSocketClient(global);
    global.bkwebsocket.onopen = wsonopen;
    global.bkwebsocket.onclose = wsinitclose;
    global.bkwebsocket.onerror = wsiniterror;
    global.bkwebsocket.onneedreconnect = wsonneedreconnect;
    global.bkwebsocket.onmessage = wsonmessage;
    global.bkwebsocket.open(bkurl);
  };

  var wsinitclose = function wsinitclose() {
    if (this === global.websocket) {
      Log.RTCLog.debug('[BK_Domain]global.websocket wsinitclose');
    }
    if (this === global.bkwebsocket) {
      Log.RTCLog.debug('[BK_Domain]global.bkwebsocket wsinitclose');
    }
  };
  //建立ws连接过程出错处理，需要区分是主域名、还是备域名连接出错
  var wsiniterror = function wsiniterror() {
    if (global.inited)
      //已经建立ws连接，不再需要处理ws连接错误
      return;
    if (this === global.websocket) {
      Log.RTCLog.error('[BK_Domain]global.websocket wsiniterror, tryBkWS');
      global.websocket.close();
      global.websocket = null;
      tryBkWS(); //主域名连接失败，尝试使用备份域名建立ws连接

      global.rtcReport.reportSSO({
        env: Constants.HOST_NAME,
        reportType: 'WSOpen',
        errorCode: '1',
        errorMsg: 'WS Open Failed!'
      });
    }
    if (this === global.bkwebsocket) {
      Log.RTCLog.error('[BK_Domain]global.bkwebsocket wsiniterror');
      global.bkwebsocket.close();
      global.bkwebsocket = null;

      global.rtcReport.reportSSO({
        env: Constants.BK_HOST_NAME,
        reportType: 'WSOpen',
        errorCode: '1',
        errorMsg: 'WS Open Failed!'
      });
    }
    if (global.websocket == null && global.bkwebsocket == null) {
      //主备域名都连接失败
      Log.RTCLog.error('[BK_Domain]' + Constants.WS_URL + ' connect failed, and bk url ' + Constants.BK_WS_URL + ' connect failed');
      emitter.emit('onInitResult', {
        errorCode: Constants.ERROR_CODE.INIT_WS_FAILED,
        errorMsg: 'Websocket Connect Failed!'
      });
    }
  };

  var wsonopen = function wsonopen() {
    if (global.inited) {
      //这里不会跑进来，不会建立两次ws连接：主备域名其中一个建立ws连接之后，另外一个会关闭。
      if (this === global.websocket) {
        Log.RTCLog.error('[BK_Domain]global.websocket wsinitopen, open more than one!!');
      }
      if (this === global.bkwebsocket) {
        Log.RTCLog.error('[BK_Domain]global.bkwebsocket wsinitopen, open more than one!!');
      }
      return;
    }

    global.inited = true;
    if (this === global.websocket) {
      Log.RTCLog.debug('[BK_Domain]global.websocket wsopen');
      if (global.bkwebsocket != null) {
        //主域名已连接上了，备域名还没连接上，关闭备域名
        global.bkwebsocket.close();
        global.bkwebsocket = null;
      }
    }
    if (this === global.bkwebsocket) {
      Log.RTCLog.debug('[BK_Domain]global.bkwebsocket wsopen');
      if (global.websocket != null) {
        //备域名已连接上了，主域名还没连接上，关闭主域名
        global.websocket.close();
        global.websocket = null;
      }
      global.isbkurl = true;
      global.websocket = global.bkwebsocket;
      global.bkwebsocket = null;
    }
    //ws连接建立成功之后，使用不同的close、error处理接口
    global.websocket.onerror = wsonerror;
    global.websocket.onclose = wsonclose;

    var msg = 'web socket connect success';
    Log.uploadWebLog(global, msg, null, Constants.KEY_TAG.WEBSOCKET_TAG);
    Log.RTCLog.info(msg);
    global.rtcReport.reportSSO({
      reportType: 'WSOpen',
      errorCode: '0',
      errorMsg: 'WS Open Success!'
    });

    emitter.emit('onWebSocketNotify', {
      errorCode: 0,
      errorMsg: msg
    });
  };

  var wsonneedreconnect = function wsonneedreconnect(e) {
    if (global.websocket) {
      global.websocket.reconnect();
    }
  };

  var wsonclose = function wsonclose(e) {
    var str = 'websocket close! , code = ' + e.code;
    Log.uploadWebLog(global, str, null, 'WEBSOCKET');
    Log.RTCLog.warn(str);
    switch (e.code) {
      case 1000:
        break;
      case 1006:
        var msg = 'Websocket close! Network is broken!';
        Log.uploadWebLog(global, msg, null, 'WEBSOCKET');
        emitter.emit('onUserDefinedWebRTCEventNotice', {
          event: Constants.USER_DEFINED_EVENT.ON_WEBSOCKET_CLOSE_BY_NETWORK_BROKEN,
          info: e
        });
        break;
      default:
        break;
    }

    console.error('emit => onWebSocketClose', e);
    emitter.emit('onWebSocketClose', e);

    global.rtcReport.reportSSO({
      reportType: 'WSClose',
      errorCode: '' + e.code,
      errorMsg: e.reason
    });
  };

  var wsonerror = function wsonerror(e) {
    var msg = 'Websocket close with error reason ! Network is broken!';
    Log.uploadWebLog(global, msg, null, 'WEBSOCKET');
    if (global.inited) {
      //ws连接已经建立之后出错
      global.inited = false;
      global.enteredRoom = false;
      emitter.emit('onWebSocketError', e);
    }
  };

  var wsonmessage = function wsonmessage(message) {
    if (global.destroy) {
      return;
    }
    var msg = message.data;
    var resJson = JSON.parse(msg);
    var cmd = resJson.cmd;
    Log.RTCLog.info('[websocket][recv]' + msg);
    var LOGTAG = 'RECV_CMD_FROM_SIGNAL';
    Log.uploadWebLog(global, 'WebRTCJSAPI receive cmd from signal server : cmd = ' + cmd, null, LOGTAG);

    if (cmd === Constants.WS_CMD.CANDIDATE) {
      Log.uploadWebLog(global, 'WebRTCJSAPI receive remote candidate from siganl server, srctinyid = ' + resJson.srctinyid, null, LOGTAG);
      global.rtcUtil.onRemoteCandidate(resJson.content, resJson.srctinyid);
    } else if (cmd === Constants.WS_CMD.SDP) {
      Log.uploadWebLog(global, 'WebRTCJSAPI receive remote sdp from siganl server, srctinyid = ' + resJson.srctinyid, null, LOGTAG);
      if (global.jsSdkVersion < 1001 || parseInt(resJson.srctinyid || 0) === 0) {
        global.rtcUtil.onRemoteSdp(resJson.content, resJson.srctinyid);
      }
    } else if (cmd === Constants.WS_CMD.MEDIA_CHANGE) {
      Log.uploadWebLog(global, 'WebRTCJSAPI receive media change from siganl server', null, LOGTAG);
      onMediaChange(resJson.content);
    } else if (cmd === Constants.WS_CMD.QUIT_CHAT) {
      Log.uploadWebLog(global, 'WebRTCJSAPI receive quit chat from siganl server, info = ' + JSON.stringify(resJson), null, LOGTAG);
      $self.onQuitChat(resJson.content);
    } else if (cmd === Constants.WS_CMD.WS_INIT_OK) {
      if (!global.config.preconn) {
        global.relayip = resJson.content.relayip;
        global.localip = resJson.content.localip;
        global.dataport = resJson.content.dataport;
        global.stunport = resJson.content.stunport;
        global.checkSigSeq = resJson.content.checkSigSeq;
        global.stunportList = resJson.content.stunportList;
        if (!global.stunportList || global.stunportList.length <= 0) {
          Constants.WEBRTC_STUN_SERVER = 'stun:' + global.relayip + ':' + global.stunport;
        } else {
          var webrtcStunList = [];
          for (var i = 0; i < global.stunportList.length; i++) {
            var port = global.stunportList[i];
            var stunserver = 'stun:' + global.relayip + ':' + port;
            webrtcStunList.push(stunserver);
          }
          Constants.WEBRTC_STUN_SERVER = webrtcStunList;
        }

        if (resJson.content.cgiurl) {
          Constants.WEBRTC_CGI_URL = resJson.content.cgiurl;
        }

        global.websocket.relayInfo.stunport = global.stunport;
        global.websocket.relayInfo.outterip = global.relayip;
        global.websocket.relayInfo.dataport = global.dataport;
        global.websocket.relayInfo.innerip = resJson.content.innerip;
        global.websocket.sessioninfo.openid = resJson.content.openid;
        global.websocket.sessioninfo.tinyid = resJson.content.tinyid;
      }
      global.config.tinyid = resJson.content.tinyid;
      global.config.openid = resJson.content.openid;
      global.websocket.socketid = resJson.content.socketid;
      global.signalip = resJson.content.signalip;
      if (resJson.content.cgiurl) {
        Constants.WEBRTC_CGI_URL = resJson.content.cgiurl;
      }
      Log.printRelayInfo();
      var msg = 'WS_INIT_OK : data = ' + JSON.stringify(resJson.content) + ' , stun server = ' + Constants.WEBRTC_STUN_SERVER;
      Log.RTCLog.info(msg);

      var rc = resJson.content.rc;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive websocket init from siganl server, info = ' + JSON.stringify(resJson.content), null, LOGTAG);
      var reconn = rc || 0;
      global.rtcReport.reportSSO({
        reportType: 'WSInit',
        reconn: '' + reconn,
        errorCode: '0',
        errorMsg: 'WS WSInit Succ!'
      });
      if (rc === 1) {
        console.info('reconnect ok, now rebuild session!');
        var errorCode = global.rtcUtil.rebuildSession();
        if (!errorCode) {
          try {
            global.websocket.close();
            global.websocket = null;
          } catch (e) {
            console.error(e);
          }
          emitter.emit('onInitResult', {
            errorCode: Number(resJson.content.errorCode),
            errorMsg: resJson.content.errorMsg
          });
        }
        return;
      }

      if (rc !== 1) {
        emitter.emit('onUserDefinedWebRTCEventNotice', {
          event: Constants.USER_DEFINED_EVENT.WEBSOCKET_INIT_OK
        });
        emitter.emit('onInitResult', {
          errorCode: 0,
          openid: resJson.content.openid,
          tinyid: resJson.content.tinyid,
          relayip: global.relayip,
          innerip: resJson.content.innerip
        });
      }
    } else if (cmd === Constants.WS_CMD.NOTIFY_RECONNECT_WS_RES) {
      if (resJson.content.result == -1) {
        $self.emitter.emit('onErrorNotify', {
          errorCode: Constants.ERROR_CODE.WS_RECONNECT_FAILED,
          errorMsg: 'websocket reconnect failed - ' + resJson.content.error
        });
      }
    } else if (cmd === Constants.WS_CMD.WS_INIT_FAILED) {
      Log.RTCLog.error('ws init failed !!!  ');
      Log.uploadWebLog(global, 'WebRTCJSAPI receive websocket init failed from siganl server', null, LOGTAG);
      var reconn = resJson.content.rc || 0;
      global.rtcReport.reportSSO({
        reportType: 'WSInit',
        reconn: '' + reconn,
        errorCode: '' + Constants.ERROR_CODE.INIT_WS_FAILED,
        errorMsg: 'WS Init Failed! ' + resJson.content.errorMsg
      });
      try {
        global.websocket.close();
        global.websocket = null;
      } catch (e) {
        console.error(e);
      }
      emitter.emit('onInitResult', {
        errorCode: Constants.ERROR_CODE.INIT_WS_FAILED,
        errorMsg: resJson.content.errorMsg,
        extInfo: resJson.content
      });
    } else if (cmd === Constants.WS_CMD.CREATE_ROOM_RESULT) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive create room errorCode from siganl server, info = ' + JSON.stringify(data), null, LOGTAG);
      global.rtcReport.reportSSO({
        reportType: 'CreateRoom',
        errorCode: '' + data.ret,
        errorMsg: data.error || ''
      });

      if (data.ret !== 0) {
        var errorMsg = 'create room error!!! e = ' + data.error;
        Log.RTCLog.error(errorMsg);
        try {
          global.websocket.close();
          global.websocket = null;
        } catch (e) {
          console.error(e);
        }
        $self.emitter.emit('onCreateRoomResult', {
          errorCode: Constants.ERROR_CODE.ENTER_ROOM_ERROR,
          errorMsg: errorMsg,
          extInfo: data
        });
        return;
      }
      if (global.config.preconn) {
        /*加入下发的relay相关信息处理*/
        global.websocket.socketid = data.data.relayInfo.socketid;
        global.relayip = data.data.relayInfo.relayip;
        global.localip = data.data.relayInfo.localip;
        global.signalip = data.data.relayInfo.signalip;
        global.dataport = data.data.relayInfo.dataport;
        global.stunport = data.data.relayInfo.stunport;
        global.checkSigSeq = data.data.relayInfo.checkSigSeq;
        global.stunportList = data.data.relayInfo.stunportList;
        if (!global.stunportList || global.stunportList.length <= 0) {
          Constants.WEBRTC_STUN_SERVER = 'stun:' + global.relayip + ':' + global.stunport;
        } else {
          var webrtcStunList = [];
          for (var i = 0; i < global.stunportList.length; i++) {
            var port = global.stunportList[i];
            var stunserver = 'stun:' + global.relayip + ':' + port;
            webrtcStunList.push(stunserver);
          }
          Constants.WEBRTC_STUN_SERVER = webrtcStunList;
        }
        global.websocket.relayInfo.stunport = global.stunport;
        global.websocket.relayInfo.outterip = global.relayip;
        global.websocket.relayInfo.dataport = global.dataport;
        global.websocket.relayInfo.innerip = data.data.relayInfo.innerip;
        global.websocket.sessioninfo.openid = data.data.relayInfo.openid;
        global.websocket.sessioninfo.tinyid = data.data.relayInfo.tinyid;
        global.config.openid = data.data.openid;
        /*下发的相关信息处理结束*/
      }

      global.roomid = data.data.roomid;
      global.config.tinyid = data.data.tinyid;
      global.config.srctinyid = data.data.srctinyid;
      global.openIdMap[data.data.tinyid] = data.data.openid;
      global.tinyIdMap[data.data.openid] = data.data.tinyid;

      global.websocket.sessioninfo.sessionid = global.roomid;
      global.websocket.hasConnect = true;
      //init end report
      global.rtcReport.initEndReport();

      if (data.data.videoability && global.specifyConstraints) {
        $self.updateConstraints(data.data.videoability, global.specifyConstraints);
      } else {
        $self.updateConstraints(data.data.videoability);
      }

      Log.RTCLog.info('create room ok!!! data = ' + JSON.stringify(data.data));
      if (global.config.preconn) {
        emitter.emit('onCreateRoomResult', {
          errorCode: 0,
          relayip: global.relayip,
          innerip: data.data.relayInfo.innerip,
          tinyid: global.config.tinyid,
          openid: global.config.openid
        });
      } else {
        emitter.emit('onCreateRoomResult', {
          errorCode: 0
        });
      }

      global.reportTime = new Date().valueOf();
      Log.RTCLog.info('start quality report : time = ' + global.reportTime);
      startQualityReport();
      if (global.config.closeLocalMedia) {
        return;
      }
      $self.startPush();
    } else if (cmd === Constants.WS_CMD.NOTIFY_CREATE_PEER_CONNECTION) {
      emitter.emit('onUserDefinedWebRTCEventNotice', {
        event: Constants.USER_DEFINED_EVENT.RECEIVE_CREATE_PEER
      });
      var data = resJson.content;
      global.remoteSdps[data.srctinyid] = data.remoteoffer;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive create peerconnection from siganl server, info = ' + JSON.stringify(data), null, LOGTAG);
      // if( true ){
      //     global.rtcUtil.addPeer(data.openid, data.tinyid, global.roomid, data.srctinyid, data.userSig, data.peerconnectionport);
      // }else{
      if (data.videoability) {
        $self.updateConstraints(data.videoability);
      }
      Log.RTCLog.debug('add peer ok!!! data = ' + JSON.stringify(data));
      if (data.srcopenid) {
        global.openIdMap[data.srctinyid] = data.srcopenid;
        global.tinyIdMap[data.srcopenid] = data.srctinyid;
      }

      global.userMuteFiredMap.set(data.srcopenid, false);
      // data.remoteSdp = global.remoteSdps[data.srctinyid]
      emitter.emit('onPeerConnectionAdd', data);
      // }
    } else if (cmd === Constants.WS_CMD.NOTIFY_CREATE_PEER_CONNECTION_RES) {
      emitter.emit('onUserDefinedWebRTCEventNotice', {
        event: Constants.USER_DEFINED_EVENT.BEGIN_CREATE_PEER
      });
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive create peerconnection res from siganl server, info = ' + JSON.stringify(data), null, LOGTAG);
      //video control
      if (data.data.videoability) {
        $self.updateConstraints(data.data.videoability);
      }
      Log.RTCLog.debug('add peer ok!!! data = ' + JSON.stringify(data.data));

      if (data.data.srcopenid) {
        global.openIdMap[data.data.srctinyid] = data.data.srcopenid;
        global.tinyIdMap[data.data.srcopenid] = data.data.srctinyid;
      }
      data.data.remoteSdp = global.remoteSdps[data.data.srctinyid];

      $self.startRTC(data.data);
    } else if (cmd === Constants.WS_CMD.NOTIFY_CLOSE_PEER_CONNECTION) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive close peerconnection from siganl server, info = ' + JSON.stringify(data), null, LOGTAG);
      emitter.emit('onPeerConnectionClose', data);
    } else if (cmd === Constants.WS_CMD.NOTIFY_CHANGE_CONSTRAINTS) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive change constraints from siganl server', null, LOGTAG);
      /* 
                var newConstraints = {
                "audio": global.constraints.audio,
                "video": {
                    width: { exact: parseInt(data.width) },
                    height: { exact: parseInt(data.height) },
                    frameRate: { exact: parseInt(data.frameRate) },
                }
                };
                if(global.constraints.video.deviceId) {
                newConstraints.video.deviceId = global.constraints.video.deviceId;
                }
            */
      var newConstraints = $self.updateConstraints([{
        VidWidth: parseInt(data.width),
        VidHeight: parseInt(data.height),
        frameRate: parseInt(data.frameRate)
      }], null);
      //主动更新的情况，不需要再处理constraints了
      if (global.manualUpdateRole) {
        global.manualUpdateRole = false;
        return;
      }
      $self.onChangeConstraints(newConstraints, false, true);
    } else if (cmd === Constants.WS_CMD.NOTIFY_SUB_VIDEO_STATE) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive notify sub video state from siganl server', null, LOGTAG);
      global.rtcUtil.onSubVideoState(data);
    } else if (cmd === Constants.WS_CMD.NOTIFY_UPDATE_AUDIO_SSRC) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive update audio ssrc from siganl server', null, LOGTAG);

      if (DetectRTC.isSafari()) {
        $self.restartRtcForSafari('audio', data);
      } else {
        global.rtcUtil.onUpdateAudSsrc(data);
      }
    } else if (cmd === Constants.WS_CMD.NOTIFY_UPDATE_VIDEO_SSRC) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive update video ssrc from siganl server', null, LOGTAG);
      if (DetectRTC.isSafari()) {
        $self.restartRtcForSafari('video', data);
      } else {
        global.rtcUtil.onUpdateVideoSsrc(data);
      }
    } else if (cmd === Constants.WS_CMD.NOTIFY_MAX_TIMEMS) {
      var data = resJson.content;
      if (onGetMaxTimeMs) {
        onGetMaxTimeMs({
          maxAudTimeMs: data.maxAudTimeMs,
          maxVidTimeMs: data.maxVidTimeMs
        });
      }
    } else if (cmd === Constants.WS_CMD.NOTIFY_RECONNECT_DC) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive NOTIFY_RECONNECT_DC from siganl server', null, LOGTAG);
      this.recreateDataChannel();
    } else if (cmd === Constants.WS_CMD.ACTIVE_USER_STAT_UPDATED) {
      var _data = resJson.content;
      // the active user stats is updated periodically. Active user means that
      // who is actively publishing audio/video
      // data = {
      //     userlist:[
      //         {
      //             srctinyid,
      //             userid,
      //             // bit0: 大视频
      //             // bit1: 小视频 unused
      //             // bit2: 辅路，屏幕分享
      //             // bit3: 音频
      //             // bit4: 大视频mute状态
      //             // bit5: 辅路mute状态
      //             // bit6: 音频mute状态
      //             flag,
      //         },
      //         {},
      //     ]
      // }

      var VIDEO_STAT_BIT = 0x01;
      var AUDIO_STAT_BIT = 0x08;
      var AUDIO_MUTE_BIT = 0x40;
      var VIDEO_MUTE_BIT = 0x10;

      var currentList = global.activeUserStats;
      _data.userlist.forEach(function (item) {
        if (item.userid === global.config.openid) {
          return;
        }
        var hasVideo = !!(item.flag & VIDEO_STAT_BIT);
        var hasAudio = !!(item.flag & AUDIO_STAT_BIT);
        var audioMuted = !!(item.flag & AUDIO_MUTE_BIT);
        var videoMuted = !!(item.flag & VIDEO_MUTE_BIT);

        var isMuteFired = global.userMuteFiredMap.get(item.userid);
        if (isMuteFired == undefined) {
          return; // the user's RTCPeerConnection is not setup yet
        }

        if (!isMuteFired) {
          if (hasVideo) {
            var peer = global.peerConnections[global.tinyIdMap[item.userid]];
            if (!videoMuted && !isVideoTrackReady(peer)) {
              // only report the unmute event if videoTrack is ready
              return;
            }
            var eventName = videoMuted ? 'onMuteVideo' : 'onUnmuteVideo';
            $self.emit(eventName, { userId: item.userid });
          }

          if (hasAudio) {
            var _eventName = audioMuted ? 'onMuteAudio' : 'onUnmuteAudio';
            $self.emit(_eventName, { userId: item.userid });
          }
          global.userMuteFiredMap.set(item.userid, true);
          return;
        }

        var old = currentList.find(function (elem) {
          return item.userid === elem.userid;
        });
        if (old === undefined) {
          return;
        }
        if (item.flag != old.flag) {
          var oldHasVideo = !!(old.flag & VIDEO_STAT_BIT);
          var oldAudioMuted = !!(old.flag & AUDIO_MUTE_BIT);
          var oldVideoMuted = !!(old.flag & VIDEO_MUTE_BIT);
          if (hasAudio && oldAudioMuted != audioMuted) {
            var _eventName2 = audioMuted ? 'onMuteAudio' : 'onUnmuteAudio';
            $self.emit(_eventName2, { userId: item.userid });
          }

          var isVideoAvailable = !videoMuted && hasVideo;
          var isOldVideoAvailable = !oldVideoMuted && oldHasVideo;
          if (isVideoAvailable != isOldVideoAvailable) {
            var _peer = global.peerConnections[global.tinyIdMap[item.userid]];
            // fire unmute only when the video track is ready
            if (isVideoAvailable && !isVideoTrackReady(_peer)) {
              if ($self.checkVideoUnmuteInterval == undefined || $self.checkVideoUnmuteInterval == -1) {
                $self.checkVideoUnmuteInterval = setInterval(checkVideoUnmute, 200, $self, item.userid);
              }
              return;
            }
            var _eventName3 = isVideoAvailable ? 'onUnmuteVideo' : 'onMuteVideo';
            $self.emit(_eventName3, { userId: item.userid });
          }
        }
      });
      global.activeUserStats = _data.userlist.slice();
    } else if (cmd === Constants.WS_CMD.CLOSE_PEER_RES) {
      var data = resJson.content;
      Log.uploadWebLog(global, 'WebRTCJSAPI receive CLOSE_PEER_RES from siganl server', null, LOGTAG);
      if (data.ret) {
        $self.emitter.emit('onPeerConnectionClose', {
          srctinyid: 0
        });
        global.localStreamStatus = false;
        $self.emitter.emit('execCallback', {
          name: 'stopRTCSucc',
          data: {
            errorCode: Constants.ERROR_CODE.SUCC,
            errorMsg: 'ok'
          }
        });
      } else {
        $self.emitter.emit('execCallback', {
          name: 'stopRTCError',
          data: {
            errorCode: Constants.ERROR_CODE.STOP_RTC_FAILED,
            errorMsg: 'STOP_RTC_FAILED : ' + JSON.stringify(resJson)
          }
        });
      }
    }
  };

  function startQualityReport() {
    global.reportSto = setInterval(function () {
      global.rtcReport.quality();
    }, 2000);
  }

  var onMediaChange = function onMediaChange(info) {};
  this.onQuitChat = function (info) {
    Log.RTCLog.debug('onQuitChat , call onRelayTimeout');
    $self.quit(function () {
      if (info.type === 'kick') {
        $self.emitter.emit('onKickout', info);
      } else {
        $self.emitter.emit('onRelayTimeout', info);
      }
    });
  };

  DetectRTC.detectMediaDevice(function (data) {
    global.deviceInfo = data;
    initWebSocket();
  });
};

var checkVideoUnmute = function checkVideoUnmute(self, userId) {
  var global = self.global;
  var peer = global.peerConnections[global.tinyIdMap[userId]];
  if (peer) {
    var stat = global.activeUserStats.find(function (item) {
      return item.userid == userId;
    });
    if (stat == undefined || stat.flag & 0x10) {
      // user left the room or become muted before track is ready
      console.warn('clearInterval because user left room or muted');
      clearInterval(self.checkVideoUnmuteInterval);
      self.checkVideoUnmuteInterval = -1;
      return;
    }
    if (isVideoTrackReady(peer)) {
      console.warn('video track is ready now');
      self.emit('onUnmuteVideo', { userId: userId });
      clearInterval(self.checkVideoUnmuteInterval);
      self.checkVideoUnmuteInterval = -1;
    }
  }
};

WebRTCAPI.fn.getUserMedia = function (constraints, succ, fail) {
  var global = this.global;
  global.mediaUtil.gum({ constraints: objectAssign({ audio: true, video: true }, constraints) }, function (data) {
    succ(data.stream);
  }, function (error) {
    fail(error);
  });
};

WebRTCAPI.fn.releaseStream = function (media) {
  media.getTracks().forEach(function (track) {
    track.stop();
  });
  media = null;
};

WebRTCAPI.fn.checkDevice = function () {
  return this.global.deviceInfo;
};

WebRTCAPI.fn.checkInit = function (notify) {
  var global = this.global;
  if (!global.inited && (typeof notify === 'undefined' || notify)) {
    var msg = 'uninited , please make sure you have already init';
    Log.RTCLog.error(msg);
    this.emitter.emit('onErrorNotify', {
      errorCode: Constants.ERROR_CODE.NOT_INITED,
      errorMsg: msg
    });
  }
  return global.inited;
};

WebRTCAPI.fn.getLocalStream = function (opts, succ, fail) {
  var global = this.global;
  if (opts && typeof opts.video != 'undefined') {
    global.config.videoActive = !!opts.video;
  }
  if (opts && typeof opts.audio != 'undefined') {
    global.config.audioActive = !!opts.audio;
  }
  if (typeof opts === 'function') {
    succ = opts;
  }
  if (opts && opts.screen) {
    if (opts.screenSources) {
      opts.type = 'custom';
      opts.source = opts.screenSources;
    }
    this.getMediaByScreenShare(opts, succ, fail);
  } else {
    this.getMediaByCamera(opts, succ, fail);
  }
};

WebRTCAPI.fn.getMediaByCamera = function (opts, succ, fail) {
  var global = this.global;

  global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA);

  if (!global.deviceInfo.hasAudio || !global.config.audioActive) {
    global.constraints.audio = false;
  }
  if (!global.config.videoActive) {
    global.constraints.video = false;
  }
  var new_constraints = global.mediaUtil.packConstraints(global.constraints, opts, { frameRate: 20 });

  if (!new_constraints.video && !new_constraints.audio) {
    return;
  }

  global.mediaUtil.gumByMediaDevice({ constraints: new_constraints }, succ, fail);
};

WebRTCAPI.fn.getMediaByScreenShare = function (opts, succ, fail) {
  var global = this.global;
  global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA);
  if (!opts.screenApi) {
    opts.screenApi = 'native';
  }
  if (!navigator.mediaDevices) {
    console.error(Constants.ERROR_MSG.SECURITY_ERROR);
    return;
  }
  // chrome 72 版本以后无需安装插件
  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia
  if (!Browser.client.isElectron && opts.screenApi && opts.screenApi !== 'extension' && parseFloat(Browser.client.version) >= 72 && navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && Browser.client.type === 'chrome') {
    var final_constraints = {
      audio: opts.audioDevice || opts.audio,
      video: true
    };
    final_constraints = global.mediaUtil.packConstraints(final_constraints, { frameRate: 10 }, opts);
    opts.screenSources = opts.screenSources || ['screen', 'window', 'tab', 'audio'];
    //如果没有让用户选择音频选项，默认音频开启
    if (!final_constraints.audio && opts.screenSources.indexOf('audio') === -1) {
      final_constraints.audio = true;
    }
    if (typeof global.config.audioActive !== 'undefined' && !global.config.audioActive) {
      final_constraints.audio = false;
    }
    global.mediaUtil.gumFromScreenByNativeApi({ constraints: final_constraints }, succ, fail);
  } else {
    ScreenChromeExtensionUtil.resetGlobalData();
    ScreenChromeExtensionUtil.getScreenConstraints(opts, function (error, screen_constraints) {
      if (error) {
        fail && fail({
          errorCode: Constants.ERROR_CODE.GET_USERMEDIA_FAILED,
          errorMsg: error,
          extInfo: { name: error }
        });
        ScreenChromeExtensionUtil.resetGlobalData();
        return;
      }
      //目前后台最大支持的分辨率是 1080P
      if (screen_constraints.mandatory.maxWidth >= 1920) {
        screen_constraints.mandatory.maxWidth = 1920;
      }
      if (screen_constraints.mandatory.maxHeight >= 1080) {
        screen_constraints.mandatory.maxHeight = 1080;
      }

      var final_constraints = {
        audio: opts.audioDevice || opts.audio || screen_constraints.canRequestAudioTrack,
        video: screen_constraints
      };
      final_constraints = global.mediaUtil.packConstraints(final_constraints, { frameRate: 10 }, opts);
      opts.screenSources = opts.screenSources || ['screen', 'window', 'tab', 'audio'];
      //如果没有让用户选择音频选项，默认音频开启
      if (!final_constraints.audio && opts.screenSources.indexOf('audio') === -1) {
        final_constraints.audio = true;
      }
      if (typeof global.config.audioActive !== 'undefined' && !global.config.audioActive) {
        final_constraints.audio = false;
      }
      global.mediaUtil.gumFromScreenByExtension({ constraints: final_constraints }, succ, fail);
    }, true);
  }
};

WebRTCAPI.fn.changeLocalMedia = function (device, isOpen) {
  var isVideo = device === 'video' ? true : false;
  var global = this.global;
  Log.RTCLog.debug('change local media : is video : ' + isVideo + ' , is open = ' + isOpen);
  if (!global.localStream) {
    Log.RTCLog.error('change local media failed! local media is null');
    return false;
  }
  if (isVideo) {
    global.localMediaStatus.video = isOpen;
  } else {
    global.localMediaStatus.audio = isOpen;
  }
  var tracks = null;
  var mediaType = 0;
  if (isVideo) {
    tracks = global.localStream.getVideoTracks();
    if (isOpen) {
      mediaType = Constants.MEDIA_CHANGE.OPEN_VIDEO;
    } else {
      mediaType = Constants.MEDIA_CHANGE.CLOSE_VIDEO;
    }
  } else {
    tracks = global.localStream.getAudioTracks();
    if (isOpen) {
      mediaType = Constants.MEDIA_CHANGE.OPEN_AUDIO;
    } else {
      mediaType = Constants.MEDIA_CHANGE.CLOSE_AUDIO;
    }
  }
  for (var i = 0; i < tracks.length; i++) {
    tracks[i].enabled = isOpen;
  }
  global.rtcReport.send(Constants.RTC_EVENT.ON_MEDIA_CHANGE, {
    mediatype: mediaType,
    device: device,
    switch: isOpen
  });

  if (isVideo) {
    if (isOpen) {
      global.mutedFlag &= 0x6; // unmute video
    } else {
      global.mutedFlag |= 0x1; // mute video
    }
  } else {
    if (isOpen) {
      global.mutedFlag &= 0x11; // unmute audio
    } else {
      global.mutedFlag |= 0x04; // mute audio
    }
  }
  this.sendMutedStat(global.mutedFlag);
  return true;
};

WebRTCAPI.fn.sendMutedStat = function (flag) {
  var global = this.global;
  var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.UPDATE_MUTE_STAT);
  console.warn('sendMuteStat: ' + flag.toString(2));
  sendData.data = {
    srctinyid: 0,
    userid: global.config.openid,
    flag: flag
  };
  global.websocket.send(JSON.stringify(sendData));
};

WebRTCAPI.fn.enterRoom = WebRTCAPI.fn.createRoom = function (opts, succ, error) {
  var global = this.global,
      $self = this;
  global.enteredRoom = true;
  if (!this.checkInit(false)) {
    this.connect(function () {
      $self.createRoom(opts, succ, error);
    }, error);
    return;
  }
  if (succ) {
    $self.callbacks.createRoomSucc = succ;
  }
  if (error) {
    $self.callbacks.createRoomError = error;
  }

  if (opts.constraints) {
    this.setConstraints(opts.constraints);
  }

  if (typeof opts.screen !== 'undefined') {
    global.config.screen = opts.screen;
    if (opts.screenRole) {
      global.config.screenRole = opts.screenRole;
    }
  }

  if (global.config.preconn) {
    opts.openid = opts.userId || opts.openid;
    //在创建房间时加入sig进行校验
    if (!opts.openid || !opts.userSig || !opts.accountType) {
      var errorMsg = 'Create room failed! opts is incorrect! ';
      Log.uploadWebLog(global, errorMsg, null, 'websocket_tag');
      $self.emitter.emit('onCreateRoomResult', {
        errorCode: Constants.ERROR_CODE.PARAM_MISSING,
        errorMsg: errorMsg
      });
      return;
    }
    global.config.userSig = opts.userSig || global.config.userSig;
    global.config.privMapEncrypt = opts.privateMapKey || opts.privMapEncrypt || global.config.privMapEncrypt;
    global.config.privMap = opts.privateMap || opts.privMap || global.config.privMap;
    global.config.openid = opts.openid || global.config.openid;
    global.config.accountType = opts.accountType || global.config.accountType;
    global.config.srctinyid = 0;
  }

  if (!global.inited) {
    var errorMsg = 'Create room failed! did not inited yet ! ';
    Log.uploadWebLog(global, errorMsg, null, 'websocket_tag');
    $self.emitter.emit('onCreateRoomResult', {
      errorCode: Constants.ERROR_CODE.NOT_INITED,
      errorMsg: errorMsg
    });
    return;
  }
  var roomid,
      role = '';
  if ((typeof opts === 'undefined' ? 'undefined' : _typeof(opts)) === 'object') {
    roomid = opts.roomID || opts.roomid || opts.roomId;
    role = opts.role;
  } else {
    roomid = opts;
  }
  if (!roomid) {
    var errorMsg = 'Create room failed! opts incorrect! ';
    Log.uploadWebLog(global, errorMsg, null, 'websocket_tag');
    $self.emitter.emit('onCreateRoomResult', {
      errorCode: Constants.ERROR_CODE.PARAM_MISSING,
      errorMsg: errorMsg
    });
    return;
  }
  if (!opts.useStrRoomid && !Number.isInteger(Number(roomid))) {
    var errorMsg = '[房间号](roomid) ' + roomid + ' 输入有误，请使用32位整数';
    $self.emitter.emit('onCreateRoomResult', {
      errorCode: Constants.ERROR_CODE.PARAM_INVALID,
      errorMsg: errorMsg
    });
    return;
  }

  global.useStrRoomid = opts.useStrRoomid || 0;
  global.roomid = roomid;

  var openid = global.config.openid,
      tinyid = opts.tinyid || global.config.tinyid,
      roomid = roomid || global.config.roomid,
      role = opts.role || global.config.role,
      userSig = global.config.userSig,
      privMapEncrypt = opts.privateMapKey || opts.privMapEncrypt || global.config.privMapEncrypt,
      privMap = opts.privateMap || opts.privMap || global.config.privMap,
      peerconnectionport = global.config.peerconnectionport,
      pstnBizType = parseInt(opts.pstnBizType || 0),
      pstnPhoneNumber = opts.pstnPhoneNumber || null,
      recordId = opts.recordId || null,
      pureAudioPushMod = opts.pureAudioPushMod || null;
  if (recordId && !Number.isInteger(Number(recordId))) {
    var errorMsg = '[录制ID](recordId) ' + recordId + ' 输入有误，请使用32位整数';
    $self.emitter.emit('onCreateRoomResult', {
      errorCode: Constants.ERROR_CODE.PARAM_INVALID,
      errorMsg: errorMsg
    });
    return;
  }
  if (pureAudioPushMod && !Number.isInteger(Number(pureAudioPushMod))) {
    pureAudioPushMod = Number(pureAudioPushMod);
    var errorMsg = '[纯音频推流类型](pureAudioPushMod) ' + pureAudioPushMod + ' 输入有误，请使用整数';
    $self.emitter.emit('onCreateRoomResult', {
      errorCode: Constants.ERROR_CODE.PARAM_INVALID,
      errorMsg: errorMsg
    });
    return;
  }

  Log.RTCLog.debug('open room : openid = ' + openid + ' , tinyid = ' + tinyid + ' ,  roomid = ' + roomid);
  var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_CREATE_ROOM);

  // jsSdkVersion 是用以区分是使用plan-B 还是 Unified-Plan 的标识。
  //  > 1000 表示使用的是 unified-plan
  //  <= 1000 表示使用的是 plan-B

  // Use sdpSemantics 'plan-b' or 'unified-plan' based on browser's default setting
  global.sdpSemantics = 'plan-b';
  // use the default sdpSemantics on Safari, revisit it later on Chrome
  if (DetectRTC.isUnifiedPlanDefault()) {
    global.jsSdkVersion = '1001';
    global.sdpSemantics = 'unified-plan';
  }
  console.info('Using sdpSemantics: ' + global.sdpSemantics);

  var SCENE_MODE_RTC = 1; // 实时通话
  var SCENE_MODE_LIVE = 2; // 互动直播
  var ROLE_HOST = 20; // 主播
  var ROLE_AUDIENCE = 21; // 观众
  var trtcscene = SCENE_MODE_RTC;
  var trtcrole = ROLE_HOST;

  // legacy api, need refine to a developer friendly name
  if (typeof opts.appScene !== 'undefined') {
    trtcscene = opts.appScene === 'VideoCall' ? SCENE_MODE_RTC : SCENE_MODE_LIVE;
    // opts.role is valid only when appScene is equal to 'Live'
    if (opts.appScene === 'Live' && typeof opts.role !== 'undefined') {
      trtcrole = opts.role === 'audience' ? ROLE_AUDIENCE : ROLE_HOST;
    }
  }
  if (trtcscene == SCENE_MODE_LIVE && trtcrole == ROLE_AUDIENCE) {
    global.allowPush = false; // 互动直播观众模式不允许推流
  }

  console.log('enterRoom with scene:' + trtcscene + ' and role: ' + trtcrole);

  sendData.data = {
    openid: openid,
    tinyid: tinyid,
    peerconnectionport: peerconnectionport,
    useStrRoomid: global.useStrRoomid,
    roomid: String(roomid),
    sdkAppID: String(global.config.sdkAppId),
    socketid: global.websocket.socketid,
    userSig: userSig || global.config.userSig,
    privMapEncrypt: privMapEncrypt,
    privMap: privMap,
    relayip: global.websocket.relayInfo.innerip,
    dataport: global.dataport,
    stunport: global.stunport,
    checkSigSeq: global.checkSigSeq,
    pstnBizType: pstnBizType,
    pstnPhoneNumber: pstnPhoneNumber,
    recordId: recordId,
    pureAudioPushMod: pureAudioPushMod,
    role: role,
    jsSdkVersion: String(global.jsSdkVersion),
    sdpSemantics: global.sdpSemantics,
    browserVersion: Browser.client.name + '/' + Browser.client.version,
    closeLocalMedia: global.config.closeLocalMedia,
    trtcscene: trtcscene,
    trtcrole: trtcrole
  };
  //能力上报
  var reportData = WebRTCStat.ability(global.constraints);
  this.global.ostype = reportData.AbilityOption.GeneralLimit.str_os_verion;
  this.global.cpunum = parseInt(reportData.AbilityOption.GeneralLimit.CPULimit.uint32_CPU_num);
  this.global.cpuname = reportData.AbilityOption.GeneralLimit.CPULimit.str_CPU_name;
  sendData.report = reportData || null;
  if (this.global.websocket) {
    this.global.websocket.send(JSON.stringify(sendData));
  } else {
    $self.emitter.emit('onCreateRoomResult', {
      errorCode: Constants.ERROR_CODE.NOT_INITED,
      errorMsg: 'websocket 尚未建立连接，请确认已经完成了初始化'
    });
  }
};

WebRTCAPI.fn.pushStream = function (stream) {
  var global = this.global;
  var $self = this;
  var peerConnection = global.peerConnections[0];
  if (peerConnection) {
    global.streamHandler.addLocal(peerConnection, stream);
  }
  $self.emitter.emit('onLocalStreamAdd', {
    stream: stream
  });
  global.rtcUtil.getSdp(0, function (errorCode, info) {
    if (errorCode !== 0) {
      var errorMsg = 'get local sdp failed!!! e = ' + info;
      Log.RTCLog.error(errorMsg);
      Log.uploadWebLog(global, errorMsg, null, Constants.KEY_TAG.RTC_LOG_TAG);
      $self.emitter.emit('onStartRTCResult', {
        errorCode: errorCode,
        errorMsg: errorMsg,
        srctinyid: 0
      });
      return;
    }
    global.rtcUtil.sendSdp(info, 0);
    $self.emitter.emit('onStartRTCResult', {
      errorCode: 0,
      errorMsg: 'ok',
      srctinyid: 0
    });
  });
};
WebRTCAPI.fn.startPush = function (opt) {
  var global = this.global;
  var $self = this;
  if (!this.createPeerConnection(0)) {
    Log.RTCLog.error('create peer connection failed!');
    error && error(Constants.ERROR_CODE.CREATE_PEERCONNECTION_FAILED);
    return;
  }
  if (!this.checkInit()) {
    return;
  }
  if (opt && opt.stream) {
    if (!(opt.stream instanceof MediaStream)) {
      console.error('stream 类型为MediaStream ,现在是：', opt.stream);
      return;
    }
    this.pushStream(opt.stream);
  } else {
    this.getLocalStream(opt, function (data) {
      if (global.destroy) {
        global.streamHandler.releaseLocal(stream);
      }
      $self.pushStream(data.stream);
    }, function (data) {
      var errorCode = data.errorCode;
      if (errorCode !== 0 || !data.stream) {
        var errorMsg = 'get local stream failed! exception : ' + data.errorMsg;
        Log.RTCLog.error(errorMsg);
        Log.uploadWebLog(global, errorMsg, null, Constants.KEY_TAG.RTC_LOG_TAG);
        global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_FAILED, errorMsg);
        $self.emitter.emit('onStartRTCResult', {
          errorCode: errorCode,
          errorMsg: errorMsg,
          srctinyid: 0,
          extInfo: data.extInfo || null
        });
        return;
      }
    });
  }
};

WebRTCAPI.fn.startRTC = function (opt, succ, error) {
  var global = this.global;
  var $self = this;
  var srctinyid = 0;
  if (!this.checkInit()) {
    return;
  }
  opt = opt || {};
  if (opt) {
    if (opt.srctinyid) {
      srctinyid = opt.srctinyid;
    } else if (opt.tinyid) {
      srctinyid = opt.tinyid;
    } else if (opt.userId) {
      srctinyid = global.tinyIdMap[opt.userId];
    }
    //兼容现有用户的代码
    opt.role = opt.role || opt.screenRole || null;
    if (opt.role) {
      var _succ = succ ? succ : function () {};
      succ = function succ() {
        _succ();
        //临时办法，等后台发布后不需要setTimeout
        setTimeout(function () {
          $self.changeSpearRole(opt.role, true);
        }, 1000);
      };
    }
  }

  if (succ) {
    $self.callbacks.startRTCSucc = succ;
  }
  if (error) {
    $self.callbacks.startRTCError = error;
  }
  if (srctinyid === 0 && global.localStreamStatus) {
    console.error('请不要重复调用进房接口');
    return;
  }

  this.emitter.emit('onUserDefinedWebRTCEventNotice', {
    event: Constants.USER_DEFINED_EVENT.BEGIN_START_WEBRTC
  });
  Log.RTCLog.info('start webrtc : src tinyid = ' + srctinyid);
  global.rtcReport.send(Constants.RTC_EVENT.ON_START_WEBRTC, {
    srctinyid: srctinyid
  });

  if (parseInt(srctinyid || 0) === 0) {
    if (!global.allowPush) {
      console.warn('互动直播观众模式下不允许推流，请检查应用逻辑！');
      return;
    }
    this.startPush(opt);
  } else {
    var remoteSdp = global.remoteSdps[srctinyid];
    if (!this.createPeerConnection(srctinyid)) {
      Log.RTCLog.error('create peer connection failed!');
      error && error(Constants.ERROR_CODE.CREATE_PEERCONNECTION_FAILED);
      return;
    }
    if (global.jsSdkVersion > 1000 && !remoteSdp) {
      $self.emitter.emit('onStartRTCResult', {
        errorCode: Constants.ERROR_CODE.GET_ANSWER_SDP_FAILED,
        errorMsg: 'get remote sdp failed!',
        srctinyid: srctinyid
      });
      return;
    }
    if (global.jsSdkVersion > 1000) {
      global.rtcUtil.onRemoteSdp(remoteSdp, srctinyid);
      global.rtcUtil.getAnswerSdp(srctinyid, function (errorCode, info) {
        if (errorCode !== 0) {
          var errorMsg = 'get remote sdp failed!!! e = ' + info;
          Log.RTCLog.error(errorMsg);
          if (error) {
            error({
              errorCode: errorCode,
              errorMsg: errorMsg,
              srctinyid: srctinyid
            });
          }
          $self.emitter.emit('onStartRTCResult', {
            errorCode: errorCode,
            errorMsg: errorMsg,
            srctinyid: srctinyid
          });
          return;
        }
        global.rtcUtil.sendSdp(info, srctinyid);
        if (succ) {
          succ({
            errorCode: 0,
            errorMsg: 'ok',
            srctinyid: srctinyid
          });
        }
        $self.emitter.emit('onStartRTCResult', {
          errorCode: 0,
          errorMsg: 'ok',
          srctinyid: srctinyid
        });
      });
    } else {
      global.rtcUtil.getSdp(srctinyid, function (errorCode, info) {
        if (errorCode !== 0) {
          var errorMsg = 'get remote sdp failed!!! e = ' + info;
          Log.RTCLog.error();
          if (error) {
            error({
              errorCode: errorCode,
              errorMsg: errorMsg,
              srctinyid: srctinyid
            });
          }
          $self.emitter.emit('onStartRTCResult', {
            errorCode: errorCode,
            errorMsg: errorMsg,
            srctinyid: srctinyid
          });
          return;
        }
        global.rtcUtil.sendSdp(info, srctinyid);
        if (succ) {
          succ({
            errorCode: 0,
            errorMsg: 'ok',
            srctinyid: srctinyid
          });
        }
        $self.emitter.emit('onStartRTCResult', {
          errorCode: 0,
          errorMsg: 'ok',
          srctinyid: srctinyid
        });
      });
    }
  }
};

WebRTCAPI.fn.getLocalMediaStream = function () {
  if (!this.checkInit()) {
    return;
  }
  return this.global.localStream;
};

WebRTCAPI.fn.getLocalMediaStatus = function () {
  if (!this.checkInit()) {
    return;
  }
  return this.global.localMediaStatus;
};
WebRTCAPI.fn.closeAudio = function () {
  if (!this.checkInit()) {
    return;
  }
  return this.changeLocalMedia('audio', false);
};

WebRTCAPI.fn.closeVideo = function () {
  if (!this.checkInit()) {
    return;
  }
  return this.changeLocalMedia('video', false);
};

WebRTCAPI.fn.openAudio = function () {
  if (!this.checkInit()) {
    return;
  }
  return this.changeLocalMedia('audio', true);
};
WebRTCAPI.fn.openVideo = function () {
  if (!this.checkInit()) {
    return;
  }
  return this.changeLocalMedia('video', true);
};

WebRTCAPI.fn.setConstraints = function (info) {
  this.updateConstraints({}, info);
};

WebRTCAPI.fn.updateConstraints = function (videoCtrlAbility, ext) {
  var global = this.global;
  // 后台可能返回如下的错误信息
  // videoCtrlAbility[0] = {
  //         CpuOverUseDetect : 0,
  //         VidFr : 0,
  //         VidHeight : 65535,
  //         VidMaxBitRate : 800,
  //         VidMinBitRate : 800,
  //         VidWidth : 65535
  // };
  if (videoCtrlAbility) {
    Log.RTCLog.info('videoCtrlAbility.length=' + videoCtrlAbility.length);
    if (videoCtrlAbility.length > 0) {
      var VidWidth = ext && ext.VidWidth || videoCtrlAbility[0].VidWidth;
      var VidHeight = ext && ext && ext.VidHeight || videoCtrlAbility[0].VidHeight;
      var VidFr = ext && ext && ext.VidFr || videoCtrlAbility[0].VidFr;
      var CpuOverUseDetect = videoCtrlAbility[0].CpuOverUseDetect;
      var VidRatio = VidWidth / VidHeight;
      if (VidWidth > 0 && VidHeight > 0 && VidFr > 0) {
        global.constraints = {
          audio: global.constraints.audio,
          video: objectAssign({}, global.constraints.video, {
            frameRate: {
              max: VidFr,
              ideal: VidFr
            },
            aspectRatio: {
              max: VidRatio,
              ideal: VidRatio
            },
            googCpuOveruseDetection: CpuOverUseDetect ? true : false,
            height: { max: VidHeight, ideal: VidHeight },
            width: { max: VidWidth, ideal: VidWidth }
          })
        };
      }
      if (Constants.ConstraintsMode === 1) {
        // googCpuOveruseDetection =  false
      }
    }
  }
  if (ext && ext.audio && ext.audio.deviceId) {
    // global.constraints.audio.deviceId = ext.audio.deviceId
    var exact = { exact: ext.audio.deviceId };
    if (_typeof(global.constraints.audio) === 'object') {
      global.constraints.audio.deviceId = exact;
    } else {
      global.constraints.audio = {
        deviceId: exact
      };
    }
  }
  if (ext && ext.video && ext.video.deviceId) {
    if (_typeof(global.constraints.video) === 'object' && !(global.constraints.video instanceof Boolean)) {
      global.constraints.video.deviceId = { exact: ext.video.deviceId };
    } else {
      global.constraints.video = {
        deviceId: { exact: ext.video.deviceId }
      };
    }
  }
  return global.constraints;
};

WebRTCAPI.fn.quit = function (succ, error) {
  // try{
  var global = this.global;
  if (global.reportSto) {
    clearInterval(global.reportSto);
  }
  global.reportSto = null;
  global.preReportData = null;
  global.localStreamStatus = false;
  global.destroy = true;
  global.activeUserStats = [];
  global.mutedFlag = 0;

  global.rtcReport.endEndReport(0);
  global.streamHandler.releaseLocal();
  if (global.peerConnections) {
    for (var key in global.peerConnections) {
      var item = global.peerConnections[key];
      if (item) {
        if (item.signalingState !== 'closed') {
          item.close();
        }
        item = null;
      }
    }
    global.peerConnections = {};
  }

  if (global.websocket) {
    if (global.websocket.trybktimer) {
      clearTimeout(global.websocket.trybktimer);
      delete global.websocket.trybktimer;
    }
    global.websocket.close();
    global.websocket = null;
  }

  global.rtcUtil.clearGlobalValues();

  if (succ) {
    succ();
  }
  // }catch(e){
  //     if( error ) { error(); }
  // }
};

WebRTCAPI.fn.unlisten = function () {
  this.global.off = true;
};

WebRTCAPI.fn.changeSpearRole = function (role, manualUpdateRole) {
  var global = this.global;
  global.manualUpdateRole = manualUpdateRole || false;
  global.rtcReport.send(Constants.RTC_EVENT.ON_SPEAR_ROLE_CHANGE, {
    role: role
  });
};

WebRTCAPI.fn.getUserId = WebRTCAPI.fn.getOpenId = function (tinyid) {
  var global = this.global;
  return global.openIdMap[tinyid] || null;
};

WebRTCAPI.fn.ping = function (times, callback) {
  return new PingUtil(times, callback);
};

WebRTCAPI.fn.wsreconnect = function (sig) {
  var global = this.global;
  // if (CURRENT_SERVER_TYPE === SERVER_TYPE.FOR_OPEN) {
  //     //这个接口只给edu开放
  //     Log.RTCLog.errorMsg("[WSRECONNECT]this interface can only use by edu");
  //     return false;
  // }
  if (!sig) {
    return false;
  }
  if (!global.websocket) {
    return false;
  }
  global.websocket.reconnect(sig);
  return true;
};

WebRTCAPI.fn.getMaxTimeMs = function (callback) {
  Log.RTCLog.debug('request maximun timestamp');
  global.rtcReport.send(Constants.RTC_EVENT.ON_GET_MAX_TIMEMS, { role: role });
  onGetMaxTimeMs = callback;
};

WebRTCAPI.fn.createDataChannel = function () {
  Log.RTCLog.debug('createDataChannel');
  var global = this.global;
  var dcSrcTinyid = '1';
  this.createPeerConnection(dcSrcTinyid);
  var peerConnection = global.peerConnections[dcSrcTinyid];
  peerConnection.ondatachannel = function (event) {
    Log.RTCLog.info('ondatachannel: ' + event);
  };

  Log.RTCLog.info('createDataChannel MyDataChannel');
  var dataChannel = peerConnection.createDataChannel('MyDataChannel', {
    reliable: false
  });

  dataChannel.onmessage = function (event) {
    Log.RTCLog.info('dataChannel received: ' + event.data);
  };

  dataChannel.onopen = function () {
    Log.RTCLog.info('datachannel open');
  };

  dataChannel.onclose = function () {
    Log.RTCLog.info('datachannel close');
  };
  dataChannel.onerror = function () {
    Log.RTCLog.info('datachannel onerror');
  };

  peerConnection.dataChannel = dataChannel;

  //get sdp and send sdp
  var offerOption = global.offerSdpOption;
  peerConnection.createOffer(offerOption).then(function (offer) {
    peerConnection.setLocalDescription(offer);
  }).then(function () {
    var desc = peerConnection.localDescription;
    Log.RTCLog.info('dcPeerConnection get local sdp info : ' + desc.sdp);
    var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_PEER_SDP);
    sendData.roomid = global.roomid;
    sendData.usersig = global.config.userSig;
    sendData.sdkappid = global.config.sdkAppId;
    sendData.relayip = global.relayip;
    sendData.data = desc;
    sendData.srctinyid = dcSrcTinyid;
    global.websocket.send(JSON.stringify(sendData));
    //callback(0, desc);
  }).catch(function (reason) {
    Log.RTCLog.error('dcPeerConnection create offer failed : reason = ' + reason);
    //callback(-10009, reason);
  });

  return true;
};

WebRTCAPI.fn.recreateDataChannel = function () {
  var global = this.global;
  var dcSrcTinyid = '1';

  if (global.peerConnections[dcSrcTinyid] && global.peerConnections[dcSrcTinyid].signalingState !== 'closed') {
    global.peerConnections[dcSrcTinyid].close();
  }
  delete global.peerConnections[dcSrcTinyid];
  global.peerConnections[dcSrcTinyid] = null;

  this.createDataChannel();
};

WebRTCAPI.fn.sendDCData = function (data) {
  var global = this.global;
  var dcSrcTinyid = '1';
  var peer = global.peerConnections[dcSrcTinyid];
  if (peer) {
    peer.dataChannel.send(data);
  }
};

WebRTCAPI.fn.onChangeConstraints = function (newConstraints, isChangeAudio, isChangeVideo) {
  var global = this.global;
  var emitter = this.emitter;
  Log.RTCLog.info('on change constraints newConstraints: ' + JSON.stringify(newConstraints));
  var srctinyid = 0;
  global.rtcUtil.updateLocalStream(newConstraints, isChangeAudio, isChangeVideo, function (errorCode, media) {
    if (errorCode === 0) {
      // 没有异常

      isChangeVideo && media.getVideoTracks().forEach(function (videoTrack) {
        var constraints = videoTrack.getConstraints();
        for (var key in constraints) {
          for (var subkey in constraints[key]) {
            Log.RTCLog.info('new key:' + key + '|' + subkey + ' value:' + constraints[key][subkey]);
          }
        }
      });

      isChangeAudio && media.getAudioTracks().forEach(function (audioTrack) {
        var constraints = audioTrack.getConstraints();
        for (var key in constraints) {
          for (var subkey in constraints[key]) {
            Log.RTCLog.info('new key:' + key + '|' + subkey + ' value:' + constraints[key][subkey]);
          }
        }
      });
    }

    emitter.emit('onLocalStreamAdd', {
      stream: global.localStream
    });

    global.rtcUtil.getSdp(srctinyid, function (errorCode, info) {
      if (errorCode !== 0) {
        Log.RTCLog.error('get local sdp failed!!! e = ' + info);
        callback(errorCode);
        return;
      }
      Log.RTCLog.info('get new local sdp success!');
      global.rtcUtil.sendUpdateSdp(info, srctinyid);
    });
  });
};

// 获取设备
WebRTCAPI.fn.getDevices = function (callback) {
  if (!navigator.mediaDevices) {
    console.error(Constants.ERROR_MSG.SECURITY_ERROR);
    return;
  }
  navigator.mediaDevices.enumerateDevices().then(function (devices) {
    var videoList = {},
        audioList = {};
    devices.forEach(function (device) {
      if (device && device.kind === 'audioinput') {
        audioList[device.deviceId] = device;
      }
      if (device && device.kind === 'videoinput') {
        videoList[device.deviceId] = device;
      }
    });

    // 按摄像头优先考虑，将既是摄像头又是麦克风的设备，当作摄像头
    for (var p in videoList) {
      if (audioList[p]) {
        delete audioList[p];
      }
    }

    if (callback) {
      callback({
        audio: Object.values(audioList),
        video: Object.values(videoList)
      });
    }
  }).catch(function (err) {
    callback(err);
  });
};

WebRTCAPI.fn.getVideoDevices = function (callback) {
  if (!navigator.mediaDevices) {
    console.error(Constants.ERROR_MSG.SECURITY_ERROR);
    return;
  }
  navigator.mediaDevices.enumerateDevices().then(function (devices) {
    var videoList = [];
    devices.forEach(function (device) {
      if (device && device.kind === 'videoinput') {
        videoList.push(device);
      }
    });
    if (callback) {
      callback(videoList);
    }
  }).catch(function (err) {
    callback(err);
  });
};

WebRTCAPI.fn.chooseVideoDevice = function (video) {
  var global = this.global;
  var emitter = this.emitter;
  var srctinyid = 0;
  global.config.videoActive = true;

  if (global.localStream) {
    global.localStream.getTracks().forEach(function (track) {
      track.stop();
    });
  }

  Log.RTCLog.info('Constants.ConstraintsMode', Constants.ConstraintsMode);
  if (_typeof(global.constraints.video) === 'object' && !(global.constraints.video instanceof Boolean)) {
    if (video.deviceId) {
      global.constraints.video.deviceId = { exact: video.deviceId };
    } else if (video.facingMode) {
      delete global.constraints.video.deviceId;
      global.constraints.video.facingMode = video.facingMode;
    }
    Log.RTCLog.info('global.constraints.video', global.constraints.video);
  } else {
    if (video.deviceId) {
      global.constraints.video = {
        deviceId: { exact: video.deviceId }
      };
    } else if (video.facingMode) {
      global.constraints.video = video;
    }
    Log.RTCLog.info('global.constraints.video', global.constraints.video);
  }
  //没进房 / 没有peerconnection
  if (!global.enteredRoom || !global.peerConnections || !global.peerConnections[0]) {
    return;
  }

  global.mediaUtil.gum({ constraints: global.constraints }, function (data) {
    var stream = data.stream;
    global.streamHandler.addLocal(global.peerConnections[0], stream);
    emitter.emit('onLocalStreamAdd', {
      stream: global.localStream
    });
    global.rtcUtil.getSdp(srctinyid, function (errorCode, info) {
      if (errorCode !== 0) {
        Log.RTCLog.error('get local sdp failed!!! e = ' + info);
        callback(errorCode);
        return;
      }
      Log.RTCLog.info('get new local sdp success!');
      global.rtcUtil.sendUpdateSdp(info, srctinyid);
    });
  }, function (e) {
    e.errorMsg = 'get local stream failed! exception : ' + e.errorMsg;
    emitter.emit('onErrorNotify', e);
  });
};

// 获取音频设备
WebRTCAPI.fn.getAudioDevices = function (callback) {
  if (!navigator.mediaDevices) {
    console.error(Constants.ERROR_MSG.SECURITY_ERROR);
    return;
  }
  navigator.mediaDevices.enumerateDevices().then(function (devices) {
    var videoList = {},
        audioList = {};
    devices.forEach(function (device) {
      if (device && device.kind === 'audioinput') {
        audioList[device.deviceId] = device;
      }
      if (device && device.kind === 'videoinput') {
        videoList[device.deviceId] = device;
      }
    });

    // 按摄像头优先考虑，将既是摄像头又是麦克风的设备，当作摄像头
    for (var p in videoList) {
      if (audioList[p]) {
        delete audioList[p];
      }
    }

    if (callback) {
      callback(Object.values(audioList));
    }
  }).catch(function (err) {
    callback(err);
  });
};

// 获取音频输出设备
WebRTCAPI.fn.getSpeakerDevices = function (callback) {
  if (!navigator.mediaDevices) {
    console.error(Constants.ERROR_MSG.SECURITY_ERROR);
    return;
  }
  navigator.mediaDevices.enumerateDevices().then(function (devices) {
    var audioList = {};
    devices.forEach(function (device) {
      if (device && device.kind === 'audiooutput') {
        audioList[device.deviceId] = device;
      }
    });
    if (callback) {
      callback(Object.values(audioList));
    }
  }).catch(function (err) {
    callback(err);
  });
};

WebRTCAPI.fn.chooseAudioDevice = function (audio) {
  var global = this.global;
  global.config.audioActive = true;
  var exact = { exact: audio.deviceId };
  if (_typeof(global.constraints.audio) === 'object') {
    global.constraints.audio.deviceId = exact;
  } else {
    global.constraints.audio = {
      deviceId: exact
    };
  }
  // var vidConstraints = {"audio" : global.constraints.audio};
  // this.onChangeConstraints(vidConstraints, true, false);

  if (!global.enteredRoom || !global.peerConnections || !global.peerConnections[0]) {
    return;
  }

  this.onChangeConstraints({ video: false, audio: global.constraints.audio }, true, false);
};

WebRTCAPI.fn.chooseSpeakerDevice = function (mediaElement, speaker, succ, fail) {
  if (typeof mediaElement.sinkId !== 'undefined') {
    mediaElement.setSinkId(speaker.deviceId).then(function () {
      succ && succ({
        errorCode: 0,
        errorMsg: 'ok'
      });
    }).catch(function (error) {
      var errorMessage = error;
      if (error.name === 'SecurityError') {
        errorMessage = 'You need to use HTTPS for selecting audio output device: ' + JSON.stringify(error);
      }
      fail && fail({
        errorCode: Constants.ERROR_CODE.CHOOSE_SPEARK_FAILED,
        errorMsg: errorMessage
      });
    });
  } else {
    fail && fail({
      errorCode: Constants.ERROR_CODE.CHOOSE_SPEARK_FAILED,
      errorMsg: 'media element has no sinkId'
    });
  }
};

WebRTCAPI.fn.stopRTC = function (opt, succ, error) {
  var global = this.global;
  var srctinyid = 0;
  global.config.canvas = false;
  if (succ) {
    this.callbacks.stopRTCSucc = succ;
  }
  if (error) {
    this.callbacks.stopRTCError = error;
  }
  if (opt && opt.userId) {
    srctinyid = global.tinyIdMap[opt.userId];
    if (!srctinyid) {
      this.emitter.emit('execCallback', {
        name: 'stopRTCError',
        data: {
          errorCode: Constants.ERROR_CODE.NOT_FOUND,
          errorMsg: '没有找到对应的tinyid'
        }
      });
      return;
    }
  }
  if (srctinyid === 0) {
    if (global.websocket) {
      global.rtcReport.send(Constants.RTC_EVENT.ON_CLOSE_PEER);
    }
  } else {
    this.emitter.emit('onPeerConnectionClose', {
      srctinyid: srctinyid
    });
  }
};

WebRTCAPI.fn.detectRTC = function (opts, callback) {
  return DetectRTC.support(opts, callback);
};

WebRTCAPI.fn.debug = function (mode) {
  Log.debug(mode);
};

WebRTCAPI.fn.version = function () {
  return Constants.Version;
};

WebRTCAPI.fn.getStats = function (opts, succ, error) {
  var global = this.global;
  var self = this;
  var tinyId = 0;
  if (opts.userId) {
    tinyId = global.tinyIdMap[opts.userId];
  }
  var interval = opts.interval || null;
  var peer = global.peerConnections[tinyId];
  if (peer) {
    getstats(peer, function (data) {
      peer.peerStatsResult = data;
      if (global.destroy || peer.iceConnectionState === 'closed' || peer.signalingState === 'closed') {
        data.nomore();
      } else {
        succ(global.streamHandler.parseStats(data));
      }
    }, interval);
  } else {
    if (global.retryGetStats[tinyId]) {
      error && error({
        errorCode: Constants.ERROR_CODE.NOT_FOUND_PEER,
        errorMsg: 'not exist peerconnection with opts' + JSON.stringify(opts)
      });
      delete global.retryGetStats[tinyId];
    } else {
      global.retryGetStats[tinyId] = 1;
      //2秒后重试
      setTimeout(function () {
        self.getStats(opts, succ, error);
      }, 2000);
    }
  }
};

WebRTCAPI.fn.getErrorCode = function () {
  return Constants.ERROR_CODE;
};

WebRTCAPI.fn.updateStream = function (opts, succ, fail) {
  var global = this.global;
  var that = this;
  if (Object.keys(global.peerConnections).length == 0 || !global.peerConnections[0]) {
    this.startRTC(opts, succ, fail);
    return;
  }
  if (global.lastUpdateStreamAt && global.lastUpdateStreamAt + global.minRepushDist > +new Date()) {
    var errorMsg = '更新流过于频繁，请稍后再试';
    console.error(errorMsg);
    fail && fail({
      errorCode: Constants.ERROR_CODE.START_RTC_FAILED,
      errorMsg: errorMsg
    });
    return;
  }

  global.lastUpdateStreamAt = +new Date();

  if (!opts.stream || !(opts.stream instanceof MediaStream)) {
    console.error('stream 为必须参数，且类型为MediaStream ');
    return;
  }
  global.rtcUtil.updateStream(opts.stream, function () {
    if (opts.role) {
      that.changeSpearRole(opts.role, true);
    }
    succ && succ();
  }, fail);
};

WebRTCAPI.fn.restartRtcForSafari = function (type, data) {
  var global = this.global;
  var that = this;
  var userId = global.openIdMap[data.srctinyid];
  if (!global.restartRTCQueue[userId] && type === 'video') {
    global.restartRTCQueue[userId] = 1;
    global.restartRTCQueue[userId] = setTimeout(function () {
      clearTimeout(global.restartRTCQueue[userId]);
      if (global.restartRTCQueue[userId]) {
        delete global.restartRTCQueue[userId];
      }
    }, global.minRepushDist);

    //global.rtcUtil.onUpdateVideoSsrc( data);
    // return;
    this.stopRTC({
      userId: userId
    });
    this.startRTC({
      userId: userId
    }, function () {
      // console.debug('start rtc succ')
    }, function () {
      // console.error('start rtc fail, call again')
      // setTimeout(function(){
      that.startRTC({
        userId: userId
      }, function () {}, function () {
        if (global.restartRTCQueue[userId]) {
          delete global.restartRTCQueue[userId];
        }
      });
      // },200);
    });
  }
};

// WebRTCAPI.fn.applyConstraints = function(){
//     var support = navigator.mediaDevices.getSupportedConstraints();
//     console.debug(support)
//     return Log.debugout;
// }

WebRTCAPI.fn.bugout = function () {
  return Log.debugout;
};

// return the audio/video stats of active remote users
WebRTCAPI.fn.getActiveUserStats = function () {
  var global = this.global;
  var VIDEO_STAT_BIT = 0x01;
  var AUDIO_STAT_BIT = 0x08;
  var AUDIO_MUTE_BIT = 0x40;
  var VIDEO_MUTE_BIT = 0x10;
  var stats = [];
  global.activeUserStats.forEach(function (stat) {
    if (stat.userid == global.config.openid) {
      return;
    }
    var hasVideo = stat.flag & VIDEO_STAT_BIT;
    var hasAudio = stat.flag & AUDIO_STAT_BIT;
    var audioMuted = stat.flag & AUDIO_MUTE_BIT;
    var videoMuted = stat.flag & VIDEO_MUTE_BIT;
    stats.push({
      userId: stat.userid,
      hasVideo: !!hasVideo,
      hasAudio: !!hasAudio,
      videoMuted: !!videoMuted,
      audioMuted: !!audioMuted
    });
  });
  return stats;
};

WebRTCAPI.SoundMeter = function (opts) {
  return new SoundMeter(opts);
};

// sugar
WebRTCAPI.detectRTC = WebRTCAPI.fn.detectRTC;
WebRTCAPI.debug = WebRTCAPI.fn.debug;
WebRTCAPI.version = WebRTCAPI.fn.version;

Emitter.mixin(WebRTCAPI);

window.WebRTCAPI = WebRTCAPI;
module.exports = WebRTCAPI;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Constants = __webpack_require__(0);
var WebRTCStat = {
    Info: {
        MediaList: [],
        Video: null
    },
    DataEnum: {
        terminal_type: ["mobile", "iphone", "ipad", "andriod phone", "pc", "windows pad ", "windows phone ", "android pad", "voip", "mac", "pstn"]
    },
    getTerminalType: function getTerminalType() {
        var keystring = "";
        var index = "";
        var agent = navigator.userAgent.toLowerCase();
        if (agent.indexOf("iphone") !== -1) {
            keystring = "iphone";
        } else if (agent.indexOf("android") !== -1) {
            keystring = "andriod phone";
        } else if (agent.indexOf("ipad") !== -1) {
            keystring = "ipad";
        } else if (agent.indexOf("macintosh") !== -1) {
            keystring = "mac";
        } else if (agent.indexOf("windows") !== -1) {
            keystring = "pc";
        } else {
            keystring = "pc";
        }
        this.DataEnum.terminal_type.forEach(function (item, idx) {
            if (item.toLowerCase().indexOf(keystring) !== -1) {
                index = idx + 1;
            }
        });
        return String(index);
    },
    //视频源类型
    // 1：摄像头
    // 2：播片
    // 3：捕捉屏幕
    // 4：android
    // 5：iPad
    // 6：iPhone
    getVideoSrcType: function getVideoSrcType() {
        var type = 1;
        var termType = parseInt(this.getTerminalType());
        var deviceName = this.DataEnum.terminal_type[termType - 1];
        if (deviceName === "andriod phone") {
            type = 4;
        } else if (deviceName === "ipad") {
            type = 5;
        } else if (deviceName === "iphone") {
            type = 6;
        }
        return type;
    },

    getDeviceInfo: function getDeviceInfo() {
        var self = this;
        try {
            navigator.mediaDevices.enumerateDevices().then(function (devices) {
                devices.forEach(function (device) {
                    if (device.kind === "videoinput" && !self.Info.Video) {
                        self.Info.Video = {
                            kind: device.kind,
                            label: device.label,
                            id: device.deviceId
                        };
                    }
                });
            }).catch(function (err) {
                console.log(err.name + ": " + err.message);
            });
        } catch (e) {
            console.error(Constants.ERROR_MSG.SECURITY_ERROR);
        }
    },
    getExplore: function getExplore() {
        var Sys = {};
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] : (s = ua.match(/msie ([\d\.]+)/)) ? Sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? Sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? Sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? Sys.opera = s[1] : (s = ua.match(/chrome\/([\d\.]+)/)) ? Sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? Sys.safari = s[1] : 0;

        if (Sys.ie) {
            return 'IE: ' + Sys.ie;
        }
        if (Sys.edge) {
            return 'EDGE: ' + Sys.edge;
        }
        if (Sys.firefox) {
            return 'Firefox: ' + Sys.firefox;
        }
        if (Sys.chrome) {
            return 'Chrome: ' + Sys.chrome;
        }
        if (Sys.opera) {
            return 'Opera: ' + Sys.opera;
        }
        if (Sys.safari) {
            return 'Safari: ' + Sys.safari;
        }
        return 'Unkonwn';
    },
    ability: function ability(constraints) {
        var connectionType = 0;
        if (navigator && navigator.connection && navigator.connection.type) {
            if (navigator.connection.type === "wifi") {
                connectionType = 1;
            } else if (navigator.connection.type === "cellular") {
                connectionType = 4;
            }
        }
        var cpuMaxFrequency = 0;
        if (navigator && navigator.cpuMaxFrequency) {
            cpuMaxFrequency = navigator.cpuMaxFrequency;
        }
        var totalMemory = 0;
        if (navigator && navigator.totalMemory) {
            totalMemory = navigator.totalMemory;
        }
        var cpuModelName = "";
        if (navigator && navigator.cpuModelName) {
            cpuModelName = navigator.cpuModelName;
        }
        var pindex = parseInt(this.getTerminalType());
        var platform = this.DataEnum.terminal_type[pindex - 1];
        var versionDetail = "";
        try {
            versionDetail = this.getExplore();
        } catch (e) {}
        return {
            AbilityOption: {
                GeneralLimit: {
                    CPULimit: {
                        uint32_CPU_num: String(navigator.hardwareConcurrency || 0), //CPU核心数   ok
                        str_CPU_name: String(navigator.platform),
                        uint32_CPU_maxfreq: String(cpuMaxFrequency),
                        model: cpuModelName,
                        uint32_total_memory: String(totalMemory)
                    },
                    uint32_terminal_type: WebRTCStat.getTerminalType(), //终端类型，使用enum TERMINAL_TYPE
                    uint32_device_type: String(0), //机型、设备类型(比如iphone4、iphone5s)，只针对移动终端，pc不用填写
                    str_os_verion: platform, //操作系统类型、版本
                    uint32_link_type: String(1), //客户端接口机连接类型，1表示UDP，2表示TCP，0未知（旧版本没有上报此字段）
                    str_client_version: String(WebRTCAPI.version() || "0"),
                    uint32_net_type: String(connectionType),
                    ua: navigator.userAgent,
                    version: versionDetail
                },
                VideoLimit: {
                    CameraLimit: {
                        str_camera_auth_name: WebRTCStat.Info.Video && WebRTCStat.Info.Video.label,
                        uint32_video_src_type: WebRTCStat.getVideoSrcType()

                    },
                    uint32_screen_width: String(window.screen.width), //屏幕宽
                    uint32_screen_height: String(window.screen.height) //屏幕高
                },
                SpeciParam: {
                    SpeciVidParam: {
                        uint32_spcivid_proto: String(3), //角色类型
                        uint32_spcivid_width: String(640),
                        uint32_spcivid_height: String(368),
                        uint32_spcivid_fps: String(20)
                    },
                    SpeciAudParam: {
                        uint32_spciaud_fs: String(48000),
                        uint32_spciaud_ch: String(2)
                    }
                }
            }
        };
    },
    isSupport: function isSupport() {
        var isWebRTCSupported = false;
        ['RTCPeerConnection', 'webkitRTCPeerConnection', 'mozRTCPeerConnection', 'RTCIceGatherer'].forEach(function (item) {
            if (isWebRTCSupported) {
                return;
            }

            if (item in window) {
                isWebRTCSupported = true;
            }
        });
        return isWebRTCSupported;
    },
    init: function init() {
        if (this.isSupport()) {
            this.getDeviceInfo();
        }
    }
};

module.exports = WebRTCStat;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Constants = __webpack_require__(0);
var PingUtil = function PingUtil(times, callback) {
    var Count = 0;
    var CountTimes = times;
    var Res = [];
    var Ping = function Ping(opt) {
        this.opt = opt || {};
        this.favicon = this.opt.favicon || "/favicon.ico";
        this.timeout = this.opt.timeout || 0;
    };
    Ping.prototype.ping = function (source, callback) {
        this.img = new Image();
        var timer;
        var start = new Date();
        this.img.onload = pingCheck;
        this.img.onerror = pingCheck;
        if (this.timeout) {
            timer = setTimeout(pingCheck, this.timeout);
        }
        function pingCheck(e) {
            if (timer) {
                clearTimeout(timer);
            }
            var pong = new Date() - start;

            if (typeof callback === "function") {
                if (e.type === "error") {
                    console.error("error loading resource");
                    return callback("error", pong);
                }
                return callback(null, pong);
            }
        }
        this.img.src = source + this.favicon + "?" + +new Date(); // Trigger image load with cache
    };

    function doPing() {
        if (Count < CountTimes) {
            Count++;
            var p = new Ping();
            p.ping("https://" + Constants.HOST_NAME + ":8687", function (err, data) {
                Res.push(data);
                doPing();
            });
        } else {
            if (Res.length == Count) {
                var ret = 0;
                for (var i = 0; i < Res.length; i++) {
                    ret += Res[i];
                }
                callback(parseInt(ret / Res.length), Res);
            } else {
                setTimeout(doPing, 100);
            }
        }
    }
    doPing();
};

module.exports = PingUtil;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Log = __webpack_require__(2);
var Util = __webpack_require__(4);
var Constants = __webpack_require__(0);
var DetectRTC = __webpack_require__(3);
var transform = __webpack_require__(19);
var iceParse = __webpack_require__(22);

var RTCUtil = function RTCUtil(global, emitter) {
  this.global = global;
  this.emitter = emitter;
};
RTCUtil.fn = RTCUtil.prototype;

RTCUtil.fn.isSupportH264 = function (sdp) {
  var supportH264 = false;
  try {
    var sdpList = sdp.split('\r\n');
    for (var i = 0; i < sdpList.length; i++) {
      var sdpStr = sdpList[i];
      if (sdpStr.indexOf('a=rtpmap') !== -1 && (sdpStr.indexOf('H264/') !== -1 || sdpStr.indexOf('h264/') !== -1)) {
        supportH264 = true;
        break;
      }
    }
  } catch (e) {
    console.log(e);
  }
  return supportH264;
};
RTCUtil.fn.getIceCandidateType = function (candidate) {
  try {
    var str = candidate.candidate;
    var params = str.split(' ');
    return params[7];
  } catch (e) {
    // Log.RTCLog.error("Get Ice Candidate Type Error : e = " + e);
    return null;
  }
};
RTCUtil.fn.getSdp = function (srctinyid, callback) {
  var global = this.global;
  var emitter = this.emitter;
  var self = this;
  if (!srctinyid) {
    srctinyid = 0;
  }

  var peerConnection = global.peerConnections[srctinyid];
  if (!peerConnection) {
    return;
  }
  var createOffer = peerConnection.tempCreateOffer || peerConnection.createOffer(global.offerSdpOption);
  createOffer.then(function (offer) {
    if (self.isSupportH264(offer.sdp)) {
      return peerConnection.setLocalDescription(offer);
    } else {
      emitter.emit('onIceConnectionBuild', {
        result: false,
        state: Constants.ICE_BUILD_STATE.SDP_FAILED
      });
      var errorStr = 'this web browser do not support h264. srctinyid = ' + srctinyid;
      Log.RTCLog.error(errorStr);
      Log.uploadWebLog(global, errorStr, null, Constants.KEY_TAG.SDP_TAG);
      global.rtcReport.reportSSO({
        reportType: 'LocalSdp',
        errorCode: '1',
        errorMsg: errorMsg
      });
      global.rtcReport.send(Constants.RTC_EVENT.ON_NOT_SUPPORT_H264);
      callback(Constants.ERROR_CODE.GET_LOCALSDP_FAILED, errorStr);
    }
  }).then(function (e) {
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.GET_LOCAL_SDP_SUC,
      info: e
    });
    var desc = peerConnection.localDescription;
    global.rtcReport.reportSSO({
      reportType: 'LocalSdp',
      errorCode: '0',
      errorMsg: 'Get LocalSdp Succ!'
    });
    // Log.RTCLog.info("get local sdp info : " + desc.sdp);
    callback(Constants.ERROR_CODE.SUCC, desc);
  }).catch(function (reason) {
    Log.RTCLog.error('create offer failed : reason = ' + reason);
    global.rtcReport.reportSSO({
      reportType: 'LocalSdp',
      errorCode: '2',
      errorMsg: 'create offer failed : reason = ' + reason
    });
    callback(Constants.ERROR_CODE.GET_LOCALSDP_FAILED, reason);
  });
};

RTCUtil.fn.updateRemoteSdp = function (srctinyid, newSdp) {
  var _this = this;

  var global = this.global;
  var emitter = this.emitter;

  if (parseInt(srctinyid || 0) == 0) {
    var errorMsg = 'Receive update remote sdp, but srctinyid = 0!!!';
    Log.uploadWebLog(global, errorMsg, null, 'UPDATE_REMOTE_SDP');
    return;
  }
  var peerConnection = global.peerConnections[srctinyid];
  if (!peerConnection) {
    var errorMsg = 'onUpdateRemoteSdp, failed to get peerconnection. srctinyid = ' + srctinyid;
    Log.RTCLog.error(errorMsg);
    Log.uploadWebLog(global, errorMsg, null, 'UPDATE_REMOTE_SDP');
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.SET_REMOTE_SDP_FAILED,
      info: errorMsg
    });
    return;
  }
  Log.RTCLog.info('onUpdateRemoteSdp new sdp :' + newSdp.sdp + '\r\n' + newSdp.type);

  if (global.jsSdkVersion < 1001) {
    newSdp.type = 'pranswer';
  }

  // only parse sdp in unified-plan
  if (DetectRTC.isUnifiedPlanDefault()) {
    if (srctinyid != 0) {
      var oldSdp = peerConnection.remoteDescription.sdp;
      if (oldSdp) {
        var sdp = transform.parse(oldSdp);
        var list = [];
        sdp.media.forEach(function (item) {
          list[item.mid] = item.ssrcs;
        });
        var newsdp = transform.parse(newSdp.sdp);
        var newlist = [];
        newsdp.media.forEach(function (item) {
          newlist[item.mid] = item.ssrcs;
        });
        var mid = -1;
        var type = '';
        var videoType = 0; // None
        for (var a in list) {
          //新增了ssrc，才需要
          if (!list[a] && newlist[a]) {
            mid = a;
            type = 'add';
            var receiver = peerConnection.getReceivers()[mid];
            if (receiver && receiver.track && receiver.track.kind === 'audio') {
              videoType = 1; // 1: audio
            } else {
              var ssrcId = newlist[a][0].id;
              videoType = ssrcId >> 16 & 0xff;
            }
          } else if (list[a] && !newlist[a]) {
            mid = a;
            type = 'remove';
            var _ssrcId = list[a][0].id;
            videoType = _ssrcId >> 16 & 0xff;
          }
        }
      }
    }
  }

  peerConnection.setRemoteDescription(new RTCSessionDescription(newSdp), function () {
    if (srctinyid != 0) {
      global.websocket.sessioninfo.peersdp[srctinyid + ''] = newSdp.sdp;
    }
    Log.RTCLog.info('onUpdateRemoteSdp setRemoteDescription success!');
    // add/remove stream based on sdp under unified-plan
    if (DetectRTC.isUnifiedPlanDefault()) {
      // unified-plan mid 是
      if (!isNaN(parseFloat(mid))) {
        if (mid > 0 && srctinyid != 0) {
          var receiver = peerConnection.getReceivers()[mid];
          if (receiver && receiver.track) {
            var track = receiver.track;
            var msid = Constants.STREAM_MISD.MAIN;
            if (videoType == Constants.STREAM_TYPE.AID) {
              msid = Constants.STREAM_MISD.AID;
            }
            var stat = peerConnection.remoteStreamStats.find(function (item) {
              return item.stream.id == msid;
            });
            var _stream = void 0;
            if (type === 'add') {
              var videoId;
              if (stat == undefined) {
                // Safari 12.1.1 setRemoteDescription doesn't trigger ontrack()
                // so we have to add a new MediaStream for the track.
                _stream = new MediaStream();
                videoId = srctinyid + '_' + track.id;
              } else {
                _stream = stat.stream;
                videoId = srctinyid + '_' + _stream.id;
              }
              _stream.addTrack(track);
              var info = {
                stream: _stream,
                videoId: videoId,
                type: track.kind,
                ssrcState: {},
                openId: global.openIdMap[srctinyid] || null,
                videoType: videoType
              };
              global.streamHandler.addRemote(peerConnection, info);
            } else if (type == 'remove') {
              if (stat) {
                _stream = stat.stream;
                if (_stream && (_stream.getTracks().length == 0 ||
                // Safari 12.1.1 doesn't remove track from stream
                videoType == Constants.STREAM_TYPE.AID)) {
                  _this.onRemoveStream(_stream, srctinyid);
                }
              } else {
                _this.onRemoveStream(track, srctinyid);
              }
            }
          }
        }
      } else {
        if (type == 'remove') {
          var stream = peerConnection.getRemoteStreams()[0];
          emitter.emit('onStreamNotify', {
            isLocal: false,
            event: 'onended',
            stream: stream,
            userId: global.openIdMap[srctinyid],
            videoId: srctinyid + '_' + stream.id,
            type: mid
          });
        }
      }
    }
  }, function (e) {
    var errorMsg = 'onUpdateRemoteSdp setRemoteDescription failed! code:' + e.code + ' , name: ' + e.name + '  , message: ' + e.message + ' ';
    Log.RTCLog.error(errorMsg);
  });
};

RTCUtil.fn.onSubVideoState = function (data) {
  var global = this.global;
  var emitter = this.emitter;
  Log.RTCLog.info('onSubVideoState');
  if (parseInt(data.srctinyid || 0) == 0) return;

  /*加入主辅路判断逻辑*/
  var videoState = data.state;
  var localSubVidSsrc = parseInt(data.localSubVidSsrc);
  var streamType = localSubVidSsrc >> 16 & 0xff;
  var videoId;
  if (streamType === Constants.STREAM_TYPE.MAIN) {
    videoId = data.srctinyid + '_' + Constants.STREAM_MISD.MAIN;
  } else {
    videoId = data.srctinyid + '_' + Constants.STREAM_MISD.AID;
  }
  var checkResult = {
    type: streamType,
    state: videoState,
    videoId: videoId
  };
  emitter.emit('onRemoteStreamStateChange', checkResult);

  /*主辅路判断逻辑结束*/
  var peerConnection = global.peerConnections[data.srctinyid];
  if (!peerConnection) {
    return;
  }
  //
  // data.newSdp.type = "pranswer";
  if (global.jsSdkVersion < 1001) {
    data.newSdp.type = 'pranswer';
  } else {
    data.newSdp.type = 'offer';
  }

  this.updateRemoteSdp(data.srctinyid, data.newSdp);
};

RTCUtil.fn.onUpdateAudSsrc = function (data) {
  var global = this.global;
  var emitter = this.emitter;
  Log.RTCLog.info('onUpdateAudSsrc');

  if (parseInt(data.srctinyid || 0) == 0) return;

  var peerConnection = global.peerConnections[data.srctinyid];

  if (!peerConnection) {
    var errorMsg = 'onUpdateAudSsrc, failed to get peerconnection. srctinyid = ' + srctinyid;
    emitter.emit('onErrorNotify', {
      errorCode: Constants.ERROR_CODE.UPDATE_AUDIO_SSRC_FAILED,
      errorMsg: errorMsg
    });
    return;
  }
  if (global.jsSdkVersion < 1001) {
    data.newSdp.type = 'pranswer';
  } else {
    data.newSdp.type = 'offer';
  }

  this.updateRemoteSdp(data.srctinyid, data.newSdp);
};

RTCUtil.fn.onUpdateVideoSsrc = function (data) {
  var global = this.global;
  var emitter = this.emitter;
  Log.RTCLog.info('onUpdateVideoSsrc:\r\n ' + JSON.stringify(data));

  if (parseInt(data.srctinyid || 0) == 0) return;

  var peerConnection = global.peerConnections[data.srctinyid];

  if (!peerConnection) {
    var errorMsg = 'onUpdateVideoSsrc, failed to get peerconnection. srctinyid = ' + data.srctinyid;
    emitter.emit('onErrorNotify', {
      errorCode: Constants.ERROR_CODE.UPDATE_VIDEO_SSRC_FAILED,
      errorMsg: errorMsg
    });
    return;
  }
  if (global.jsSdkVersion < 1001) {
    data.newSdp.type = 'pranswer';
  } else {
    data.newSdp.type = 'offer';
  }
  this.updateRemoteSdp(data.srctinyid, data.newSdp);
};

RTCUtil.fn.rebuildSession = function () {
  var global = this.global;
  try {
    console.log('begin rebuild session!!!  size = ' + global.websocket.sessioninfo.srcids.length);
    var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_REBUILD_SESSION);
    sendData.data = {
      socketid: global.websocket.socketid,
      tinyid: global.websocket.sessioninfo.tinyid,
      appid: global.config.sdkAppId,
      openid: global.websocket.sessioninfo.openid,
      sessionid: global.websocket.sessioninfo.sessionid,
      sids: global.websocket.sessioninfo.srcids,
      relayInfo: global.websocket.relayInfo.innerip,
      remotesdp: global.websocket.sessioninfo.peersdp
    };
    global.websocket.send(JSON.stringify(sendData));
    return true;
  } catch (e) {
    console.error('rebuild session exception : ', e);
    return false;
  }
};
RTCUtil.fn.pickCandidate = function (pc, srctinyid) {
  if (pc.localCandidateList.length === 0) {
    return false;
  }
  var nice_choice = null;
  var backup_choice = null;
  pc.localCandidateList.forEach(function (item) {
    var obj = iceParse.parse(item.candidate);
    var protocol = item.protocol || obj.transport;
    var type = item.type || obj.type;
    var ip = item.address || obj.localIP;
    if (protocol === 'udp') {
      if (type === 'srflx') {
        nice_choice = {
          sdpMLineIndex: item.sdpMLineIndex,
          sdpMid: item.sdpMid,
          candidate: item.candidate
        };
      } else if (type === 'host' && ip && !Util.isInnerIPFn(ip)) {
        backup_choice = {
          sdpMLineIndex: item.sdpMLineIndex,
          sdpMid: item.sdpMid,
          candidate: item.candidate
        };
      }
    }
  });
  return nice_choice || backup_choice || null;
};

RTCUtil.fn.onIceCandidate = function (e, srctinyid) {
  var global = this.global;
  var pc = global.peerConnections[srctinyid];
  var candidate = e.candidate;
  if (!candidate) {
    Log.RTCLog.debug('Ice Candidate End!');
    pc.iceCandidateEnd = true;
    this.sendLocalCandidate(pc, srctinyid);
    return;
  }
  Log.RTCLog.info('on ice candidate : sdpMLineIndex = ' + candidate.sdpMLineIndex + ' , sdpMid = ' + candidate.sdpMid + ' , candidate = ' + candidate.candidate);
  if (candidate && candidate.candidate) {
    pc.localCandidateList.push(candidate);
    var candidate = this.pickCandidate(pc, srctinyid);
    if (candidate) {
      this.sendLocalCandidate(pc, srctinyid);
    }
  }
};

RTCUtil.fn.onIceGatheringStateChange = function (state, srctinyid) {
  var global = this.global;
  var pc = global.peerConnections[srctinyid];
  Log.RTCLog.info('on onicegatheringstatechange : state = ' + state + ', [' + srctinyid + ']');
  switch (state) {
    case 'complete':
      // PLAN-B 在进行下行ice gathering 时， end的回调特别慢，可能跟后台有关。
      // this.sendLocalCandidate(pc, srctinyid);
      break;
    default:
      break;
  }
};

RTCUtil.fn.sendSdp = function (sdp, srctinyid) {
  var global = this.global;
  var peer = global.peerConnections[srctinyid];
  var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_PEER_SDP);
  sendData.data = sdp;
  sendData.srctinyid = srctinyid;

  //标识已经发送localSdp
  peer.hasSendLocalSdp = true;
  this.sendLocalCandidate(peer, srctinyid);
  global.websocket.send(JSON.stringify(sendData));
};

RTCUtil.fn.sendUpdateSdp = function (sdp, srctinyid) {
  var global = this.global;
  var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_UPDATE_PEER_SDP);
  sendData.data = sdp;
  sendData.srctinyid = srctinyid;
  global.websocket.send(JSON.stringify(sendData));
};

function getStreamState(srctinyid, sdp) {
  var result = transform.parse(sdp);
  var state = {
    audio: [], // audio type, inferred from ssrc id
    video: {} // video type, inferred from ssrc id
  };
  result.media.forEach(function (item) {
    if (item.ssrcs) {
      var id = item.ssrcs[0].id;
      var type = id >> 16 & 0xff;
      if (item.type === 'audio') {
        state.audio.push(type);
      } else if (item.type == 'video') {
        var index = void 0;
        if (type === Constants.STREAM_TYPE.MAIN) {
          index = srctinyid + '_' + Constants.STREAM_MISD.MAIN;
        } else if (type == Constants.STREAM_TYPE.AID) {
          index = srctinyid + '_' + Constants.STREAM_MISD.AID;
        }
        state.video[index] = type;
      }
    }
  });
  return state;
}

RTCUtil.fn.onAddTrack = function (e, srctinyid) {
  var global = this.global;
  var peer = global.peerConnections[srctinyid];
  var track = e.track;

  var stream = e.streams[0];
  var videoId = srctinyid + '_' + stream.id;
  var state = getStreamState(srctinyid, peer.remoteDescription.sdp);
  var videoType = 0; // None
  if (track.kind === 'audio') {
    videoType = 1; // 1: audio
  } else if (track.kind === 'video') {
    videoType = state.video[videoId];
    if (typeof videoType === 'undefined') {
      // when creating RTCPeerConnection for remote peer, the initial sdp offer contains
      // an extra invalid video stream w/o ssrc. we need to skip this invalid stream herein
      return;
    }
  }
  var info = {
    stream: stream,
    videoId: videoId,
    type: track.kind,
    ssrcState: {},
    openId: global.openIdMap[srctinyid] || null,
    videoType: videoType
  };
  if (!peer.remoteStreamStats) {
    peer.remoteStreamStats = [];
  }
  peer.remoteStreamStats.push({
    stream: stream,
    videoId: videoId,
    kind: track.kind,
    trackId: track.id,
    videoType: videoType
  });
  global.streamHandler.addRemote(peer, info);
};

RTCUtil.fn.onAddStream = function (stream, type, srctinyid) {
  var global = this.global;
  Log.RTCLog.info('onAddTrack, srctinyid:' + srctinyid + 'stream.getVideoTracks().length=' + stream.getVideoTracks().length + 'stream.getAudioTracks().length=' + stream.getAudioTracks().length);

  if (srctinyid != '0') {
    var peerConnection = global.peerConnections[srctinyid];
    if (peerConnection) {
      /*加入主辅路解析逻辑*/
      var sdp = peerConnection.remoteDescription.sdp;
      var splitAudio = sdp.split('a=mid:audio');
      var videoAndAudioArray;
      if (splitAudio.length > 1) {
        //不存在没有audio也没有video的情况
        videoAndAudioArray = splitAudio[1].split('a=mid:video'); //有audio过来，这时候再解析video
      } else {
        videoAndAudioArray = splitAudio[0].split('a=mid:video'); //没有audio，直接解析video
      }

      var audioArray = [];
      var videoArray = [];
      for (var i = 0; i < videoAndAudioArray.length; i++) {
        var strArray = videoAndAudioArray[i].split('\r\n');
        var count = strArray.length;
        var ssrc;
        for (var j = 0; j < count; j++) {
          if (i === 0) {
            //音频的处理
            if (strArray[j].indexOf('a=ssrc:') === 0) {
              //以这个标记开头
              ssrc = parseInt(strArray[j].split(' ')[0].split(':')[1]);
              if (!audioArray.includes(ssrc)) {
                audioArray.push(ssrc);
              }
            }
          } else {
            //视频处理逻辑
            if (strArray[j].indexOf('a=ssrc-group:') === 0) {
              //以这个标记开头
              ssrc = parseInt(strArray[j].split(' ')[1]);
              if (!videoArray.includes(ssrc)) {
                videoArray.push(ssrc);
              }
            }
          }
        }
      }

      /*ssrState里面，会有多路视频，所以返回对象格式*/
      var ssrcState = {
        video: {},
        audio: []
      };
      var index;
      for (index in audioArray) {
        ssrcState.audio.push(audioArray[index] >> 16 & 0xff);
      }
      var state, streamID;
      for (index in videoArray) {
        state = videoArray[index] >> 16 & 0xff;
        if (state === Constants.STREAM_TYPE.MAIN) {
          streamID = srctinyid + '_' + Constants.STREAM_MISD.MAIN;
        } else if (state === Constants.STREAM_TYPE.AID) {
          streamID = srctinyid + '_' + Constants.STREAM_MISD.AID;
        }
        ssrcState.video[streamID] = state;
      }

      /*主辅路解析逻辑结束*/
      var videoId = srctinyid + '_' + stream.id;
      Log.RTCLog.info('onAddTrack, videoId:' + videoId);

      var openId = global.openIdMap[srctinyid] || null;
      var info = {
        stream: stream,
        videoId: videoId,
        type: type,
        ssrcState: ssrcState,
        openId: openId,
        videoType: ssrcState.video && ssrcState.video[videoId]
      };
      global.streamHandler.addRemote(peerConnection, info);
    }
  }
};

RTCUtil.fn.onIceConnectionStateChange = function (e, srctinyid) {
  var global = this.global;
  var emitter = this.emitter;
  emitter.emit('onUserDefinedWebRTCEventNotice', {
    event: Constants.USER_DEFINED_EVENT.ON_ICE_STATE_CHANGE,
    info: e
  });
  Log.RTCLog.info('on ice connection state change : iceConnectionState = ' + e.target.iceConnectionState + ' , iceGatheringState = ' + e.target.iceGatheringState + ' srctinyid = ' + srctinyid);
  if ('completed' === e.target.iceConnectionState && 'complete' === e.target.iceGatheringState) {
    var pc = global.peerConnections[srctinyid];
    global.rtcReport.send(Constants.RTC_EVENT.ON_ICE_COMPLETE, {
      localCandidateList: pc.localCandidateList
    });
    Log.RTCLog.info('iceConnectionState and iceGatheringState completed!');
    global.rtcReport.reportSSO({
      reportType: 'IceConn',
      errorCode: '0',
      errorMsg: 'iceConnectionState and iceGatheringState completed!'
    });
  }

  if (e.target.iceConnectionState === 'failed' || e.target.iceGatheringState === 'failed') {
    if (global.websocket) {
      var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_ICE_BROKEN);
      sendData.data = {
        iceConnectionState: e.target.iceConnectionState,
        iceGatheringState: e.target.iceGatheringState,
        openid: global.config.openid,
        tinyid: global.config.tinyid,
        srctinyid: srctinyid
      };
      global.websocket.send(JSON.stringify(sendData));
    }
    global.rtcReport.reportSSO({
      reportType: 'IceConn',
      errorCode: '1',
      errorMsg: 'iceConnectionState=' + e.target.iceConnectionState + ',iceGatheringState=' + e.target.iceGatheringState + '!'
    });
    emitter.emit('onIceConnectionBroken', e);
  } else if (e.target.iceConnectionState === 'closed' || e.target.iceGatheringState === 'closed') {
    //   rtclistener.config.onIceConnectionClose();
    global.rtcReport.reportSSO({
      reportType: 'IceConn',
      errorCode: '2',
      errorMsg: 'iceConnectionState=' + e.target.iceConnectionState + ',iceGatheringState=' + e.target.iceGatheringState + '!'
    });
    emitter.emit('onIceConnectionClose', e);
  }
};

RTCUtil.fn.onRemoveStream = function (stream, srctinyid) {
  var global = this.global;
  var emitter = this.emitter;

  var peerConnection = global.peerConnections[srctinyid];
  if (peerConnection) {
    var videoId = srctinyid + '_' + stream.id;
    emitter.emit('onRemoteStreamRemove', videoId);
    Log.RTCLog.info('on remove stream : srctinyid = ' + srctinyid + ', videoId :' + videoId);
  }
};

RTCUtil.fn.createVideoElement = function (id, opt) {
  var video = document.createElement('video');
  video.setAttribute('playsinline', 'true');
  video.className = 'video-item ';
  video.autoplay = true;
  video.muted = true;
  for (var a in opt) {
    video[a] = opt[a];
  }
  // document.querySelector("#" + id).appendChild(video);
  return video;
};

RTCUtil.fn.createAudioElement = function (id, opt) {
  var audio = document.createElement('audio');
  audio.setAttribute('playsinline', 'true');
  audio.className = 'audio-item';
  audio.autoplay = true;
  for (var a in opt) {
    audio[a] = opt[a];
  }
  return audio;
};

RTCUtil.fn.updateStream = function (stream, succ, fail) {
  var global = this.global;
  var emitter = this.emitter;
  if (Object.keys(global.peerConnections).length == 0 || !global.peerConnections[0]) {
    var errorNotify = {
      errorCode: Constants.ERROR_CODE.NOT_FOUND_PEER,
      errorMsg: 'updateStream failed!!! e = NOT_FOUND_PEER'
    };
    emitter.emit('onErrorNotify', errorNotify);
    return;
  }
  global.streamHandler.addLocal(global.peerConnections[0], stream);
  this.changeSenders(stream);
  emitter.emit('onLocalStreamAdd', {
    stream: stream
  });
  global.rtcUtil.getSdp(0, function (errorCode, info) {
    if (errorCode !== 0) {
      var msg = 'get local sdp failed!!! e = ' + info;
      console.error(msg);
      var errorNotify = {
        errorCode: Constants.ERROR_CODE.ON_GET_LOACL_SDP_FAILED,
        errorMsg: msg,
        extInfo: info
      };
      if (fail) {
        fail(errorNotify);
      } else {
        emitter.emit('onErrorNotify', errorNotify);
      }
      return;
    }
    global.rtcUtil.sendUpdateSdp(info, 0);
    if (succ) {
      succ();
    }
  });
};

RTCUtil.fn.removeTrack = function (media, type) {
  if (type === 'audio' || type === 'all') {
    media.getAudioTracks().forEach(function (audioTrack) {
      var constraints = audioTrack.getConstraints();
      for (var key in constraints) {
        for (var subkey in constraints[key]) {
          Log.RTCLog.info('old key:' + key + '|' + subkey + ' value:' + constraints[key][subkey]);
        }
      }
      audioTrack.stop();
      media.removeTrack(audioTrack);
    });
  }

  if (type === 'video' || type === 'all') {
    media.getVideoTracks().forEach(function (videoTrack) {
      var constraints = videoTrack.getConstraints();
      for (var key in constraints) {
        for (var subkey in constraints[key]) {
          Log.RTCLog.info('old key:' + key + '|' + subkey + ' value:' + constraints[key][subkey]);
        }
      }
      videoTrack.stop();
      media.removeTrack(videoTrack);
    });
  }
};

RTCUtil.fn.changeSenders = function (stream) {
  var global = this.global;
  var peerConnection = global.peerConnections[0];

  var videoTracks = stream.getVideoTracks();
  var audioTracks = stream.getAudioTracks();
  if (peerConnection) {
    var senders = peerConnection.getSenders() || [];
    for (var i = 0, len = senders.length; i < len; i++) {
      var sender = senders[i];
      if (sender.track && sender.track.kind === 'video') {
        if (sender.replaceTrack && videoTracks.length > 0) {
          sender.replaceTrack(videoTracks[0]);
        } else {
          peerConnection.removeTrack(sender);
          if (videoTracks.length > 0) {
            peerConnection.addTrack(videoTracks[0], stream);
          }
        }
      } else if (sender.track && sender.track.kind === 'audio') {
        if (sender.replaceTrack && audioTracks.length > 0) {
          sender.replaceTrack(audioTracks[0]);
        } else {
          peerConnection.removeTrack(sender);
          if (audioTracks.length > 0) {
            peerConnection.addTrack(audioTracks[0], stream);
          }
        }
      }
    }
  }
  return;
};

/**
 * @param newConstraints 新的配置
 * @param isChangeAudio 是否重新改变麦克风
 * @param isChangeVideo 是否重新改变摄像头
 */
RTCUtil.fn.updateLocalStream = function (newConstraints, isChangeAudio, isChangeVideo, callback) {
  var global = this.global;
  if (global.hasRetryOpenCamera) {
    Log.RTCLog.warn('update local stream : camera not support, try default constraints');
    return;
  }
  if (global.config.screen && isChangeVideo) {
    callback(50002, '屏幕分享不能切换摄像头或者切换spear配置~');
    return;
  }
  /* 
    @ todo 使用 applyConstraints 更新视频流, 不需要重新协商
    if( isChangeVideo && !isChangeAudio){
      global.localStream.getVideoTracks().forEach(function(track) {
        track.applyConstraints(newConstraints.video); 
      });
    }
    */

  var media = global.localStream.clone();
  if (isChangeVideo) {
    this.removeTrack(media, 'video');
  }

  if (isChangeAudio) {
    this.removeTrack(media, 'audio');
  }

  global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA);
  Log.RTCLog.info('get new user media,  newConstraints', newConstraints);

  navigator.mediaDevices.getUserMedia(newConstraints).then(function (gotStream) {
    Log.RTCLog.info('get new user media ok!!!  newConstraints');
    // 如果是切换了摄像头
    var videoTracks = gotStream.getVideoTracks();
    if (isChangeVideo && videoTracks.length > 0) {
      media.addTrack(videoTracks[0]);
      var peerConnection = global.peerConnections[0];
      if (peerConnection) {
        var senders = peerConnection.getSenders() || [];
        for (var i = 0, len = senders.length; i < len; i++) {
          var sender = senders[i];
          if (sender.track.kind === 'video') {
            if (sender.replaceTrack) {
              sender.replaceTrack(videoTracks[0]);
            } else {
              peerConnection.removeTrack(sender);
              peerConnection.addTrack(videoTracks[0], media);
            }
            break;
          }
        }
      }
    }
    // 如果是切换了麦克风
    var audioTracks = gotStream.getAudioTracks();
    if (isChangeAudio && audioTracks.length > 0) {
      media.addTrack(audioTracks[0]);
      var peerConnection = global.peerConnections[0];
      if (peerConnection) {
        var senders = peerConnection.getSenders() || [];
        for (var i = 0, len = senders.length; i < len; i++) {
          var sender = senders[i];
          if (sender.track.kind === 'audio') {
            if (sender.replaceTrack) {
              sender.replaceTrack(audioTracks[0]);
            } else {
              peerConnection.removeTrack(sender);
              peerConnection.addTrack(audioTracks[0], media);
            }
            break;
          }
        }
      }
    }
    global.streamHandler.addLocal(global.peerConnections[0], media);
    callback(0, media);
  }).catch(function (error) {
    callback(Constants.ERROR_CODE.GET_USERMEDIA_FAILED, error);
  });
};

RTCUtil.fn.onRemoteCandidate = function (remoteCandidate, srctinyid) {
  var global = this.global;
  var emitter = this.emitter;
  Log.RTCLog.info('on peer candidate : remote candidate = ' + JSON.stringify(remoteCandidate) + ' ,srctinyid ' + srctinyid);
  srctinyid = global.config.tinyid === srctinyid ? 0 : srctinyid;
  var peerConnection = global.peerConnections[srctinyid || 0];

  if (!peerConnection) {
    var errorMsg = 'on remote candidate , failed to get peerconnection. srctinyid = ' + srctinyid;
    Log.RTCLog.error(errorMsg);

    global.rtcReport.reportSSO({
      reportType: 'RemoteCandidate',
      errorCode: '1',
      errorMsg: errorMsg
    });

    global.rtcReport.send(Constants.RTC_EVENT.ON_GET_SRC_PEER_CONNECTION_FAILED, errorMsg);
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.SET_REMOTE_CANDIDATE_FAILED,
      info: null
    });
    emitter.emit('onIceConnectionBuild', {
      result: false,
      state: Constants.ICE_BUILD_STATE.CANDIDATE_FAILED
    });
    return;
  }

  peerConnection.addIceCandidate(remoteCandidate, function (e) {
    Log.RTCLog.info('add ice candidate ok');

    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.SET_REMOTE_CANDIDATE_SUC,
      info: e
    });
    //set srcids in websocket
    Log.RTCLog.warn('push src tiny id in src list, tinyid = ' + global.config.tinyid + ' , src tinyid = ' + srctinyid);
    global.websocket.sessioninfo.srcids.push(srctinyid + '');
    global.rtcReport.send(Constants.RTC_EVENT.ON_SET_REMOTE_CANDIDATE_SUC, peerConnection.localCandidateList);
    global.rtcReport.reportSSO({
      reportType: 'RemoteCandidate',
      errorCode: '0',
      errorMsg: ''
    });
    emitter.emit('onIceConnectionBuild', {
      result: true,
      state: Constants.ICE_BUILD_STATE.SUC
    });
  }, function (e) {
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.SET_REMOTE_CANDIDATE_FAILED,
      info: e
    });
    emitter.emit('onIceConnectionBuild', {
      result: false,
      state: Constants.ICE_BUILD_STATE.CANDIDATE_FAILED,
      info: e
    });
    var errorMsg = 'add remote candidate failed!  exception = ' + e;
    Log.RTCLog.error(errorMsg);
    global.rtcReport.reportSSO({
      reportType: 'RemoteCandidate',
      errorCode: '2',
      errorMsg: errorMsg
    });
    if (global.websocket) {
      var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_SET_REMOTE_CANDIDATE_FAILED);
      sendData.data = {
        errorMsg: errorMsg,
        openid: global.config.openid,
        tinyid: global.config.tinyid,
        sessionid: global.roomid
      };
      global.websocket.send(JSON.stringify(sendData));
    }
  });
};

RTCUtil.fn.sendLocalCandidate = function (pc, srctinyid) {
  if (!pc.hasSetRemoteSdp || !pc.hasSendLocalSdp || pc.hasSendCandidate || pc.localCandidateList.length === 0) {
    return;
  }

  var global = this.global;
  var emitter = this.emitter;
  var candidate = this.pickCandidate(pc, srctinyid);
  if (candidate) {
    pc.hasSendCandidate = true;
    var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_PEER_CANDIDATE);
    sendData.data = candidate;
    sendData.srctinyid = srctinyid || '0';
    global.websocket.send(JSON.stringify(sendData));
    global.rtcReport.reportSSO({
      reportType: 'LocalCandidate',
      errorCode: '0',
      errorMsg: ''
    });
  } else {
    if (!pc.iceCandidateEnd) {
      return;
    }
    //candidate 失败
    var errorMsg = 'get local candidate failed With candidate list = ' + JSON.stringify(pc.localCandidateList);
    Log.RTCLog.error(errorMsg);
    global.rtcReport.reportSSO({
      reportType: 'LocalCandidate',
      errorCode: '1',
      errorMsg: errorMsg
    });
    emitter.emit('onErrorNotify', {
      errorCode: Constants.ERROR_CODE.GET_LOCAL_CANDIDATE_FAILED,
      errorMsg: errorMsg
    });
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.GET_LOCAL_STUN_IP_FAILED,
      info: pc.localCandidateList
    });
    emitter.emit('onIceConnectionBuild', {
      event: false,
      state: Constants.ICE_BUILD_STATE.GET_STUN_IP_FAILED,
      info: pc.localCandidateList
    });
    global.rtcReport.send(Constants.RTC_EVENT.ON_GET_LOCAL_CANDIDATE_FAILED, {
      stunserver: Constants.WEBRTC_STUN_SERVER,
      localCandidateList: pc.localCandidateList
    });
  }
};

RTCUtil.fn.onRemoteSdp = function (remoteSdp, srctinyid) {
  var self = this;
  var global = this.global;
  var emitter = this.emitter;
  Log.RTCLog.info('srctinyid:' + srctinyid + ' on remote sdp : ', remoteSdp);
  srctinyid = global.config.tinyid === srctinyid ? 0 : srctinyid;
  var peerConnection = global.peerConnections[srctinyid];

  if (!peerConnection) {
    var errorMsg = 'on remote sdp , failed to get peerconnection. srctinyid = ' + srctinyid;
    Log.RTCLog.error(errorMsg);

    global.rtcReport.send(Constants.RTC_EVENT.ON_GET_SRC_PEER_CONNECTION_FAILED, errorMsg);
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.SET_REMOTE_SDP_FAILED,
      info: errorMsg
    });
    emitter.emit('onIceConnectionBuild', {
      result: false,
      state: Constants.ICE_BUILD_STATE.SDP_FAILED,
      info: e
    });
    return;
  }

  if (srctinyid != 0 && global.jsSdkVersion < 1001) {
    remoteSdp.type = 'pranswer';
  }

  if (DetectRTC.isFF()) {
    remoteSdp.sdp = remoteSdp.sdp.replace(/BUNDLE audio video/gim, 'BUNDLE sdparta_0 sdparta_1');
    remoteSdp.sdp = remoteSdp.sdp.replace(/mid:audio/gim, 'mid:sdparta_0');
    remoteSdp.sdp = remoteSdp.sdp.replace(/mid:video/gim, 'mid:sdparta_1');
  }

  peerConnection.setRemoteDescription(new RTCSessionDescription(remoteSdp), function () {
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.SET_REMOTE_SDP_SUC,
      info: null
    });
    if (srctinyid != 0) {
      global.websocket.sessioninfo.peersdp[srctinyid + ''] = remoteSdp.sdp;
    }
    peerConnection.hasSetRemoteSdp = true;
    global.rtcReport.send(Constants.RTC_EVENT.ON_SET_REMOTE_SDP_SUC);
    global.rtcReport.reportSSO({
      reportType: 'RemoteSdp',
      errorCode: '0',
      errorMsg: 'set remote sdp succ!'
    });

    self.sendLocalCandidate(peerConnection, srctinyid);
  }, function (e) {
    emitter.emit('onUserDefinedWebRTCEventNotice', {
      event: Constants.USER_DEFINED_EVENT.SET_REMOTE_SDP_FAILED,
      info: e
    });
    emitter.emit('onIceConnectionBuild', {
      result: false,
      state: Constants.ICE_BUILD_STATE.SDP_FAILED,
      info: e
    });
    global.rtcReport.reportSSO({
      reportType: 'RemoteSdp',
      errorCode: '1',
      errorMsg: 'set remote sdp failed! ' + e.message
    });

    try {
      //这里暂时先对safari的startRTC兼容，后台发布后再删除这里的分支。
      if (DetectRTC.isSafari()) {
        return;
      }
      var errorMsg = 'on set remote sdp failed , exception = ' + e.message;
      if (global.websocket) {
        var sendData = global.rtcReport.createJsonFromTag(Constants.RTC_EVENT.ON_SET_REMOTE_SDP_FAILED);
        sendData.data = {
          errorMsg: errorMsg,
          tinyid: global.config.tinyid,
          openid: global.config.openid,
          sessionid: global.roomid
        };
        global.websocket.send(JSON.stringify(sendData));
      }
      Log.RTCLog.error(errorMsg);
      emitter.emit('execCallback', {
        name: 'startRTCError',
        data: {
          errorCode: Constants.ERROR_CODE.SET_REMOTE_SDP_FAILED,
          errorMsg: errorMsg
        }
      });
    } catch (e) {
      Log.RTCLog.info(e);
    }
  });
};

RTCUtil.fn.addPeer = function (openid, tinyid, roomid, srctinyid, userSig, peerconnectionport) {
  var global = this.global;
  var data = {
    openid: openid,
    tinyid: tinyid,
    srctinyid: srctinyid,
    peerconnectionport: peerconnectionport,
    roomid: roomid,
    sdkAppID: String(global.config.sdkAppId),
    socketid: global.websocket.socketid,
    userSig: userSig || global.config.userSig,
    relayip: global.websocket.relayInfo.innerip,
    dataport: global.dataport,
    stunport: global.stunport
  };
  Log.RTCLog.debug('add peer : openid = ' + JSON.stringify(data));
  global.rtcReport.send(Constants.RTC_EVENT.ON_CREATE_PEER, data);
  return true;
};

RTCUtil.fn.clearGlobalValues = function () {
  var global = this.global;
  global.config = {
    sdkAppId: '',
    openid: '',
    tinyid: '',
    srctinyid: '',
    userSig: '',
    privMapEncrypt: '',
    accountType: ''
  };
  global.constraints = {
    audio: true,
    video: true
  };
  global.deviceInfo = {
    audio: false,
    video: false
  };
  global.checkSigSeq = null;
  global.reportTime = 0;
  global.specifyConstraints = null;
  global.hasRetryOpenCamera = false;
  global.inited = false;
  global.enteredRoom = false;
  global.roomid = 0;
  global.remoteSdps = {};
};

RTCUtil.fn.getAnswerSdp = function (srctinyid, callback) {
  var global = this.global;
  if (!srctinyid) {
    srctinyid = 0;
  }
  var peerConnection = global.peerConnections[srctinyid];
  if (peerConnection) {
    peerConnection.createAnswer().then(function (answerSdp) {
      peerConnection.setLocalDescription(answerSdp);
      callback(0, answerSdp);
    }).catch(function (reason) {
      Log.RTCLog.error('create answer failed : reason = ' + reason);
      callback(Constants.ERROR_CODE.GET_ANSWER_SDP_FAILED, reason);
    });
  }
};

module.exports = RTCUtil;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
    type: function type(ob) {
        return Object.prototype.toString.call(ob).slice(8, -1).toLowerCase();
    },
    isObject: function isObject(ob, real) {
        if (real) {
            return this.type(ob) === "object";
        } else {
            return ob && (typeof ob === 'undefined' ? 'undefined' : _typeof(ob)) === 'object';
        }
    },
    isFormData: function isFormData(val) {
        return typeof FormData !== 'undefined' && val instanceof FormData;
    },
    trim: function trim(str) {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    },
    encode: function encode(val) {
        return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
    },
    formatParams: function formatParams(data) {
        var str = "";
        var first = true;
        var that = this;
        if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) != "object") {
            return data;
        }
        function _encode(sub, path) {
            var encode = that.encode;
            var type = that.type(sub);
            if (type == "array") {
                sub.forEach(function (e, i) {
                    _encode(e, path + "%5B%5D");
                });
            } else if (type == "object") {
                for (var key in sub) {
                    if (path) {
                        _encode(sub[key], path + "%5B" + encode(key) + "%5D");
                    } else {
                        _encode(sub[key], encode(key));
                    }
                }
            } else {
                if (!first) {
                    str += "&";
                }
                first = false;
                str += path + "=" + encode(sub);
            }
        }

        _encode(data, "");
        return str;
    },

    // Do not overwrite existing attributes
    merge: function merge(a, b) {
        for (var key in b) {
            if (!a.hasOwnProperty(key)) {
                a[key] = b[key];
            } else if (this.isObject(b[key], 1) && this.isObject(a[key], 1)) {
                this.merge(a[key], b[key]);
            }
        }
        return a;
    }
};

/***/ }),
/* 1 */,
    /* 2 */
/***/ (function(module, exports, __webpack_require__) {

function KEEP(_,cb){cb();}
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var utils = __webpack_require__(0);
var isBrowser = typeof document !== "undefined";

var Fly = function () {
    function Fly(engine) {
        _classCallCheck(this, Fly);

        this.engine = engine || XMLHttpRequest;

        this.default = this; //For typeScript

        /**
         * Add  lock/unlock API for interceptor.
         *
         * Once an request/response interceptor is locked, the incoming request/response
         * will be added to a queue before they enter the interceptor, they will not be
         * continued  until the interceptor is unlocked.
         *
         * @param [interceptor] either is interceptors.request or interceptors.response
         */
        function wrap(interceptor) {
            var completer;
            utils.merge(interceptor, {
                lock: function lock() {
                    if (!completer) {
                        interceptor.p = new Promise(function (resolve) {
                            completer = resolve;
                        });
                    }
                },
                unlock: function unlock() {
                    if (completer) {
                        completer();
                        interceptor.p = completer = null;
                    }
                }
            });
        }

        var interceptors = this.interceptors = {
            response: {
                use: function use(handler, onerror) {
                    this.handler = handler;
                    this.onerror = onerror;
                }
            },
            request: {
                use: function use(handler) {
                    this.handler = handler;
                }
            }
        };

        var irq = interceptors.request;
        var irp = interceptors.response;
        wrap(irp);
        wrap(irq);

        this.config = {
            method: "GET",
            baseURL: "",
            headers: {},
            timeout: 0,
            parseJson: true, // Convert response data to JSON object automatically.
            withCredentials: false
        };
    }

    _createClass(Fly, [{
        key: "request",
        value: function request(url, data, options) {
            var _this = this;

            var engine = new this.engine();
            var contentType = "Content-Type";
            var contentTypeLowerCase = contentType.toLowerCase();
            var interceptors = this.interceptors;
            var requestInterceptor = interceptors.request;
            var responseInterceptor = interceptors.response;
            var requestInterceptorHandler = requestInterceptor.handler;
            var promise = new Promise(function (resolve, reject) {
                if (utils.isObject(url)) {
                    options = url;
                    url = options.url;
                }
                options = options || {};
                options.headers = options.headers || {};

                function isPromise(p) {
                    // some  polyfill implementation of Promise may be not standard,
                    // so, we test by duck-typing
                    return p && p.then && p.catch;
                }

                /**
                 * If the request/response interceptor has been locked，
                 * the new request/response will enter a queue. otherwise, it will be performed directly.
                 * @param [promise] if the promise exist, means the interceptor is  locked.
                 * @param [callback]
                 */
                function enqueueIfLocked(promise, callback) {
                    if (promise) {
                        promise.then(function () {
                            callback();
                        });
                    } else {
                        callback();
                    }
                }

                // make the http request
                function makeRequest(options) {
                    data = options.body;
                    // Normalize the request url
                    url = utils.trim(options.url);
                    var baseUrl = utils.trim(options.baseURL || "");
                    if (!url && isBrowser && !baseUrl) url = location.href;
                    if (url.indexOf("http") !== 0) {
                        var isAbsolute = url[0] === "/";
                        if (!baseUrl && isBrowser) {
                            var arr = location.pathname.split("/");
                            arr.pop();
                            baseUrl = location.protocol + "//" + location.host + (isAbsolute ? "" : arr.join("/"));
                        }
                        if (baseUrl[baseUrl.length - 1] !== "/") {
                            baseUrl += "/";
                        }
                        url = baseUrl + (isAbsolute ? url.substr(1) : url);
                        if (isBrowser) {

                            // Normalize the url which contains the ".." or ".", such as
                            // "http://xx.com/aa/bb/../../xx" to "http://xx.com/xx" .
                            var t = document.createElement("a");
                            t.href = url;
                            url = t.href;
                        }
                    }

                    var responseType = utils.trim(options.responseType || "");
                    engine.withCredentials = !!options.withCredentials;
                    var isGet = options.method === "GET";
                    if (isGet) {
                        if (data) {
                            if (utils.type(data) !== "string") {
                                data = utils.formatParams(data);
                            }
                            url += (url.indexOf("?") === -1 ? "?" : "&") + data;
                        }
                    }
                    engine.open(options.method, url);

                    // try catch for ie >=9
                    try {
                        engine.timeout = options.timeout || 0;
                        if (responseType !== "stream") {
                            engine.responseType = responseType;
                        }
                    } catch (e) {
                    }

                    if (!isGet) {
                        // default content type
                        var _contentType = "application/x-www-form-urlencoded";
                        // If the request data is json object, transforming it  to json string,
                        // and set request content-type to "json". In browser,  the data will
                        // be sent as RequestBody instead of FormData
                        if (utils.trim((options.headers[contentType] || "").toLowerCase()) === _contentType) {
                            data = utils.formatParams(data);
                        } else if (!utils.isFormData(data) && ["object", "array"].indexOf(utils.type(data)) !== -1) {
                            _contentType = 'application/json;charset=utf-8';
                            data = JSON.stringify(data);
                        }
                        options.headers[contentType] = _contentType;
                    }

                    for (var k in options.headers) {
                        if (k === contentType && (utils.isFormData(data) || !data || isGet)) {
                            // Delete the content-type, Let the browser set it
                            delete options.headers[k];
                        } else {
                            try {
                                // In browser environment, some header fields are readonly,
                                // write will cause the exception .
                                engine.setRequestHeader(k, options.headers[k]);
                            } catch (e) {
                            }
                        }
                    }

                    function onresult(handler, data, type) {
                        enqueueIfLocked(responseInterceptor.p, function () {
                            if (handler) {
                                //如果失败，添加请求信息
                                if (type) {
                                    data.request = options;
                                }
                                var ret = handler.call(responseInterceptor, data, Promise);
                                data = ret === undefined ? data : ret;
                            }
                            if (!isPromise(data)) {
                                data = Promise[type === 0 ? "resolve" : "reject"](data);
                            }
                            data.then(function (d) {
                                resolve(d);
                            }).catch(function (e) {
                                reject(e);
                            });
                        });
                    }

                    function onerror(e) {
                        e.engine = engine;
                        onresult(responseInterceptor.onerror, e, -1);
                    }

                    function Err(msg, status) {
                        this.message = msg;
                        this.status = status;
                    }

                    engine.onload = function () {
                        // The xhr of IE9 has not response filed
                        var response = engine.response || engine.responseText;
                        if (options.parseJson && (engine.getResponseHeader(contentType) || "").indexOf("json") !== -1
                        // Some third engine implementation may transform the response text to json object automatically,
                        // so we should test the type of response before transforming it
                        && !utils.isObject(response)) {
                            response = JSON.parse(response);
                        }
                        var headers = {};
                        var items = (engine.getAllResponseHeaders() || "").split("\r\n");
                        items.pop();
                        items.forEach(function (e) {
                            var key = e.split(":")[0];
                            headers[key] = engine.getResponseHeader(key);
                        });
                        var status = engine.status;
                        var statusText = engine.statusText;
                        var data = {data: response, headers: headers, status: status, statusText: statusText};
                        // The _response filed of engine is set in  adapter which be called in engine-wrapper.js
                        utils.merge(data, engine._response);
                        if (status >= 200 && status < 300 || status === 304) {
                            data.engine = engine;
                            data.request = options;
                            onresult(responseInterceptor.handler, data, 0);
                        } else {
                            var e = new Err(statusText, status);
                            e.response = data;
                            onerror(e);
                        }
                    };

                    engine.onerror = function (e) {
                        onerror(new Err(e.msg || "Network Error", 0));
                    };

                    engine.ontimeout = function () {
                        onerror(new Err("timeout [ " + engine.timeout + "ms ]", 1));
                    };
                    engine._options = options;
                    setTimeout(function () {
                        engine.send(isGet ? null : data);
                    }, 0);
                }

                enqueueIfLocked(requestInterceptor.p, function () {
                    utils.merge(options, _this.config);
                    var headers = options.headers;
                    headers[contentType] = headers[contentType] || headers[contentTypeLowerCase] || "";
                    delete headers[contentTypeLowerCase];
                    options.body = data || options.body;
                    url = utils.trim(url || "");
                    options.method = options.method.toUpperCase();
                    options.url = url;
                    var ret = options;
                    if (requestInterceptorHandler) {
                        ret = requestInterceptorHandler.call(requestInterceptor, options, Promise) || options;
                    }
                    if (!isPromise(ret)) {
                        ret = Promise.resolve(ret);
                    }
                    ret.then(function (d) {
                        //if options continue
                        if (d === options) {
                            makeRequest(d);
                        } else {
                            resolve(d);
                        }
                    }, function (err) {
                        reject(err);
                    });
                });
            });
            promise.engine = engine;
            return promise;
        }
    }, {
        key: "all",
        value: function all(promises) {
            return Promise.all(promises);
        }
    }, {
        key: "spread",
        value: function spread(callback) {
            return function (arr) {
                return callback.apply(null, arr);
            };
        }
    }, {
        key: "lock",
        value: function lock() {
            this.interceptors.request.lock();
        }
    }, {
        key: "unlock",
        value: function unlock() {
            this.interceptors.request.unlock();
        }
    }]);

    return Fly;
}();

//For typeScript


        Fly.default = Fly;

["get", "post", "put", "patch", "head", "delete"].forEach(function (e) {
    Fly.prototype[e] = function (url, data, option) {
        return this.request(url, data, utils.merge({ method: e }, option));
    };
});
// Learn more about keep-loader: https://github.com/wendux/keep-loader
;
module.exports = Fly;

/***/ })
/******/ ]);
});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*

    debugout.js
    by @inorganik
    
*/

// save all the console.logs
function debugout() {
	var self = this;

	// OPTIONS
	self.realTimeLoggingOn = true; // log in real time (forwards to console.log)
	self.useTimestamps = false; // insert a timestamp in front of each log
	self.useLocalStorage = false; // store the output using window.localStorage() and continuously add to the same log each session
	self.recordLogs = true; // set to false after you're done debugging to avoid the log eating up memory
	self.autoTrim = true; // to avoid the log eating up potentially endless memory
	self.maxLines = 2500; // if autoTrim is true, this many most recent lines are saved
	self.tailNumLines = 100; // how many lines tail() will retrieve
	self.logFilename = 'debugout.txt'; // filename of log downloaded with downloadLog()

	// vars
	self.depth = 0;
	self.parentSizes = [0];
	self.currentResult = '';
	self.startTime = new Date();
	self.output = '';

	this.version = function () {
		return '0.5.0';
	};

	/*
 	USER METHODS
 */
	this.getLog = function () {
		var retrievalTime = new Date();
		// if recording is off, so dev knows why they don't have any logs
		if (!self.recordLogs) {
			self.log('[debugout.js] log recording is off.');
		}
		// if using local storage, get values
		if (self.useLocalStorage) {
			var saved = window.localStorage.getItem('debugout.js');
			if (saved) {
				saved = JSON.parse(saved);
				self.startTime = new Date(saved.startTime);
				self.output = saved.log;
				retrievalTime = new Date(saved.lastLog);
			}
		}
		return self.output + '\n---- Log retrieved: ' + retrievalTime + ' ----\n' + self.formatSessionDuration(self.startTime, retrievalTime);
	};
	// accepts optional number or uses the default for number of lines
	this.tail = function (numLines) {
		var numLines = numLines || self.tailLines;
		return self.trimLog(self.getLog(), numLines);
	};
	// accepts a string to search for
	this.search = function (string) {
		var lines = self.output.split('\n');
		var rgx = new RegExp(string);
		var matched = [];
		// can't use a simple Array.prototype.filter() here
		// because we need to add the line number
		for (var i = 0; i < lines.length; i++) {
			var addr = '[' + i + '] ';
			if (lines[i].match(rgx)) {
				matched.push(addr + lines[i]);
			}
		}
		var result = matched.join('\n');
		if (result.length == 0) result = 'Nothing found for "' + string + '".';
		return result;
	};
	// accepts the starting line and how many lines after the starting line you want
	this.getSlice = function (lineNumber, numLines) {
		var lines = self.output.split('\n');
		var segment = lines.slice(lineNumber, lineNumber + numLines);
		return segment.join('\n');
	};
	// immediately downloads the log - for desktop browser use
	this.downloadLog = function () {
		var file = "data:text/plain;charset=utf-8,";
		var logFile = self.getLog();
		var encoded = encodeURIComponent(logFile);
		file += encoded;
		var a = document.createElement('a');
		a.href = file;
		a.target = '_blank';
		a.download = self.logFilename;
		document.body.appendChild(a);
		a.click();
		a.remove();
	};
	// clears the log
	this.clear = function () {
		var clearTime = new Date();
		self.output = '---- Log cleared: ' + clearTime + ' ----\n';
		if (self.useLocalStorage) {
			// local storage
			var saveObject = {
				startTime: self.startTime,
				log: self.output,
				lastLog: clearTime
			};
			saveObject = JSON.stringify(saveObject);
			window.localStorage.setItem('debugout.js', saveObject);
		}
		if (self.realTimeLoggingOn) console.log('[debugout.js] clear()');
	};
	// records a log
	this.log = function (obj) {
		// log in real time
		if (self.realTimeLoggingOn) console.log(obj);
		// record log
		var type = self.determineType(obj);
		if (type != null && self.recordLogs) {
			var addition = self.formatType(type, obj);
			// timestamp, formatted for brevity
			if (self.useTimestamps) {
				var logTime = new Date();
				self.output += self.formatTimestamp(logTime);
			}
			self.output += addition + '\n';
			if (self.autoTrim) self.output = self.trimLog(self.output, self.maxLines);
			// local storage
			if (self.useLocalStorage) {
				var last = new Date();
				var saveObject = {
					startTime: self.startTime,
					log: self.output,
					lastLog: last
				};
				saveObject = JSON.stringify(saveObject);
				window.localStorage.setItem('debugout.js', saveObject);
			}
		}
		self.depth = 0;
		self.parentSizes = [0];
		self.currentResult = '';
	};
	/*
 	METHODS FOR CONSTRUCTING THE LOG
 */

	// like typeof but classifies objects of type 'object'
	// kept separate from formatType() so you can use at your convenience!
	this.determineType = function (object) {
		if (object != null) {
			var typeResult;
			var type = typeof object === 'undefined' ? 'undefined' : _typeof(object);
			if (type == 'object') {
				var len = object.length;
				if (len == null) {
					if (typeof object.getTime == 'function') {
						typeResult = 'Date';
					} else if (typeof object.test == 'function') {
						typeResult = 'RegExp';
					} else {
						typeResult = 'Object';
					}
				} else {
					typeResult = 'Array';
				}
			} else {
				typeResult = type;
			}
			return typeResult;
		} else {
			return null;
		}
	};
	// format type accordingly, recursively if necessary
	this.formatType = function (type, obj) {
		switch (type) {
			case 'Object':
				self.currentResult += '{\n';
				self.depth++;
				self.parentSizes.push(self.objectSize(obj));
				var i = 0;
				for (var prop in obj) {
					self.currentResult += self.indentsForDepth(self.depth);
					self.currentResult += prop + ': ';
					var subtype = self.determineType(obj[prop]);
					var subresult = self.formatType(subtype, obj[prop]);
					if (subresult) {
						self.currentResult += subresult;
						if (i != self.parentSizes[self.depth] - 1) self.currentResult += ',';
						self.currentResult += '\n';
					} else {
						if (i != self.parentSizes[self.depth] - 1) self.currentResult += ',';
						self.currentResult += '\n';
					}
					i++;
				}
				self.depth--;
				self.parentSizes.pop();
				self.currentResult += self.indentsForDepth(self.depth);
				self.currentResult += '}';
				if (self.depth == 0) return self.currentResult;
				break;
			case 'Array':
				self.currentResult += '[';
				self.depth++;
				self.parentSizes.push(obj.length);
				for (var i = 0; i < obj.length; i++) {
					var subtype = self.determineType(obj[i]);
					if (subtype == 'Object' || subtype == 'Array') self.currentResult += '\n' + self.indentsForDepth(self.depth);
					var subresult = self.formatType(subtype, obj[i]);
					if (subresult) {
						self.currentResult += subresult;
						if (i != self.parentSizes[self.depth] - 1) self.currentResult += ', ';
						if (subtype == 'Array') self.currentResult += '\n';
					} else {
						if (i != self.parentSizes[self.depth] - 1) self.currentResult += ', ';
						if (subtype != 'Object') self.currentResult += '\n';else if (i == self.parentSizes[self.depth] - 1) self.currentResult += '\n';
					}
				}
				self.depth--;
				self.parentSizes.pop();
				self.currentResult += ']';
				if (self.depth == 0) return self.currentResult;
				break;
			case 'function':
				obj += '';
				var lines = obj.split('\n');
				for (var i = 0; i < lines.length; i++) {
					if (lines[i].match(/\}/)) self.depth--;
					self.currentResult += self.indentsForDepth(self.depth);
					if (lines[i].match(/\{/)) self.depth++;
					self.currentResult += lines[i] + '\n';
				}
				return self.currentResult;
				break;
			case 'RegExp':
				return '/' + obj.source + '/';
				break;
			case 'Date':
			case 'string':
				if (self.depth > 0 || obj.length == 0) {
					return '"' + obj + '"';
				} else {
					return obj;
				}
			case 'boolean':
				if (obj) return 'true';else return 'false';
			case 'number':
				return obj + '';
				break;
		}
	};
	this.indentsForDepth = function (depth) {
		var str = '';
		for (var i = 0; i < depth; i++) {
			str += '\t';
		}
		return str;
	};
	this.trimLog = function (log, maxLines) {
		var lines = log.split('\n');
		if (lines.length > maxLines) {
			lines = lines.slice(lines.length - maxLines);
		}
		return lines.join('\n');
	};
	this.lines = function () {
		return self.output.split('\n').length;
	};
	// calculate testing time
	this.formatSessionDuration = function (startTime, endTime) {
		var msec = endTime - startTime;
		var hh = Math.floor(msec / 1000 / 60 / 60);
		var hrs = ('0' + hh).slice(-2);
		msec -= hh * 1000 * 60 * 60;
		var mm = Math.floor(msec / 1000 / 60);
		var mins = ('0' + mm).slice(-2);
		msec -= mm * 1000 * 60;
		var ss = Math.floor(msec / 1000);
		var secs = ('0' + ss).slice(-2);
		msec -= ss * 1000;
		return '---- Session duration: ' + hrs + ':' + mins + ':' + secs + ' ----';
	};
	this.formatTimestamp = function (timestamp) {
		var year = timestamp.getFullYear();
		var date = timestamp.getDate();
		var month = ('0' + (timestamp.getMonth() + 1)).slice(-2);
		var hrs = Number(timestamp.getHours());
		var mins = ('0' + timestamp.getMinutes()).slice(-2);
		var secs = ('0' + timestamp.getSeconds()).slice(-2);
		return '[' + year + '-' + month + '-' + date + ' ' + hrs + ':' + mins + ':' + secs + ']: ';
	};
	this.objectSize = function (obj) {
		var size = 0,
		    key;
		for (key in obj) {
			if (obj.hasOwnProperty(key)) size++;
		}
		return size;
	};

	/*
 	START/RESUME LOG
 */
	if (self.useLocalStorage) {
		var saved = window.localStorage.getItem('debugout.js');
		if (saved) {
			saved = JSON.parse(saved);
			self.output = saved.log;
			var start = new Date(saved.startTime);
			var end = new Date(saved.lastLog);
			self.output += '\n---- Session end: ' + saved.lastLog + ' ----\n';
			self.output += self.formatSessionDuration(start, end);
			self.output += '\n\n';
		}
	}
	self.output += '---- Session started: ' + self.startTime + ' ----\n\n';
}

module.exports = debugout;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(20);
var writer = __webpack_require__(21);

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parseParams = parser.parseParams;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;
exports.parseImageAttributes = parser.parseImageAttributes;
exports.parseSimulcastStreamList = parser.parseSimulcastStreamList;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(7);
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var paramReducer = function (acc, expr) {
  var s = expr.split(/=(.+)/, 2);
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  } else if (s.length === 1 && expr.length > 1) {
    acc[s[0]] = undefined;
  }
  return acc;
};

exports.parseParams = function (str) {
  return str.split(/\;\s?/).reduce(paramReducer, {});
};

// For backward compatibility - alias will be removed in 3.0.0
exports.parseFmtpConfig = exports.parseParams;

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};

exports.parseImageAttributes = function (str) {
  return str.split(' ').map(function (item) {
    return item.substring(1, item.length-1).split(',').reduce(paramReducer, {});
  });
};

exports.parseSimulcastStreamList = function (str) {
  return str.split(';').map(function (stream) {
    return stream.split(',').map(function (format) {
      var scid, paused = false;

      if (format[0] !== '~') {
        scid = toIntIfInt(format);
      } else {
        scid = toIntIfInt(format.substring(1, format.length));
        paused = true;
      }

      return {
        scid: scid,
        paused: paused
      };
    });
  });
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(7);

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
    case '%%':
      return '%';
    case '%s':
      return String(arg);
    case '%d':
      return Number(arg);
    case '%v':
      return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // 'v=0' must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = ' '; // 's= ' must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = '';
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by alykoshin on 7/16/14.
 */



var debug = __webpack_require__(8);
var Enum = __webpack_require__(23);

//--------------------------------------------------------------------------------------------------------------------//
// http://tools.ietf.org/html/rfc5245#section-15.1
//
//  candidate-attribute   = "candidate" ":" foundation SP component-id SP
//                          transport SP
//                          priority SP
//                          connection-address SP     ;from RFC 4566
//                          port         ;port from RFC 4566
//                          SP cand-type
//                          [SP rel-addr]
//                          [SP rel-port]
//                          *(SP extension-att-name SP
//                               extension-att-value)
//
//  foundation            = 1*32ice-char
//  component-id          = 1*5DIGIT
//  transport             = "UDP" / transport-extension
//  transport-extension   = token              ; from RFC 3261
//  priority              = 1*10DIGIT
//  cand-type             = "typ" SP candidate-types
//  candidate-types       = "host" / "srflx" / "prflx" / "relay" / token
//  rel-addr              = "raddr" SP connection-address
//  rel-port              = "rport" SP port
//  extension-att-name    = byte-string    ;from RFC 4566
//  extension-att-value   = byte-string
//  ice-char              = ALPHA / DIGIT / "+" / "/"
//
// ------------------------------------------------------------------------------
// From RFC3261:
//    token               = 1*(alphanum / "-" / "." / "!" / "%" / "*"
//                          / "_" / "+" / "`" / "'" / "~" )
//
//    transport-param     = "transport="
//                          ( "udp" / "tcp" / "sctp" / "tls"
//                          / other-transport)
//    other-transport     = token
//------------------------------------------------------------------------------

// Chrome example:
//   a=candidate:1832966643 1 tcp 1509957375 192.168.1.32 0 typ host generation 0
//   a=candidate:3587398871 1 udp 1845501695 123.123.123.123 46670 typ srflx raddr 192.168.1.32 rport 46670 generation 0
//   a=candidate:3454638549 1 udp 33562367 123.12.123.123 64560 typ relay raddr 123.123.123.123 rport 48485 generation 0
//
// Firefox example - no 'a=' part !!! : (and now for Chrome too)
//   candidate:0 1 UDP 2122252543 192.168.1.32 45166 typ host
//   candidate:2 1 UDP 92274687 123.123.12.123 49185 typ relay raddr 12.123.12.123 rport 49185
//
// 2015-08-24 - new version of ICE in Chrome:
// candidate:599991555 2 udp 2122260222 192.168.1.32 49827 typ host generation 0
// {"candidate":"candidate:3689538886 1 udp 2122199807 0124:4567:89ab:cdef:6deb:9894:734:f75f 32950 typ host generation 0","sdpMid":"video","sdpMLineIndex":1}

/**
 * @type ICE_TYPE
 * @const
 */
var ICE_TYPE = Enum( {
  HOST:  'host',
  SRFLX: 'srflx',
  PRFLX: 'prflx',
  RELAY: 'relay'
});

/**
 * @type ICE_TRANSPORT
 * @const
 */
var ICE_TRANSPORT = Enum({
  TCP: 'tcp',
  UDP: 'udp'
});

/**
 * @typedef  {{foundation:string, component_id:string, transport: string, priority: string, localIP: string, localPort: string, type: string, remoteIP: string, remotePort: string, generation: string}} ParsedIce
 */


/**
 * Validate ICE Candidate Object (minimal)
 *
 * @param candObj
 * @returns boolean
 */
function validate(candObj) {
  var res = ICE_TYPE.check(candObj.type.toLowerCase());
  res = res && ICE_TRANSPORT.check(candObj.transport.toLowerCase());
  if (!res) { debug.warn('wrtc-ice-cand-parse: validate(): candObj validation failed'); }
  return res;
}

/**
 *
 * @param {string} candidateString
 * @returns {ParsedIce}
 */
function parse(candidateString) {
  // token                  =  1*(alphanum / "-" / "." / "!" / "%" / "*"
  //                              / "_" / "+" / "`" / "'" / "~" )
  var token_re              = '[0-9a-zA-Z\\-\\.!\\%\\*_\\+\\`\\\'\\~]+';

  // ice-char               = ALPHA / DIGIT / "+" / "/"
  var ice_char_re           = '[a-zA-Z0-9\\+\\/]+';

  // foundation             = 1*32ice-char
  var foundation_re         = ice_char_re;

  // component-id           = 1*5DIGIT
  var component_id_re       = '[0-9]{1,5}';

  // transport             = "UDP" / transport-extension
  // transport-extension   = token      ; from RFC 3261
  var transport_re          = token_re;

  // priority              = 1*10DIGIT
  var priority_re           = '[0-9]{1,10}';

  // connection-address SP      ; from RFC 4566
  var connection_address_v4_re = '[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}';
  var connection_address_v6_re = '\\:?(?:[0-9a-fA-F]{0,4}\\:?)+'; // fde8:cd2d:634c:6b00:6deb:9894:734:f75f

  var connection_address_re = '(?:'+connection_address_v4_re +')|(?:' + connection_address_v6_re+')';

  // port                      ; port from RFC 4566
  var port_re               = '[0-9]{1,5}';

  //  cand-type             = "typ" SP candidate-types
  //  candidate-types       = "host" / "srflx" / "prflx" / "relay" / token
  var cand_type_re  = token_re;
  // ICE_TYPE.HOST  + '|' +
  // ICE_TYPE.SRFLX + '|' +
  // ICE_TYPE.PRFLX + '|' +
  // ICE_TYPE.RELAY ;

  var ICE_RE = '(?:a=)?candidate:(' + foundation_re + ')' + // candidate:599991555 // 'a=' not passed for Firefox (and now for Chrome too)
    '\\s' + '(' + component_id_re       + ')' +                 // 2
    '\\s' + '(' + transport_re          + ')' +                 // udp
    '\\s' + '(' + priority_re           + ')' +                 // 2122260222
    '\\s' + '(' + connection_address_re + ')' +                 // 192.168.1.32 || fde8:cd2d:634c:6b00:6deb:9894:734:f75f
    '\\s' + '(' + port_re               + ')' +                 // 49827
    '\\s' +       'typ'                 +                       // typ
    '\\s' + '(' + cand_type_re          + ')' +                 // host
    '(?:'                               +
    '\\s' +       'raddr'               +
    '\\s' + '(' + connection_address_re + ')' +
    '\\s' +       'rport'               +
    '\\s' + '(' + port_re               + ')' +
    ')?'                                +
    '(?:'                               +
    '\\s' + 'generation'                +                       // generation
    '\\s' + '(' + '\\d+'                + ')' +                 // 0
    ')?'                           ;

  var pattern = new RegExp( ICE_RE);
  var parsed  = candidateString.match(pattern);

//  debug.log('parseIceCandidate(): candidateString:', candidateString);
//  debug.log('parseIceCandidate(): pattern:', pattern);
//  debug.log('parseIceCandidate(): parsed:', parsed);

  // Check if the string was successfully parsed
  if ( !parsed ) {
    debug.warn('parseIceCandidate(): parsed is empty: \'' + parsed + '\'');
    return null;
  }
  //var type = parsed[7] ? parsed[7] : null;
  //ICE_TYPE.check(type.toLowerCase());
  //
  //var transport = parsed[3];
  //ICE_TRANSPORT.check(transport.toLowerCase());

  var propNames = [
    'foundation',
    'component_id',
    'transport',
    'priority',
    'localIP',
    'localPort',
    'type',
    'remoteIP',
    'remotePort',
    'generation'
  ];

  var candObj = {};
  for (var i=0; i<propNames.length; i++) {
    candObj[ propNames[i] ] = parsed[i+1];
  }

  validate(candObj);

  //var candObj = {
  //  foundation: parsed[1],
  //  component_id: parsed[2],
  //  transport:  transport,
  //  priority:   parsed[4],
  //  localIP:    parsed[5],
  //  localPort:  parsed[6],
  //  type:       type,
  //  remoteIP:   parsed[8],
  //  remotePort: parsed[9],
  //  generation: parsed[10]
  //};

  return candObj;
}

/**
 *
 * @param {ParsedIce} iceCandObj
 * @param {{oldChrome:boolean}} [options]
 */
var stringify = function(iceCandObj, options) {
  options = options || {};
  options.oldChrome = options.oldChrome || false;

  var s =
        (options.oldChrome ? 'a=' : '') +
        'candidate:' + iceCandObj.foundation      + ''+
        ' '          + iceCandObj.component_id    + '' +
        ' '          + iceCandObj.transport       + '' +
        ' '          + iceCandObj.priority        + '' +
        ' '          + iceCandObj.localIP         + '' +
        ' '          + iceCandObj.localPort       + '' +
        ' typ '      + iceCandObj.type            + '' +
        (iceCandObj.remoteIP   ? ' raddr '      + iceCandObj.remoteIP   + '' : '') +
        (iceCandObj.remotePort ? ' rport '      + iceCandObj.remotePort + '' : '') +
        (iceCandObj.generation ? ' generation ' + iceCandObj.generation + '' : '');
  return s;
};


/**
 *
 *
 * @param {string} candStr
 * @returns {boolean}
 */
function isRelay( candStr ) {
  debug.warn('isRelay(): deprecated.');
  var candObj = parse( candStr );
  return (candObj.type && candObj.type.toLowerCase() === ICE_TYPE.RELAY);
}

////////////////////////////////////////////////////////////////////////////////

if (true) {
  module.exports = {
    parse:     parse,
    stringify: stringify,
    validate:  validate,
    isRelay:   isRelay
  };
}

if (typeof window !== 'undefined') {
  window.parseIceCandidate     = parse;
  window.stringifyIceCandidate = stringify;
  window.validateIceCandidate  = validate;
  window.isRelayIceCandidate   = isRelay;
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by alykoshin on 10.12.15.
 */



var debug = __webpack_require__(8);

var Const = function(obj) {
  if (Object.freeze) {
    Object.freeze(obj);
  }
  return obj;
};

var Enum = function( obj ) {

  obj.getByValue = function(value) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop) && obj[prop] === value) {
        return prop;
      }
    }
    return null;
  };

  obj._propExists = function(propName) {
    return !! obj[propName];
  };

  obj.valueExists = function(valueName) {
    return !! obj.getByValue(valueName);
  };

  obj.exist = function(valueName) {
    debug.warn('Enum.exist() - deprecated.');

    return obj.valueExists(valueName);
  };

  obj.check = function(valueName) {
    var res = obj.valueExists(valueName);
    if (!res) {
      debug.error('ERROR: Enum '+JSON.stringify(obj)+' does not have property value \''+valueName+'\'');
    }
    return res;
  };

  obj = Const(obj);

  return obj;
};

////////////////////////////////////////////////////////////////////////////////

if (true) {
  var exports = Enum;
  exports.Enum = Enum;
  exports.Const = Const;

  module.exports = exports;
}

if (typeof window !== 'undefined') {
  window.Enum = Enum;
  window.Const = Const;
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Constants = __webpack_require__(0);
var DetectRTC = __webpack_require__(3);
var Util = __webpack_require__(4);
var Log = __webpack_require__(2);
var fly = __webpack_require__(5);

var Report = function Report(global, emitter) {
    this.global = global;
    this.emitter = emitter;
};
Report.fn = Report.prototype;
Report.fn.createJsonFromTag = function (tag) {
    var global = this.global;
    return {
        tag_key: tag,
        data: "",
        openid: global.config.openid,
        tinyid: global.config.tinyid,
        version: Constants.Version,
        ua: navigator.userAgent,
        useStrRoomid: global.useStrRoomid,
        sessionid: global.roomid
    };
};

Report.fn.send = function (tag, data) {
    if (this.global.websocket) {
        var sendMsg = this.createJsonFromTag(tag);
        sendMsg.data = data || "";
        this.global.websocket.send(JSON.stringify(sendMsg));
    }
};

Report.fn.initEndReport = function () {
    var global = this.global;
    var sendData = this.createJsonFromTag(Constants.RTC_EVENT.INIT_END_REPORT);
    sendData.data = {
        socketid: global.websocket.socketid,
        tinyid: global.tinyid,
        clientip: global.clientip,
        devicename: global.devicename,
        ostype: global.ostype,
        sdkAppId: global.config.sdkAppId,
        roomid: global.roomid,
        serverip: global.serverip,
        cpunumber: global.cpunumber,
        cpudevice: global.cpudevice
    };

    global.websocket.send(JSON.stringify(sendData));
};

Report.fn.addCommonInfoInQualityReport = function (data, ostype, devicename, serverip, clientip, tinyid, roomid, cpunumber, cpudevice) {
    var global = this.global;
    data["socketid"] = global.websocket.socketid;
    data["tinyid"] = tinyid;
    data["clientip"] = clientip;
    data["devicename"] = devicename;
    data["ostype"] = ostype;
    data["sdkAppId"] = global.config.sdkAppId;
    data["roomid"] = roomid;
    data["serverip"] = serverip;
    data["cpunumber"] = cpunumber;
    data["cpudevice"] = cpudevice;
    return data;
};
Report.fn.getQulityAsync = function (pcMap, callback) {
    var size = Object.keys(pcMap).length;
    var doneSize = 0;
    var self = this;

    if (size === 0) {
        Log.RTCLog.warn("get quality async failed! peerconnection size is 0!");
        callback(false, null);
        return;
    }

    var statsMap = {};
    for (var key in pcMap) {
        (function (index) {
            var testPC = pcMap[index];
            testPC.getStats(function (stats) {
                var results = stats.result();
                var items = [];

                for (var i = 0; i < results.length; i++) {

                    var res = results[i];

                    var item = {};
                    res.names().forEach(function (name) {
                        item[name] = res.stat(name);
                    });
                    item.id = res.id;
                    item.type = res.type;
                    item.timestamp = res.timestamp;
                    items.push(item);
                }
                statsMap[index] = items;
                doneSize++;
                if (doneSize >= size) {
                    var result = self.handleTotalReportData(statsMap);
                    callback(true, result);
                }
            }, function (error) {
                Log.RTCLog.error("get state failed! index = " + index);
                doneSize++;
                if (doneSize >= size) {
                    var result = self.handleTotalReportData(statsMap);
                    callback(true, result);
                }
            });
        })(key);
    }
};

Report.fn.getQualityReportFromSafariAsync = function (peerconnections, callback) {
    var global = this.global;
    var size = Object.keys(peerconnections).length;
    var doneSize = 0;
    var self = this;

    if (size === 0) {
        Log.RTCLog.warn("get quality async failed! peerconnection size is 0!");
        callback(false, null);
        return;
    }

    var cpuMaxFrequency = 0;
    if (navigator && navigator.cpuMaxFrequency) {
        cpuMaxFrequency = navigator.cpuMaxFrequency;
    }
    var micStatus = 0;
    if (global.localStream) {
        var audioTracks = global.localStream.getAudioTracks();
        if (audioTracks && audioTracks[0] && audioTracks[0].muted) {
            micStatus = 3;
        } else {
            micStatus = 1;
        }
    }
    var decodeVideoItemMap = {};
    var decodeAudioItemMap = {};
    var finalReportData = {
        WebRTCQualityReq: {
            uint64_begine_utime: new Date().getTime(),
            uint64_end_utime: 0,
            uint32_real_num: 0, //音频总下行包
            uint32_delay: 0, // Conn-audio-1-0 googRtt
            uint32_CPU_curfreq: cpuMaxFrequency,
            uint32_total_send_bps: 0, //总上行码率
            uint32_total_recv_bps: 0,
            AudioReportState: {
                uint32_audio_enc_pkg_br: 0, //音频上行码率
                uint32_audio_real_recv_pkg: 0, //音频下行收包
                uint32_audio_flow: 0, //音频下行流量
                uint32_audio_real_recv_br: 0, //音频下行码率
                uint32_audio_delay: 0, //googCurrentDelayMs
                uint32_audio_jitter: 0, //googJitterBufferMs
                uint32_microphone_status: micStatus,
                AudioDecState: []
            },
            VideoReportState: {
                uint32_video_delay: 0, //googTargetDelayMs
                uint32_video_snd_br: 0, //视频上行码率
                uint32_video_total_real_recv_pkg: 0, //视频下行收包
                uint32_video_rcv_br: 0, //视频下行码率
                uint32_send_total_pkg: 0, //视频上行发包
                VideoEncState: [{
                    uint32_enc_width: 0,
                    uint32_enc_height: 0,
                    uint32_capture_fps: 0,
                    uint32_enc_fps: 0
                }],
                VideoDecState: []
            }
        }
    };
    for (var key in peerconnections) {
        (function (index) {
            var currentPC = peerconnections[index];
            currentPC.getStats().then(function (result) {
                //console.log("[wadesheng] BEGIN , INDEX = " + index);
                var videoDec = {
                    uint32_video_recv_fps: 0,
                    uint32_video_recv_br: 0, //单路视频下行码率
                    uint32_video_real_recv_pkg: 0, //单路下行收包
                    uint32_dec_height: 0,
                    uint32_dec_width: 0,
                    uint32_video_jitter: 0,
                    uint64_sender_uin: "" //tinyid
                };

                var audioItem = {
                    uint32_audio_delay: 0,
                    uint32_audio_jitter: 0,
                    uint32_audio_real_recv_pkg: 0,
                    uint32_audio_flow: 0,
                    uint32_audio_real_recv_br: 0,
                    uint64_sender_uin: ""
                };

                result.forEach(function (value) {
                    var type = value.type;
                    // console.info("[wadesheng] node type " + type, value);
                    if (type === "inbound-rtp" && index != 0) {
                        var id = value["id"];
                        var mediaType = null;
                        if (!!id) {
                            if (id.toLowerCase().indexOf("video") !== -1) {
                                mediaType = "video";
                            } else if (id.toLowerCase().indexOf("audio") !== -1) {
                                mediaType = "audio";
                            }
                        }

                        if (mediaType === "video" || mediaType === "audio") {
                            var bytesReceived = value["bytesReceived"] || "0";
                            var packetsReceived = value["packetsReceived"] || "0";
                            if (mediaType === "video") {
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br += parseInt(bytesReceived);
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg = parseInt(packetsReceived);

                                videoDec.uint64_sender_uin = key;
                                videoDec.uint32_video_real_recv_pkg = parseInt(packetsReceived);
                                videoDec.uint32_video_recv_br = parseInt(bytesReceived);
                                videoDec.uint32_video_jitter = value["jitter"] * 1000;
                            } else {
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_br += parseInt(bytesReceived);
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg += parseInt(packetsReceived);
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow += parseInt(bytesReceived);

                                audioItem.uint64_sender_uin = index;
                                audioItem.uint32_audio_real_recv_pkg = parseInt(packetsReceived);
                                audioItem.uint32_audio_flow = parseInt(bytesReceived);
                                audioItem.uint32_audio_jitter = value["jitter"] * 1000;
                            }
                        }
                    } else if (type === "outbound-rtp" && index == "0") {
                        var mediaType = value["mediaType"];
                        if (mediaType === "video" || mediaType === "audio") {
                            var bytesSend = value["bytesSent"] || "0";
                            var packetsSend = value["packetsSent"] || "0";

                            if (mediaType === "video") {
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br += parseInt(bytesSend);
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_send_total_pkg = parseInt(packetsSend);
                            } else {
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br += parseInt(bytesSend);
                            }
                        }
                    } else if (type === "track") {
                        var id = value["id"];
                        if (index == "0") {} else {
                            if (!!id && id.toLowerCase().indexOf("video") !== -1) {
                                videoDec.uint32_video_recv_fps = parseInt(value["framesPerSecond"] || "0");
                                videoDec.uint32_dec_width = parseInt(value["frameWidth"]);
                                videoDec.uint32_dec_height = parseInt(value["frameHeight"]);
                            }
                        }
                    } else if (type === "candidate-pair") {
                        var rrt = value["currentRoundTripTime"] * 1000;
                        if (index == "0") {
                            finalReportData.WebRTCQualityReq.uint32_delay = rrt;
                        } else {}
                    }
                });

                if (index != "0") {
                    finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState.push(audioItem);
                    finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState.push(videoDec);
                }

                doneSize++;
                if (doneSize >= size) {
                    finalReportData = self.parseFinalReport(finalReportData, true);
                    callback(true, finalReportData);
                }
            }).catch(function (error) {
                doneSize++;
                if (doneSize >= size) {
                    finalReportData = self.parseFinalReport(finalReportData, true);
                    callback(true, finalReportData);
                }
            });
        })(key);
    }
};

Report.fn.getQualityReportFromFFAsync = function (peerconnections, callback) {
    var global = this.global;
    var size = Object.keys(peerconnections).length;
    var doneSize = 0;
    var self = this;

    if (size === 0) {
        Log.RTCLog.warn("get quality async failed! peerconnection size is 0!");
        callback(false, null);
        return;
    }

    var cpuMaxFrequency = 0;
    if (navigator && navigator.cpuMaxFrequency) {
        cpuMaxFrequency = navigator.cpuMaxFrequency;
    }
    var micStatus = 0;
    if (global.localStream) {
        var audioTracks = global.localStream.getAudioTracks();
        if (audioTracks && audioTracks[0] && audioTracks[0].muted) {
            micStatus = 3;
        } else {
            micStatus = 1;
        }
    }
    var decodeVideoItemMap = {};
    var decodeAudioItemMap = {};
    var finalReportData = {
        WebRTCQualityReq: {
            uint64_begine_utime: new Date().getTime(),
            uint64_end_utime: 0,
            uint32_real_num: 0, //音频总下行包
            uint32_delay: 0, // Conn-audio-1-0 googRtt
            uint32_CPU_curfreq: cpuMaxFrequency,
            uint32_total_send_bps: 0, //总上行码率
            uint32_total_recv_bps: 0,
            AudioReportState: {
                uint32_audio_enc_pkg_br: 0, //音频上行码率
                uint32_audio_real_recv_pkg: 0, //音频下行收包
                uint32_audio_flow: 0, //音频下行流量
                uint32_audio_real_recv_br: 0, //音频下行码率
                uint32_audio_delay: 0, //googCurrentDelayMs
                uint32_audio_jitter: 0, //googJitterBufferMs
                uint32_microphone_status: micStatus,
                AudioDecState: []
            },
            VideoReportState: {
                uint32_video_delay: 0, //googTargetDelayMs
                uint32_video_snd_br: 0, //视频上行码率
                uint32_video_total_real_recv_pkg: 0, //视频下行收包
                uint32_video_rcv_br: 0, //视频下行码率
                uint32_send_total_pkg: 0, //视频上行发包
                VideoEncState: [{
                    uint32_enc_width: 0,
                    uint32_enc_height: 0,
                    uint32_capture_fps: 0,
                    uint32_enc_fps: 0
                }],
                VideoDecState: []
            }
        }
    };
    for (var key in peerconnections) {
        (function (index) {
            var currentPC = peerconnections[index];
            currentPC.getStats().then(function (result) {
                //console.log("[wadesheng] BEGIN , INDEX = " + index);
                var videoDec = {
                    uint32_video_recv_fps: 0,
                    uint32_video_recv_br: 0, //单路视频下行码率
                    uint32_video_real_recv_pkg: 0, //单路下行收包
                    uint32_dec_height: 0,
                    uint32_dec_width: 0,
                    uint32_video_jitter: 0,
                    uint64_sender_uin: "" //tinyid
                };

                var audioItem = {
                    uint32_audio_delay: 0,
                    uint32_audio_jitter: 0,
                    uint32_audio_real_recv_pkg: 0,
                    uint32_audio_flow: 0,
                    uint32_audio_real_recv_br: 0,
                    uint64_sender_uin: ""
                };

                result.forEach(function (value) {
                    var type = value.type;
                    // console.info("[wadesheng] node type " + type, value);
                    if (type === "inbound-rtp" && index != 0) {
                        var id = value["id"];
                        var mediaType = null;
                        if (!!id) {
                            if (id.toLowerCase().indexOf("video") !== -1) {
                                mediaType = "video";
                            } else if (id.toLowerCase().indexOf("audio") !== -1) {
                                mediaType = "audio";
                            }
                        }

                        if (mediaType === "video" || mediaType === "audio") {
                            var bytesReceived = value["bytesReceived"] || "0";
                            var packetsReceived = value["packetsReceived"] || "0";
                            if (mediaType === "video") {
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br += parseInt(bytesReceived);
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg = parseInt(packetsReceived);

                                videoDec.uint64_sender_uin = key;
                                videoDec.uint32_video_real_recv_pkg = parseInt(packetsReceived);
                                videoDec.uint32_video_recv_br = parseInt(bytesReceived);
                                videoDec.uint32_video_jitter = value["jitter"] * 1000;
                            } else {
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_br += parseInt(bytesReceived);
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg += parseInt(packetsReceived);
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow += parseInt(bytesReceived);

                                audioItem.uint64_sender_uin = index;
                                audioItem.uint32_audio_real_recv_pkg = parseInt(packetsReceived);
                                audioItem.uint32_audio_flow = parseInt(bytesReceived);
                                audioItem.uint32_audio_jitter = value["jitter"] * 1000;
                            }
                        }
                    } else if (type === "outbound-rtp" && index == "0") {
                        var mediaType = value["mediaType"];
                        if (mediaType === "video" || mediaType === "audio") {
                            var bytesSend = value["bytesSent"] || "0";
                            var packetsSend = value["packetsSent"] || "0";

                            if (mediaType === "video") {
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br += parseInt(bytesSend);
                                finalReportData.WebRTCQualityReq.VideoReportState.uint32_send_total_pkg = parseInt(packetsSend);
                            } else {
                                finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br += parseInt(bytesSend);
                            }
                        }
                    } else if (type === "track") {
                        var id = value["id"];
                        if (index == "0") {} else {
                            if (!!id && id.toLowerCase().indexOf("video") !== -1) {
                                videoDec.uint32_video_recv_fps = parseInt(value["framesPerSecond"] || "0");
                                videoDec.uint32_dec_width = parseInt(value["frameWidth"]);
                                videoDec.uint32_dec_height = parseInt(value["frameHeight"]);
                            }
                        }
                    } else if (type === "candidate-pair") {
                        var rrt = value["currentRoundTripTime"] * 1000;
                        if (index == "0") {
                            finalReportData.WebRTCQualityReq.uint32_delay = rrt;
                        } else {}
                    }
                });

                if (index != "0") {
                    finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState.push(audioItem);
                    finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState.push(videoDec);
                }

                doneSize++;
                if (doneSize >= size) {
                    finalReportData = self.parseFinalReport(finalReportData, true);
                    callback(true, finalReportData);
                }
            }).catch(function (error) {
                doneSize++;
                if (doneSize >= size) {
                    finalReportData = self.parseFinalReport(finalReportData, true);
                    callback(true, finalReportData);
                }
            });
        })(key);
    }
};

Report.fn.quality = function () {
    var global = this.global;
    var self = this;
    //Log.uploadWebLog(global, "start report quality data", null, Constants.KEY_TAG.RTC_LOG_TAG);

    if (!global.websocket) {
        Log.RTCLog.error("report quality data end, websocket is null!");
        Log.uploadWebLog(global, "report quality data end, websocket is null!", null, Constants.KEY_TAG.RTC_LOG_TAG);
        return;
    }

    if (new Date().valueOf() - global.reportTime > 5000) {
        var errMsg = "report quality time out, pre report time " + global.reportTime + " this report time " + new Date().valueOf();
        // Log.RTCLog.error(errMsg);
        Log.uploadWebLog(global, errMsg, null, Constants.KEY_TAG.REPORT_TIME_OUT_TAG);
    }

    if (DetectRTC.isSafari()) {
        this.getQualityReportFromSafariAsync(global.peerConnections, function (result, data) {
            var sendData = self.createJsonFromTag(Constants.RTC_EVENT.ON_QUALITY_REPORT);

            if (!result) {
                Log.RTCLog.error("[GetQualityReportFronSafariAsync] failed! ");
                sendData.data = self.handleTotalReportData({});
            } else {
                sendData.data = data;
            }

            sendData.data = self.addCommonInfoInQualityReport(sendData.data, global.ostype, global.ostype, global.relayip, global.localip, global.config.tinyid, global.roomid, global.cpunum, global.cpuname);
            /*加入能力上报*/
            self.emitter.emit('onQualityReport', sendData.data);
            try {
                if (global.websocket) {
                    global.websocket.send(JSON.stringify(sendData));
                    // Log.uploadWebLog(global, "report quality data send!", null, Constants.KEY_TAG.RTC_LOG_TAG);
                    global.reportTime = new Date().valueOf();
                }
            } catch (e) {
                Log.RTCLog.error("websocket send data error : " + e.message);
                Log.uploadWebLog(global, "websocket send data error : " + e.message, null, Constants.KEY_TAG.RTC_LOG_TAG);
            }
        });
    } else if (DetectRTC.isFF()) {
        this.getQualityReportFromFFAsync(global.peerConnections, function (result, data) {
            var sendData = self.createJsonFromTag(Constants.RTC_EVENT.ON_QUALITY_REPORT);

            if (!result) {
                Log.RTCLog.error("[GetQualityReportFronSafariAsync] failed! ");
                sendData.data = self.handleTotalReportData({});
            } else {
                sendData.data = data;
            }

            sendData.data = self.addCommonInfoInQualityReport(sendData.data, global.ostype, global.ostype, global.relayip, global.localip, global.config.tinyid, global.roomid, global.cpunum, global.cpuname);
            /*加入能力上报*/
            self.emitter.emit('onQualityReport', sendData.data);
            try {
                if (global.websocket) {
                    global.websocket.send(JSON.stringify(sendData));
                    // Log.uploadWebLog(global, "report quality data send!", null, Constants.KEY_TAG.RTC_LOG_TAG);
                    global.reportTime = new Date().valueOf();
                }
            } catch (e) {
                Log.RTCLog.error("websocket send data error : " + e.message);
                Log.uploadWebLog(global, "websocket send data error : " + e.message, null, Constants.KEY_TAG.RTC_LOG_TAG);
            }
        });
    } else {
        this.getQulityAsync(global.peerConnections, function (result, data) {
            var sendData = self.createJsonFromTag(Constants.RTC_EVENT.ON_QUALITY_REPORT);
            if (!result) {
                sendData.data = self.handleTotalReportData({});
            } else {
                sendData.data = data;
            }
            sendData.data = self.addCommonInfoInQualityReport(sendData.data, global.ostype, global.ostype, global.relayip, global.localip, global.config.tinyid, global.roomid, global.cpunum, global.cpuname);
            /*加入能力上报*/
            self.emitter.emit('onQualityReport', sendData.data);
            try {
                if (global.websocket) {
                    global.websocket.send(JSON.stringify(sendData));
                    // Log.uploadWebLog(global, "report quality data send!", null, Constants.KEY_TAG.RTC_LOG_TAG);
                    global.reportTime = new Date().valueOf();
                }
            } catch (e) {
                Log.RTCLog.error("websocket send data error : " + e.message);
                Log.uploadWebLog(global, "[QUALITY REPORT]websocket send data error : " + e.message, null, Constants.KEY_TAG.RTC_LOG_TAG);
            }
        });
    }
};
Report.fn.parseFinalReport = function (finalReportData, isSafari) {
    isSafari = isSafari || false;
    finalReportData.WebRTCQualityReq.uint64_end_utime = new Date().getTime();
    if (!global.preReportData) {
        global.preReportData = Util.cloneObj(finalReportData);

        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br = finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br * 8 / 2;
        finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br = finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br * 8 / 2;

        if (isSafari) {
            finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br = finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br * 8 / 2;
        }

        var videoDecLen = finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState.length;
        for (var i = 0; i < videoDecLen; i++) {
            finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState[i].uint32_video_recv_br = finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState[i].uint32_video_recv_br * 8 / 2;
        }

        finalReportData.WebRTCQualityReq.uint32_total_send_bps = finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br + finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br;
        return finalReportData;
    } else {
        var tmp = Util.cloneObj(finalReportData);
        finalReportData.WebRTCQualityReq.uint64_begine_utime = global.preReportData.WebRTCQualityReq.uint64_end_utime;

        finalReportData.WebRTCQualityReq.uint32_real_num -= global.preReportData.WebRTCQualityReq.uint32_real_num;
        if (finalReportData.WebRTCQualityReq.uint32_real_num <= 0) {
            finalReportData.WebRTCQualityReq.uint32_real_num = 0;
        }

        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg -= global.preReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg;
        if (finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg <= 0) {
            finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg = 0;
        }

        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br -= global.preReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br;
        if (finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br <= 0) {
            finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br = 0;
        }
        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br = finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br * 8 / 2;

        if (isSafari) {
            finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br -= global.preReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br;
            if (finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br <= 0) {
                finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br = 0;
            }
            finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br = finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br * 8 / 2;
        }

        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow -= global.preReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow;
        if (finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow <= 0) {
            finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow = 0;
        }

        finalReportData.WebRTCQualityReq.VideoReportState.uint32_send_total_pkg -= global.preReportData.WebRTCQualityReq.VideoReportState.uint32_send_total_pkg;
        if (finalReportData.WebRTCQualityReq.VideoReportState.uint32_send_total_pkg <= 0) {
            finalReportData.WebRTCQualityReq.VideoReportState.uint32_send_total_pkg = 0;
        }

        finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br -= global.preReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br;
        if (finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br <= 0) {
            finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br = 0;
        }
        finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br = finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br * 8 / 2;

        finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg -= global.preReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg;
        if (finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg <= 0) {
            finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg = 0;
        }

        //统计各路
        var len = finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState.length;
        for (var i = 0; i < len; i++) {
            var decVideoItem = finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState[i];
            var tinyid = decVideoItem.uint64_sender_uin;
            var recvPackage = decVideoItem.uint32_video_real_recv_pkg;
            var recvBr = decVideoItem.uint32_video_recv_br;

            for (var k = 0; k < global.preReportData.WebRTCQualityReq.VideoReportState.VideoDecState.length; k++) {
                var tempItem = global.preReportData.WebRTCQualityReq.VideoReportState.VideoDecState[k];

                if (tempItem.uint64_sender_uin === tinyid) {
                    //console.error("1 = " + recvPackage + " 2 = " + recvBr + " 3 = " + tempItem.uint32_video_real_recv_pkg + " 4 = " + tempItem.uint32_video_recv_br);
                    recvPackage -= tempItem.uint32_video_real_recv_pkg;
                    if (recvPackage <= 0) {
                        recvPackage = 0;
                    }

                    recvBr -= tempItem.uint32_video_recv_br;
                    if (recvBr <= 0) {
                        recvBr = 0;
                    }
                    break;
                }
            }
            finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState[i].uint32_video_real_recv_pkg = recvPackage;
            finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState[i].uint32_video_recv_br = recvBr * 8 / 2;
        }

        len = finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState.length;
        for (var i = 0; i < len; i++) {
            var decAudioItem = finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState[i];
            var audioRecvPack = decAudioItem.uint32_audio_real_recv_pkg;
            var audioRecvFlow = decAudioItem.uint32_audio_flow;
            var tinyid = decAudioItem.uint64_sender_uin;
            for (var h = 0; h < global.preReportData.WebRTCQualityReq.AudioReportState.AudioDecState.length; h++) {
                var tempAudioItem = global.preReportData.WebRTCQualityReq.AudioReportState.AudioDecState[h];
                if (tempAudioItem.uint64_sender_uin === tinyid) {
                    audioRecvPack -= tempAudioItem.uint32_audio_real_recv_pkg;
                    if (audioRecvPack <= 0) {
                        audioRecvPack = 0;
                    }

                    audioRecvFlow -= tempAudioItem.uint32_audio_flow;
                    if (audioRecvFlow <= 0) {
                        audioRecvFlow = 0;
                    }
                    break;
                }
            }
            finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState[i].uint32_audio_real_recv_pkg = audioRecvPack;
            finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState[i].uint32_audio_flow = audioRecvFlow;
            finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState[i].uint32_audio_real_recv_br = audioRecvFlow * 8 / 2;
        }

        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_br = finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow * 8 / 2;
        finalReportData.WebRTCQualityReq.uint32_real_num = finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg + finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg;
        finalReportData.WebRTCQualityReq.uint32_total_send_bps = finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br + finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br;
        finalReportData.WebRTCQualityReq.uint32_total_recv_bps = finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_br + finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br;
        global.preReportData = tmp;
        return finalReportData;
    }
};
Report.fn.handleTotalReportData = function (statsMap) {
    var global = this.global;
    var cpuMaxFrequency = 0;
    if (navigator && navigator.cpuMaxFrequency) {
        cpuMaxFrequency = navigator.cpuMaxFrequency;
    }
    var micStatus = 0;
    if (global.localStream) {
        var audioTracks = global.localStream.getAudioTracks();
        if (audioTracks && audioTracks[0] && audioTracks[0].muted) {
            micStatus = 3;
        } else {
            micStatus = 1;
        }
    }
    var finalReportData = {
        WebRTCQualityReq: {
            uint64_begine_utime: new Date().getTime(),
            uint64_end_utime: 0,
            uint32_real_num: 0, //音频总下行包
            uint32_delay: 0, // Conn-audio-1-0 googRtt
            uint32_CPU_curfreq: cpuMaxFrequency,
            uint32_total_send_bps: 0, //总上行码率
            uint32_total_recv_bps: 0,
            AudioReportState: {
                uint32_audio_enc_pkg_br: 0, //音频上行码率
                uint32_audio_real_recv_pkg: 0, //音频下行收包
                uint32_audio_flow: 0, //音频下行流量
                uint32_audio_real_recv_br: 0, //音频下行码率
                uint32_audio_delay: 0, //googCurrentDelayMs
                uint32_audio_jitter: 0, //googJitterBufferMs
                uint32_microphone_status: micStatus,
                AudioDecState: []
            },
            VideoReportState: {
                uint32_video_delay: 0, //googTargetDelayMs
                uint32_video_snd_br: 0, //视频上行码率
                uint32_video_total_real_recv_pkg: 0, //视频下行收包
                uint32_video_rcv_br: 0, //视频下行码率
                uint32_send_total_pkg: 0, //视频上行发包
                VideoEncState: [{
                    uint32_enc_width: 0,
                    uint32_enc_height: 0,
                    uint32_capture_fps: 0,
                    uint32_enc_fps: 0
                }],
                VideoDecState: []
            }
        }
    };
    for (var mapKey in statsMap) {
        var itemList = statsMap[mapKey];
        if (mapKey === 0 || mapKey === "0") {
            //统计上行
            itemList.forEach(function (value) {
                var id = value["id"];
                var mediaType = value["mediaType"];
                if (id.indexOf("ssrc") !== -1 && id.indexOf("send") !== -1) {
                    if (mediaType === "video") {
                        //视频上行
                        finalReportData.WebRTCQualityReq.VideoReportState.uint32_send_total_pkg = parseInt(value["packetsSent"] || 0);
                        finalReportData.WebRTCQualityReq.VideoReportState.VideoEncState[0].uint32_capture_fps = parseInt(value["googFrameRateInput"] || 0);
                        finalReportData.WebRTCQualityReq.VideoReportState.VideoEncState[0].uint32_enc_fps = parseInt(value["googFrameRateSent"] || 0);
                        finalReportData.WebRTCQualityReq.VideoReportState.VideoEncState[0].uint32_enc_width = parseInt(value["googFrameWidthSent"] || 0);
                        finalReportData.WebRTCQualityReq.VideoReportState.VideoEncState[0].uint32_enc_height = parseInt(value["googFrameHeightSent"] || 0);
                    } else {
                        //音频上行
                        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_enc_pkg_br = parseInt(value["bytesSent"] || 0);
                    }
                }

                if (id.indexOf("bweforvideo") !== -1) {
                    var transmitBitrate = value["googTransmitBitrate"];
                    finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_snd_br = parseInt(transmitBitrate || 0);
                }

                if (id.indexOf("Conn-audio-1-0") !== -1) {
                    finalReportData.WebRTCQualityReq.uint32_delay = parseInt(value["googRtt"] || 0);
                }
            });
        } else {
            //统计下行
            itemList.forEach(function (value) {
                var id = value["id"];
                var mediaType = value["mediaType"];
                if (id.indexOf("ssrc") !== -1 && id.indexOf("recv") !== -1) {
                    if (mediaType === "video") {
                        finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_delay = parseInt(value["googTargetDelayMs"] || 0);
                        finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_total_real_recv_pkg += parseInt(value["packetsReceived"] || 0);
                        finalReportData.WebRTCQualityReq.VideoReportState.uint32_video_rcv_br += parseInt(value["bytesReceived"] || 0);
                        var videoDec = {
                            uint32_video_recv_fps: 0,
                            uint32_video_recv_br: 0, //单路视频下行码率
                            uint32_video_real_recv_pkg: 0, //单路下行收包
                            uint32_dec_height: 0,
                            uint32_dec_width: 0,
                            uint32_video_jitter: 0,
                            uint64_sender_uin: "" //tinyid
                        };
                        videoDec.uint32_dec_height = parseInt(value["googFrameHeightReceived"] || 0);
                        videoDec.uint32_dec_width = parseInt(value["googFrameWidthReceived"] || 0);
                        videoDec.uint32_video_real_recv_pkg = parseInt(value["packetsReceived"] || 0);
                        videoDec.uint32_video_recv_fps = parseInt(value["googFrameRateReceived"] || 0);
                        videoDec.uint32_video_recv_br = parseInt(value["bytesReceived"] || 0);
                        videoDec.uint32_video_jitter = parseInt(value["googJitterBufferMs"] || 0);

                        videoDec.uint64_sender_uin = mapKey;

                        finalReportData.WebRTCQualityReq.VideoReportState.VideoDecState.push(videoDec);
                    } else {
                        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_delay = parseInt(value["googCurrentDelayMs"] || 0);
                        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_jitter = parseInt(value["googJitterBufferMs"] || 0);
                        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_real_recv_pkg += parseInt(value["packetsReceived"] || 0);
                        finalReportData.WebRTCQualityReq.AudioReportState.uint32_audio_flow += parseInt(value["bytesReceived"] || 0);
                        finalReportData.WebRTCQualityReq.uint32_real_num += parseInt(value["packetsReceived"] || 0);

                        var audioItem = {
                            uint32_audio_delay: 0,
                            uint32_audio_jitter: 0,
                            uint32_audio_real_recv_pkg: 0,
                            uint32_audio_flow: 0,
                            uint32_audio_real_recv_br: 0,
                            uint64_sender_uin: ""
                        };

                        audioItem.uint32_audio_flow = parseInt(value["bytesReceived"] || 0);
                        audioItem.uint32_audio_delay = parseInt(value["googCurrentDelayMs"] || 0);
                        audioItem.uint32_audio_real_recv_pkg = parseInt(value["packetsReceived"] || 0);
                        audioItem.uint32_audio_jitter = parseInt(value["googJitterBufferMs"] || 0);
                        audioItem.uint64_sender_uin = mapKey;

                        finalReportData.WebRTCQualityReq.AudioReportState.AudioDecState.push(audioItem);
                    }
                }
            });
        }
    }

    //统计结束
    return this.parseFinalReport(finalReportData);
};

Report.fn.endEndReport = function (endResult) {
    var global = this.global;
    try {
        if (!global.websocket || !global.websocket.socketid) {
            Log.RTCLog.warn("do not send endreason to server, the socketid is null!");
            return;
        }

        var sendData = this.createJsonFromTag(Constants.RTC_EVENT.ON_END_REPORT);
        sendData.data = {
            dwExitRoomTime: new Date().getTime(),
            dwEndResult: endResult,
            socketid: global.websocket.socketid
        };

        if (global.websocket) {
            global.websocket.send(JSON.stringify(sendData));
        }
    } catch (e) {
        Log.RTCLog.error("send end report data error : " + e.message);
    }
};

Report.fn.reportSSO = function (msg) {
    var global = this.global;
    if (!msg.env) {
        msg.env = Constants.HOST_NAME;
        if (global.isbkurl) {
            msg.env = Constants.BK_HOST_NAME;
        }
    }
    var ssoUrl = "https://yun.tim.qq.com/v5/AVQualityReportSvc/C2S?sdkappid=" + global.config.sdkAppId + "&openid=" + global.config.openid + "&random=0&cmdtype=jssdk";
    fly.post(ssoUrl, JSON.stringify(msg), { parseJson: false }).catch(function (error) {
        console.error("report to sso error: ", error);
    });
};

module.exports = Report;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var Constants = __webpack_require__(0);
var DetectRTC = __webpack_require__(3);
var Log = __webpack_require__(2);
var objectAssign = __webpack_require__(9);

var MediaUtil = function MediaUtil(global, emitter) {
    this.global = global;
    this.emitter = emitter;
};
MediaUtil.fn = MediaUtil.prototype;
MediaUtil.fn.init = function (global, emitter) {
    this.global = global;
    this.emitter = emitter;
    this.hasRetryOpenCamera = false;
}, MediaUtil.fn.gum = function (opts, succ, fail) {
    var global = this.global;
    var self = this;
    if (opts.constraints) {
        Log.RTCLog.info("try to get user media! global.constraints:" + JSON.stringify(opts.constraints));
        Log.uploadWebLog(global, "try to get user media! global.constraints:" + JSON.stringify(opts.constraints), null, Constants.KEY_TAG.RTC_LOG_TAG);
    }
    console.debug('constraints', JSON.stringify(opts.constraints));
    if (!navigator.mediaDevices) {
        console.error(Constants.ERROR_MSG.SECURITY_ERROR);
        return;
    }
    navigator.mediaDevices.getUserMedia(opts.constraints).then(function (stream) {
        if (succ) {
            self.hasRetryOpenCamera = false;
            setTimeout(function () {
                //屏蔽回调引起的error
                succ({
                    errorCode: 0,
                    stream: stream
                });
            }, 16);
            global.constraintsList.push({
                result: "ok",
                constraint: JSON.stringify(opts.constraints)
            });
            Log.RTCLog.info("get user media ok! global.constraints:" + JSON.stringify(opts.constraints));
            Log.uploadWebLog(global, "get user media ok! global.constraints:" + JSON.stringify(opts.constraints), null, Constants.KEY_TAG.RTC_LOG_TAG);
        }
        global.rtcReport.reportSSO({
            reportType: "OpenCamera",
            errorCode: "0",
            errorMsg: "OpenCamera Succ! " + JSON.stringify(opts.constraints)
        });
    }).catch(function (error) {
        var needRetry = typeof opts.needRetry !== 'undefined' ? opts.needRetry : true;
        if (!needRetry || self.hasRetryOpenCamera || error.name === 'NotFoundError' || error.name === 'NotSupportedError') {
            if (global) {
                var errorMsg = "get user media failed : error = " + error.name + " global.constraints:" + JSON.stringify(opts.constraints);
                Log.RTCLog.error(errorMsg);
                Log.uploadWebLog(global, errorMsg, null, Constants.KEY_TAG.RTC_LOG_TAG);
                global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_FAILED, errorMsg);
                global.constraintsList.push({
                    result: errorMsg,
                    constraint: JSON.stringify(opts.constraints)
                });

                global.rtcReport.reportSSO({
                    reportType: "OpenCamera",
                    errorCode: "1",
                    errorMsg: errorMsg
                });
            }
            if (error.name === 'NotSupportedError') {
                console.error(Constants.ERROR_MSG.SECURITY_ERROR);
            }
            error.constraint = error.constraint || opts.constraints;
            fail && fail({
                errorCode: Constants.ERROR_CODE.GET_USERMEDIA_FAILED,
                errorMsg: errorMsg,
                extInfo: error
            });
        } else {
            if (global) {
                var errorMsg = "get user media failed, error = " + error.name + " opts.constraints:" + JSON.stringify(opts.constraints) + "; RetryOpenCamera";
                console.warn(errorMsg);
                Log.uploadWebLog(global, errorMsg, null, Constants.KEY_TAG.RTC_LOG_TAG);
                global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_FAILED, errorMsg);

                global.constraintsList.push({
                    result: errorMsg,
                    constraint: JSON.stringify(opts.constraints)
                });
            }
            if (opts.constraints.video) {
                opts.constraints.video = true;
            }
            self.hasRetryOpenCamera = true;

            self.gum({ constraints: opts.constraints }, succ, fail);
        }
    });
};

MediaUtil.fn.gumFromScreenByNativeApi = function (opts, succ, fail) {
    var global = this.global;
    var emitter = this.emitter;
    var screen_constraints = opts.constraints;
    //获取屏幕分享
    console.warn('gumFromScreenByNativeApi', screen_constraints.video);
    var promises = [Promise.resolve(navigator.mediaDevices.getDisplayMedia({ video: true }))];
    //根据配置决定是否获取麦克风
    if (screen_constraints.audio) {
        var constraint = { audio: true };
        if (screen_constraints.audio.deviceId) {
            constraint = {
                audio: {
                    deviceId: { exact: screen_constraints.audio.deviceId }
                }
            };
        }
        promises.push(Promise.resolve(navigator.mediaDevices.getUserMedia(constraint)));
    }
    Promise.all(promises).then(function (streams) {
        global.constraintsList.push({
            result: "ok",
            constraint: JSON.stringify(screen_constraints)
        });
        var stream = streams[0];
        if (streams.length > 1) {
            stream.addTrack(streams[1].getAudioTracks()[0]);
        }

        var info = "get user media ok! screen_constraints:" + JSON.stringify(screen_constraints) + '; constraints:' + JSON.stringify(opts.constraints);
        Log.RTCLog.info(info);
        Log.uploadWebLog(info, null, Constants.KEY_TAG.RTC_LOG_TAG);

        global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_OK, screen_constraints);
        succ && succ({
            errorCode: 0,
            stream: stream
        });
    }, function (error) {
        var errorMsg = "get user media failed : error = " + error.message + "screen_constraints" + JSON.stringify(screen_constraints) + " global.constraints:" + JSON.stringify(global.constraints);
        Log.RTCLog.error(errorMsg);
        Log.uploadWebLog(errorMsg, null, Constants.KEY_TAG.RTC_LOG_TAG);

        global.constraintsList.push({
            result: errorMsg,
            constraint: JSON.stringify(screen_constraints)
        });
        global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_FAILED, errorMsg);
        fail && fail({
            errorCode: Constants.ERROR_CODE.GET_USERMEDIA_FAILED,
            errorMsg: errorMsg,
            extInfo: error
        });
        if (!fail) {
            emitter.emit("onErrorNotify", {
                errorCode: Constants.ERROR_CODE.GET_USERMEDIA_FAILED,
                errorMsg: errorMsg,
                extInfo: error
            });
        }
    });
};

MediaUtil.fn.gumFromScreenByExtension = function (opts, succ, fail) {
    var global = this.global;
    var emitter = this.emitter;
    var screen_constraints = opts.constraints;
    //获取屏幕分享
    console.debug('constraints', opts.constraints);
    var promises = [Promise.resolve(navigator.mediaDevices.getUserMedia(objectAssign({}, screen_constraints, { audio: false })))];
    //根据配置决定是否获取麦克风
    if (screen_constraints.audio) {
        var constraint = { audio: true };
        if (screen_constraints.audio.deviceId) {
            constraint = {
                audio: {
                    deviceId: { exact: screen_constraints.audio.deviceId }
                }
            };
        }
        promises.push(Promise.resolve(navigator.mediaDevices.getUserMedia(constraint)));
    }
    Promise.all(promises).then(function (streams) {
        global.constraintsList.push({
            result: "ok",
            constraint: JSON.stringify(screen_constraints)
        });
        var stream = streams[0];
        if (streams.length > 1) {
            stream.addTrack(streams[1].getAudioTracks()[0]);
        }

        var info = "get user media ok! screen_constraints:" + JSON.stringify(screen_constraints) + '; constraints:' + JSON.stringify(opts.constraints);
        Log.RTCLog.info(info);
        Log.uploadWebLog(info, null, Constants.KEY_TAG.RTC_LOG_TAG);

        global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_OK, screen_constraints);
        succ && succ({
            errorCode: 0,
            stream: stream
        });
    }, function (error) {
        var errorMsg = "get user media failed : error = " + error.message + "screen_constraints" + JSON.stringify(screen_constraints) + " global.constraints:" + JSON.stringify(global.constraints);
        Log.RTCLog.error(errorMsg);
        Log.uploadWebLog(errorMsg, null, Constants.KEY_TAG.RTC_LOG_TAG);

        global.constraintsList.push({
            result: errorMsg,
            constraint: JSON.stringify(screen_constraints)
        });
        global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_FAILED, errorMsg);
        fail && fail({
            errorCode: Constants.ERROR_CODE.GET_USERMEDIA_FAILED,
            errorMsg: errorMsg,
            extInfo: error
        });
        if (!fail) {
            emitter.emit("onErrorNotify", {
                errorCode: Constants.ERROR_CODE.GET_USERMEDIA_FAILED,
                errorMsg: errorMsg,
                extInfo: error
            });
        }
    });
};

MediaUtil.fn.gumByMediaDevice = function (opts, succ, fail) {
    var global = this.global;
    var emitter = this.emitter;

    this.gum(opts, function (data) {
        var stream = data.stream;
        global.rtcReport.send(Constants.RTC_EVENT.ON_GET_USER_MEDIA_OK, opts.constraints);
        succ && succ({
            errorCode: 0,
            stream: stream
        });
    }, function (error) {
        fail && fail(error);
        var errorMsg = "get user media failed : error = " + error.message + ",while global.constraints:" + JSON.stringify(global.constraints);
        if (!fail) {
            emitter.emit("onErrorNotify", {
                errorCode: Constants.ERROR_CODE.GET_USERMEDIA_FAILED,
                errorMsg: errorMsg,
                extInfo: error
            });
        }
    });
};
/* 
    生成 constraints

    opts 会带的信息包括
       | audio         | Boolean |否 | 是否采集音频，默认true  |
        | video         | Boolean |否 | 是否采集视频，默认true   |
        | screen         | Boolean |否 | 是否采集屏幕分享 ,默认false   |
        | screenSources | string   |否 | 屏幕分享采集的媒介 用半角逗号隔开， 可选选项包括  screen window tab audio |
        | attributes         | Object |否 | 推流相关配置的属性 |
        | videoDevice         | Device |否 | 指定设备，getVideoDevices 获取的device item   |
        | audioDevice         | Device |否 | 指定设备，getVideoDevices 获取的audio item   |
        | needRetry         | Boolean |否 | 使用参数配置获取失败时，是否允许降级去掉配置重试 ,默认为true | 
    
    
        1.屏幕分享:
            配置帧率
            配置分辨率
        2.摄像头：

*/

MediaUtil.fn.packConstraints = function (constraints, opts, ext) {
    var new_constraints = objectAssign({}, constraints);
    if (opts && opts.screen) {
        new_constraints.video.mandatory.maxFrameRate = opts.attributes && (opts.attributes.maxFrameRate || opts.attributes.frameRate) || ext.frameRate;
        new_constraints.video.mandatory.minFrameRate = opts.attributes && (opts.attributes.minFrameRate || opts.attributes.frameRate) || ext.frameRate;
        return new_constraints;
    }

    if (opts) {
        if (typeof opts.audio !== 'undefined') {
            new_constraints.audio = opts.audio;
        }
        if (typeof opts.video !== 'undefined') {
            new_constraints.video = opts.video;
        }
    }
    var global = this.global;
    if (DetectRTC.isSafari()) {
        if (new_constraints.video && new_constraints.video.deviceId) {
            new_constraints = {
                "audio": global.config.audioActive,
                "video": {
                    deviceId: new_constraints.video.deviceId
                }
            };
        } else {
            new_constraints = {
                "audio": global.config.audioActive,
                "video": global.config.videoActive
            };
        }

        if (opts && opts.videoDevice && opts.videoDevice.facingMode) {
            if (new_constraints.video && new_constraints.video instanceof Boolean) {
                new_constraints.video = {};
            }
            if (_typeof(new_constraints.video) === 'object') {
                new_constraints.video.facingMode = opts.videoDevice.facingMode;
            } else {
                new_constraints.video.facingMode = opts.videoDevice.facingMode;
                new_constraints.video = {
                    facingMode: opts.videoDevice.facingMode
                };
            }
        }
    } else {
        if (opts && opts.audioDevice && opts.audioDevice.deviceId) {
            var exact = { exact: opts.audioDevice.deviceId };
            if (_typeof(new_constraints.audio) === 'object') {
                new_constraints.audio.deviceId = exact;
            } else {
                new_constraints.audio = {
                    deviceId: exact
                };
            }
        }
        if (opts && opts.videoDevice && opts.videoDevice.deviceId) {
            if (new_constraints.video && (new_constraints.video instanceof Boolean || new_constraints.video === true)) {
                new_constraints.video = {};
            }
            if (_typeof(new_constraints.video) === 'object') {
                new_constraints.video.deviceId = opts.videoDevice.deviceId;
            } else {
                new_constraints.video.deviceId = opts.videoDevice.deviceId;
                new_constraints.video = {
                    deviceId: opts.videoDevice.deviceId
                };
            }
        }
        if (opts && opts.videoDevice && opts.videoDevice.facingMode) {
            if (new_constraints.video && (new_constraints.video instanceof Boolean || new_constraints.video === true)) {
                new_constraints.video = {};
            }
            if (_typeof(new_constraints.video) === 'object') {
                new_constraints.video.facingMode = opts.videoDevice.facingMode;
            } else {
                new_constraints.video.facingMode = opts.videoDevice.facingMode;
                new_constraints.video = {
                    facingMode: opts.videoDevice.facingMode
                };
            }
        }
    }
    if (new_constraints.video && opts && opts.video != false && opts.attributes) {
        if (_typeof(new_constraints.video) !== 'object' || new_constraints.video instanceof Boolean || new_constraints.video === true) {
            new_constraints.video = {};
        }
        var width = opts.attributes && opts.attributes.width || 0;
        var height = opts.attributes && opts.attributes.height || 0;
        var frameRate = opts.attributes && (opts.attributes.maxFrameRate || opts.attributes.frameRate) || ext.frameRate || 0;

        if (width) {
            new_constraints.video.width = {
                max: width, ideal: width
            };
        }
        if (height) {
            if (width) {
                var ratio = width / height;
                new_constraints.video.aspectRatio = {
                    max: ratio, ideal: ratio
                };
            } else {
                new_constraints.video.aspectRatio = {
                    max: height, ideal: height
                };
            }
        }
        if (frameRate) {
            new_constraints.video.frameRate = {
                max: frameRate, ideal: frameRate
            };
        }
    }
    return new_constraints;
};
module.exports = MediaUtil;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Log = __webpack_require__(2);
var Constants = __webpack_require__(0);

function WebSocketClient(global) {
  this.instance = null;
  this.retryCount = Constants.WS_MAX_RETRY_COUNT;
  this.url = null;
  this.hasConnect = false;
  this.relayInfo = {
    innerip: null,
    outterip: null,
    dataport: 0,
    stunport: 0
  };
  this.sessioninfo = {
    openid: null,
    tinyid: null,
    srcids: [],
    sessionid: 0,
    peersdp: {}
  };
  this.reconnectTimer = null;
  this.global = global;
}

WebSocketClient.prototype.open = function (url, orignalUrl) {
  var global = this.global;
  var that = this;
  Log.uploadWebLog(global, '[WebSocketClient : begin connection websocket server, url = ] ' + url, null, 'WebSocketTag');
  var ourl = orignalUrl || url;
  this.url = ourl;
  if (this.instance) {
    try {
      Log.uploadWebLog(global, '[WebSocketClient : old instance is not close! close it before create the new one! old readyState = ]' + this.instance.readyState + ' , old url = ' + this.instance.url, null, 'WebSocketTag');
      this.instance.onclose = function () {};
      this.instance.close(4011);
      this.instance = null;
    } catch (e) {
      Log.uploadWebLog(global, '[WebSocketClient close last instance error : ]' + e.message, null, 'WebSocketTag');
    }
  }
  this.instance = new WebSocket(url);
  this.instance.onopen = function () {
    Log.uploadWebLog(global, '[WebSocketClient instance is open success!!!]', null, 'WebSocketTag');
    that.hasConnect = true;
    that.retryCount = Constants.WS_MAX_RETRY_COUNT;
    that.onopen();
  };
  this.instance.onerror = function (e) {
    Log.uploadWebLog(global, '[WebSocketClient instance onerror! url = ]' + e.currentTarget.url, null, 'WebSocketTag');
    that.onerror(e);
  };
  this.instance.onclose = function (e) {
    Log.uploadWebLog(global, '[WebSocketClient instance close!, code = ]' + e.code + ' , url = ' + e.currentTarget.url, null, 'WebSocketTag');
    if (e.code == 1000) {
      // close cleanly
      that.onclose(e);
    } else {
      console.warn('onclose code:' + e.code + ' reason:' + e.reason);
      if (that.retryCount <= 0) {
        that.onclose(e);
      } else {
        that.onneedreconnect(e);
      }
    }
  };
  this.instance.onmessage = function (e) {
    that.onmessage(e);
  };
};

WebSocketClient.prototype.onopen = function () {
  console.info('WebSocketClient : onopen ', arguments);
};

WebSocketClient.prototype.onmessage = function (data) {};

WebSocketClient.prototype.onerror = function (e) {
  console.error('WebSocketClient : onerror ', arguments);
};

WebSocketClient.prototype.onclose = function (e) {
  console.warn('WebSocketClient : onclose', arguments);
};

WebSocketClient.prototype.onneedreconnect = function (e) {
  this.reconnect(this.global.config.userSig);
};

WebSocketClient.prototype.close = function () {
  Log.uploadWebLog(global, '[WebSocketClient --> on close!]');
  clearTimeout(this.reconnectTimer);
  if (this.instance) {
    this.instance.close(1000);
    this.instance = null;
  }
  this.hasConnect = false;
  this.url = null;
  this.relayInfo = {
    innerip: null,
    outterip: null,
    dataport: 0,
    stunport: 0
  };
  this.sessioninfo = {
    openid: null,
    tinyid: null,
    srcids: [],
    peersdp: {}
  };
};

WebSocketClient.prototype.reconnect = function (sig) {
  Log.uploadWebLog(global, '[WebSocketClient --> begin reconnect!!! sig = ]' + sig);
  console.warn('websocketclient try reconnect!');
  var that = this;
  if (sig) {
    this.url = this.replaceURLValue(this.url, 'userSig', sig);
  }
  var dist = Constants.WS_RETRY_DIST * (Constants.WS_MAX_RETRY_COUNT - that.retryCount + 1);
  this.reconnectTimer = setTimeout(function () {
    if (that.retryCount <= 0) {
      that.close();
      return;
    }
    that.retryCount--;
    Log.uploadWebLog(global, '[WebSocketClient --> reconnectting!!!]');
    console.warn('websocketclient reconnecting');
    if (!that.hasConnect) {
      that.open(that.url);
    } else {
      var finalurl = that.url + '&iip=' + that.relayInfo.innerip + '&dp=' + that.relayInfo.dataport + '&oip=' + that.relayInfo.outterip + '&sp=' + that.relayInfo.stunport + '&rc=1';
      that.open(finalurl, that.url);
    }
  }, dist > 3000 ? dist : 3000);
};

WebSocketClient.prototype.send = function (msg) {
  if (this.instance && this.instance.readyState == this.instance.OPEN) {
    Log.debugout.log('[INFO][websocket][send]' + msg);
    this.instance.send(msg);
  }
};

WebSocketClient.prototype.replaceURLValue = function (url, paramName, replaceWith) {
  var re = eval('/(' + paramName + '=)([^&]*)/gi');
  return url.replace(re, paramName + '=' + replaceWith);
};

module.exports = WebSocketClient;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Constants = __webpack_require__(0);
var DetectRTC = __webpack_require__(3);

function addStreamStopListener(stream, callback) {
    var streamEndedEvent = 'ended';
    if ('oninactive' in stream) {
        streamEndedEvent = 'inactive';
    }
    stream.preventEvent = 0;

    var stream_listener = function stream_listener() {
        if (stream.preventEvent) return;
        callback({ type: 'stream' });
    };

    var video_listener = function video_listener() {
        if (stream.preventEvent) return;
        callback({ type: 'video' });
    };

    var audio_listener = function audio_listener() {
        if (stream.preventEvent) return;
        callback({ type: 'audio' });
    };
    stream.removeEventListener(streamEndedEvent, stream_listener);
    stream.addEventListener(streamEndedEvent, stream_listener);
    stream.getAudioTracks().forEach(function (track) {
        track.removeEventListener('ended', audio_listener);
        track.addEventListener('ended', audio_listener);
    });
    stream.getVideoTracks().forEach(function (track) {
        track.removeEventListener('ended', video_listener);
        track.addEventListener('ended', video_listener);
    });
}

var StreamHandler = function StreamHandler(global, emitter) {
    this.global = global;
    this.emitter = emitter;
};
StreamHandler.fn = StreamHandler.prototype;

StreamHandler.fn.init = function (global, emitter) {
    this.global = global;
    this.emitter = emitter;
};

StreamHandler.fn.addLocal = function (peer, stream) {
    var global = this.global;
    var emitter = this.emitter;

    this.releaseLocal();
    if (global.localStream) {
        peer.removeStream(global.localStream);
    }
    global.localStream = stream;
    peer.addStream(stream);
    //重置静音设置
    this.reformLocal();
    emitter.emit("onStreamNotify", {
        isLocal: true,
        event: "onadd",
        stream: stream
    });
    addStreamStopListener(stream, function (info) {
        var data = {
            isLocal: true,
            event: 'inactive',
            stream: stream,
            type: info.type
        };
        emitter.emit("onStreamNotify", data);
        global.rtcReport.send(Constants.RTC_EVENT.ON_STREAM_NOTIFY, data);
    });
};

StreamHandler.fn.releaseLocal = function (stream) {
    var global = this.global;
    if (!stream) {
        stream = global.localStream;
    }
    if (stream) {
        stream.preventEvent = 1;
        stream.getTracks().forEach(function (track) {
            track.stop();
        });
        stream = null;
    }
};

StreamHandler.fn.reformLocal = function () {
    var global = this.global;
    var stream = global.localStream;
    var status = global.localMediaStatus;
    if (stream) {
        this.setVideoEnabledAttribute(stream, status.video);
        this.setAudioEnabledAttribute(stream, status.audio);
    }
};

StreamHandler.fn.addRemote = function (peer, info) {
    var emitter = this.emitter;
    emitter.emit("onRemoteStreamUpdate", info);
    var stream = info.stream;
    var streamEndedEvent = 'ended';
    var listener = function listener(e) {
        emitter.emit("onStreamNotify", {
            isLocal: false,
            event: streamEndedEvent,
            stream: stream,
            userId: info.userId,
            videoId: info.videoId,
            type: info.type
        });
    };
    if ('oninactive' in stream) {
        streamEndedEvent = 'inactive';
    }
    if (!peer.videoStreams) {
        peer.videoStreams = {};
    }
    // if( !peer.videoStreams[info.videoId] ){
    stream.addEventListener(streamEndedEvent, listener);
    stream.getTracks().forEach(function (item) {
        item.onended = function (event) {
            if (item.onendedFired) {
                return;
            }
            item.onendedFired = true;
            emitter.emit("onStreamNotify", {
                isLocal: false,
                event: 'onended',
                stream: stream,
                userId: info.userId,
                videoId: info.videoId,
                type: info.type
            });
        };
    });
    /* 
    MediaStreamTrack.onended No Longer Fires
    因为remote tracks可能被muted，但是永远不会被删除，MediaStreamTrack.onended 不会再被触发。相应的，使用 MediaStreamTrack.onmute来检查track是否被删除。
    */
    stream.getTracks().forEach(function (item) {
        item.onmute = function (event) {
            if (item.onendedFired) {
                return;
            }
            item.onendedFired = true;
            emitter.emit("onStreamNotify", {
                isLocal: false,
                event: 'onended',
                stream: stream,
                userId: info.userId,
                videoId: info.videoId,
                type: info.type
            });
        };
    });
    // }

    peer.videoStreams[info.videoId] = info.stream;
    emitter.emit("onStreamNotify", {
        isLocal: false,
        event: 'onadd',
        stream: stream,
        userId: info.userId,
        videoId: info.videoId,
        type: info.type
    });
};

StreamHandler.fn.setVideoEnabledAttribute = function (stream, enabled) {
    var tracks = stream.getVideoTracks();
    if (tracks && tracks.length > 0) {
        for (var i = 0; i < tracks.length; i++) {
            tracks[i].enabled = enabled;
        }
    }
};
StreamHandler.fn.setAudioEnabledAttribute = function (stream, enabled) {
    var tracks = stream.getAudioTracks();
    if (tracks && tracks.length > 0) {
        for (var i = 0; i < tracks.length; i++) {
            tracks[i].enabled = enabled;
        }
    }
};

StreamHandler.fn.parseStats = function (result) {
    /* 
    var videoData = {
        packetsSent: 0 , //发送的包
        packetsLost:0,  //发送的丢包数
        bytesSent: 0,   //发送的字节
        bytesReceived 
        frameRate: 
    }; */
    // to access native "results" array
    if (DetectRTC.isSafari()) {
        result.results.forEach(function (item) {
            // console.debug('item',item)
            if (item.type === 'inbound-rtp') {
                var isVideo = item.mediaType === 'video' || item.id.indexOf("RTCInboundRTPVideoStream") !== -1; // audio or video
                if (isVideo) {
                    result.video.ssrc = item.ssrc; //发送的包
                    result.video.codec = item.googCodecName;
                    result.video.packetsReceived = item.packetsReceived; //发送的包
                    result.video.packetsLost = item.packetsLost; //发送的包d
                    result.video.bytesReceived = item.bytesReceived; //发送的包
                } else {
                    result.audio.ssrc = item.ssrc; //发送的包
                    result.audio.codec = 'unknown';
                    result.audio.bytesReceived = item.bytesReceived; //发送的包
                    result.audio.packetsLost = item.packetsLost; //发送的包
                    result.audio.packetsReceived = item.packetsReceived; //发送的包
                }
            } else if (item.type === 'track' && item.id.indexOf('RTCMediaStreamTrack_receiver') !== -1) {
                if (item.frameWidth > 0) {
                    result.video.width = item.frameHeight;
                    result.video.height = item.frameWidth;
                    result.video.framesDecoded = item.framesDecoded;
                    result.video.framesReceived = item.framesReceived;
                }
            } else if (item.type === 'outbound-rtp') {
                var isVideo = item.mediaType === 'video' || item.id.indexOf("RTCOutboundRTPVideoStream") !== -1; // audio or video
                if (isVideo) {
                    result.video.ssrc = item.ssrc;
                    result.video.codec = 'unknown';
                    result.video.packetsSent = item.packetsSent; //发送的包
                    result.video.bytesSent = item.bytesSent; //发送的bytes
                    result.video.framesEncoded = item.framesEncoded; //发送的bytes
                    result.video.packetsLost = 0; //发送的丢包数
                } else {
                    result.audio.ssrc = item.ssrc; //发送的包
                    result.audio.codec = 'unknown';
                    result.audio.packetsSent = item.packetsSent; //发送的包
                    result.audio.bytesSent = item.bytesSent; //发送的包
                }
                // 
            } else if (item.type === 'track' && item.id.indexOf('RTCMediaStreamTrack_sender') !== -1) {
                if (item.frameWidth > 0) {
                    result.video.width = item.frameHeight;
                    result.video.height = item.frameWidth;
                }
            } else if (item.type === "candidate-pair") {
                result.audio.delay = item.currentRoundTripTime || 0;
                result.audio.currentRoundTripTime = item.currentRoundTripTime * 1000 || 0;
                result.audio.totalRoundTripTime = item.totalRoundTripTime * 1000 || 0;
            }
        });
    } else {
        result.results.forEach(function (item) {
            if (item.type === 'ssrc') {
                var isVideo = item.mediaType === 'video'; // audio or video
                var isSender = item.id.indexOf('_send') !== -1; // sender or receiver
                if (isSender) {
                    if (isVideo) {
                        result.video.ssrc = item.ssrc; //发送的包
                        result.video.codec = item.googCodecName;
                        result.video.packetsSent = item.packetsSent; //发送的包
                        result.video.packetsLost = item.packetsLost; //发送的丢包数
                        result.video.width = item.googFrameWidthSent;
                        result.video.height = item.googFrameHeightSent;
                    } else {
                        result.audio.ssrc = item.ssrc; //发送的包
                        result.audio.codec = item.googCodecName;
                        result.audio.packetsSent = item.packetsSent; //发送的包
                    }
                } else {
                    if (isVideo) {
                        result.video.ssrc = item.ssrc; //发送的包
                        result.video.codec = item.googCodecName;
                        result.video.packetsReceived = item.packetsReceived; //发送的包
                        result.video.packetsLost = item.packetsLost; //发送的丢包数
                        result.video.width = item.googFrameWidthSent;
                        result.video.height = item.googFrameHeightSent;
                    } else {
                        result.audio.ssrc = item.ssrc; //发送的包
                        result.audio.codec = item.googCodecName;
                        result.audio.packetsReceived = item.packetsReceived; //发送的包
                        result.audio.packetsLost = item.packetsLost; //发送的包
                    }
                }
            }
            if (item.googRtt) {
                result.audio.delay = item.googRtt || 0;
            }
        });
    }
    return result;
};

module.exports = StreamHandler;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/*
WildEmitter.js is a slim little event emitter by @henrikjoreteg largely based
on @visionmedia's Emitter from UI Kit.

Why? I wanted it standalone.

I also wanted support for wildcard emitters like this:

emitter.on('*', function (eventName, other, event, payloads) {

});

emitter.on('somenamespace*', function (eventName, payloads) {

});

Please note that callbacks triggered by wildcard registered events also get
the event name as the first argument.
*/

module.exports = WildEmitter;

function WildEmitter() { }

WildEmitter.mixin = function (constructor) {
    var prototype = constructor.prototype || constructor;

    prototype.isWildEmitter= true;

    // Listen on the given `event` with `fn`. Store a group name if present.
    prototype.on = function (event, groupName, fn) {
        this.callbacks = this.callbacks || {};
        var hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        func._groupName = group;
        (this.callbacks[event] = this.callbacks[event] || []).push(func);
        return this;
    };

    // Adds an `event` listener that will be invoked a single
    // time then automatically removed.
    prototype.once = function (event, groupName, fn) {
        var self = this,
            hasGroup = (arguments.length === 3),
            group = hasGroup ? arguments[1] : undefined,
            func = hasGroup ? arguments[2] : arguments[1];
        function on() {
            self.off(event, on);
            func.apply(this, arguments);
        }
        this.on(event, group, on);
        return this;
    };

    // Unbinds an entire group
    prototype.releaseGroup = function (groupName) {
        this.callbacks = this.callbacks || {};
        var item, i, len, handlers;
        for (item in this.callbacks) {
            handlers = this.callbacks[item];
            for (i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i]._groupName === groupName) {
                    //console.log('removing');
                    // remove it and shorten the array we're looping through
                    handlers.splice(i, 1);
                    i--;
                    len--;
                }
            }
        }
        return this;
    };

    // Remove the given callback for `event` or all
    // registered callbacks.
    prototype.off = function (event, fn) {
        this.callbacks = this.callbacks || {};
        var callbacks = this.callbacks[event],
            i;

        if (!callbacks) return this;

        // remove all handlers
        if (arguments.length === 1) {
            delete this.callbacks[event];
            return this;
        }

        // remove specific handler
        i = callbacks.indexOf(fn);
        callbacks.splice(i, 1);
        if (callbacks.length === 0) {
            delete this.callbacks[event];
        }
        return this;
    };

    /// Emit `event` with the given args.
    // also calls any `*` handlers
    prototype.emit = function (event) {
        this.callbacks = this.callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this.callbacks[event],
            specialCallbacks = this.getWildcardCallbacks(event),
            i,
            len,
            item,
            listeners;

        if (callbacks) {
            listeners = callbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, args);
            }
        }

        if (specialCallbacks) {
            len = specialCallbacks.length;
            listeners = specialCallbacks.slice();
            for (i = 0, len = listeners.length; i < len; ++i) {
                if (!listeners[i]) {
                    break;
                }
                listeners[i].apply(this, [event].concat(args));
            }
        }

        return this;
    };

    // Helper for for finding special wildcard event handlers that match the event
    prototype.getWildcardCallbacks = function (eventName) {
        this.callbacks = this.callbacks || {};
        var item,
            split,
            result = [];

        for (item in this.callbacks) {
            split = item.split('*');
            if (item === '*' || (split.length === 2 && eventName.slice(0, split[0].length) === split[0])) {
                result = result.concat(this.callbacks[item]);
            }
        }
        return result;
    };

};

WildEmitter.mixin(WildEmitter);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):n.mitt=e()}(this,function(){function n(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}return n});
//# sourceMappingURL=mitt.umd.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @preserve jquery-param (c) 2015 KNOWLEDGECODE | MIT
 */
(function (global) {
    'use strict';

    var param = function (a) {
        var s = [];
        var add = function (k, v) {
            v = typeof v === 'function' ? v() : v;
            v = v === null ? '' : v === undefined ? '' : v;
            s[s.length] = encodeURIComponent(k) + '=' + encodeURIComponent(v);
        };
        var buildParams = function (prefix, obj) {
            var i, len, key;

            if (prefix) {
                if (Array.isArray(obj)) {
                    for (i = 0, len = obj.length; i < len; i++) {
                        buildParams(
                            prefix + '[' + (typeof obj[i] === 'object' && obj[i] ? i : '') + ']',
                            obj[i]
                        );
                    }
                } else if (String(obj) === '[object Object]') {
                    for (key in obj) {
                        buildParams(prefix + '[' + key + ']', obj[key]);
                    }
                } else {
                    add(prefix, obj);
                }
            } else if (Array.isArray(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    add(obj[i].name, obj[i].value);
                }
            } else {
                for (key in obj) {
                    buildParams(key, obj[key]);
                }
            }
            return s;
        };

        return buildParams('', a).join('&');
    };

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = param;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return param;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        global.param = param;
    }

}(this));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Sound meter is used to detect speaker
function SoundMeter(opts) {
    var that = this;
    this.context = opts.audioContext || new AudioContext();
    this.volume = 0.0;
    this.slow_volume = 0.0;
    this.clip = 0.0;
    // Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384)
    this.script = this.context.createScriptProcessor(256, 1, 1);
    this.script.onaudioprocess = function (event) {
        if (!opts.onprocess) return;
        var input = event.inputBuffer.getChannelData(0);
        var i;
        var sum = 0.0;
        var clipcount = 0;
        for (i = 0; i < input.length; ++i) {
            sum += input[i] * input[i];
            if (Math.abs(input[i]) > 0.99) {
                clipcount += 1;
            }
        }
        that.volume = Math.sqrt(sum / input.length);

        var volume = that.volume.toFixed(2);

        if (opts.onprocess) {
            opts.onprocess({
                volume: volume,
                status: volume >= .1 ? "speaking" : "silence",
                event: event
            });
        }
    };
    this.connectToSource(opts.stream);
}

SoundMeter.prototype.connectToSource = function (stream) {
    this.mic = this.context.createMediaStreamSource(stream);
    this.mic.connect(this.script);
    this.script.connect(this.context.destination);
};

SoundMeter.prototype.stop = function () {
    this.disconnect();
    this.context.close();
    this.context = null;
};
SoundMeter.prototype.disconnect = function () {
    this.mic.disconnect();
    this.script.disconnect();
};

module.exports = SoundMeter;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
(function (global) {

    var apple_phone         = /iPhone/i,
        apple_ipod          = /iPod/i,
        apple_tablet        = /iPad/i,
        android_phone       = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, // Match 'Android' AND 'Mobile'
        android_tablet      = /Android/i,
        amazon_phone        = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        amazon_tablet       = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        windows_phone       = /Windows Phone/i,
        windows_tablet      = /(?=.*\bWindows\b)(?=.*\bARM\b)/i, // Match 'Windows' AND 'ARM'
        other_blackberry    = /BlackBerry/i,
        other_blackberry_10 = /BB10/i,
        other_opera         = /Opera Mini/i,
        other_chrome        = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        other_firefox       = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, // Match 'Firefox' AND 'Mobile'
        seven_inch = new RegExp(
            '(?:' +         // Non-capturing group

            'Nexus 7' +     // Nexus 7

            '|' +           // OR

            'BNTV250' +     // B&N Nook Tablet 7 inch

            '|' +           // OR

            'Kindle Fire' + // Kindle Fire

            '|' +           // OR

            'Silk' +        // Kindle Fire, Silk Accelerated

            '|' +           // OR

            'GT-P1000' +    // Galaxy Tab 7 inch

            ')',            // End non-capturing group

            'i');           // Case-insensitive matching

    var match = function(regex, userAgent) {
        return regex.test(userAgent);
    };

    var IsMobileClass = function(userAgent) {
        var ua = userAgent || navigator.userAgent;

        // Facebook mobile app's integrated browser adds a bunch of strings that
        // match everything. Strip it out if it exists.
        var tmp = ua.split('[FBAN');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
        // iPhone" string. Same probable happens on other tablet platforms.
        // This will confuse detection so strip it out if it exists.
        tmp = ua.split('Twitter');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        this.apple = {
            phone:  match(apple_phone, ua),
            ipod:   match(apple_ipod, ua),
            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
        };
        this.amazon = {
            phone:  match(amazon_phone, ua),
            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
        };
        this.android = {
            phone:  match(amazon_phone, ua) || match(android_phone, ua),
            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
        };
        this.windows = {
            phone:  match(windows_phone, ua),
            tablet: match(windows_tablet, ua),
            device: match(windows_phone, ua) || match(windows_tablet, ua)
        };
        this.other = {
            blackberry:   match(other_blackberry, ua),
            blackberry10: match(other_blackberry_10, ua),
            opera:        match(other_opera, ua),
            firefox:      match(other_firefox, ua),
            chrome:       match(other_chrome, ua),
            device:       match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
        };
        this.seven_inch = match(seven_inch, ua);
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;

        // excludes 'other' devices and ipods, targeting touchscreen phones
        this.phone = this.apple.phone || this.android.phone || this.windows.phone;

        // excludes 7 inch devices, classifying as phone or tablet is left to the user
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

        if (typeof window === 'undefined') {
            return this;
        }
    };

    var instantiate = function() {
        var IM = new IsMobileClass();
        IM.Class = IsMobileClass;
        return IM;
    };

    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsMobileClass;
    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
    } else if (true) {
        //AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        global.isMobile = instantiate();
    }

})(this);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

// Last time updated: 2019-02-20 3:31:29 PM UTC

// _______________
// getStats v1.2.0

// Open-Sourced: https://github.com/muaz-khan/getStats

// --------------------------------------------------
// Muaz Khan     - www.MuazKhan.com
// MIT License   - www.WebRTC-Experiment.com/licence
// --------------------------------------------------

var getStats = function(mediaStreamTrack, callback, interval) {

    var browserFakeUserAgent = 'Fake/5.0 (FakeOS) AppleWebKit/123 (KHTML, like Gecko) Fake/12.3.4567.89 Fake/123.45';

    (function(that) {
        if (!that) {
            return;
        }

        if (typeof window !== 'undefined') {
            return;
        }

        if (typeof global === 'undefined') {
            return;
        }

        global.navigator = {
            userAgent: browserFakeUserAgent,
            getUserMedia: function() {}
        };

        if (!global.console) {
            global.console = {};
        }

        if (typeof global.console.log === 'undefined' || typeof global.console.error === 'undefined') {
            global.console.error = global.console.log = global.console.log || function() {
                console.log(arguments);
            };
        }

        if (typeof document === 'undefined') {
            /*global document:true */
            that.document = {
                documentElement: {
                    appendChild: function() {
                        return '';
                    }
                }
            };

            document.createElement = document.captureStream = document.mozCaptureStream = function() {
                var obj = {
                    getContext: function() {
                        return obj;
                    },
                    play: function() {},
                    pause: function() {},
                    drawImage: function() {},
                    toDataURL: function() {
                        return '';
                    }
                };
                return obj;
            };

            that.HTMLVideoElement = function() {};
        }

        if (typeof location === 'undefined') {
            /*global location:true */
            that.location = {
                protocol: 'file:',
                href: '',
                hash: ''
            };
        }

        if (typeof screen === 'undefined') {
            /*global screen:true */
            that.screen = {
                width: 0,
                height: 0
            };
        }

        if (typeof URL === 'undefined') {
            /*global screen:true */
            that.URL = {
                createObjectURL: function() {
                    return '';
                },
                revokeObjectURL: function() {
                    return '';
                }
            };
        }

        if (typeof MediaStreamTrack === 'undefined') {
            /*global screen:true */
            that.MediaStreamTrack = function() {};
        }

        if (typeof RTCPeerConnection === 'undefined') {
            /*global screen:true */
            that.RTCPeerConnection = function() {};
        }

        /*global window:true */
        that.window = global;
    })(typeof global !== 'undefined' ? global : null);

    var RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;

    if (typeof MediaStreamTrack === 'undefined') {
        MediaStreamTrack = {}; // todo?
    }

    var systemNetworkType = ((navigator.connection || {}).type || 'unknown').toString().toLowerCase();

    var getStatsResult = {
        encryption: 'sha-256',
        audio: {
            send: {
                tracks: [],
                codecs: [],
                availableBandwidth: 0,
                streams: 0,
                framerateMean: 0,
                bitrateMean: 0
            },
            recv: {
                tracks: [],
                codecs: [],
                availableBandwidth: 0,
                streams: 0,
                framerateMean: 0,
                bitrateMean: 0
            },
            bytesSent: 0,
            bytesReceived: 0,
            latency: 0,
            packetsLost: 0
        },
        video: {
            send: {
                tracks: [],
                codecs: [],
                availableBandwidth: 0,
                streams: 0,
                framerateMean: 0,
                bitrateMean: 0
            },
            recv: {
                tracks: [],
                codecs: [],
                availableBandwidth: 0,
                streams: 0,
                framerateMean: 0,
                bitrateMean: 0
            },
            bytesSent: 0,
            bytesReceived: 0,
            latency: 0,
            packetsLost: 0
        },
        bandwidth: {
            systemBandwidth: 0,
            sentPerSecond: 0,
            encodedPerSecond: 0,
            helper: {
                audioBytesSent: 0,
                videoBytestSent: 0
            },
            speed: 0
        },
        results: {},
        connectionType: {
            systemNetworkType: systemNetworkType,
            systemIpAddress: '192.168.1.2',
            local: {
                candidateType: [],
                transport: [],
                ipAddress: [],
                networkType: []
            },
            remote: {
                candidateType: [],
                transport: [],
                ipAddress: [],
                networkType: []
            }
        },
        resolutions: {
            send: {
                width: 0,
                height: 0
            },
            recv: {
                width: 0,
                height: 0
            }
        },
        internal: {
            audio: {
                send: {},
                recv: {}
            },
            video: {
                send: {},
                recv: {}
            },
            candidates: {}
        },
        nomore: function() {
            nomore = true;
        }
    };

    var getStatsParser = {
        checkIfOfferer: function(result) {
            if (result.type === 'googLibjingleSession') {
                getStatsResult.isOfferer = result.googInitiator;
            }
        }
    };

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    var peer = this;

    if (!(arguments[0] instanceof RTCPeerConnection)) {
        throw '1st argument is not instance of RTCPeerConnection.';
    }

    peer = arguments[0];

    if (arguments[1] instanceof MediaStreamTrack) {
        mediaStreamTrack = arguments[1]; // redundant on non-safari
        callback = arguments[2];
        interval = arguments[3];
    }

    var nomore = false;

    function getStatsLooper() {
        getStatsWrapper(function(results) {
            if (!results || !results.forEach) return;

            results.forEach(function(result) {
                // console.error('result', result);
                Object.keys(getStatsParser).forEach(function(key) {
                    if (typeof getStatsParser[key] === 'function') {
                        try {
                            getStatsParser[key](result);
                        } catch (e) {
                            console.error(e.message, e.stack, e);
                        }
                    }
                });
            });

            try {
                if (peer.iceConnectionState.search(/failed|closed|disconnected/gi) !== -1) {
                    nomore = true;
                }
            } catch (e) {
                nomore = true;
            }

            if (nomore === true) {
                if (getStatsResult.datachannel) {
                    getStatsResult.datachannel.state = 'close';
                }
                getStatsResult.ended = true;
            }

            // allow users to access native results
            getStatsResult.results = results;

            if (getStatsResult.audio && getStatsResult.video) {
                getStatsResult.bandwidth.speed = (getStatsResult.audio.bytesSent - getStatsResult.bandwidth.helper.audioBytesSent) + (getStatsResult.video.bytesSent - getStatsResult.bandwidth.helper.videoBytesSent);
                getStatsResult.bandwidth.helper.audioBytesSent = getStatsResult.audio.bytesSent;
                getStatsResult.bandwidth.helper.videoBytesSent = getStatsResult.video.bytesSent;
            }

            callback(getStatsResult);

            // second argument checks to see, if target-user is still connected.
            if (!nomore) {
                typeof interval != undefined && interval && setTimeout(getStatsLooper, interval || 1000);
            }
        });
    }

    // a wrapper around getStats which hides the differences (where possible)
    // following code-snippet is taken from somewhere on the github
    function getStatsWrapper(cb) {
        // if !peer or peer.signalingState == 'closed' then return;

        if (typeof window.InstallTrigger !== 'undefined' || isSafari) { // maybe "isEdge?"
            peer.getStats(window.mediaStreamTrack || null).then(function(res) {
                var items = [];
                res.forEach(function(r) {
                    items.push(r);
                });
                cb(items);
            }).catch(cb);
        } else {
            peer.getStats(function(res) {
                var items = [];
                res.result().forEach(function(res) {
                    var item = {};
                    res.names().forEach(function(name) {
                        item[name] = res.stat(name);
                    });
                    item.id = res.id;
                    item.type = res.type;
                    item.timestamp = res.timestamp;
                    items.push(item);
                });
                cb(items);
            });
        }
    };

    getStatsParser.datachannel = function(result) {
        if (result.type !== 'datachannel') return;

        getStatsResult.datachannel = {
            state: result.state // open or connecting
        }
    };

    getStatsParser.googCertificate = function(result) {
        if (result.type == 'googCertificate') {
            getStatsResult.encryption = result.googFingerprintAlgorithm;
        }

        // Safari-11 or higher
        if (result.type == 'certificate') {
            // todo: is it possible to have different encryption methods for senders and receivers?
            // if yes, then we need to set:
            //    getStatsResult.encryption.local = value;
            //    getStatsResult.encryption.remote = value;
            getStatsResult.encryption = result.fingerprintAlgorithm;
        }
    };

    getStatsParser.checkAudioTracks = function(result) {
        if (result.mediaType !== 'audio') return;

        var sendrecvType = result.id.split('_').pop();
        if (result.isRemote === true) {
            sendrecvType = 'recv';
        }
        if (result.isRemote === false) {
            sendrecvType = 'send';
        }

        if (!sendrecvType) return;

        if (getStatsResult.audio[sendrecvType].codecs.indexOf(result.googCodecName || 'opus') === -1) {
            getStatsResult.audio[sendrecvType].codecs.push(result.googCodecName || 'opus');
        }

        if (!!result.bytesSent) {
            var kilobytes = 0;
            if (!getStatsResult.internal.audio[sendrecvType].prevBytesSent) {
                getStatsResult.internal.audio[sendrecvType].prevBytesSent = result.bytesSent;
            }

            var bytes = result.bytesSent - getStatsResult.internal.audio[sendrecvType].prevBytesSent;
            getStatsResult.internal.audio[sendrecvType].prevBytesSent = result.bytesSent;

            kilobytes = bytes / 1024;
            getStatsResult.audio[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult.audio.bytesSent = kilobytes.toFixed(1);
        }

        if (!!result.bytesReceived) {
            var kilobytes = 0;
            if (!getStatsResult.internal.audio[sendrecvType].prevBytesReceived) {
                getStatsResult.internal.audio[sendrecvType].prevBytesReceived = result.bytesReceived;
            }

            var bytes = result.bytesReceived - getStatsResult.internal.audio[sendrecvType].prevBytesReceived;
            getStatsResult.internal.audio[sendrecvType].prevBytesReceived = result.bytesReceived;

            kilobytes = bytes / 1024;

            // getStatsResult.audio[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult.audio.bytesReceived = kilobytes.toFixed(1);
        }

        if (result.googTrackId && getStatsResult.audio[sendrecvType].tracks.indexOf(result.googTrackId) === -1) {
            getStatsResult.audio[sendrecvType].tracks.push(result.googTrackId);
        }

        // calculate latency
        if (!!result.googCurrentDelayMs) {
            var kilobytes = 0;
            if (!getStatsResult.internal.audio.prevGoogCurrentDelayMs) {
                getStatsResult.internal.audio.prevGoogCurrentDelayMs = result.googCurrentDelayMs;
            }

            var bytes = result.googCurrentDelayMs - getStatsResult.internal.audio.prevGoogCurrentDelayMs;
            getStatsResult.internal.audio.prevGoogCurrentDelayMs = result.googCurrentDelayMs;

            getStatsResult.audio.latency = bytes.toFixed(1);

            if (getStatsResult.audio.latency < 0) {
                getStatsResult.audio.latency = 0;
            }
        }

        // calculate packetsLost
        if (!!result.packetsLost) {
            var kilobytes = 0;
            if (!getStatsResult.internal.audio.prevPacketsLost) {
                getStatsResult.internal.audio.prevPacketsLost = result.packetsLost;
            }

            var bytes = result.packetsLost - getStatsResult.internal.audio.prevPacketsLost;
            getStatsResult.internal.audio.prevPacketsLost = result.packetsLost;

            getStatsResult.audio.packetsLost = bytes.toFixed(1);

            if (getStatsResult.audio.packetsLost < 0) {
                getStatsResult.audio.packetsLost = 0;
            }
        }
    };

    getStatsParser.checkVideoTracks = function(result) {
        if (result.mediaType !== 'video') return;

        var sendrecvType = result.id.split('_').pop();
        if (result.isRemote === true) {
            sendrecvType = 'recv';
        }
        if (result.isRemote === false) {
            sendrecvType = 'send';
        }

        if (!sendrecvType) return;

        if (getStatsResult.video[sendrecvType].codecs.indexOf(result.googCodecName || 'VP8') === -1) {
            getStatsResult.video[sendrecvType].codecs.push(result.googCodecName || 'VP8');
        }

        if (!!result.bytesSent) {
            var kilobytes = 0;
            if (!getStatsResult.internal.video[sendrecvType].prevBytesSent) {
                getStatsResult.internal.video[sendrecvType].prevBytesSent = result.bytesSent;
            }

            var bytes = result.bytesSent - getStatsResult.internal.video[sendrecvType].prevBytesSent;
            getStatsResult.internal.video[sendrecvType].prevBytesSent = result.bytesSent;

            kilobytes = bytes / 1024;

            getStatsResult.video[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult.video.bytesSent = kilobytes.toFixed(1);
        }

        if (!!result.bytesReceived) {
            var kilobytes = 0;
            if (!getStatsResult.internal.video[sendrecvType].prevBytesReceived) {
                getStatsResult.internal.video[sendrecvType].prevBytesReceived = result.bytesReceived;
            }

            var bytes = result.bytesReceived - getStatsResult.internal.video[sendrecvType].prevBytesReceived;
            getStatsResult.internal.video[sendrecvType].prevBytesReceived = result.bytesReceived;

            kilobytes = bytes / 1024;
            // getStatsResult.video[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult.video.bytesReceived = kilobytes.toFixed(1);
        }

        if (result.googFrameHeightReceived && result.googFrameWidthReceived) {
            getStatsResult.resolutions[sendrecvType].width = result.googFrameWidthReceived;
            getStatsResult.resolutions[sendrecvType].height = result.googFrameHeightReceived;
        }

        if (result.googFrameHeightSent && result.googFrameWidthSent) {
            getStatsResult.resolutions[sendrecvType].width = result.googFrameWidthSent;
            getStatsResult.resolutions[sendrecvType].height = result.googFrameHeightSent;
        }

        if (result.googTrackId && getStatsResult.video[sendrecvType].tracks.indexOf(result.googTrackId) === -1) {
            getStatsResult.video[sendrecvType].tracks.push(result.googTrackId);
        }

        if (result.framerateMean) {
            getStatsResult.bandwidth.framerateMean = result.framerateMean;
            var kilobytes = 0;
            if (!getStatsResult.internal.video[sendrecvType].prevFramerateMean) {
                getStatsResult.internal.video[sendrecvType].prevFramerateMean = result.bitrateMean;
            }

            var bytes = result.bytesSent - getStatsResult.internal.video[sendrecvType].prevFramerateMean;
            getStatsResult.internal.video[sendrecvType].prevFramerateMean = result.framerateMean;

            kilobytes = bytes / 1024;
            getStatsResult.video[sendrecvType].framerateMean = bytes.toFixed(1);
        }

        if (result.bitrateMean) {
            getStatsResult.bandwidth.bitrateMean = result.bitrateMean;
            var kilobytes = 0;
            if (!getStatsResult.internal.video[sendrecvType].prevBitrateMean) {
                getStatsResult.internal.video[sendrecvType].prevBitrateMean = result.bitrateMean;
            }

            var bytes = result.bytesSent - getStatsResult.internal.video[sendrecvType].prevBitrateMean;
            getStatsResult.internal.video[sendrecvType].prevBitrateMean = result.bitrateMean;

            kilobytes = bytes / 1024;
            getStatsResult.video[sendrecvType].bitrateMean = bytes.toFixed(1);
        }

        // calculate latency
        if (!!result.googCurrentDelayMs) {
            var kilobytes = 0;
            if (!getStatsResult.internal.video.prevGoogCurrentDelayMs) {
                getStatsResult.internal.video.prevGoogCurrentDelayMs = result.googCurrentDelayMs;
            }

            var bytes = result.googCurrentDelayMs - getStatsResult.internal.video.prevGoogCurrentDelayMs;
            getStatsResult.internal.video.prevGoogCurrentDelayMs = result.googCurrentDelayMs;

            getStatsResult.video.latency = bytes.toFixed(1);

            if (getStatsResult.video.latency < 0) {
                getStatsResult.video.latency = 0;
            }
        }

        // calculate packetsLost
        if (!!result.packetsLost) {
            var kilobytes = 0;
            if (!getStatsResult.internal.video.prevPacketsLost) {
                getStatsResult.internal.video.prevPacketsLost = result.packetsLost;
            }

            var bytes = result.packetsLost - getStatsResult.internal.video.prevPacketsLost;
            getStatsResult.internal.video.prevPacketsLost = result.packetsLost;

            getStatsResult.video.packetsLost = bytes.toFixed(1);

            if (getStatsResult.video.packetsLost < 0) {
                getStatsResult.video.packetsLost = 0;
            }
        }
    };

    getStatsParser.bweforvideo = function(result) {
        if (result.type !== 'VideoBwe') return;

        getStatsResult.bandwidth.availableSendBandwidth = result.googAvailableSendBandwidth;

        getStatsResult.bandwidth.googActualEncBitrate = result.googActualEncBitrate;
        getStatsResult.bandwidth.googAvailableSendBandwidth = result.googAvailableSendBandwidth;
        getStatsResult.bandwidth.googAvailableReceiveBandwidth = result.googAvailableReceiveBandwidth;
        getStatsResult.bandwidth.googRetransmitBitrate = result.googRetransmitBitrate;
        getStatsResult.bandwidth.googTargetEncBitrate = result.googTargetEncBitrate;
        getStatsResult.bandwidth.googBucketDelay = result.googBucketDelay;
        getStatsResult.bandwidth.googTransmitBitrate = result.googTransmitBitrate;
    };

    getStatsParser.candidatePair = function(result) {
        if (result.type !== 'googCandidatePair' && result.type !== 'candidate-pair' && result.type !== 'local-candidate' && result.type !== 'remote-candidate') return;

        // result.googActiveConnection means either STUN or TURN is used.

        if (result.googActiveConnection == 'true') {
            // id === 'Conn-audio-1-0'
            // localCandidateId, remoteCandidateId

            // bytesSent, bytesReceived

            Object.keys(getStatsResult.internal.candidates).forEach(function(cid) {
                var candidate = getStatsResult.internal.candidates[cid];
                if (candidate.ipAddress.indexOf(result.googLocalAddress) !== -1) {
                    getStatsResult.connectionType.local.candidateType = candidate.candidateType;
                    getStatsResult.connectionType.local.ipAddress = candidate.ipAddress;
                    getStatsResult.connectionType.local.networkType = candidate.networkType;
                    getStatsResult.connectionType.local.transport = candidate.transport;
                }
                if (candidate.ipAddress.indexOf(result.googRemoteAddress) !== -1) {
                    getStatsResult.connectionType.remote.candidateType = candidate.candidateType;
                    getStatsResult.connectionType.remote.ipAddress = candidate.ipAddress;
                    getStatsResult.connectionType.remote.networkType = candidate.networkType;
                    getStatsResult.connectionType.remote.transport = candidate.transport;
                }
            });

            getStatsResult.connectionType.transport = result.googTransportType;

            var localCandidate = getStatsResult.internal.candidates[result.localCandidateId];
            if (localCandidate) {
                if (localCandidate.ipAddress) {
                    getStatsResult.connectionType.systemIpAddress = localCandidate.ipAddress;
                }
            }

            var remoteCandidate = getStatsResult.internal.candidates[result.remoteCandidateId];
            if (remoteCandidate) {
                if (remoteCandidate.ipAddress) {
                    getStatsResult.connectionType.systemIpAddress = remoteCandidate.ipAddress;
                }
            }
        }

        if (result.type === 'candidate-pair') {
            if (result.selected === true && result.nominated === true && result.state === 'succeeded') {
                // remoteCandidateId, localCandidateId, componentId
                var localCandidate = getStatsResult.internal.candidates[result.remoteCandidateId];
                var remoteCandidate = getStatsResult.internal.candidates[result.remoteCandidateId];

                // Firefox used above two pairs for connection
            }
        }

        if (result.type === 'local-candidate') {
            getStatsResult.connectionType.local.candidateType = result.candidateType;
            getStatsResult.connectionType.local.ipAddress = result.ipAddress;
            getStatsResult.connectionType.local.networkType = result.networkType;
            getStatsResult.connectionType.local.transport = result.mozLocalTransport || result.transport;
        }

        if (result.type === 'remote-candidate') {
            getStatsResult.connectionType.remote.candidateType = result.candidateType;
            getStatsResult.connectionType.remote.ipAddress = result.ipAddress;
            getStatsResult.connectionType.remote.networkType = result.networkType;
            getStatsResult.connectionType.remote.transport = result.mozRemoteTransport || result.transport;
        }

        if (isSafari) {
            // result.remoteCandidateId
            // todo: below line will always force "send" on Safari; find a solution
            var sendrecvType = result.localCandidateId ? 'send' : 'recv';

            if (!sendrecvType) return;

            if (!!result.bytesSent) {
                var kilobytes = 0;
                if (!getStatsResult.internal.video[sendrecvType].prevBytesSent) {
                    getStatsResult.internal.video[sendrecvType].prevBytesSent = result.bytesSent;
                }

                var bytes = result.bytesSent - getStatsResult.internal.video[sendrecvType].prevBytesSent;
                getStatsResult.internal.video[sendrecvType].prevBytesSent = result.bytesSent;

                kilobytes = bytes / 1024;

                getStatsResult.video[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
                getStatsResult.video.bytesSent = kilobytes.toFixed(1);
            }

            if (!!result.bytesReceived) {
                var kilobytes = 0;
                if (!getStatsResult.internal.video[sendrecvType].prevBytesReceived) {
                    getStatsResult.internal.video[sendrecvType].prevBytesReceived = result.bytesReceived;
                }

                var bytes = result.bytesReceived - getStatsResult.internal.video[sendrecvType].prevBytesReceived;
                getStatsResult.internal.video[sendrecvType].prevBytesReceived = result.bytesReceived;

                kilobytes = bytes / 1024;
                // getStatsResult.video[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
                getStatsResult.video.bytesReceived = kilobytes.toFixed(1);
            }

            if (!!result.availableOutgoingBitrate) {
                var kilobytes = 0;
                if (!getStatsResult.internal.video[sendrecvType].prevAvailableOutgoingBitrate) {
                    getStatsResult.internal.video[sendrecvType].prevAvailableOutgoingBitrate = result.availableOutgoingBitrate;
                }

                var bytes = result.availableOutgoingBitrate - getStatsResult.internal.video[sendrecvType].prevAvailableOutgoingBitrate;
                getStatsResult.internal.video[sendrecvType].prevAvailableOutgoingBitrate = result.availableOutgoingBitrate;

                kilobytes = bytes / 1024;
                // getStatsResult.video[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
                getStatsResult.video.availableOutgoingBitrate = kilobytes.toFixed(1);
            }

            if (!!result.availableIncomingBitrate) {
                var kilobytes = 0;
                if (!getStatsResult.internal.video[sendrecvType].prevAvailableIncomingBitrate) {
                    getStatsResult.internal.video[sendrecvType].prevAvailableIncomingBitrate = result.availableIncomingBitrate;
                }

                var bytes = result.availableIncomingBitrate - getStatsResult.internal.video[sendrecvType].prevAvailableIncomingBitrate;
                getStatsResult.internal.video[sendrecvType].prevAvailableIncomingBitrate = result.availableIncomingBitrate;

                kilobytes = bytes / 1024;
                // getStatsResult.video[sendrecvType].availableBandwidth = kilobytes.toFixed(1);
                getStatsResult.video.availableIncomingBitrate = kilobytes.toFixed(1);
            }
        }
    };

    var LOCAL_candidateType = {};
    var LOCAL_transport = {};
    var LOCAL_ipAddress = {};
    var LOCAL_networkType = {};

    getStatsParser.localcandidate = function(result) {
        if (result.type !== 'localcandidate' && result.type !== 'local-candidate') return;
        if (!result.id) return;

        if (!LOCAL_candidateType[result.id]) {
            LOCAL_candidateType[result.id] = [];
        }

        if (!LOCAL_transport[result.id]) {
            LOCAL_transport[result.id] = [];
        }

        if (!LOCAL_ipAddress[result.id]) {
            LOCAL_ipAddress[result.id] = [];
        }

        if (!LOCAL_networkType[result.id]) {
            LOCAL_networkType[result.id] = [];
        }

        if (result.candidateType && LOCAL_candidateType[result.id].indexOf(result.candidateType) === -1) {
            LOCAL_candidateType[result.id].push(result.candidateType);
        }

        if (result.transport && LOCAL_transport[result.id].indexOf(result.transport) === -1) {
            LOCAL_transport[result.id].push(result.transport);
        }

        if (result.ipAddress && LOCAL_ipAddress[result.id].indexOf(result.ipAddress + ':' + result.portNumber) === -1) {
            LOCAL_ipAddress[result.id].push(result.ipAddress + ':' + result.portNumber);
        }

        if (result.networkType && LOCAL_networkType[result.id].indexOf(result.networkType) === -1) {
            LOCAL_networkType[result.id].push(result.networkType);
        }

        getStatsResult.internal.candidates[result.id] = {
            candidateType: LOCAL_candidateType[result.id],
            ipAddress: LOCAL_ipAddress[result.id],
            portNumber: result.portNumber,
            networkType: LOCAL_networkType[result.id],
            priority: result.priority,
            transport: LOCAL_transport[result.id],
            timestamp: result.timestamp,
            id: result.id,
            type: result.type
        };

        getStatsResult.connectionType.local.candidateType = LOCAL_candidateType[result.id];
        getStatsResult.connectionType.local.ipAddress = LOCAL_ipAddress[result.id];
        getStatsResult.connectionType.local.networkType = LOCAL_networkType[result.id];
        getStatsResult.connectionType.local.transport = LOCAL_transport[result.id];
    };

    var REMOTE_candidateType = {};
    var REMOTE_transport = {};
    var REMOTE_ipAddress = {};
    var REMOTE_networkType = {};

    getStatsParser.remotecandidate = function(result) {
        if (result.type !== 'remotecandidate' && result.type !== 'remote-candidate') return;
        if (!result.id) return;

        if (!REMOTE_candidateType[result.id]) {
            REMOTE_candidateType[result.id] = [];
        }

        if (!REMOTE_transport[result.id]) {
            REMOTE_transport[result.id] = [];
        }

        if (!REMOTE_ipAddress[result.id]) {
            REMOTE_ipAddress[result.id] = [];
        }

        if (!REMOTE_networkType[result.id]) {
            REMOTE_networkType[result.id] = [];
        }

        if (result.candidateType && REMOTE_candidateType[result.id].indexOf(result.candidateType) === -1) {
            REMOTE_candidateType[result.id].push(result.candidateType);
        }

        if (result.transport && REMOTE_transport[result.id].indexOf(result.transport) === -1) {
            REMOTE_transport[result.id].push(result.transport);
        }

        if (result.ipAddress && REMOTE_ipAddress[result.id].indexOf(result.ipAddress + ':' + result.portNumber) === -1) {
            REMOTE_ipAddress[result.id].push(result.ipAddress + ':' + result.portNumber);
        }

        if (result.networkType && REMOTE_networkType[result.id].indexOf(result.networkType) === -1) {
            REMOTE_networkType[result.id].push(result.networkType);
        }

        getStatsResult.internal.candidates[result.id] = {
            candidateType: REMOTE_candidateType[result.id],
            ipAddress: REMOTE_ipAddress[result.id],
            portNumber: result.portNumber,
            networkType: REMOTE_networkType[result.id],
            priority: result.priority,
            transport: REMOTE_transport[result.id],
            timestamp: result.timestamp,
            id: result.id,
            type: result.type
        };

        getStatsResult.connectionType.remote.candidateType = REMOTE_candidateType[result.id];
        getStatsResult.connectionType.remote.ipAddress = REMOTE_ipAddress[result.id];
        getStatsResult.connectionType.remote.networkType = REMOTE_networkType[result.id];
        getStatsResult.connectionType.remote.transport = REMOTE_transport[result.id];
    };

    getStatsParser.dataSentReceived = function(result) {
        if (!result.googCodecName || (result.mediaType !== 'video' && result.mediaType !== 'audio')) return;

        if (!!result.bytesSent) {
            getStatsResult[result.mediaType].bytesSent = parseInt(result.bytesSent);
        }

        if (!!result.bytesReceived) {
            getStatsResult[result.mediaType].bytesReceived = parseInt(result.bytesReceived);
        }
    };

    getStatsParser.inboundrtp = function(result) {
        if (!isSafari) return;
        if (result.type !== 'inbound-rtp') return;

        var mediaType = result.mediaType || 'audio';
        var sendrecvType = result.isRemote ? 'recv' : 'send';

        if (!sendrecvType) return;

        if (!!result.bytesSent) {
            var kilobytes = 0;
            if (!getStatsResult.internal[mediaType][sendrecvType].prevBytesSent) {
                getStatsResult.internal[mediaType][sendrecvType].prevBytesSent = result.bytesSent;
            }

            var bytes = result.bytesSent - getStatsResult.internal[mediaType][sendrecvType].prevBytesSent;
            getStatsResult.internal[mediaType][sendrecvType].prevBytesSent = result.bytesSent;

            kilobytes = bytes / 1024;

            getStatsResult[mediaType][sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult[mediaType].bytesSent = kilobytes.toFixed(1);
        }

        if (!!result.bytesReceived) {
            var kilobytes = 0;
            if (!getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived) {
                getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived = result.bytesReceived;
            }

            var bytes = result.bytesReceived - getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived;
            getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived = result.bytesReceived;

            kilobytes = bytes / 1024;
            // getStatsResult[mediaType][sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult[mediaType].bytesReceived = kilobytes.toFixed(1);
        }
    };

    getStatsParser.outboundrtp = function(result) {
        if (!isSafari) return;
        if (result.type !== 'outbound-rtp') return;

        var mediaType = result.mediaType || 'audio';
        var sendrecvType = result.isRemote ? 'recv' : 'send';

        if (!sendrecvType) return;

        if (!!result.bytesSent) {
            var kilobytes = 0;
            if (!getStatsResult.internal[mediaType][sendrecvType].prevBytesSent) {
                getStatsResult.internal[mediaType][sendrecvType].prevBytesSent = result.bytesSent;
            }

            var bytes = result.bytesSent - getStatsResult.internal[mediaType][sendrecvType].prevBytesSent;
            getStatsResult.internal[mediaType][sendrecvType].prevBytesSent = result.bytesSent;

            kilobytes = bytes / 1024;

            getStatsResult[mediaType][sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult[mediaType].bytesSent = kilobytes.toFixed(1);
        }

        if (!!result.bytesReceived) {
            var kilobytes = 0;
            if (!getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived) {
                getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived = result.bytesReceived;
            }

            var bytes = result.bytesReceived - getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived;
            getStatsResult.internal[mediaType][sendrecvType].prevBytesReceived = result.bytesReceived;

            kilobytes = bytes / 1024;
            // getStatsResult[mediaType][sendrecvType].availableBandwidth = kilobytes.toFixed(1);
            getStatsResult[mediaType].bytesReceived = kilobytes.toFixed(1);
        }
    };

    getStatsParser.track = function(result) {
        if (!isSafari) return;
        if (result.type !== 'track') return;

        var sendrecvType = result.remoteSource === true ? 'send' : 'recv';

        if (result.frameWidth && result.frameHeight) {
            getStatsResult.resolutions[sendrecvType].width = result.frameWidth;
            getStatsResult.resolutions[sendrecvType].height = result.frameHeight;
        }

        // framesSent, framesReceived
    };

    var SSRC = {
        audio: {
            send: [],
            recv: []
        },
        video: {
            send: [],
            recv: []
        }
    };

    getStatsParser.ssrc = function(result) {
        if (!result.googCodecName || (result.mediaType !== 'video' && result.mediaType !== 'audio')) return;
        if (result.type !== 'ssrc') return;
        var sendrecvType = result.id.split('_').pop();

        if (SSRC[result.mediaType][sendrecvType].indexOf(result.ssrc) === -1) {
            SSRC[result.mediaType][sendrecvType].push(result.ssrc)
        }

        getStatsResult[result.mediaType][sendrecvType].streams = SSRC[result.mediaType][sendrecvType].length;
    };

    getStatsLooper();

};

if (true /* && !!module.exports*/ ) {
    module.exports = getStats;
}

if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return getStats;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })
/******/ ]);
});