// 加载 http 模块
const http = require("http");
const url = require("url");

// create web server
const webServer = http.createServer((req, res) => {
  const urlStr = url.parse(req.url, true);
  if (urlStr.pathname === "/favicon.ico") {
    return 200;
  }

  console.log(urlStr);
  console.log(urlStr.query); // { name: 'wovert', age: '1' }
  res.setHeader("Token", "This is test token");
  res.writeHead(200, "ok", {
    "content-type": "text/html; charset=utf-8" // default
    // "content-type": "text/plain"
  });
  res.write("<h1>Hello World</h1>");
  res.end();
});

webServer.on("error", err => {
  console.log(err);
});

webServer.on("listening", () => {
  console.log("listening ...");
});

// webServer.on("request", () => {
//   console.log("客户端请求了...");
// });

const port = 3000;
const host = "localhost";
webServer.listen(port, host);

console.log(webServer.address());
