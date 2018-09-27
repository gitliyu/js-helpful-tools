// 对象
/*
* desc: 判断变量为对象，包括数组
* params: 变量
* return: { Boolean } 是对象时返回true，否则返回false
* */
export function isObject (obj){
  return obj && typeof obj === 'object'
}

/*
 * desc: 判断变量为对象，不包括数组
 * params: 变量
 * return: { Boolean } 是对象时返回true，否则返回false
 * */
export function isPlainObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/*
* desc: 判断变量为空对象
* params: 变量
* return: { Boolean } 是空对象时返回true，否则返回false
* */
export function isEmptyObject (obj) {
  return isObject(obj) ? JSON.stringify(obj) === '{}' : false;
}

/*
* desc: 转字符串类型
* params: 变量
* return: { String } 转换后的字符串
* */
export function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val);
}

/*
* desc: 转数字类型
* params: 变量
* return: { Number } 转换后的数字或者原值
* */
export function toNumber (val) {
  var num = parseFloat(val)
  return isNaN(num) ? val : num;
}

/*
* desc: 选择对象属性，生成新对象
* params: 
*	obj { Object } 需要处理的对象
*   keys { String || Array } 选择的键值
* return: { Object } 由所选键值对组成的新对象
* */
export function selectObj (obj, keys){
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key){
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
}

// 字符串
/*
 * desc: 删除字符串所有空格
 * params: { String } 字符串变量
 * return: { String } 删除空格后的字符串变量
 * */
export function trim (str) {
  return str ? str.replace(/\s*/g,"") : '';
}

/*
 * desc: 删除字符串中的html标签
 * params: { String } 字符串变量
 * return: { String } 删除标签后的纯文本
 * */
export function removeTags(str){
  return str.replace(/<[^>]*>/g, '');
}
