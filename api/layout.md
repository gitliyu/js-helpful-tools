### layout 页面布局相关

#### isScrollBottom
- **desc**: 是否滚动到底部
- **params**: dom对象
- **return**: { Boolean } 滚动到底部时返回true，否则返回false

```javascript
isScrollBottom($(body)); // true
isScrollBottom(this.$refs.scrollWrapper); // false
````

#### scrollToTop
- **desc**: 滚动到页面顶部
- **params**: null
- **return**: null
