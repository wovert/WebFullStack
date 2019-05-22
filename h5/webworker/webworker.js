// 1.js 接受postMessage参数
this.onmessage = function(e) {
  console.log(e.data);//{v1,v2}
  
  // 执行任务
  let sum = e.data.v1 + e.data.v2
  
  // 返回
  this.postMessage(sum);

}