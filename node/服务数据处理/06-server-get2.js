const http = require('http')
const url = require('url')

let server = http.createServer(function (req, res) {
  // true: query解析为JSON对象，false: query解析为字符串
  let {pathname, query} = url.parse(req.url, true)

  console.log('pathname:', pathname)
  console.log('query:', query)
})
server.listen(8080)