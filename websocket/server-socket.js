const http = require('http')
const io = require('socket.io')

const PORT = 8080;

// 1. 创建http服务
let httpServer = http.createServer();

// 监听服务端口
httpServer.listen(PORT);

// 2. 创建websocket服务
let socketServer = io.listen(httpServer);

// 监听 websocket 连接
socketServer.on('connection', function(sock){
  sock.on('a', function(num1, num2){
    console.log(`接受到了浏览器发送的数据：${num1}, ${num2}`);
  });  

  setInterval(function(){
    sock.emit('ttt', Math.random());
  }, 500)
})