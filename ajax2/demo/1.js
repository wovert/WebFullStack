const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  
  res.end()
  res.write('aaa')

}).listen(8080)
