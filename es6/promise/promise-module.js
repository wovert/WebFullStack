function Promise(task) {
  let that = this; // cashe
  that.status = "pending";
  that.value = undefined; // promise 结果
  that.onResolvedCallback = []; // 成功回调
  that.onRejectedCallback = []; // 失败回调

  function resolve(value) {
    if (that.status === "pending") {
      that.status = "fullfilled";
      that.value = value;
      that.onResolvedCallback.forEach(item => item(value));
    }
  }
  function reject(reason) {
    if (that.status === "pending") {
      that.status = "rejected";
      that.value = reason;
      that.onRejectedCallback.forEach(item => item(reason));
    }
  }

  try {
    task(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function(onFulfilled, onReject) {
  let that = this;
  that.onRejectedCallback.push(onFulfilled);
  that.onRejectedCallback.push(onReject);
};

module.exports = Promise;
