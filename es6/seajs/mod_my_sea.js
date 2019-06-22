define(function(require, exports, module){
  exports.a = 12;
  exports.b = 5;


  let m1 = require('mod1.js');
  let m1 = require("mod3.js");
  module.exports = {
    a:12,
    b:5,
    m1: m1.show,
    m3: m2.sum
  }
});