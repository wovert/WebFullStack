let fs = require('fs')
let EventEmitter = require('events')
let eve = new EventEmitter()
let html = {}

// 新增监听器时，会触发 'ready' 事件
eve.on('ready', function(key, value) {
  html[key] = value
  if (Object.keys(html).length === 2) {
    console.log(html)
  }
})

function render(){
  fs.readFile('./template.txt','utf8', function(err, template) {
    // 同步地调用 ready 的事件的监听器
    eve.emit('ready','template', template)
  })
  fs.readFile('./data.txt','utf8', function(err, data) {
    // 同步地调用 ready 的事件的监听器
    eve.emit('ready','data', data)
  })
}
render()