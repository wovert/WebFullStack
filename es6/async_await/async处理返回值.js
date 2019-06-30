function q(){
  return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve("你好");
      },1000)
  })
}

// (async function(){
//     const res = await q();
//     console.log("第一次：",res);   //res:"你好"

//     const res2=await q();
//     console.log("第二次：",res2);
  
//     const res3=await q();
//     console.log("第三次：",res3);
// })()

//这样不行的，因为await必须是在async函数内部的
var o1={
  say:async ()=>{
      console.log('say方法：');

      const res = await q();

      console.log(res);
  },
  run:async function(){
      console.log('run方法');

      const res = await q();

      console.log(res);
  }
}

//需求，先执行完毕say，再执行run
var fn=async function(){
  await o1.say();

  await o1.run();
}
fn();