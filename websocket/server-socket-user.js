const http = require('http');
const io = require('socket.io');
const reg = require('./lib/reg');
const mysql = require('mysql');
const PORT = 8080;


let db = mysql.createPool({host:'localhost',user:'root',password:'root',database: 'node'});

// 1. 创建http服务
let httpServer = http.createServer();

// 监听服务端口
httpServer.listen(PORT);

// 2. 创建websocket服务
let aSock = [];
let socketServer = io.listen(httpServer);

// 监听 websocket 连接
socketServer.on('connection', function(sock){

  // 追加当前用户sock以便用于广播
  aSock.push(sock);

  let cur_username = '';
  let cur_user_id = 0;
  
  // 注册
  sock.on('reg', (user, pass) => {
    console.log(user);
    // 校验数据
    if(!reg.username.test(user)) { 
      sock.emit('reg_res', 1, '用户名不符合规范');
    } else if(!reg.password.test(pass)) {
      sock.emit('reg_res', 1, '密码不符合规范');
    } else {
      // 用户名是否存在
      const userSql = `SELECT id FROM user WHERE username="${user}"`;
      db.query(userSql, (err, data) => {
        if(err) {
          sock.emit('reg_res', 1, '数据库有错误');
        } else if (data.length > 0) {
          sock.emit('reg_res', 1, '用户名已存在');
        } else {

          // 插入用户
          const insert = `INSERT INTO user(username,password,online) VALUES('${user}','${pass}',0)`;
          db.query(insert, err => {
            if(err) {
              sock.emit('reg_res', 1, '数据库有错误');
            } else  {
              sock.emit('reg_res', 0, '注册成功');
            }
          });

        }
      });
    }
  });  

  // 登录
  sock.on('login', (user, pass) => {
    // 1.校验数据
    if (!reg.username.test(user)) {
      sock.emit('login_res', 1, '用户名不符合规范');
    } else if (!reg.password.test(pass)) {
      sock.emit('login_res', 1, '密码不符合规范');
    } else {
      // 2.获取用户信息
      const userSql = `SELECT id,password FROM user WHERE username='${user}'`;
      
      console.log(userSql);

      db.query(userSql, (err, data) => {
        if(err) {
          console.log('查找用户数据库有误：', err);
          sock.emit('login_res', 1, '查找数据库有误');
        } else if(data.length == 0) {
          sock.emit('login_res', 1, '此用户不存在');
        } else if(data[0].password != pass) {
          sock.emit('login_res', 1, '用户名或密码有误');
        } else {
          // 3.修改在线状态
          const userUpdate = `UPDATE user SET online=1 WHERE id=${data[0].id}`
          db.query(userUpdate, err => {
            if(err) {
              sock.emit('login_res', 1, '更新数据库有误');
            } else {
              sock.emit('login_res', 0, '登录成功');
              cur_username = user;
              cur_user_id = data[0].id;
            }
          });
          sock.emit();
        }
      });
    }
  });

  // 发言
  sock.on('msg', msg => {

    if (!msg) {
      sock.emit('msg_res', 1, '消息文本不能为空');
    } else {

      // 广播给所有人
      aSock.forEach(item => {
        // 过滤当前用户
        if(item == sock) return;
        item.emit('msg', cur_username, msg);
      });
      sock.emit('msg_res', 0, '发送成功');
    }
  });


  // 离线: 用户离线时触发
  sock.on('disconnect', function() {
    db.query(`UPDATE user SET online=0 WHERE id=${cur_user_id}`, err => {
      if(err) {
        console.log(`用户离线操作，数据库有误`, err);
      }
      cur_username = '';
      cur_user_id = 0;

      // 删除当前离线用户 sock
      aSock = aSock.filter(item => item != sock);
    });
  });


})