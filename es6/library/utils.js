// 判断数据类型
let toString = Object.prototype.toString;
let isString = function (obj) {
  return toString.call(obj) == `[object String]`;
}
let isFunction = function (obj) {
  return toString.call(obj) == `[object Function]`;
}
let isType = function (type) {
  return function (obj) {
    return toString.call(obj) == `[object ${type}]`;
  }
}

