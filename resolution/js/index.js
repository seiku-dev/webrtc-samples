
window.RTC = new WebRTCAPI({
    "useCloud": 1,
    "debug":{
        log:true
    },
    "userId": 'test',
    "userSig": 'xxx',
    "sdkAppId": 1400037025
});
function gum(resolution){
    var list = resolution.split('x')
    var width = parseInt(list[0])
    var height = parseInt(list[1])
    
    RTC.getLocalStream({
        audio:true,
        video:true,
        attributes:{
            width: width,
            height: height
        }
    }, (info) => {
        document.getElementById('video').srcObject = info.stream
    });
}