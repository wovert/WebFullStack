let fs = require('fs')
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, 'utf8', function (err, data) {
      if (err)
        reject(err)
      else
        resolve(data)
    })
  })
}

// async 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里
async function read() {
  let template = await readFile('./template.txt')
  let data = await readFile('./data.txt')
  return template + '+' + data
}

// 等同于
// function read(){
//   return co(function*() {
//     let template = yield readFile('./template.txt')
//     let data = yield readFile('./data.txt')
//     return template + '+' + data
//   })
// }

// function co(gen) {
//   let it = gen()
//   return new Promise(function (resolve, reject) {
//     !function next(lastVal) {
//       let {value, done} = it.next(lastVal)
//       if (done) {
//         resolve(value)
//       } else {
//         value.then(next, reason => reject(reason))
//       }
//     }()
//   })
// }

let result = read()
result.then(data=>console.log(data))


