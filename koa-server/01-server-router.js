const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa()
server.listen(8080)

let router = new Router()

router.get('/news/:id/', async (ctx, next)=>{
  let { id } = ctx.params
  ctx.body = 'bbb'
  await next()
})
router.get('/news/1/', async ctx=>{
  let { id } = ctx.params

  ctx.body += 'aaa'
})

server.use(router.routes())
