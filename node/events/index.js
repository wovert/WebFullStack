const EventEmmiter = require('events')

class Person extends EventEmmiter {
  constructor(name, age = 1) {
    super()
    this.name = name
    this.age = age

    this.growup()
  }

  growup() {
    setInterval(() => {
      this.age++
      this.emit('growup') // 触发事件
    }, 1000)
  }
  getAge() {
    return this.age
  }
}

let p = new Person('wovert')
// document.body.addEventListener('click', fn)

p.setMaxListeners(3) // 设置最大监听事件数量，超出会显示警告

// 监听事件
p.addListener('growup', function() {
  console.log('长大了,' + p.getAge())
})

// 先绑定的先执行
p.addListener('growup', function() {
  console.log('2长大了,' + p.getAge())
})

// 追加到前面事件绑定
p.prependListener('growup', function() {
  console.log('-1长大了,' + p.getAge())
})

console.log(p.eventNames())