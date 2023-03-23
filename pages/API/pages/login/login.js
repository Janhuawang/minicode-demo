const requestUrl = require('../../../../config').loginUrl
const duration = 2000
Page({
  data: {

  },
  onLoad(options) {

  },
  onReady() {

  },
  onShow() {

  },
  onHide() {

  },
  onUnload() {

  },
  onShareAppMessage() {
    return {
      title: '',
    };
  },
  onLogin: function () {
    var self = this
    
    console.log('ronLogin1')

    wx.request({
      url: requestUrl,
      data: {
        phone: '18333952992',
        'source': 'estate_app',
        'password': 'a123456A',
        'grant_type': 'estate_app',
        'scope': 'all',
      },
      header: {
        Authorization: 'Basic ZXN0YXRlQXBwOmVzdGF0ZWFwcF9zZWNyZXQ=',
        "content-type": "application/x-www-form-urlencoded",
        // 'IBMS-Auth': await NativeAbilities.getToken(),
        // projectId
        
      },
      method: "POST",
      // dataType: "json",
      
      success: function (result) {
        wx.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration
        })
        self.setData({
          loading: false
        })
        console.log('request success', result)
      },

      fail: function ({ errMsg }) {
        console.log('request fail', errMsg)
        self.setData({
          loading: false
        })
      }
    });
  }
});