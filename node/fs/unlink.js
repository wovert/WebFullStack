const fs = require('fs')

fs.unlink('./删除.txt', err => {
  if (err) {
    console.log('文件不存在')
    return
  }
  console.log('Delete file done!')
})