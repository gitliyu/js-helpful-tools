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

#### toString
- **desc**: 转字符串类型
- **params**: 变量
- **return**: { String } 返回转换后的字符串

```javascript
toString({ a: 1 });		// '{a: 1}'
toString(null);  		// ''
toString(3.14);  		// '3.14'
````

#### toNumber
- **desc**: 转数字类型
- **params**: 变量
- **return**: 对于可以转换的类型，返回转换后的数字，否则返回原值

```javascript
toNumber({});		// {}
toNumber('3.14');  	// 3.14
````

#### selectObj
- **desc**: 选择对象属性，生成新对象
- **params**: 
     - obj { Object } 需要处理的对象
     - keys { String || Array } 选择的键值
- **return**: { Object } 由所选键值对组成的新对象

```javascript
var obj = { 
  id: 1, 
  name: 'xiaoming', 
  mobile: '13512341234', 
  password: 'fad55as' 
}

console.log(selectObj(obj, 'name mobile')); // { name: '13512341234', password: 'fad55as' }
console.log(selectObj(obj, ['name', 'mobile']));
````