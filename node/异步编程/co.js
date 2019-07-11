let fs = require("fs");
function readFile(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}
function* read() {
  console.log(2);
  let template = yield readFile("./template.txt");
  console.log(3);
  let data = yield readFile("./data.txt");
  return template + "+" + data;
}
co(read).then(
  function(data) {
    console.log(data);
  },
  function(err) {
    console.log(err);
  }
);

function co(gen) {
  let it = gen();
  return new Promise(function(resolve, reject) {
    !(function next(lastVal) {
      console.log(1);
      let { value, done } = it.next(lastVal);
      if (done) {
        console.log(5);
        resolve(value);
      } else {
        console.log(4);
        value.then(next, reason => reject(reason));
      }
    })();
  });
}
