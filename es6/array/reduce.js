let data = [1, 2, 3, 4]
let sum = (...rest) => {
  // 可以传一个参数，页可以传二个参数
  // 第二个参数表示初始值
  // val => 0, item 每个元素值
  // 如果没有给初始值的时候，第一次执行函数的时候 val=第一个元素 item=第二个元素
  // reduc 从右往左
  // let result = rest.reduce((val, item, index, origin) => {
  //   // return val + item // 返回值成为下一次函数执行的时候val
  //   let sum = val + item
  //   return index === origin.length - 1 ? sum/origin.length : sum
  // }, 0)

  let result = rest.reduceRight((val, item, index, origin) => {
    // return val + item // 返回值成为下一次函数执行的时候val
    let sum = val + item
    return index === 0 ? sum/origin.length : sum
  }, 0)

  return result
}
console.log(sum(...data)) // 2.5

Array.prototype.reduce1= function(reducer, initVal) {
  for (let i = 0; i < this.length; i++) {
    initVal = reducer(initVal, this[i])
  }
  return initVal
}
let result = data.reduce1(function(val, item) {
  return val + item
}, 0)

console.log(result)