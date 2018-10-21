const http = require('http');
const url = require('url');

let server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let {pathname, query} = url.parse(req.url, true);
  let {a,b,callback} = query;
  console.log(query);
  res.write(`${callback}(${parseInt(a)+parseInt(b)})`);
  res.end();
});

server.listen(8080);