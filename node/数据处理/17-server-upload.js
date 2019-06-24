const http = require('http')
const fs = require('fs')
const utils = require('utils')

http.createServer((req, res) => {
  // console.log(req.headers)
  const delimiter = '--' + req.headers['content-type'].split('; ')[1].split('=')[1]
  let arr = []

  req.on('data', buffer => {
    arr.push(buffer)
  })

  req.on('end', () => {
    let buffer = Buffer.concat(arr)
    // 加载数据完成事件
    let res = utils.bufferSplit(buffer, delimiter)
    res.pop()
    res.shift()

    res.forEach(buffer => {
      buffer = buffer.slice(2, buffer.length - 1)
      // console.log('=========', buffer.toString(), '=========')
      let n = buffer.indexOf('\r\n\r\n')
      let info = buffer.slice(0, n).toString()
      let data = buffer.slice(n + 4)

      // console.log(info)
      // console.log(data.toString())

      if (info.indexOf('\r\n') !== -1) {
        // 上传文件
        console.log(info)
        res2 = info.split('\r\n')[0].split('; ')
        let name = res2[1].split('=')[1]
        let filename = res2[2].split('=')[1]
        name = name.substring(1, name.length - 1)
        filename = filename.substring(1, filename.length - 1)
        // console.log(name)
        // console.log(filename)
        
        // 写入文件
        fs.writeFile(`./upload/${filename}`, data, err => {
          if (err) {
            console.log(err)
          } else {
            console.log('上传成功！')
          }    
        })
      } else {
        // 普通信息
        let name = info.split('; ')[1].split('=')[1]
        name = name.substring(1, name.length-1)
        // console.log(name)
        // console.log(data.toString())
      }
    })
    // console.log(res)
  })
}).listen(8080)