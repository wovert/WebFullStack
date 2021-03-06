let str = "111"
let str1 = "111"
let sy1 = Symbol(111)
let sy2 = Symbol(111)

console.log(str === str1) // true
console.log(sy1 === sy2) // false
console.log(typeof sy1) // symbol

let ss = Symbol()
let name = Symbol('name')
let obj = {a: "AA", [ss]:"你好", [name]: "hello"}
console.log(obj.ss) // undefined
console.log(obj["ss"]) // undefined
console.log(obj[ss]) // 你好
console.log(obj[name]) // hello

console.log(Object.getOwnPropertySymbols(obj)) // 返回所有属性名是 Symbol 类型的数组
console.log(Object.keys(obj)) // ['a']

var Person = (function() {
  let _gender = Symbol('gender')

  function p(name, gender) {
    this.name = name
    this[_gender] = gender
  }
  p.prototype.say = function() {
    console.log(this[_gender])
  }
  return p
})()

let p1 = new Person('wovert', '男')
console.log(p1)
p1.say()
console.log(p1[Symbol('gender')]) // undefined