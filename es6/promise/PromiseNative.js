const PENDING = "pending"; // 初始态
function PromiseNative(executor) {
  let self = this; // 缓存当前promise实例
  self.status = PENDING; // 设置状态

  self.onResolvedCallbacks = []; // 成功的回调的数组
  self.onRejectedCallbacks = []; // 失败回调的数组

  // 当调用此方法时，如果Promise状态为pending，可以转成成功态。成功态或失败态，则什么都不做
  function resolve() {}

  function reject() {}

  try {
    executor(resolve, reject); // 此函数可能会异常
  } catch (e) {
    reject(e); // 函数执行失败了，则用失败的原因reject这个promise
  }
}
