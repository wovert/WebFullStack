'use strict';

var _math = require('./mod/math');

var _math2 = _interopRequireDefault(_math);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 1;
var b = 5;

console.log(_math2.default.sum);

var arr = [{ a: a, b: b }, { b: b, a: a }];

arr.sort(function (json1, json2) {
  json1.a = json2.a;
});

alert(arr[0].a);