const EventEmitter = require('events')

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent()


// 绑定test事件
ce.on('test', () => {
  console.log('this is a test')
})

function fn2() {
  console.log('fn2');
}

ce.on('test', fn2);

ce.on('error', (err, time) => {
  console.log(err)
  console.log(time)
})



setInterval(() => {
  ce.emit('test') // 触发test事件
}, 500)

// ce.emit('error', new Error('oops'), Date.now())