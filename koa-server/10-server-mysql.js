const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa()
server.listen(8080)

server.context.db = require('./libs/database')

// 所有的操作从这里开始，集中处理错误信息
server.use(async (ctx, next)=>{
  try {
    await next()
  } catch(e) {
    ctx.body = '错了'
  }
})

let router = new Router()
router.all('*', async ctx=>{
  try {
    await next()
  } catch(e) {
    ctx.body = '错了-router'
  }
})

router.get('/a', async ctx=>{
  ctx.body = div.title
})

server.use(router.routes())
