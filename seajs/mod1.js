define(function(require, exports, module){

  let a = 12;
  let b = 5;
  
  // exports.a = a;
  // exports.b = b;

  // module 是批量导出
  module.exports = {
    // a: a,
    // b: b,
    // show: function(){
    //   console.log(a + b);
    // }

    // ES6写法
    a,
    b,
    show(a,b){
      console.log(a + b);
    }
  }

});

