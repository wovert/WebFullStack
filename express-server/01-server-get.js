const express = require('express')

let server = express()
server.listen(8080)

server.get('/a', (req, res, next)=>{
  console.log('a')
  req.usertype = 5
  // throw new Error('aaaa')
  next()
  res.write('hello world')
  res.end()
})
server.get('/a', (req, res, next)=>{
  console.log(req.usertype)
})

server.get('/b', (req, res, next)=>{
  console.log(req.query);
  res.send('bbb')
  res.end()
})

// 接口后面
server.use(express.static('./static/'))
