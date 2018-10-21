const http = require('http');
let server = http.createServer((req, res) => {
  // ajax1.0 方式
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead('200', {'content-type': 'text/html;charset=utf-8'});
  res.write('ok');
  res.end();
});

server.listen(8080);