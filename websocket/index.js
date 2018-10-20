const mysql = require('mysql');

// 连接池
// 创建一个数据库连接
// let db = mysql.createConnection({host:'localhost',user:'red',password:'red',database: 'user'});

// 连接池
let db = mysql.createPool({host:'localhost',user:'root',password:'root',database: 'node'});

const sql = 'select * from user';
db.query(sql, (err, data)=>{
  if(err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(data));
  }
})