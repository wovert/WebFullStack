const http=require('http');

let server=http.createServer((req, res)=>{
  switch(req.url){
    case '/aaa':
      res.write('abc');
      break;
    case '/bbb':
      res.write('dddd');
      break;
    case '/1.html':
      res.write('<html><head></head><body>sdfasfasf</body></html>');
      break;
  }

  res.end();
});
server.listen(8080);
