new Promise(resolve=>{
  setTimeout(()=>{
      resolve("第一步");
  },100)
}).then(res=>{
  //res:第一步

  return 100;
}).then(res=>{
  console.log(res);
})