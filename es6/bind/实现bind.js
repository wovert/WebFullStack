// bind方法
// 1、bind方法放在函数的原型中
//  --> fn.__proto__ === fn 的构造函数.prototype
//  --> 所有的函数对象的构造函数是 Function
//      -->Function 创建了 Function
//      -->Function 创建了 Object 
//      -->Function 创建了 fn
Function.prototype._bind = function(target) {
  // 这里的this其实fn
  // target 表示新函数的内部的 this 的值
  // 利用闭包创建一个内部函数，返回那个所谓的新函数
  return () => {
    // 执行fn里面的逻辑
    this.call(target) 
    // this.apply(target)
  }
  // 等价于：
  // var _that = this;
  // return function(){
  //     _that.call(target);
  // }
}

function fn(){
  console.log(this)
}

var _f1=fn._bind({age:18})
_f1()