const fs = require('fs')

fs.rename('./文件名.txt', '文件重命名.txt', err => {
  if (err) {
    console.log('文件不存在')
  }
  console.log('Rename done!')
})