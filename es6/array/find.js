let arr = [1,2,3]
let result = arr.find((item) => {
  // return item === 2 // 2
  return item === '2' // undefined
})
console.log(result)

Array.prototype.find = function(fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return this[i]
    }
  }
}