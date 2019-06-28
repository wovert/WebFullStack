const http=require('http');
const cluster=require('cluster');
const os=require('os');
const process=require('process');

// 是否为主进程
if(cluster.isMaster){
  for(let i=0;i<os.cpus().length;i++){
    cluster.fork(); // 创建子进程
  }

  console.log('cpu核心数：', os.cpus().length);
  console.log('主进程');
}else{
  let server=http.createServer((req, res)=>{
    
    // 进程IP
    console.log(process.pid);

    res.write('aaaa');
    res.end();
  });

  server.listen(8080);

  console.log('服务器开好了，在8080上');
}
