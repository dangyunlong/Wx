var app=getApp();
Page({
  data: {
    num: "",
    pages: "",
    datas:[] // 服务器返回的数据
  },
  onLoad: function (options) {
    var that = this;
    // 页面初始化 options为页面跳转所带来的参数
    // 把参数拼出来发到服务器
    var myget = {"num":options.num,"pages":options.pages};
    this.setData({
      num: options.num,
      pages: options.pages,
    })
    console.log(myget)
    var data = this.data.getdata
    //获取到参数以后再执行ajax即可。
    app.func.getReq("TabangWX/serv.php", myget, function (res) {
      that.setData({
        datas: res
      })
      console.log(that.data.datas)
    })
  },
})