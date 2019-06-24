const http = require('http')
const fs = require('fs')

let server = http.createServer(function (req, res){
  console.log(req.url)
  //req.url =>'/1.html'
  //=>'www/1.html'

  fs.readFile(`www${req.url}`, (err, buffer)=>{
    if (err) {
      res.writeHeader(404)
      res.write('Not Found')
      res.end()
    } else {
      res.write(buffer)
      res.end()
    }
  })
})
server.listen(8080)