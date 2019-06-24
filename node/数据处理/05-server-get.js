const http = require('http')
const querystring = require('querystring')

let server = http.createServer(function (req, res){
  let [url, query] = req.url.split('?')
  let queryParams = querystring.parse(query)

  console.log('url:', url)
  console.log('query:', queryParams)
})
server.listen(8080)