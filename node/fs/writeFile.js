const fs = require('fs')
fs.writeFile('./异步.txt', '异步内容', { encoding: 'utf8' }, err => {
  if (err) throw err
  console.log('Write done!')
})

