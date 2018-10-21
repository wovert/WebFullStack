const http = require('http')

let server = http.createServer((req, res) => {
  // console.log(req.headers);
  let lang = req.headers['accept-language'].split(';')[0].split(',')[0];
  switch(lang.toLowerCase()) {
    case 'zh-cn':
      res.setHeader('location', 'https://lingyima.com');
      res.writeHeader(302); 
      break;

    case 'en-us':
      res.setHeader('location', 'https://github.com/wovert');
      res.writeHeader(302); 
      break;

    default:
      res.setHeader('location', 'http://localhost:8080/');
      res.writeHeader(302); 
      break;
  }
  res.end();
})

server.listen(8080);