var app = getApp()
Page({

  data: {
    stateimg:"/images/state/true.png",
    index:"0", //这个是select的下标，不是值 这里是选择器显示的那个值
    shu: "3",  //这里是获取select的值，用于计算
    factmoney:"",
    repayment:"",
    je:"",
    listdata: [
      { allmoney: "2,000.00", time: "2017-12-12 13:14", img: "/images/state/state1.png", money: "2,000.00", mmoney:"1,000.00",num:"12"},
      { allmoney: "3,000.00", time: "2017-12-11 10:00", img: "/images/state/state2.png", money: "1,800.00", mmoney: "900.00", num: "6" },
      { allmoney: "1,500.00", time: "2017-12-10 09:33", img: "/images/state/state3.png", money: "1,400.00", mmoney: "1,100.00", num: "12" },
      { allmoney: "3,300.00", time: "2017-12-09 13:40", img: "/images/state/state1.png", money: "900.00", mmoney: "900.00", num: "3" },
      { allmoney: "990.00", time: "2017-11-30 06:40", img: "/images/state/state2.png", money: "100.00", mmoney: "300.00", num: "6" },
    ],
    qi: ["3", "6", "9", "12", "24", "36"],
  },
  bindPickerChange: function (e) {
    //e.detail.value 指当前你选择内容的下标
    this.setData({
      index: e.detail.value, //把获得的值赋值给index
      shu: this.data.qi[e.detail.value],
    })

    //如果修改分期数，金额需要重新计算 state
    var value = this.data.je;
    var fq = this.data.shu; //获取shu的值
    this.setData({ je: value }) // 把当前的值写入到data中后面用于ajax
    if (value <= 2000) {
      //2000元以内不收取手续费
      this.setData({
        factmoney: value,
        repayment: (value / fq).toFixed(2), //保留两位小数
      })
    } else {
      this.setData({
        factmoney: value - 500,
        repayment: (value / fq).toFixed(2),
      })
    } 
    // end

  },
  gomoney: function (e){
    // e.detail.value 当前输入框中的值
    var value = e.detail.value;
    var fq = this.data.shu; //获取shu的值
    //console.log(fq)
    this.setData({ je: value}) // 把当前的值写入到data中后面用于ajax

    if (value <=2000) {
      //2000元以内不收取手续费
      this.setData({
        factmoney:value,
        repayment:(value/fq).toFixed(2), //保留两位小数
      })
    } else {
      this.setData({
        factmoney:value - 500,
        repayment:(value/fq).toFixed(2),
      })
    }  
  },
  enter: function(e) {
    var fq = parseInt(this.data.je); //获取金额 并转化为数字
    if (fq>0){
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
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      }) 
      
    }else{
      console.log("请输入合法金额")
      wx.showToast({
        title: '失败',
        icon: 'fali',
        // image: "/images/record-2.gif", 自定义错误图表
        duration: 2000
      }) 
    }

  }
})  