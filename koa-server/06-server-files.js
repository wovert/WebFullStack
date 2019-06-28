const Koa=require('koa')
const Router=require('koa-router')
const static=require('koa-static')

let server=new Koa()
server.listen(8080)

let router=new Router()

router.get('/user', async ctx=>{
})

server.use(router.routes())

let staticRouter=new Router()
staticRouter.all(/(\.jpg|\.png|\.gif)$/i, static('./static', {
  maxage: 60*86400*1000
}))
staticRouter.all(/(\.css)$/i, static('./static', {
  maxage: 1*86400*1000
}))
staticRouter.all(/(\.html|\.htm|\.shtml)$/i, static('./static', {
  maxage: 20*86400*1000
}))
staticRouter.all('', static('./static', {
  maxage: 30*86400*1000
}))

server.use(staticRouter.routes())
