//index.js
//获取公用js
var tools = require("../../utils/util.js");
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
    news: [
      { img: "/images/photo/new1.jpg", title: "感恩五月妈妈重回巅峰", text: "自1997年创立企业以来，刘芳女士始终坚持做好一件事——育人，努力将每一位有缘走进芳子的姑娘培养成有用的人才。2009年，师从..."},
      { img: "/images/photo/new2.jpg", title: "法国细胞护肤专家", text: "药学博士、细胞生命学家Jean博士在1978年创建了雅诗敦首支晒黑防晒霜，奠定了这个品牌在防晒界的基石..."},
      { img: "/images/photo/new3.jpg", title: "新手开美容院如何进行宣传？", text:"美容店效劳好不好是靠美容师的，技能宣扬本来即是对美容师的宣扬，经营者可以在美容店中专门拓荒一个宣扬台..." }
    ],
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
  },
  onLoad() {
    var that=this;
    //tools.cs(); //外部引用的方法只能在onload的时候才能执行
    tools.byajax("",function(res){
      console.log(res)
      that.setData({  
        ajaxdata: res
      })
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
