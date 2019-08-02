const { resolve } = require('path')
console.log(resolve('./', 'usr', 'local', 'nginx')) // 相对路径转换成绝对路径