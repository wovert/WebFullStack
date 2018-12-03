/**
 * 我们要满足状态只能三种状态：PENDING,FULFILLED,REJECTED三种状态
 * 状态只能由 PENDING => FULFILLED
 * 或者状态只能由 PENDING => REJECTED
*/

var PENDING = 0; // 挂起
var FULFILLED = 1; // 满足
var REJECTED = 2; // 拒绝

/**
 * 构造函数里面应该包含这三个属性的初始化
 */
function PromiseSync(callback) {
  this.status = PENDING; // 初始状态
  this.value = null; // value 状态为执行成功事件的入参
  this.defferd = []; // 保存着状态改变之后的需要处理的函数以及PromiseSync子节点
  setTimeout(callback.bind(this, this.resolve.bind(this), this.reject.bind(this)), 0);
}

PromiseSync.prototype = {
  constructor: PromiseSync,

  // 触发改变PromiseSync状态到FULFILLED
  resolve: function (result) {
    this.status = FULFILLED;
    this.value = result;
    this.done();
  },

  // 触发改变PromiseSync状态到REJECTED
  reject: function (error) {
    this.status = REJECTED;
    this.value = error;
  },

  // 处理defferd
  handle: function (fn) {
    if (!fn) {
        return;
    }
    var value = this.value;
    var t = this.status;
    var p;

    if (t == PENDING) {
      this.defferd.push(fn);

    } else {

      if (t == FULFILLED && typeof fn.onfulfiled == 'function') {
        p = fn.onfulfiled(value);
      }

      if (t == REJECTED && typeof fn.onrejected == 'function') {
        p = fn.onrejected(value);
      }

      var PromiseSync = fn.PromiseSync;

      if (PromiseSync) {
        if (p && p.constructor == PromiseSync) {
          p.defferd = PromiseSync.defferd;
        } else {
          p = this;
          p.defferd = PromiseSync.defferd;
          this.done();
        }
      }
    }
  },

  // 触发PromiseSync defferd里面需要执行的函数
  done: function () {
      var status = this.status;
      if (status == PENDING) {
          return;
      }
      var defferd = this.defferd;
      for (var i = 0; i < defferd.length; i++) {
          this.handle(defferd[i]);
      }
  },

  /*储存then函数里面的事件
  返回PromiseSync对象
  defferd函数当前PromiseSync对象里面
  */

  then: function (success, fail) {
    var o = {
        onfulfiled: success,
        onrejected: fail
    };
    var status = this.status;
    o.PromiseSync = new this.constructor(function () {

    });
    if (status == PENDING) {
      this.defferd.push(o);
    } else if (status == FULFILLED || status == REJECTED) {
      this.handle(o);
    }
    return o.PromiseSync;
  }
};


new PromiseSync(function (resolve, reject) {
  setTimeout(function () {
    var a = 100;
    //resolve(a); // resolve(100)
    reject(100);
  }, 1000);
}).then(function (res) {
  console.log('step 1:', res); // 100
  return new PromiseSync(function (resolve, reject) {
    setTimeout(function () {
      var b = 200;
      resolve(b); // resolve(200)
    }, 1000);
  })
}, function(code){
  
  console.log(code)

}).then(function (res) {
  console.log('step 2:',res); // 200
  return new PromiseSync(function (resolve, reject) {
    setTimeout(function () {
      var c = 300 
      resolve(c); // resolve(300) 
    }, 1000);
  })
}).then(function (res) {
  console.log('step 3:',res); // 300
}, function(){
  console.log(code)
})
