function getBooks(){
  //执行了resolve()表示异步操作是成功的
  //执行了reject()表示异步操作是失败的
  return new Promise((resolve,reject)=>{
      $.ajax({
          url:"/getBooks",
          success(res){
              //成功获取数据
              resolve(res);       
          },
          error(resError){     //res表示错误信息
              //如果失败，执行error方法
              
              //通过执行reject函数，把错误信息传递给外界
              reject(resError)
          }
      })
  })
}

//第一种处理错误的方式：
// getBooks().then(res=>{
//     //res表示请求成功时候获取到的数据
// },resError=>{
//     console.log(resError);
// })

//第二种错误处理的方式：
// getBooks().then(res=>{
//     //成功了
// }).catch(resError=>{
//     //这里也可以获取到错误信息
// })


//上面2种错误处理的方式，第二种更加推荐
//第二种方式更强大的地方在于：
//a、不仅仅可以捕获到reject传递的参数
//b、还可以捕获到：成功的回调中发生的错误