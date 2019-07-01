const commander = require('commander')

// 设置当前命令的版本信息
commander.version('1.0.0', '-v, --version')

// 设置其他option: name <控制台必填值>, 描述，默认值
// commander.option('-n, --name <val>', '设置名称', 'wovert')

// 设置其他option: name [控制台可选值], 描述，默认值
commander.option('-n, --name [val]', '设置名称', (val) => {
  return val.toUpperCase()
})

// 设置命令的动作
commander.action(() => {
  console.log('Hello ' + commander.name)
})

// 解析 process.args 上的数据，会自动帮助添加 -h 的解析
commander.parse(process.argv)

// node commander.js -h
// node commander.js -V
// node commander.js -v
// node commander.js --version
// node commander -name 你好
// node commander -n world

// console.log(commander)
if (commander.name === 'wovert') {
  // ....
}