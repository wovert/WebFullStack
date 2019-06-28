const express = require('express')
const cookieParser = require('cookie-parser')

let server = express()
server.listen(8080)
server.use(cookieParser())

server.get('/setcookie', (req, res)=>{
  res.cookie('amount', 99.8, {
    //domain: 'aaa.com',
    //path: '/',
    maxAge: 14*86400*1000 // 二周
  })
  res.send('ok')
})

server.get('/getcookie', (req, res)=>{
  console.log(req.cookies)
  res.send('ok')
})
