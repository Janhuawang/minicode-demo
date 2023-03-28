/**
 * 异步任务函数
 * @param {} fn 异步任务
 * @returns promise
 */
function wxPromisify(fn) {
    return function (obj = {}) {
        return new Promise((resolve, reject) => {
            obj.success = function (res) {
                //成功
                wx.hideNavigationBarLoading()
                resolve(res)

            }
            obj.fail = function (res) {
                //失败
                reject(res)
                wx.hideNavigationBarLoading()
                console.log(res)
            }
            fn(obj)
        })
    }
}


/**
 * 微信请求get方法
 * url
 * data 以对象的格式传入
 */
function getRequest(url, data) {
    var getRequest = wxPromisify(wx.request);
    wx.showNavigationBarLoading()
    return getRequest({
        url: url,
        method: 'GET',
        data: data,
        header: {
            'Content-Type': 'application/json'
        }
    })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function postRequest(url, data) {
    var postRequest = wxPromisify(wx.request)
    wx.showNavigationBarLoading()
    return postRequest({
        url: url,
        method: 'POST',
        data: data,
        header: {
            "content-type": "application/json"
        },
    })
}

/**
 * 微信请求post方法封装
 * url
 * data 以对象的格式传入
 */
function uploadFile(url, data) {
    var uploadFile = wxPromisify(wx.uploadFile)
    return uploadFile({
        url: url,
        filePath: data.imgfile,
        name: 'file',
        formData: data.formData
    })
}

module.exports = {
    postRequest: postRequest,
    getRequest: getRequest,
    uploadFile: uploadFile
}