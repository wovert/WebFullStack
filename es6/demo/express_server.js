const express = require('express')     //主体
const body = require('body-parser')    //接收普通POST数据
const multer = require('multer')       //接收文件POST数据
const mysql = require('mysql')

let db = mysql.createPool({
  host: 'localhost', 
  port: 3309, 
  user: 'root', 
  password: '', 
  database: '20180208'})

let server = express()
server.listen(8080)

//中间件
server.use(body.urlencoded({extended: false}))

let multerObj = multer({dest: './upload/'})
server.use(multerObj.any())

//处理请求
server.use('/api', (req, res)=>{
  if (req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  }

  let arr = []
  req.files.forEach(file => {
    arr.push(`('${file.originalname}', '${file.filename}', ${Math.floor(Date.now()/1000)})`)
  })

  let sql = `INSERT INTO image_table (originalname, filename, time) VALUES${arr.join(',')}`

  //console.log(sql)
  db.query(sql, (err) => {
    if (err) {
      res.send('不OK')
    } else {
      res.send("OK")
    }
  })
})

server.use(express.static('./www/'))
