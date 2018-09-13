/*
* desc: 判断变量为对象，包括数组
* params: 变量
* return: { Boolean } 是对象时返回true，否则返回false
* */
function isObject (obj){
  return obj && typeof obj === 'object'
}

/*
 * desc: 判断变量为对象，不包括数组
 * params: 变量
 * return: { Boolean } 是对象时返回true，否则返回false
 * */
function isPlainObject (obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

/*
* desc: 判断变量为空对象
* params: 变量
* return: { Boolean } 是空对象时返回true，否则返回false
* */
function isEmptyObject (obj) {
  return isObject(obj) ? JSON.stringify(obj) === '{}' : false;
}

/*
* desc: 转字符串类型
* params: 变量
* return: { String } 转换后的字符串
* */
function toString (val) {
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
function toNumber (val) {
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
function selectObj (obj, keys){
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key){
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
}

export {
  isObject,
  isPlainObject,
  isEmptyObject,
  toString,
  toNumber,
  selectObj
}