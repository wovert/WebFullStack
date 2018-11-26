const mysql = require('mysql')

const dbConfig = {host: 'localhost', user: 'root', password: '', port: 3306, database: 'test'}

let db = mysql.createConnection(dbConfig)

let title = '标题-' + Math.random()
let content = '内容-' + Math.random()
let category = 'node'

let sql = `INSERT INTO article (id,title,author,content,category,createdAt, updatedAt) VALUES(null, '${title}', 'admin','${content}','${category}', '2018-11-26 19:02:20', '2018-11-26 19:02:20');`

db.query(sql, (err, data) => {
  if (err) {
    console.log('错了', err)
  } else {
    console.log(data)
  }
});
