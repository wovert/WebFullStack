const Koa=require('koa')
const ejs=require('koa-ejs')
const path=require('path')

let server=new Koa()
server.listen(8080)

ejs(server, {
  root: path.resolve(__dirname, 'template'),
  layout: false, // 公共目录
  viewExt: 'ejs', // 扩展名：可以任何扩展名
  cache: false, // true: 服务器缓存
  debug: false
})

server.use(async ctx=>{
  await ctx.render('1', {
    arr: [12, 5, 8, 99, 37]
  })
})
