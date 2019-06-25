const http=require('http');
const mysql=require('mysql');
const co=require('co-mysql');
const url=require('url');
const fs=require('fs');
const validator=require('./libs/validator');

//1.连接到服务器
let conn=mysql.createPool({host: 'localhost', user: 'root', password: '', database: '20181101'});
let db=co(conn);

//2.跟http配合
http.createServer(async (req, res)=>{
  const {pathname, query}=url.parse(req.url, true);

  if(pathname=='/reg'){
    let {username, password}=query;
    //0.参数是否正确
    let err=validator.username(query.username);
    if(err){
      res.write(err);
    }else{
      let err=validator.password(query.password);
      if(err){
        res.write(err);
      }else{
        //1.检查用户名是不是用过
        try{
          let data=await db.query(`SELECT ID FROM user_table WHERE username='${username}'`);
          if(data.length>0){
            res.write('此用户名已被占用');
          }else{
            await db.query(`INSERT INTO user_table (username, password) VALUES('${username}', '${password}')`);
            res.write('注册成功');
          }
        }catch(e){
          res.write('数据库有错');
        }
      }
    }
    res.end();
  }else if(pathname=='/login'){
    //0.检查用户名密码、格式
    //1.检查用户是否存在
    //2.密码对不对
    //3.返回

    let {username, password}=query;
    //0.参数是否正确
    let err=validator.username(query.username);
    if(err){
      res.write(err);
    }else{
      let err=validator.password(query.password);
      if(err){
        res.write(err);
      }else{
        try{
          let data=await db.query(`SELECT ID,password FROM user_table WHERE username='${username}'`);
          if(data.length==0){
            res.write('用户名不存在');
          }else if(data[0].password!=password){
            res.write('密码不对');
          }else{
            res.write('成功');
          }
        }catch(e){
          res.write('数据库出错');
          console.log(e);
        }
      }
    }
    res.end();
  }else{
    fs.readFile('www'+pathname, (err, buffer)=>{
      if(err){
        res.writeHeader(404);
        res.write('not found');
      }else{
        res.write(buffer);
      }
      res.end();
    });
  }
}).listen(8080);
