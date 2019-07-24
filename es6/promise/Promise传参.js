function getUser() {
  return new Promise(resolve => {
    $.get("/getUser", res => {
      //res是从服务器中接收到的数据
      //把数据传到下一步操作中
      //告诉外界本次的异步操作已经执行完毕了
      resolve(res);
    });
  });
}
getUser().then(res => {
  //res就表示上一个异步操作返回的参数值：从服务器中获取的数据
});
