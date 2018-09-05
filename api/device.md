### device 设备相关

#### getExplore
- **desc**: 获取浏览器类型
- **params**: null
- **return**: { String } 'IE' 'EDGE' 'Firefox' 'Chrome' 'Opera' 'Safari' 'Unkonwn'

```javascript
getExplore(); // 'Chrome'
````
#### getOS
- **desc**: 获取操作系统
- **params**: 变量
- **return**: { String } 'MacOSX' 'windows' 'linux' 'ios' 'android' 'windowsPhone'

```javascript
getOS({});    // 'windows'
````