new Promise(function (resolve, reject) {
  setTimeout(function () {
    var a = 100;
    resolve(a); // resolve(100)
  }, 1000);
}).then(function (res) {
  console.log(res); // 100
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var b = 200;
      resolve(b); // resolve(200)
    }, 1000);
  })
}).then(function (res) {
  console.log(res); // 200
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var c = 300 
      resolve(c); // resolve(300) 
    }, 1000);
  })
}).then(function (res) {
  console.log(res); // 300
})
