const http=require('http');
const querystring=require('querystring');

let server=http.createServer((req, res)=>{
  let str='';         //?

  //有一个段到达了
  req.on('data', data=>{
    str+=data;
  });

  //结束了
  req.on('end', ()=>{
    let post=querystring.parse(str);

    console.log(str, post);
  });

  res.end();
});
server.listen(8080);
