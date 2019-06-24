const fs = require('fs')

const file = './www/data.txt'
const content = `
  输入内容
`
fs.writeFile(file, content, 'utf8', err=> {
  if (err) {
    console.log('Fail：', err)
  } else {
    console.log('success')
  }
})