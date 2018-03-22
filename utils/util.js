//转换为时间
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//转化为数字
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 去前后空格  验证账号不能是全空格 
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 提示错误信息
function isError(msg, that) {
  that.setData({
    //showTopTips: true, //我改为用动画的方式 暂时不用wx:if的形式
    errorMsg: msg
  })
}

// 清空错误信息
function clearError(that) {
  that.setData({
    //showTopTips: false,
    errorMsg: ""
  })
}

//多张图片上传
function uploadimg(data) {
  var that = this,
  i = data.i ? data.i : 0,//当前上传的哪张图片
  success = data.success ? data.success : 0,//上传成功的个数
  fail = data.fail ? data.fail : 0;//上传失败的个数
  wx.uploadFile({
    url: data.url,
    filePath: data.path[i],
    name: 'file',//这里根据自己的实际情况改
    formData: null,
    success: (resp) => {
      success++;//图片上传成功，图片上传成功的变量+1
      console.log(resp)
      console.log(i);
      //这里可能有BUG，失败也会执行这里,所以这里应该是后台返回过来的状态码为成功时，这里的success才+1
    },
    fail: (res) => {
      fail++;//图片上传失败，图片上传失败的变量+1
      console.log('fail:' + i + "fail:" + fail);
    },
    complete: () => {
      console.log(i);
      i++;//这个图片执行完上传后，开始上传下一张
      if (i == data.path.length) {   //当图片传完时，停止调用          
        console.log('执行完毕');
        console.log('成功：' + success + " 失败：" + fail);
      } else {//若图片还没有传完，则继续调用函数
        console.log(i);
        data.i = i;
        data.success = success;
        data.fail = fail;
        that.uploadimg(data);
      }

    }
  });
}

module.exports = {
  formatTime: formatTime,
  trim: trim,
  isError: isError,
  clearError: clearError,
  uploadimg: uploadimg,
}