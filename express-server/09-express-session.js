const express = require("express");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const session = require("express-session");

let port = 8080;
let server = express();
server.listen(port, () => {
  console.log(`Server is succes, listen on ${port}`);
});

// 静态资源文件处理
server.use(express.static("./static"));

// 中间件：body-parser处理
// 传递是json格式字符串处理，转换为JSOn对象
server.use(bodyParser.json());
// 传递的是 url-encoded格式的字符串
server.use(bodyParser.urlencoded({ extended: false }));

server.use(cookie());

// 设置session: 设置客户端cookie 的过期时间（session在服务器存储的时间）
server.use(
  session({
    secret: "keyboard cat", // 秘钥
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30 // 30 days
      // secure: true
    }
  })
);

// req, res: 二次封装
// next：继续查找其他接口地址
// url: /user/1?page=20
server.get("/user/:id", (req, res, next) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.path);
  console.log(req.body);
  console.log(req.cookies);

  // 设置session
  if (!req.session.views) {
    req.session.views = {};
  }
  req.session.views["count"] = (req.session.views["count"] || 0) + 1;

  res.send({
    msg: "ok"
  });
});

server.post("/user/:id", (req, res, next) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.path);
  console.log(req.body);
  console.log(req.cookies);
  console.log(req.session);
  res.send({
    msg: "ok"
  });
});
