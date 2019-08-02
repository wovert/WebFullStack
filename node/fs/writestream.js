const fs = require('fs')
const ws = fs.createWriteStream('./文件写入.txt')

const tid = setInterval(() => {
  const num = parseInt(Math.random() * 10)
  if (num < 9) {
    console.log(num);
    ws.write(num.toString())
  } else {
    clearInterval(tid)
    ws.end()
  }
}, 200)

ws.on('finish', () => {
  console.log('done!')
})