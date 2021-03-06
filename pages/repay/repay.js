var app = getApp()
Page({
  data: {
    /** 
    * 页面配置 
    */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    listnum: 4,//每次显示N条
    listmax:0,
    ifshow:"",
    listdata: [
      { allmoney: "2,000.00", time: "2017-12-12 13:14", img: "/images/state/state1.png", money: "2,000.00", mmoney:"1,000.00",num:"12"},
      { allmoney: "3,000.00", time: "2017-12-11 10:00", img: "/images/state/state2.png", money: "1,800.00", mmoney: "900.00", num: "6" },
      { allmoney: "1,500.00", time: "2017-12-10 09:33", img: "/images/state/state3.png", money: "1,400.00", mmoney: "1,100.00", num: "12" },
      { allmoney: "3,300.00", time: "2017-12-09 13:40", img: "/images/state/state1.png", money: "900.00", mmoney: "900.00", num: "3" },
      { allmoney: "990.00", time: "2017-11-30 06:40", img: "/images/state/state2.png", money: "100.00", mmoney: "300.00", num: "6" },
      { allmoney: "2,000.00", time: "2017-12-12 13:14", img: "/images/state/state1.png", money: "2,000.00", mmoney: "1,000.00", num: "12" },
      { allmoney: "3,000.00", time: "2017-12-11 10:00", img: "/images/state/state2.png", money: "1,800.00", mmoney: "900.00", num: "6" },
      { allmoney: "1,500.00", time: "2017-12-10 09:33", img: "/images/state/state3.png", money: "1,400.00", mmoney: "1,100.00", num: "12" },
    ],
    df:[
      { allmoney: "2,000.00", time: "2017-12-12 13:14", img: "/images/state/state1.png", money: "2,000.00", mmoney: "1,000.00", num: "12" },
      { allmoney: "3,300.00", time: "2017-12-09 13:40", img: "/images/state/state1.png", money: "900.00", mmoney: "900.00", num: "3" },
    ]

  },
  add:function(){
    var that = this;
    var num=this.data.listnum+4;
    this.data.listmax = this.data.listdata.length;

    if (this.data.listnum >= this.data.listmax){
      return false
    }else{
      that.setData({
        listnum: num
      });
    }

  },
  onLoad: function () {
    var that = this;
    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    }else{
    that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }




})  