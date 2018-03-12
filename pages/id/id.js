//id.js
//url: "http://192.168.1.173:8080/TabangWX/serv.php", 

Page({
  data:{},

  
  getAjax:function(){
    wx.request({
      url: 'http://192.168.1.173:8080/TabangWX/serv.php',
      // data: e.detail.value, 这是要发送的数据
      method: 'POST',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
      }
    })
  }
})
