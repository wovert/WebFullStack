const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa()
server.listen(8080)

server.keys = [
  'sdfasdfasdfsadfasddfsdaf',
  'gutryurtyhfddyt8uytug',
  'tyutryur687tyuyujghjkhj',
]
server.use(async ctx=>{
  ctx.cookies.set('user', 'blue', {signed: true})
  // console.log(ctx.cookies.get('user', {signed: true}))
})
