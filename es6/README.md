# ES6

1. 变量/常量/解构赋值
2. 函数
3. 数组/json
4. 字符串
5. 面向对象
6. Promise
7. generator
8. 模块

## ES6兼容性和新特性

### ES6兼容性

- [ES5兼容性](http://kangax.github.io/compat-table/es5/)
- [ES6兼容性](http://kangax.github.io/compat-table/es6/)

- ES6(ES2015) - IE10+ | Chrome | Firefox | 移动端 | NodeJS

### 编译、转换

1. 在线转换
2. 提前编译

babel==broswer.js

## 变量/常量

### var 定义变量

- 缺点
  - 重复定义变量
  - 不能限制修改
  - 只有函数级作用于（没有块作用于）

### let/const

- 最新浏览器和NodeJS

- let
  - 不能重复定义，变量
  - 支持块级作用域
    - for(块级作用域)
    - {块作用域}
    - 全局作用域容易变量名冲突
    - 块级作用域容易控制变量的使用
- const
  - 不能重复定义
  - 不能重复赋值

[- 变量案例](./let_const.html)

## 解构赋值

> 左右两边必须一样，右边必须是有效数据；必须定义和赋值同步完成

## 函数

### 箭头函数

``` js
function(param1, param2) {
  ...
}
(param1, param2) => {
  ...
}

1. 如果有且只有1个参数，()可以省略
2. 如果函数体只有一句话，而且是 return, {} 可以省略
3. 改变 this对象

let func = f => f*10
func(10)


```

- 只有一个函数参数可以省略()
- 只有一个return语句可以省略{}

### 默认参数

``` js
// ES4
function func(p1,p2,p3){
  a = a || 1
  b = b || b
  c = c || c
}

// ES5
function func(p1=1,p2=2,p3=3){}
```

### 函数参数

- 参数扩展/展开，必须放在最后一个参数位置上
  - 参数扩展：func(1,2,3);function func(..args){} 剩余参数数组
  - 参数展开：let arr=[1,2,3];func(...arr);
- 默认参数
  - `function f(a=1,b=2,c=3){...}`
  - `$('#div').animate({width:'200px}, 1000)`

## 数组

- map 映射
- reduce 汇总
- filter 过滤器
- forEach 迭代

[- array示例](./array.html)

``` js
// map
let arr = [22.55,83,23,90]
let arr = [22.55,83,23,90]
let arr2 = arr.map(item => item >= 60)
console.log(arr2) // [0: false, 1: true,2: false, 3: true]

// filter
let arr3 = arr.filter(item => item >= 60)
console.log(arr3); // [83, 90]

// forEach
let sum = 0
arr.forEach(item => {
  sum += item
})
console.log(sum) // 218.55

// reduce
let avg = arr.reduce((tmp, item, index) => {
  console.log(tmp, item, index)
  if(index < arr.length-1) {
    return tmp + item
  }
  return (tmp + item)/arr.length
})
console.log(avg) // 54.6375


```

