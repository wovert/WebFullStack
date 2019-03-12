let result2 = arr.findIndex((item) => {
  return item === 2 // index为 1
  // return item === '2' // -1
})
console.log(result2)

Array.prototype.findIndex = function(fn) {
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      return i
    }
  }
}