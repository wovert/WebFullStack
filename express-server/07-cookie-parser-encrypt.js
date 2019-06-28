const express=require('express')
const cookieParser = require('cookie-parser')

let server = express()
server.listen(8080)

server.use(cookieParser(
  'fasdgfhsrtyredfbfd56te5645sdter76tytutyi456ythgfgerrhdfghfdg'
))

server.get('/setcookie', (req, res)=>{
  res.cookie('amount', 99.8, {
    //httpOnly: true,
    maxAge: 14*86400*1000, // 二周
    //secure: true,         // 只有https才能使用
    signed: true // 是否签名
  })
  res.send('ok')
})

server.get('/getcookie', (req, res)=>{
  console.log('cookie:', req.cookies)         // 未签名的
  console.log('signed:', req.signedCookies)   // 签名的
  res.send(req.signedCookies)
})
