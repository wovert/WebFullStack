let arr = [23, 29, 37, 73, 39,75]
let a = arr.filter(function(item) {
  if (item > 50) {
    return true
  }
})
console.log(a)

Array.prototype.filter = function (fn) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    fn(this[i]) && arr.push(this[i]) 
  }
  return arr
}