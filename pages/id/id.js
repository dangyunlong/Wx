var app = getApp();
Page({
  data: {
    img:"/images/photo/plus.png",
    useKeyboardFlag:true, //控制使用键盘还是发送语音
    keyboardInputValue:"", //控制input组件的初始值
    sendMoreMsgFlag:false,  // 控制是否显示图片控制面板
    chooseFiles:[], //上传获得的是一组图片
    delid:"", //要删除图片的id

    //弹出菜单
    actionSheetHidden: true,
    actionSheetItems: [
      { bindtap: 'Menu1', txt: '编辑' },
      { bindtap: 'Menu2', txt: '删除' }
    ],
    menu:'',
  },
  //上传图片
  chooseImage: function (enent){
    //先获取要上传的图片组
    var imgArr=this.data.chooseFiles;
    //进行最大不超过3张的判断
    var leftCount = 3 - imgArr.length;
    if (leftCount<=0){
      return false;
    }
    var sourceType=[enent.currentTarget.dataset.category],
    that=this;
    console.log(leftCount);
    wx.chooseImage({
      count: leftCount, // 动态数量
      sourceType: sourceType, // 指定来源是相册还是相机
      success: function (res) {
        // 可以分次选择图片，但总数不能超过3张
        console.log(res);
        that.setData({
          chooseFiles: imgArr.concat(res.tempFilePaths)
        });
      }
    })
  },
  //预览图片
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.chooseFiles
    })
  },
  //删除图片
  delImg:function(e){
    var current = e.target.dataset.index; //获得data-index的值
    var arr = this.data.chooseFiles; 
    arr.splice(current, 1);
    //console.log(this.data.chooseFiles);
    //重新赋值
    this.setData({
      chooseFiles: this.data.chooseFiles
    });
  },
  //弹出菜单
  actionSheetTap: function (e) {
    this.setData({
      delid: e.target.dataset.index,//把要删除的id发送过去 data-index
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetbindchange: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  //编辑
  bindMenu1: function () {
    var imgArr = this.data.chooseFiles;
    var that = this;
    var current = this.data.delid; //获得要编辑的id

    //console.log(newimg);
    wx.chooseImage({
      count: 1, // 动态数量
      success: function (res) {
        var newpaths = res.tempFilePaths[0];
        //获取你要编辑的那张key然后赋值 注意这一步不能放在外面
        that.data.chooseFiles[current] = newpaths;
        that.setData({
          chooseFiles: that.data.chooseFiles
        })
      }
    })

    //关闭菜单
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
    
  },
  //删除
  bindMenu2: function (e) {
    var current = this.data.delid; //获得要删除的id
    var arr = this.data.chooseFiles;
    arr.splice(current, 1);
    //console.log(this.data.chooseFiles);
    //重新赋值
    this.setData({
      chooseFiles: this.data.chooseFiles
    });
    //关闭窗口
    this.setData({
       actionSheetHidden: !this.data.actionSheetHidden
    })

  }
})