const http=require('http');
const url=require('url');
const querystring=require('querystring');

let server=http.createServer((req, res)=>{
  //GET
  let {pathname, query}=url.parse(req.url, true);

  //POST
  let str='';
  req.on('data', data=>{
    str+=data;
  });
  req.on('end', ()=>{
    let post=querystring.parse(str);

    console.log(pathname, query, post);
  });
});
server.listen(8080);
