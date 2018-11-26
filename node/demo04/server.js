const http = require('http')
const mysql = require('mysql')
const fs = require('fs')
const url = require('url')
const zlib = require('zlib')
const crypto = require('crypto')

const _key='sadfslekrtuew5iutoselgdtjiypoydse4ufhs.edtyo;s8te4arfeliawkfhtsie5tlfia;sefdshroiupeoutwyeli5gurse;ihf'

function md5(str){
  let obj = crypto.createHash('md5')
  obj.update(str)
  return obj.digest('hex')
}

function md5_2(str){
  return md5(md5(str)+_key)
}

const dbConfig = {host: 'localhost', port: 3306, user: 'root', password: '', database: 'test'}

let db = mysql.createPool(dbConfig)

let server = http.createServer((req, res) => {
  let {pathname, query} = url.parse(req.url, true)
  let {user, pass} = query

  switch(pathname) {

    // 接口
    case '/reg':
      // 校验
      if (!user) {
        res.write('{"err": 1, "msg": "username can\'t be null"}')
        res.end()
      } else if (!pass) {
        res.write('{"err": 1, "msg": "password can\'t be null"}')
        res.end();
      } else if (!/^\w{4,16}$/.test(user)) {
        res.write('{"err": 1, "msg": "username is invaild"}')
        res.end()
      } else if (/['|"]/.test(pass)) {
        res.write('{"err": 1, "msg": "password is invaild"}')
        res.end();
      } else {
        db.query(`SELECT * FROM user WHERE username='${user}'`, (err, data) => {
          if (err) {
            res.write('{"err": 1, "msg": "database error"}')
            res.end()
          } else if (data.length > 0) {
            res.write('{"err": 1, "msg": "this username exsits"}')
            res.end()
          } else {
            db.query(`INSERT INTO user (id, username, password) VALUES(null,'${user}','${md5_2(pass)}')`, (err, data) => {
              if (err) {
                res.write('{"err": 1, "msg": "database error"}')
                res.end()
              } else {
                res.write('{"err": 0, "msg": "success"}')
                res.end()
              }
            });
          }
        });
      }
      break;

    case '/login':
      //校验
      if (!user) {
        res.write('{"err": 1, "msg": "username can\'t be null"}')
        res.end()
      } else if (!pass) {
        res.write('{"err": 1, "msg": "password can\'t be null"}')
        res.end()
      } else if (!/^\w{4,16}$/.test(user)) {
        res.write('{"err": 1, "msg": "username is invaild"}')
        res.end()
      } else if (/['|"]/.test(pass)) {
        res.write('{"err": 1, "msg": "password is invaild"}')
        res.end();
      } else {
        db.query(`SELECT * FROM user WHERE username='${user}'`, (err, data) => {
          if (err) {
            res.write('{"err": 1, "msg": "database error"}')
            res.end()
          } else if (data.length==0) {
            res.write('{"err": 1, "msg": "no this user"}')
            res.end()
          } else if (data[0].password!=md5_2(pass)) {
            res.write('{"err": 1, "msg": "username or password is incorrect"}')
            res.end()
          } else {
            res.write('{"err": 0, "msg": "success"}')
            res.end();
          }
        });
      }
      break;

    default:
      //缓存      TODO
      //静态文件
      let rs = fs.createReadStream(`www${pathname}`)
      let gz = zlib.createGzip()

      res.setHeader('content-encoding', 'gzip')
      rs.pipe(gz).pipe(res);

      rs.on('error', err=>{
        res.writeHeader(404)
        res.write('Not Found')
        res.end()
      });
  }
})

server.listen(8080)
