const Koa=require('koa')
const Router=require('koa-router')
const body=require('koa-better-body')

let server=new Koa()
server.listen(8080)

server.use(body({
  uploadDir: './static/upload'
}))

server.use(async ctx=>{
  // 文件和post数据
  console.log(ctx.request.fields)
  ctx.body='aaa'
})
