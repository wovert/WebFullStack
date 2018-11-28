const express = require('express')     //主体
const body = require('body-parser')    //接收普通POST数据
const multer = require('multer')       //接收文件POST数据

//let server=http.createServer((req, res)=>{})
//server.listen(8080)

let server=express()
server.listen(8080)

//中间件
server.use(body.urlencoded({extended: false}))

let multerObj=multer({dest: './upload/'})
server.use(multerObj.any())

//处理请求
server.post('/api', (req, res) => {
  if(req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')){
    res.setHeader('Access-Control-Allow-Origin', '*')
  }

  res.send("OK")

  console.log(req.body)      //普通POST数据
  console.log(req.files)     //文件POST数据
});

// 静态文件存放目录
server.use(express.static('./www/'))
