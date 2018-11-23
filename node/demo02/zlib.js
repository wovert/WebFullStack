const zlib=require('zlib');
const fs=require('fs');

// 读取流
let rs=fs.createReadStream('jquery.js');

// 写入流
let ws=fs.createWriteStream('jquery.js.gz');

// gzip压缩
let gz=zlib.createGzip();

// 读取流压缩之后写入流
rs.pipe(gz).pipe(ws);

ws.on('finish', ()=>{
  console.log('完成');
});
