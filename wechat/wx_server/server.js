const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-better-body')
const xml = require('./libs/xml')
const validate = require('./libs/validator')

let server = new Koa()
server.listen(9163)

server.use(body())

server.use(async ctx => {
  const {query} = ctx
  const method = ctx.method

  if (validate(query)) {
    // test
    if (method == 'GET' && query.echostr) {
      ctx.body = query.echostr
    } else if (method == 'POST' && query.openid) {
      let data = await xml.parse(ctx.request.body)
      data = xml.normalize(data)

      let { 
        ToUserName: to, 
        FromUserName: from, 
        MsgType: type, 
        Content: msg, 
        MsgId: id
      } = data

      if (type!='text') {
        ctx.body = xml.stringify({
          xml: [
            {ToUserName: from},
            {FromUserName: to},
            {CreateTime: Math.floor(new Date().getTime()/1000)},
            {MsgType: 'text'},
            {Content: '本公众号，目前仅支持文本，请期待'}
          ]
        })
      } else {
        let [n1, n2] = msg.split('+')
        ctx.body = xml.stringify({
          xml: [
            {ToUserName: from},
            {FromUserName: to},
            {CreateTime: Math.floor(new Date().getTime()/1000)},
            {MsgType: 'text'},
            {Content: parseInt(n1) + parseInt(n2)}
          ]
        })
      }
    }
    // ctx.body=echostr
  }
})

// token获取
let access_token = ''
const appid = 'wx13fe27daf13b978f'
const appsecrt = 'bd6c9e417c9910c86823155b5be027a1'
const token_url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${appsecrt}`

const https = require('https')
const urllib = require('url')

let req = https.request(urllib.parse(token_url), res => {
  //console.log(res.statusCode)
  //console.log(res.headers)

  let arr = []
  res.on('data', data => {
    arr.push(data)
  })
  res.on('end', () => {
    let buffer = Buffer.concat(arr)
    let json = JSON.parse(buffer.toString())

    access_token = json.access_token
    console.log('获取到了token：', access_token)
  })
})

req.on('error', err => {
  console.log('获取access_token失败', err)
})

req.write('')
req.end()
















