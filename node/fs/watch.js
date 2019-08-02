const fs = require('fs')

fs.watch('./', {
  recursive: true // 递归目录
}, (eventType, filename) => {
  console.log(eventType, filename)
})