const express = require('express')
const cookieSession = require('cookie-session')

let server = express()
server.listen(8080)

server.use(cookieSession({
  // 循环秘钥
  keys: ['asdfwqw4r4r343fdgsdfg', 'safdas454trgtrthdfthd', 'dfsdfgdfyrt6u6t7yit7u'],
  maxAge: 20*60*1000  // 20分钟
}))

server.get('/session', (req, res)=>{
  console.log(req.session)
  if(!req.session['view']){
    req.session['view'] = 1
  } else {
    req.session['view']++
  }

  req.session['amount'] = 99.8
  res.send(`欢迎你第${req.session['view']}到访本站，你的余额是：${req.session['amount']}`)
})
