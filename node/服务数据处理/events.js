const Event=require('events').EventEmitter;

/*
let ev=new Event();

//1.监听(接收)
ev.on('msg', function (a, b, c){
  console.log('收到了msg事件：', a, b, c);
});

//2.派发(发送)
ev.emit('msg', 12, 5, 88);
*/

function msg(a, b, c){
  console.log('收到了msg事件：', a, b, c);
}

msg(12, 5, 88);
