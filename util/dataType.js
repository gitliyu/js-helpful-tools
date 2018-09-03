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

export {
  isObject,
  isPlainObject,
  isEmptyObject
}