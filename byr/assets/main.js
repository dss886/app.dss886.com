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
	if (is_weixin()) {
		_czc.push(['_trackEvent', 'iOS', '微信提示']);
		TDAPP.onEvent("iOS", '微信提示');
		$("#weixin-browser").html("选择「在Safari中打开」")
		$("#bottom-modal").modal("show");
	} else {
		_czc.push(['_trackEvent', 'iOS', '下载跳转']);
		TDAPP.onEvent("iOS", '下载跳转');
		window.location.href="https://itunes.apple.com/cn/app/bei-you-ren-lun-tan-bei-you/id1115232927"
	}
}

function android_click(){
	if (is_weixin()) {
		_czc.push(['_trackEvent', 'Android', '微信提示']);
		TDAPP.onEvent("Android", '微信提示');
		$("#weixin-browser").html("选择「在浏览器中打开」")
		$("#bottom-modal").modal("show");
	} else {
		_czc.push(['_trackEvent', 'Android', '下载跳转']);
		TDAPP.onEvent("Android", '下载跳转');
		window.location.href="https://github.com/dss886/app.dss886.com/releases/download/v0.8.0/BYR-BBS-APP-v0.8.0-803-dss886-release.apk"
	}
}