const http = require('http')
const io = require('socket.io')

let httpServer = http.createServer()
httpServer.listen(8080)

let wsServer = io.listen(httpServer)
wsServer.on('connection', sock => {
  //sock.emit   发送
  //sock.on     接收

  /*sock.on('aaa', function (a, b, c){
    console.log(a, b, c);
  });*/

  setInterval(function () {
    // 每隔1秒发射 t事件
    sock.emit('t', new Date().getTime())
  }, 1000)
})
