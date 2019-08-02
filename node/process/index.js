const fs = require('fs')

console.log(process.argv) // 当前运行的相关参数
if (process.argv.includes('-v')) {
  console.log('version v1.0.0')
}

console.log(process.env.Path) // 环境变量

if (process.env.mode || process.env.mode === 'dev') {
  console.log('development')
} else {
  console.log('production')
}

// 标准输出流
process.stdout.write('请输入项目名称：')

// 标准输入流
process.stdin.on('data', function(e){
  fs.mkdirSync(e.toString().replace('\r\n', ''))
  process.stdout.write('项目创建成功')
})

setImmediate(() => {
  console.log('setImmediate')
})

setTimeout(() => {
  console.log('settimeout')
}, 0)

process.nextTick(() => {
  console.log('nextTick');
  process.nextTick(() => {
    console.log('nextTick')
  })
})