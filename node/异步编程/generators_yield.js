function* foo () {
  var index = 0
  while (index < 2) {
    yield index++ //暂停函数执行，并执行yield后的操作
  }
}
var bar =  foo() // 返回的其实是一个迭代器

console.log(bar.next())    // { value: 0, done: false }
console.log(bar.next())    // { value: 1, done: false }
console.log(bar.next())    // { value: undefined, done: true }