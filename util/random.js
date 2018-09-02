/*
* desc: 生成随机颜色
* params: null
* return: { String } 六位颜色代码
* */
function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

/*
 * desc: 生成随机数
 * params:
 *   min { Number } 数字下限
 *   max { Number } 数字上限
 * return: { Number } 范围内的随机整数
 * */
function randomNum(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

/*
 * desc: 生成随机字符串
 * params:
 *   len { Number } 生成的字符串长度
 *   charSet { String } 选取的随机字符串
 * return: { String } 生成的随机字符串
 * */
function randomString(len, charSet) {
  charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var randomString = '';
  for (var i = 0; i < len; i++) {
    var randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz,randomPoz+1);
  }
  return randomString;
}

export default {
  randomColor,
  randomNum,
  randomString
}