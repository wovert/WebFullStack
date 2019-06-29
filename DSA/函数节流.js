/** 
 * 1星：函数节流
 * document.addEventListener('scroll', throttle(console.log))
 * 过滤掉重复的滚动时间
 * ---1-2-3-4-5--7-8-9----
 * ---1----------7--------
 *    | 60ms  |  60ms   |
 * 场景：监听滚动UI处理
 */

function throttle(func, delay = 60) {
  let lock = false
  return (...args) => {
    if (lock) return
    func(...args)
    lock = true
    setTimeout(() => {
      lock = false
    }, delay)
  }
}
document.addEventListener('scroll', throttle(console.log))