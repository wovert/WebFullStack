const PENDING = "pending"; // 初始态
const FULFILLED = "fulfilled"; // 成功态
const REJECTED = "rejected"; // 失败态

function PromiseNative(executor) {
  let self = this; // 缓存当前 promise 实例
  self.status = PENDING; // 设置状态

  self.onResolvedCallbacks = []; // 成功的回调的数组
  self.onRejectedCallbacks = []; // 失败回调的数组

  // 如果promise状态为fulfilled或rejected，则什么都不做
  // 2.1
  function resolve(value) {
    // 2.1.1
    // 如果Promise状态为pending，可以转成成功态
    if (self.status === PENDING) {
      self.status = FULFILLED;
      self.value = value; // 成功后得到一个值，不能修改这个值
      self.onResolvedCallbacks.forEach(cb => cb(self.value)); // 调用所有成功的回调函数
    }
  }

  function reject(reason) {
    // 2.1.2
    // 如果Promise状态为pending，可以转成失败态度
    if (self.status === PENDING) {
      this.status = REJECTED;
      self.value = reason; // 失败原因给value
      self.onRejectedCallbacks.forEach(cb => cb(self.value));
    }
  }

  try {
    executor(resolve, reject); // 此函数可能会异常
  } catch (e) {
    reject(e); // 函数执行失败了，则用失败的原因 reject 这个promise
  }
}

// onFulfilled 是用来接收promise成功的值或者失败的原因
Promise.prototype.then = function(onFulfilled, onRejected) {
  // 如果成功和失败的回调没有传，则表示then没有任何逻辑，只会把值往后抛
  // 2.2.1
  onFulfilled =
    typeof onFulfilled === "function" ? onFulfilled : value => value;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : reason => {
          throw reason;
        };

  // 当前promise状态已经是成功态了，onFulfilled 直接取值
  let self = this;
  let promise2;
  if (self.status === FULFILLED) {
    let x = onFulfilled(self.value);
  }

  if (self.status === REJECTED) {
    let x = onRejected(self.value);
  }

  if (self.status === PENDING) {
    self.onResolvedCallbacks.push(function() {
      let x = onFullfilled(self.value);
    });
    self.onRejectedCallbacks.push(function() {
      let x = onRejected(self.value);
    });
  }
};
