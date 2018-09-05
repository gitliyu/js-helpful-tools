/*
 * desc: 是否滚动到底部
 * params: dom对象
 * return: { Boolean } 滚动到底部时返回true，否则返回false
 * */
function isScrollBottom (target) {
  return target.scrollTop === target.scrollHeight - target.clientHeight;
}

export {
  isScrollBottom
}