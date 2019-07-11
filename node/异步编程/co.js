let fs = require('fs')
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (err, data) {
      if (err)
        reject(err)
      else
        resolve(data)
    })
  })
}
function *read() {
  let template = yield readFile('./template.txt')
  let data = yield readFile('./data.txt')
  return template + '+' + data
}
co(read).then(function (data) {
  console.log(data)
}, function (err) {
  console.log(err)
})

function co(gen) {
  let it = gen()
  return new Promise(function (resolve, reject) {
    !function next(lastVal) {
      let {value, done} = it.next(lastVal)
      if (done) {
        resolve(value)
      } else {
        value.then(next, reason => reject(reason))
      }
    }()
  })
}