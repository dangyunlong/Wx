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
    app.func.getReq("serv/serv.php",data,function (res) {
      //console.log("banner==")
      //console.log(res)
      that.setData({
        news: res
      })
      console.log(that.data.news)
    })
  }
})
