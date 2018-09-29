### Regexp 正则相关

#### isEmail
- **desc**: 判断是否为邮箱地址
- **params**: { String }
- **return**: { Boolean }

```javascript
isEmail('1042625709@qq.com')  // true
isEmail('55123')  // false
```

#### isIdCard
- **desc**: 判断是否为身份证号
- **params**: { String | Number }
- **return**: { Boolean }

```javascript
isIdCard('410111200001010001')  // false
isIdCard('55123')  // false
```

#### isPhone
- **desc**: 判断是否为手机号
- **params**: { String | Number }
- **return**: { Boolean }

```javascript
isPhone('13526435030')  // true
isPhone('55123')  // false
```

#### isUrl
- **desc**: 判断是否为邮箱地址
- **params**: { String }
- **return**: { Boolean }

```javascript
isUrl('www.liyu.fun')  // true
isUrl('55123')  // false
```