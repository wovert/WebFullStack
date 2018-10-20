const http = require('http');
const fs = require('fs');
const io = require('socket.io');
const mysql = require('mysql');
const url = require('url');
const reg = require('./lib/reg');

let db = mysql.createPool({host:'localhost',user:'root',password:'root',database: 'node'});

// const sql = 'select * from user';
// db.query(sql, (err, data)=>{
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(data));
//   }
// })

// http 服务
const httpServer = http.createServer((req, res) => {

  const urlObj = url.parse(req.url, true);
  console.log(urlObj);
  const queryObj = urlObj.query;
  console.log('请求参数', queryObj)

  let {user,pass} = queryObj;
  
  switch(urlObj.pathname) {

    // 注册接口
    case '/reg':
      console.log('请求注册接口');
      res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});

      // 1. 校验数据
      if (!reg.username.test(user)) {

        res.write(JSON.stringify({code:1, msg:'用户名不符合规范'}));
        res.end();

      } else if(!reg.password.test(pass)) {
        res.write(JSON.stringify({code:1, msg:'密码不符合规范'}));
        res.end();

      } else {

        // 2. 校验用户数据重复性
        const userSelectSql = `SELECT id FROM user WHERE username="${user}"`;
        db.query(userSelectSql, (err, data) => {
          if (err) {
            res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
            res.end();

          } else if(data.length > 0) {
            res.write(JSON.stringify({code: 1, msg: '此用户名已存在'}));
            res.end();
            
          } else{
            const userInsertSql = `INSERT INTO user(username,password,online) VALUES('${user}','${pass}',0)`;
            db.query(userInsertSql, err => {
              if(err) {
                res.write(JSON.stringify({code: 1, msg: '数据库有错'}));
                res.end();
              } else {
                res.write(JSON.stringify({code: 0, msg: '注册成功'}));
                res.end();
              }
            });
          }
        });
      }

      break;


    // 登录接口
    case '/login':
      console.log('请求登录接口');
     
      if(!reg.username.test(user)) {
        res.write(JSON.stringify({code: 1, msg: '用户名不符合规范'}));
        res.end();

      } else if(!reg.password.test(pass)) {
        res.write(JSON.stringify({code:1, msg:'密码不符合规范'}));
        res.end();
      } else {

        // 查询用户
        const userSql = `SELECT id,password FROM user WHERE username='${user}'`;
        db.query(userSql, (err, data) => {
          if(err) {
            res.write(JSON.stringify({code: 1, msg: '数据库出错'}));
            res.end();
          } else if(data.length == 0) {
            res.write(JSON.stringify({code: 1, msg: '此用户名不存在'}));
            res.end();
          } else if (data[0].password !== pass){
            res.write(JSON.stringify({code: 1, msg: '用户名或密码有误'}));
            res.end();
          } else {
            // 更新状态
            const userUpdate = `UPDATE user SET online=1 WHERE id=${data[0].id}`;
            // console.log(userUpdate);
            db.query(userUpdate, err=>{
              if(err) {
                console.log(err);
                res.write(JSON.stringify({code:1, msg:'数据库有误'}));
                res.end();
              } else {
                res.write(JSON.stringify({code:0, msg:'登录成功'}));  
                res.end();
              }
            });
          }
        })
      }
      break;

    default:
      fs.readFile(`www${req.url}`, (err,data)=>{
        if(err) {
          res.writeHead(404);
          res.write('Not Found');
        } else {
          res.write(data);
        }
        res.end();
      });
  }

});
httpServer.listen(8080);

// websocket 服务
const ws = io.listen(httpServer);
ws.on('connection', sock=> {
  sock.on('a', function(n1,n2,n3,n4,n5){
    console.log(n1,n2,n3,n4,n5);
  });

});