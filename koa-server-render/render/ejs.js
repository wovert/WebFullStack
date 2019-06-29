const ejs = require('ejs')

ejs.renderFile('./template/ejs-tpl.ejs', {
  name: 'blue',
  arr: [123, 54, 64]
}, (err, data) => {
  if (err) {
    console.log('错了', err)
  } else {
    console.log(data)
  }
})
