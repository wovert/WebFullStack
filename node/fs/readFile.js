const fs = require('fs')
fs.readFile('./异步.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
const data = fs.readFileSync('./同步.txt', 'utf-8')
console.log('log......')
console.log(data)
