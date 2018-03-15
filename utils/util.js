const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//我添加的
function cs() {
  console.log("测试正常") 
}

function byajax(){
  //http://blog.csdn.net/qq442270636/article/details/79274128
}

module.exports = {
  formatTime: formatTime,
  cs: cs,
  byajax: byajax,
}
