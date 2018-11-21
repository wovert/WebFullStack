const http = require('http');


let server = http.createServer(function(request, response){
  console.log(request);

  // 请求地址
  console.log(`客户端请求地址：${request.url}`);

  let page,content;
  switch(request.url) {
    case '/':
      page = 'index.html';
      content = '<h1>主页内容</h1>';
      break;

    case '/about':
      page = 'aboute.html';
      content = '<h1>关于我们</h1>';
      break;

    case '/product':
      page = 'product.html';
      content = '<h1>产品内容</h1>';
      break;

    default:
      page = 'none';
      content = '没有此页面';
  }

  // 响应给客户端
  response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
  response.write(`${page}:${content}`);
  response.end();
})

// 监听：等待客户端连接
server.listen(8810, function(){
  console.log(' 开始运行:http://localhost:8010/')
});