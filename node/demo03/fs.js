const fs=require('fs');

fs.stat('./www/1.html', (err, stat)=>{
  if(err){
    console.log('获取文件信息失败');
  }else{
    console.log(stat.mtime.toGMTString());
  }
});
