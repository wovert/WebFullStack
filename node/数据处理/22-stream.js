const fs = require('fs')

let rs = fs.createReadStream('./www/logo.png')
let ws = fs.createWriteStream('./www/logo2.png')

rs.pipe(ws)

rs.on('error', err=>{
  console.log('读取失败')
})

ws.on('finish', ()=>{
  console.log('写入完成')
});
