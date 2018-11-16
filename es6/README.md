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

## JSON

``` js
let a = 12
let b = 5
let json = {a,b}

// ES6
let json = {
  a,
  b,
  show() {}  
}
json.show()
```

> 必须使用双引号

``` javascript
encodeURIComponent(JSON.stringify({a:12,b:5})) // json对象转换字符串
decodeURIComponent(JSON.parse('{"a":12,"b":5}')) // 字符串转换json对象
```

- JSON简写
  - key和value值一样，可以仅留一个
  - 方法：删除 `:function`

## 字符串

- `字符串模板${v}`
  - 植入变量，任意折行
- startsWith()
- endsWith()

## 面向对象

``` js
class Animal {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
}
class Person extends Animal {
  constructor(name,age,level) {
    super(name,age);
    this.level = level;
  }
  showName() {
    return this.name;
  }
}
let p = new Persion('Alice',20);

```

面向对象实例

``` sh
# bower install react
# bower install babel
```

- 普通函数：根据调用所在环境(this变化)
- 箭头函数：根据所在的环境(this恒定)

- class/contructor/super/extends
- bind(对象) 绑定对象

- 箭头优先级高于bind优先级

- [OOP对象示例](./oop.html)

## promise

> 同步的方式编写异步

``` js
  let p = new Promise(function(resolve, reject){
    $.ajax({
      ur: 'arr.txt',
      dataType: 'json',
      success(arr) {
        resolve(arr);
      },
      error(err) {
        reject(err);
      }
    })
  });

  p.then(
    function(arr){
      console.log(arr)
    },
    function(){
      console.log('失败')
    }
  );


  // 多个异步加载， &关系
  Promise.all([$.ajax({/*...*/}), $.ajax({/*...*/})]).then(arr=>{
    // 对了
    let [res1, res2] = ar
  },
  err => {
    // 错了
  })

  // 竞速关系,谁先得到就直接返回
  Promise.race([
    $.ajax({url: 'http://doamin1.com/data/users'}),
    $.ajax({url: 'http://doamin2.com/data/users'}),
    $.ajax({url: 'http://doamin3.com/data/users'}),
    $.ajax({url: 'http://doamin4.com/data/users'})
  ]);
```

## generator

> generator:生成器, generate: 生成, generator 函数中间可以停

``` js
function *show() {
  console.log(1);
  let i = yield 20; // yield 返回
  console.log(2);
  console.log(i);
}
let o = show();
let r = o.next(12); // 1 传参
o.next(5); // 2, 5
console.log(r); // 20
```

``` js
function *show() {
  ...
  let data1 = yield $.ajax('a.txt');
  ....
  let data2 = yield $.ajax('b.txt');
  ....
}
```

### runner

``` sh
安装runner模块
# cnpm search yield-runner-blue
# cd project_name
# cnpm i yield-runner-blue
```

官方版runner的 **async_await**, ES7版本中新增了 async 和 await

- Promise 本质：等待异步操作结束；
- generator 本质：无感处理异步操作
- async本质：官网 runner

``` javascript
runner(function *(){
  ...
  let res1 = yield 异步操作;
  ...
  let res2 = yield 异步操作;
});

(async ()=>{
  let res1 = await 异步操作;
  ...
  let res2 = await 异步操作;
})()

```

- [runner用法](./runner.html)
- [async/wait用法](./async_await.html)