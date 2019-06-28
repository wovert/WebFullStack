const express = require('express')
const body = require('body-parser')

let server = express()
server.listen(8080)

server.use(body.urlencoded({
  extended: false
}))

server.post('/reg', (req, res)=>{
  console.log(req.body)
  res.send(req.body)
  res.end()
})
