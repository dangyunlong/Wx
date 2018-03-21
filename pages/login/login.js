var util = require('../../utils/util.js');
var app = getApp();

//配置动画规则
var animation = wx.createAnimation({
  duration: 1000,
  timingFunction: 'ease',
  delay: 100,
});
Page({
  data: {
    showTopTips: false, //显示错误信息
    errorMsg: "",
    eject:{},//动画变量
    src1:"../../images/state/bg.jpg",
    src2:"../../images/state/bg2.jpg",
    src3:"../../images/state/bg3.jpg",
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //设置全屏
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });

    //更新授权登陆状态
    this.setData({
      hasLogin: app.globalData.hasLogin
    })

  },
  //验证开始
  formSubmit: function (e) {
    // form 表单取值，格式 e.detail.value.name(name为input中自定义name值) ；
    // 使用条件：需通过<form bindsubmit="formSubmit">与<button formType="submit">一起使用
    var account = e.detail.value.account;
    var password = e.detail.value.password;
    var subPassword = e.detail.value.subPassword;
    var that = this;
    // 判断账号是否为空和判断该账号名是否被注册
    if ("" == util.trim(account)) {
      //弹出消息
      animation.height(20).step();
      that.setData({
        eject: animation.export()
      })
      //错误消息
      util.isError("账号不能为空", that);
      return;
    } else {
      util.clearError(that); //清除错误信息
      //判断一下账号是否被注册过
      app.func.getReq("serv/serv.php", {"getid": account}, function (res) {
        if (!res) {
          util.isError("账号未注册", that);
          return;
        }
      })
    }
    // 判断密码是否为空
    if ("" == util.trim(password)) {
      //弹出消息
      animation.height(20).step();
      that.setData({
        eject: animation.export()
      })
      util.isError("密码不能为空", that);
      return;
    } else {
      util.clearError(that);
    }
    // 验证都通过了执行注册方法
    app.func.getReq("serv/serv.php", { "getid": account, "getps": password}, function (res) {
      console.log(res)
      if (res == true) {
        // 显示模态弹窗
        wx.showToast({
          title: '',
          content: '',
          success: function (res) {
            animation.height(0).step();
            that.setData({
              eject: animation.export()
            })
          }
        })
      } else {
        // 显示消息提示框
        wx.showToast({
          title: '注册失败',
          icon: 'error',
          duration: 2000
        })
      }
    })
  },
  //微信登陆
  login: function () {
    //登录
    var that = this
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
      }
    })
  
    //获取用户信息
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo);
        that.setData({
          hasUserInfo: true,
          userInfo: res.userInfo
        })
      }
    })


  },
  gohome:function(){
    wx.switchTab({
      url:"../index/index",
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      } 
    })
  }
  
})
