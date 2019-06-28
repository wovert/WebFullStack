const Koa=require('koa')
const Router=require('koa-router')
const static=require('koa-static')

let server=new Koa()
server.listen(8080)

let router=new Router()

router.get('/user', async ctx=>{
})

server.use(router.routes())

server.use(static('./static', {
  maxage: 86400*1000,
  index: '1.html'
}))
