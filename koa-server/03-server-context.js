const Koa = require('koa')
const Router = require('koa-router')

let server = new Koa()
server.listen(8080)

server.context.a = 12
let router = new Router()

router.get('/news/', async ctx=>{
  let { id } = ctx.query
  console.log(ctx.query)
  ctx.body = 'bbb' + ctx.a
})

server.use(router.routes())
