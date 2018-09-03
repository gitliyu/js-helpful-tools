# js-helpful-tools

自己收集的一些js工具方法, 会在以后不断地补充和优化, 现有的使用方法如下(待优化)

1.直接调用
```javascript
import { isObject } from 'js-helpful-tools'

console.log(isObject({}));   // true
```
2.注册为全局方法, 调用`register`方法后会将所有工具函数注册在`window`对象上
```javascript
import { register } from 'js-helpful-tools'

register();
console.log(isObject({}));   // true
```
3.注册在Vue对象上
```javascript
import tools from 'js-helpful-tools'

Vue.use(tools);

// 组件内部调用
console.log(this.isObject({}));  // true
```

### API文档(待优化，目前注释写的比较详细，需要考虑一下文档怎么写比较清晰)

数据类型
- **isObject** 判断变量是否为对象，包括数组
- **isPlainObject** 判断变量是否为对象，不包括数组
- **isEmptyObject** 判断变量是否为空对象

浮点数计算
- **floatAdd** 加法
- **floatSub** 减法
- **floatMul** 乘法
- **floatDiv** 除法

设备
- **getExplore** 获取浏览器
- **getOS** 获取操作系统

随机方法
- **randomColor** 生成随机颜色
- **randomNumber** 生成随机数字
- **randomString** 生成随机字符串

> 未完待续