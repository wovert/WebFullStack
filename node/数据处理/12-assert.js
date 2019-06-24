// 断言

const assert = require('assert')

function sum(a, b) {
  assert(arguments.length === 2, '必须传2个参数')
  assert(typeof a === 'number', '第一个参数必须是数字')
  assert(typeof b === 'number', '第二个参数必须是数字')

  return a + b
}

console.log(sum(12, 5))

let number = '10'
// 变量：预期值：错误信息
assert.deepEqual(number, 10, 'var number is not 10')
assert.deepStrictEqual(number, 10, 'var number is not "10"')


