/* global $, TDAPP */
var _czc = _czc || [];
_czc.push(["_setAccount", "1261021525"]);

const TIPS = {
    ios: "请点击右上角的菜单按钮<br/>选择「在Safari中打开」",
    android: "请点击右上角的菜单按钮<br/>选择「在浏览器中打开」",
    wxapp_scan: "微信扫描二维码打开小程序",
    wxapp_long_press: "长按图片打开小程序",
};

function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
    } else {
        return false;
    }
}

// eslint-disable-next-line no-unused-vars
function ios_click(){
    if (is_weixin()) {
        _czc.push(["_trackEvent", "iOS", "微信提示"]);
        TDAPP.onEvent("iOS", "微信提示");
        $("#wxapp_qrcode").hide();
        $("#dialog-tips").html(TIPS.ios);
        $("#bottom-modal").modal("show");
    } else {
        _czc.push(["_trackEvent", "iOS", "下载跳转"]);
        TDAPP.onEvent("iOS", "下载跳转");
        window.location.href="https://itunes.apple.com/cn/app/bei-you-ren-lun-tan-bei-you/id1115232927";
    }
}

// eslint-disable-next-line no-unused-vars
function android_click(){
    if (is_weixin()) {
        _czc.push(["_trackEvent", "Android", "微信提示"]);
        TDAPP.onEvent("Android", "微信提示");
        $("#wxapp_qrcode").hide();
        $("#dialog-tips").html(TIPS.android);
        $("#bottom-modal").modal("show");
    } else {
        _czc.push(["_trackEvent", "Android", "下载跳转"]);
        TDAPP.onEvent("Android", "下载跳转");
        window.location.href="https://github.com/dss886/app.dss886.com/releases/download/v0.8.0/BYR-BBS-APP-v0.8.0-803-dss886-release.apk";
    }
}

// eslint-disable-next-line no-unused-vars
function wxapp_click() {
    _czc.push(["_trackEvent", "Wxapp", "微信二维码"]);
    TDAPP.onEvent("Wxapp", "微信二维码");
    $("#wxapp_qrcode").show();
    $("#dialog-tips").html(is_weixin() ? TIPS.wxapp_long_press : TIPS.wxapp_scan);
    $("#bottom-modal").modal("show");
}