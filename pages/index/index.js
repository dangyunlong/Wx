//引用ajax
//var http = require("../../utils/http.js");
//index.js
var app = getApp();
Page({
  data: {
    datanum:"1",
    add:"/images/photo/plus.png",
    imgUrls: [
      '/images/banner/banner1.jpg',
      '/images/banner/banner2.jpg',
    ],
    ajaxdata:[],
    //swiper
    contentimg:"/images/photo/content.jpg",
    indicatorDots: true, //  是否显示面板指示点
    autoplay: true, // 是否自动切换
    circular: true, // 是否采用衔接滑动
    current: 0, // 当前所在页面的 index
    interval: 1500, // 自动切换时间间隔
    duration: 1000, // 滑动动画时长
    menuIcon:[
      {img:"/images/index/link1.png",text:"支持百家机构"},
      {img:"/images/index/link2.png",text:"1小时闪电到账"},
      {img:"/images/index/link3.png",text:"阶梯还款计划"}
    ],
    //新闻
    news: [],
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  gtpage:function(e){
    var that=this;
    var num = e.target.dataset.num;
    //console.log(num)
    that.setData({
      datanum:num
    })
    if (num==5){
      wx.navigateTo({
        url: '../register/register',
      })
    }
  },
  onLoad:function(){
    var that = this;
    var data = {"num":"1"}
    //获取首页新闻
    app.func.getReq("TabangWX/serv.php",data,function (res) {
      //console.log("banner==")
      //console.log(res)
      that.setData({
        news: res
      })
      console.log(that.data.news)
    })
  }
  





  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  // onLoad: function () {
  //   if (app.globalData.userInfo) {
  //     this.setData({
  //       userInfo: app.globalData.userInfo,
  //       hasUserInfo: true
  //     })
  //   } else if (this.data.canIUse){
  //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //     // 所以此处加入 callback 以防止这种情况
  //     app.userInfoReadyCallback = res => {
  //       this.setData({
  //         userInfo: res.userInfo,
  //         hasUserInfo: true
  //       })
  //     }
  //   } else {
  //     // 在没有 open-type=getUserInfo 版本的兼容处理
  //     wx.getUserInfo({
  //       success: res => {
  //         app.globalData.userInfo = res.userInfo
  //         this.setData({
  //           userInfo: res.userInfo,
  //           hasUserInfo: true
  //         })
  //       }
  //     })
  //   }
  // },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }

  
})
