import {
  floatAdd,
  floatSub,
  floatMul,
  floatDiv
} from './util/calculate'
import {
  isObject,
  isPlainObject,
  isEmptyObject,
  toString,
  toNumber,
  selectObj,
  trim,
  removeTags,
  commasNumber
} from './util/data'
import {
  getExplore,
  getOS,
  isMobile
} from './util/device'
import {
  randomColor,
  randomNum,
  randomString
} from './util/random'
import {
  isScrollBottom,
  scrollToTop
} from './util/layout'
import {
  isEmail,
  isIdCard,
  isPhone,
  isUrl
} from './util/regexp'

var tools = {
  floatAdd,
  floatSub,
  floatMul,
  floatDiv,
  isObject,
  isPlainObject,
  isEmptyObject,
  toString,
  toNumber,
  selectObj,
  trim,
  removeTags,
  commasNumber,
  getExplore,
  getOS,
  isMobile,
  randomColor,
  randomNum,
  randomString,
  isScrollBottom,
  scrollToTop,
  isEmail,
  isIdCard,
  isPhone,
  isUrl
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
  toString,
  toNumber,
  selectObj,
  trim,
  removeTags,
  commasNumber,
  getExplore,
  getOS,
  isMobile,
  randomColor,
  randomNum,
  randomString,
  isScrollBottom,
  scrollToTop,
  isEmail,
  isIdCard,
  isPhone,
  isUrl,
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
