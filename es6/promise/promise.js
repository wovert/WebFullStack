// 创建Promise的一个实例，立即会把当前函数体中的异步操作执行
// Promise是本身同步的，但它可以管理异步操作
// 先执行函数 () => {...}
new Promise((resolve, reject) => {
  // resolve: 当异步操作执行成功，执行 resolve 方法
  // reject: 当异步操作执行失败，执行 reject 方法
  setTimeout(() => {
    resolve(100)
  }, 1000)
  console.log(1); // first
}).then((val) => {
  // 第一个传递的函数时  resolve
  console.log(val)
}, (err)=>{
  // 第二个传递的函数时 reject
  console.log(err)
})
console.log(2); // second