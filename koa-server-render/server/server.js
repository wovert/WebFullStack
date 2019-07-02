const Koa = require('koa')
const Router = require('koa-router')
const static = require('./routers/static')
const body = require('koa-better-body')
const convert = require('koa-convert') //转换旧的中间件，其实就是将generator函数转换为Promise对象
const path = require('path')
const session = require('koa-session')
const fs = require('fs')
const ejs = require('koa-ejs')
const config=require('./config')

let server = new Koa()
server.listen(config.PORT);
console.log(`server running at ${config.PORT}`)

// 中间件
server.use(convert(body({
  uploadDir: path.resolve(__dirname, './static/upload'), // 指定上传路径
  keepExtensions: 'true' // 文件是否需要扩展名
})))

server.keys = fs.readFileSync('.keys').toString().split('\n')
server.use(session({
  key: 'koa:sess',      // 返给浏览器 cookie 的key 默认是 'koa:sess'
  maxAge: 20*60*1000, // 20分钟
  renew: true // 当session快过期时更新session，这样就可以始终保持用户登录 默认是false
}, server))

// 数据库
server.context.db = require('./libs/database')
server.context.config = config

// 渲染
ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false
})

// 路由和static
let router = new Router()

// 统一处理
/*
  router.use(async (ctx, next)=>{
  try{
    await next()
  }catch(e){
    ctx.throw(500, 'Internal Server Error')

    console.log(e)
  }
})
*/

router.use('/admin', require('./routers/admin'))
router.use('/api', require('./routers/api'))
router.use('', require('./routers/www'))
static(router)

server.use(router.routes())
