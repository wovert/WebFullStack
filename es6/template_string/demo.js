// function desc(strings, name, age) {
//   console.log(strings)
//   console.log(name)
//   console.log(age)
//   return `${strings[0]} ${name} ${strings[1]} {$age} ${strings[2]}`
// }

// 其他运算符：所有参数放在rest数组里
function desc(strings, ...rest) {
  console.log(strings)
  console.log(rest)
  let result = ''
  let i;
  for (i = 0; i < rest.length; i++) {
    result += strings[i] + rest[i]
  }
  result += strings[i]
  return result.toLowerCase()
}
// 带标签的模板字符串就像一个函数调用，参数
// 1 参数是文本数组
// 2 - n 是参数
let name = 'Wovert'
let age = 1
let str = desc`信息：${name} 今年 ${age} 岁了`
console.log(str)
