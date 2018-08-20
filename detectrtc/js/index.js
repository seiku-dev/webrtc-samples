


var rtc = new WebRTCAPI({
    debug:{
        vconsole: true
    },
    sdkAppId: 1400037025,
    userSig:"xxx",
    accountType: 12345
});



WebRTCAPI.fn.detectRTC({
    screenshare : false
}, function(info){
    console.debug( info )
    $("#content").html( JSON.stringify(info))
});
