const net=require('net');
const crypto=require('crypto');

function parseHeader(str){
  let arr=str.split('\r\n').filter(line=>line);
  arr.shift();

  let headers={};
  arr.forEach(line=>{
    let [name, value]=line.split(':');

    name=name.replace(/^\s+|\s+$/g, '').toLowerCase();
    value=value.replace(/^\s+|\s+$/g, '');

    headers[name]=value;
  });

  return headers;
}

let server=net.createServer(sock=>{
  sock.once('data', buffer=>{
    let str=buffer.toString();
    let headers=parseHeader(str);

    if(headers['upgrade']!='websocket'){
      console.log('no upgrade');
      sock.end();
    }else if(headers['sec-websocket-version']!='13'){
      console.log('no 13');
      sock.end();
    }else{
      let key=headers['sec-websocket-key'];
      let uuid='258EAFA5-E914-47DA-95CA-C5AB0DC85B11';
      let hash=crypto.createHash('sha1');

      hash.update(key+uuid);
      let key2=hash.digest('base64');

      sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection:upgrade\r\nSec-Websocket-Accept:${key2}\r\n\r\n`);
    }
  });

  sock.on('end', ()=>{

  });
});
server.listen(8080);
