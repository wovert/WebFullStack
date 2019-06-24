// 网址及参数解析
const url = require('url')
let obj = url.parse('https://www.wovert.com:8080/s?ie=utf-8&f=8', true)
console.log(obj)
