/**
 * 授权
 */
const Auth = {}

Auth.checkLogin = function (appPage) {
    let wxLoginInfo = wx.getStorageSync('wxLoginInfo');
    wx.checkSession({
        success: function () {
            if (!wxLoginInfo.js_code) {
                Auth.wxLogin().then(res => {
                    appPage.setData({ wxLoginInfo: res });
                    wx.setStorageSync('wxLoginInfo', res);
                    console.log('checkSession_success_wxLogins');
                })
            }
        },
        fail: function () {
            Auth.wxLogin().then(res => {
                appPage.setData({ wxLoginInfo: res });
                wx.setStorageSync('wxLoginInfo', res);
                console.log('checkSession_fail_wxLoginfo');
            })
        }
    })
}


module.exports = Auth;