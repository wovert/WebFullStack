const pug = require('pug')

pug.renderFile('./template/pug-tpl.pug', {
  pretty: true,
  title: '标题',
  users: [
    {name: 'blue', password: '123456'},
    {name: '张三', password: '654321'},
    {name: '李四', password: '555555'},
  ]
}, (err, data) => {
  if (err) {
    console.log('渲染失败')
  } else {
    console.log(data)
  }
})
