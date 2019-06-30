new Promise((resolve,reject)=>{
  setTimeout(()=>{
      console.log('第一步');
      resolve("第一步完成")
  },100)
}).then(res=>{
  console.log(res);   //res:第一步完成
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          console.log('第二步');
          reject('第二步失败');
      },100)
  })
}).then(res=>{
  //并不会执行到这里
  console.log('第二步成功');
}).catch(res=>{
  console.log(res);
})


//fetch是新浏览器自带的。。。。。。。。。。。。。。。。
//axios就是一个基于Promise封装出来的进行ajax请求的库
// axios.get("/getUser").then(res=>{

//     return axios.get("/getUserDetail")

// }).get("/getLoginInfo").then(res=>{
//     console.log('');
// })