    //把异步操作封装在一个promise对象中
    function fn(){
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{
              console.log('你好');

              //其实异步逻辑到这里其实已经执行完毕了，
              //就可以告诉外界，可以执行其他操作了
              //如何告诉外界，让外界得知？
              resolve();
          },1000);
      })
  }
  //调用了这个函数，执行了异步操作
  //fn()
  //存在问题，并不知道这个异步操作什么时候结束
  fn().then(res=>{
      //执行到下一步
      console.log("下一步");

      fn().then(res=>{
          console.log("执行第二步");
      })
  })

  //输出顺序：
  //你好
  //下一步
  //你好
  //执行第二步