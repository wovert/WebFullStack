const fs = require('fs')

const file = './www/data.txt'
fs.readFile(file, (err, buffer)=> {
  if (err) {
    console.log('Fail：', err)
  } else {
    // data 是Buffer 数据
    console.log('success:', buffer)
    console.log('读取文字内容：', buffer.toString())
  }
})