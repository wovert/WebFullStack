// 路径解析
const path = require('path')
let str = '/var/local/www/aaa/1.png'

console.log(path.dirname(str))
console.log(path.basename(str))
console.log(path.extname(str))
console.log(path.resolve('/root/a/b', '../c', 'build', '..', 'script'))
console.log(path.resolve(__dirname, 'script'))