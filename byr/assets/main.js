// cnzz 自定义统计
var _czc = _czc || [];
_czc.push(["_setAccount", "1261021525"]);

function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

function ios_click(){
	_czc.push(['_trackEvent', '下载', '点击下载', 'ios','ios','ios-btn']);
	if (is_weixin()) {
		_czc.push(['_trackEvent', '下载', '下载跳转', 'ios','weixin','ios-btn']);
		$("#weixin-browser").html("选择「在Safari中打开」")
		$("#bottom-modal").modal("show");
	} else {
		_czc.push(['_trackEvent', '下载', '下载跳转', 'ios','browser','ios-btn']);
		window.location.href="https://itunes.apple.com/cn/app/bei-you-ren-lun-tan-bei-you/id1115232927"
	}
}

function android_click(){
	_czc.push(['_trackEvent', '下载', '点击下载', 'android','android','android-btn']);
	if (is_weixin()) {
		_czc.push(['_trackEvent', '下载', '下载跳转', 'android','weixin','ios-btn']);
		$("#weixin-browser").html("选择「在浏览器中打开」")
		$("#bottom-modal").modal("show");
	} else {
		_czc.push(['_trackEvent', '下载', '下载跳转', 'android','browser','ios-btn']);
		window.location.href="https://github.com/dss886/BYR-BBS-APP-Release/releases/download/Beta11/BYR-BBS-APP-Beta11-Build18.apk"
	}
}