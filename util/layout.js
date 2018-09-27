/*
 * desc: 是否滚动到底部
 * params: dom对象
 * return: { Boolean } 滚动到底部时返回true，否则返回false
 * */
export function isScrollBottom (target) {
  return target.scrollTop === target.scrollHeight - target.clientHeight;
}

/*
 * desc: 滚动到页面顶部
 * params: null
 * return: null
 * */
export function scrollToTop() {
  var top = document.documentElement.scrollTop || document.body.scrollTop;
  if (top > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, top - top / 8);
  }
}