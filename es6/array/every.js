let arr = [1,2,3]
let result = arr.every((item)=>{
  // 每一个元素都要符合下面判断
  return item < 4
})
console.log(result) // false

Array.prototype.every = function (fn) {
  let flag = true
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i])) {
      return false
    }
  }
  return true
}