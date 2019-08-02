const path = require('path')

console.log('__dirname    ', __dirname) // 返回绝对路径 
console.log('__filename    ', __filename) // 返回绝对路径
console.log('process.cwd()', process.cwd()); // node命令所在目录
console.log('./           ', path.resolve('./'));
