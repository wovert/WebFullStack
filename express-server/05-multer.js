const express = require('express')
const multer = require('multer')

let server = express()
server.listen(8080)

// upload files
let obj = multer({dest: './static/upload'})
server.use(obj.any())

server.post('/reg', (req, res)=>{
  console.log(req.files)
  res.send('upload successed')
})
