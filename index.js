import calculate from './util/calculate'
import dataType from './util/dataType'
import device from './util/device'
import random from './util/random'

// 工具包
var utils = [
  calculate,
  dataType,
  device,
  random
];
// 工具方法
var tools = {};

utils.forEach(function (item) {
  tools = Object.assign(tools, item);
})

tools = Object.assign(tools, {
  // 注册为全局方法
  register: function () {
    Object.keys(tools).forEach(function (item) {
      window[item] = tools[item];
    })
  },
  // 注册在Vue原型
  install: function (Vue) {
    Object.keys(tools).forEach(function (item) {
      Vue.prototype[item] = tools[item];
    })
  }
})

export default tools
