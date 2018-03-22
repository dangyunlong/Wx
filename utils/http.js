//var app = getApp(); //如果把http.js定义到全局 则无法在使用此方法
//var rootDocment = app.globalData.link; //从globalData全局对象中获取link属性
var rootDocment = "http://192.168.1.173:8080/";
//var rootDocment = "http://192.168.1.106:8080/";
//get
function getReq(url,data,cb) {
  wx.showLoading({
    title: "加载中",
  })
  wx.request({
    url: rootDocment + url,
    method: "get",
    data: data,
    success: function (res) {
      wx.hideLoading();
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    }
  })
}
//post
function postReq(url, data, cb) {
  wx.showLoading({
    title: '加载中',
  })
  wx.request({
    url: rootDocment + url,
    data: data,
    method: 'post',
    success: function (res) {
      wx.hideLoading();
      return typeof cb == "function" && cb(res.data)
    },
    fail: function () {
      wx.hideLoading();
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb == "function" && cb(false)
    }
  })
}

module.exports = {
  getReq: getReq,
  postReq: postReq
}  