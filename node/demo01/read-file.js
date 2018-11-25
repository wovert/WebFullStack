const fs = require('fs');

// 读取文件内容
const f = '1.txt';
fs.readFile(f, (err,data)=>{
  if(err) {
    console.log('error');
  } else {
    console.log('ok');
    console.log(data.toString());
  }
});

// 写入文件内容
const f2 = '2.txt';
const content = '写入文件内容';
fs.writeFile(f2, content, err=>{
  if(err) {
    console.log('write file error.');
  } else {
    console.log('写入成功');
  }
});

