const mysql=require('mysql');
const co=require('co-mysql');

let conn=mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test'
});
let db=co(conn);

module.exports=db;
