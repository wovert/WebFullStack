const http = require('http')
const querystring = require('querystring')

let server = http.createServer(function (req, res){
  let arr = []

  // 数据加载事件
  req.on('data', buffer => {
    arr.push(buffer)
  })

  // 数据加载完毕事件
  req.on('end', () => {
    let buffer = Buffer.concat(arr)
    let post = querystring.parse(buffer.toString())
    console.log(post)
  })
})
server.listen(8080)
