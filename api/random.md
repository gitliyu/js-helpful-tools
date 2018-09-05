### random 随机方法

#### randomColor
- **desc**: 生成随机颜色
- **params**: null
- **return**: { String } 六位颜色代码

```javascript
randomColor(); // '#4da14f'
randomColor(); // '#e22aa3'
````

#### randomNum
- **desc**: 生成随机数
- **params**: 
    - min { Number } 数字下限
    - max { Number } 数字上限
- **return**: { Number } 范围内的随机整数

```javascript
randomNum(0, 100);    // 51
randomNum(10, 20);    // 16
````

#### randomString
- **desc**: 生成随机字符串
- **params**: 
    - len { Number } 生成的字符串长度
    - charSet { String } 选取的随机字符串,默认包含大小写字母，数字
- **return**: { String } 生成的随机字符串

```javascript
randomString(5);    // 5ad4G
randomString(4, '+_-!?');    // '??-+'
````