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
          util.isError("账号已经被注册过", that);
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
    // 两个密码必须一致
    if (subPassword != password) {
      //弹出消息
      animation.height(20).step();
      that.setData({
        eject: animation.export()
      })
      util.isError("输入密码不一致", that);
      return;
    } else {
      util.clearError(that);
    }
    // 验证都通过了执行注册方法

    app.func.getReq("serv/serv.php", { "getid": account, "getps": password}, function (res) {
      console.log(res)
      if (res == true) {
        // 显示模态弹窗
        wx.showModal({
          title: '注册成功',
          content: '注册成功，请点击确定登录吧',
          success: function (res) {
            if (res.confirm) {
              console.log("注册成功")
              // 点击确定后跳转登录页面并关闭当前页面
              // wx.redirectTo({
              //   url: '../login/login?account=' + account + '&password?=' + password + ''
              // })
            }else{
              //收回弹出框
              animation.height(0).step();
              that.setData({
                eject: animation.export()
              })
            }
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
  }





})
