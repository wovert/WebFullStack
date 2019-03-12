let arr = [1,2,3]
let result = arr.some((item)=>{
  // return item === 2 // true
  return item === '2' // false
})
console.log(result)

Array.prototype.some = function (fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return true
    }
  }
  return false
}