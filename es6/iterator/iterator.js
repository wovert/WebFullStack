let arr = [1,2,3]
let iterator = arr[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

let o = {
  0: 'AA',
  1: 'BB',
  2: 'CC',
  length: 3,
}
// o.__proto__[Symbol.iterator] = Array.prototype[Symbol.iterator]
o.__proto__[Symbol.iterator] = function () {
  let _this = this
  this.i = 0
  return {
    next() {
      return {
        value: _this[_this.i++],
        done: _this.i > _this.length
      }
    }
  }
}
for (let item of o) {
  console.log(item)
}

console.log([...o])

let iterator2 = o[Symbol.iterator]()
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
