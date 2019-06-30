var person2={
  name:"张靓颖",
  age:21
}

//页面加载完成执行的事件
window.onload = function() {
  var person1 = {
    name:"李靖",
    age:18
  }
}

/*
正解：在控制台中发现person1这个变量不存在

window.onload表示页面加载完成：
  -->DOM元素加载完成：所以我们可以访问到页面中所有的 DOM: document.body、document.body.innerHtml
  -->页面中引用的资源文件也已经加载完成：图片、css、js、mp3、mp4...

注意：页面有没有加载完成，和一个变量能否访问没有任何关系

如何判断一个变量能否被访问？词法作用域
  1、首先查看当前作用域
  2、查看当前作用域的上级
  3、一直找到全局作用域

浏览器如果没有处于调试状态，那么当前作用域就是全局作用域
如果浏览器处于调试状态，那么当前作用域就看断点的位置
*/

function f1() {
  console.log(age)
  var age = 18
  console.log(age)
}

var length = 100
f1()