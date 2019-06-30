function f1(name){
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          if(name=="a"){
              resolve("成功");
          }else{
              reject("失败")
          }
      },1000)
  })
}

// f1("a").then(res=>{
//     console.log(res);   //成功
// })

// f1("b").then(res=>{
//     console.log('成功了');
// },resError=>{
//     console.log('失败了');
// })

// f1("b").then(res=>{
//     console.log('成功了');
// }).catch(res=>{
//     console.log('失败了');
// })


f1("a").then(res=>{
  var a=5;
  a();        //这里代码发生了错误    
}).catch(res=>{
  //成功的捕捉到了成功回调中的代码错误
  console.log(res);
})