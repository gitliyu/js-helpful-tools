# js-helpful-tools

自己收集的一些js工具方法, 会在以后不断地补充和优化,

安装
```
npm install js-helpful-tools
```

现有的使用方法如下
1. 直接调用
```javascript
import { isObject } from 'js-helpful-tools'

console.log(isObject({}));   // true
```
2. 注册为全局方法, 调用`register`方法后会将所有工具函数注册在`window`对象上
```javascript
import { register } from 'js-helpful-tools'

register();
console.log(isObject({}));   // true
```
3. 注册在Vue对象上
```javascript
import tools from 'js-helpful-tools'

Vue.use(tools);

// 组件内部调用
console.log(this.isObject({}));  // true
```

### API

>方法介绍及使用可以点击查看详情

数据类型相关(['点击查看详情'](https://github.com/gitliyu/js-helpful-tools/blob/master/api/dataType.md))
- **isObject** 判断变量是否为对象，包括数组
- **isPlainObject** 判断变量是否为对象，不包括数组
- **isEmptyObject** 判断变量是否为空对象

计算相关(['点击查看详情'](https://github.com/gitliyu/js-helpful-tools/blob/master/api/calculate.md))
- **floatAdd** 加法
- **floatSub** 减法
- **floatMul** 乘法
- **floatDiv** 除法

设备相关(['点击查看详情'](https://github.com/gitliyu/js-helpful-tools/blob/master/api/device.md))
- **getExplore** 获取浏览器
- **getOS** 获取操作系统
- **isMobile** 判断是否为移动端

随机方法(['点击查看详情'](https://github.com/gitliyu/js-helpful-tools/blob/master/api/random.md))
- **randomColor** 生成随机颜色
- **randomNumber** 生成随机数字
- **randomString** 生成随机字符串

页面布局相关(['点击查看详情'](https://github.com/gitliyu/js-helpful-tools/blob/master/api/layout.md))
- **isScrollBottom** 是否滚动到底部

> 未完待续
