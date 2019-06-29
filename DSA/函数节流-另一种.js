/** 
 * 1星：函数节流-另一种
 * 过滤掉重复的验证时间（用户输入停止后300ms触发验证）
 * ---1-2-3---------4---5--6---------
 * --------------3---------------6---
 *        |300ms |         |300ms|
 * 场景：监听滚动UI处理
 */

function throttle(func, delay = 300, I = null) {
  return (...args) => {
    clearInterval(I)
    I = setTimeout(func.bind(null, ...args), delay)
    // I = setTimeout((...args) => func(...args), delay)
  }
}