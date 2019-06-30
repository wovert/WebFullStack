function f1(){
  return new Promise(resolve=>{
      setTimeout(()=>{
          console.log('第一步');
          
          //异步逻辑已经执行完，必须要告诉外界我执行完了
          resolve();

      },1000)
  })
}
function f2(){
  return new Promise(resolve=>{
      setTimeout(()=>{
          console.log('第二步');
          
          //告诉外界我执行完了
          resolve();
      },1000)
  })
}

f1().then(res=>{
  //返回一个promise对象
  return f2();
}).then(res=>{
  return f1();
}).then(res=>{
  return f2();
}).then(res=>{
  setTimeout(()=>{
      console.log('完成');
  },1000)
})

//第一步
//第二步
//完成