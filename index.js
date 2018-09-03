import {
  floatAdd,
  floatSub,
  floatMul,
  floatDiv
} from './util/calculate'
import {
  isObject,
  isPlainObject,
  isEmptyObject
} from './util/dataType'
import {
  getExplore,
  getOS
} from './util/device'
import {
  randomColor,
  randomNum,
  randomString
} from './util/random'

var tools = {
  floatAdd,
  floatSub,
  floatMul,
  floatDiv,
  isObject,
  isPlainObject,
  isEmptyObject,
  getExplore,
  getOS,
  randomColor,
  randomNum,
  randomString
}

// 在window对象上注册为全局函数
function register () {
  Object.keys(tools).forEach(function (item) {
    window[item] = tools[item];
  })
}

export {
  floatAdd,
  floatSub,
  floatMul,
  floatDiv,
  isObject,
  isPlainObject,
  isEmptyObject,
  getExplore,
  getOS,
  randomColor,
  randomNum,
  randomString,
  register
}

export default Object.assign(tools, {
  // 注册在Vue原型
  install: function (Vue) {
    Object.keys(tools).forEach(function (item) {
      Vue.prototype[item] = tools[item];
    })
  }
})
