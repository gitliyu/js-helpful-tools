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
- **params**: null
- **return**: { String } 'MacOSX' 'windows' 'linux' 'ios' 'android' 'windowsPhone'

```javascript
getOS();    // 'windows'
````

#### isMobile
- **desc**: 判断是否为移动端
- **params**: null
- **return**: { Boolean } 移动端返回true，否则返回false

```javascript
isMobile();    // false
````