let fs = require('fs')

let after = function(times, callback) {
  let result = {}
  return function(key, value) {
    result[key] = value
    if(Object.keys(result).length === times) {
      callback(result)
    }
  }
}
let done = after(2, function(result) {
  console.log(result)
});

function render() {
  fs.readFile('template.txt','utf8',function(err,template){
    done('template', template)
  })
  fs.readFile('data.txt','utf8',function(err,data){
    done('data', data)
  })
}
render()