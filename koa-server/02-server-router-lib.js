const koa = require('koa')
const Router = require('koa-router')

let server = new koa()
server.listen(8080)

let router = new Router()
router.use('/user', require('./routers/user'))
server.use(router.routes())
