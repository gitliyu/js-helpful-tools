### dataType 数据类型相关

#### isObject
- **desc**: 判断变量为对象，包括数组
- **params**: 变量
- **return**: { Boolean } 是对象时返回true，否则返回false

```javascript
isObject({});    // true
isObject([]);    // true
isObject(null);  // false
````
#### isPlainObject
- **desc**: 判断变量为对象，不包括数组
- **params**: 变量
- **return**: { Boolean } 是对象时返回true，否则返回false

```javascript
isPlainObject({});    // true
isPlainObject([]);    // false
isPlainObject(null);  // false
````

#### isEmptyObject
- **desc**: 判断变量为空对象
- **params**: 变量
- **return**: { Boolean } 是空对象时返回true，否则返回false

```javascript
isEmptyObject({});        // true
isEmptyObject({ a: 1 });  // false
````