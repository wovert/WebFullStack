const Koa = require('koa')
const Router = require('koa-router')
const session = require('koa-session')

let server = new Koa()
server.listen(8080)

server.keys = [
  'asdfasdfasdfasdfasdf',
  'hghjfgjghjkyggfytyurt',
  'hjghjkfguig8ygyi8t78i8',
]
server.use(session({
  maxAge: 20*60*1000,   // 有效期
  renew: true           // 自动续期
}, server))

server.use(async ctx=>{
  if (!ctx.session['view']) {
    ctx.session['view']=0
  }
  ctx.session['view']++
  ctx.body=`欢迎你第${ctx.session.view}次来访`
})
