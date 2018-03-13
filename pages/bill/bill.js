var app = getApp()
Page({

  data: {
    stateimg:"/images/state/true.png",
    listdata: [
      { allmoney: "2,000.00", time: "2017-12-12 13:14", img: "/images/state/state1.png", money: "2,000.00", mmoney:"1,000.00",num:"12"},
      { allmoney: "3,000.00", time: "2017-12-11 10:00", img: "/images/state/state2.png", money: "1,800.00", mmoney: "900.00", num: "6" },
      { allmoney: "1,500.00", time: "2017-12-10 09:33", img: "/images/state/state3.png", money: "1,400.00", mmoney: "1,100.00", num: "12" },
      { allmoney: "3,300.00", time: "2017-12-09 13:40", img: "/images/state/state1.png", money: "900.00", mmoney: "900.00", num: "3" },
      { allmoney: "990.00", time: "2017-11-30 06:40", img: "/images/state/state2.png", money: "100.00", mmoney: "300.00", num: "6" },
    ],
    qi: ["3期","6期","12期","24期","32期"],
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
      })
    },
  }

})  