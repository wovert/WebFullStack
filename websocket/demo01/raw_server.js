// const http = require('http')
const net = require('net')    //TCP=>原生Socket
const crypto = require('crypto') // 安全加密解密包

/*
// http 服务请求
let server=http.createServer((req, res) => {
  console.log('连接')
});
server.listen(8080)
*/

// 1. tcp 链接
let server = net.createServer(sock => {
  console.log('tcp 连接')

  /**
   * 1. 握手
   * 2. 断开
   */

  // 数据过来——握手只有一次
  sock.once('data', data => {
    console.log('hand shake with you ...')

    // str http data
    let str = data.toString()
    let lines = str.split('\r\n')

    // 舍弃第一行和最后两行
    lines = lines.slice(1, lines.length - 2)

    // 切开
    let headers = {}
    lines.forEach(line => {
      let [key, val] = line.split(': ')
      headers[key.toLowerCase()] = val
    })

    console.log(headers)

    // Connection: Upgrade => http 链接升级
    // Upgrade: websocket 链接为websocket
    if (headers['upgrade'] != 'websocket') {
      console.log('其他协议:', headers['upgrade'])
      sock.end()

    // websocket 版本
    } else if (headers['sec-websocket-version'] != 13) {
      console.log('版本不对:', headers['sec-websocket-version'])
      sock.end()

    } else {
      // websocket 秘钥
      let key = headers['sec-websocket-key']

      // mask 值是固定，不能变
      let mask = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'

      //sha1(key+mask)->base64=>client

      let hash = crypto.createHash('sha1')
      hash.update(key+mask)
      let key2 = hash.digest('base64')

      // 相应 头信息
      sock.write(`HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ${key2}\r\n\r\n`)

      console.log('hand shake end')

      // 真正的数据
      sock.on('data', data => {
        console.log('服务端接受数据：', data)
        console.log(data.toString())
      });
    }
  });

  // 断开了
  sock.on('end', () => {
    console.log('客户端已断开')
  })

})

server.listen(8080)