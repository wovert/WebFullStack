# ES6

## Why ES6

> 方便，开发大型项目

- let/const/解构赋值/作用域
- 函数
- 数组/json
- 字符串
- 面向对象
- 异步处理(Promise, async/await)
- 迭代器(generator)
- 模块

## 严格模式

> ES6 的模块自动采用严格模式

- 严格模式限制
  - 变量必须声明后再使用
  - 函数的参数不能有同名属性，否则报错
  - 不是使用 `with` 语句
  - 不能对只读属性赋值，否则报错
  - 不能使用前缀 0 表示八进制数，否则报错
  - 不能删除不可删除的属性，，否则报错
  - 不能删除变量 `delete prop`，会报错，智能删除属性 `delete global[prop]`
  - `eval` 不会在它的外层作用域引入变量
  - `eval` 和 `arguments` 不能被重新赋值
  - `argumetns` 不会自动反映函数参数的变化
  - 不能使用 `arguments.callee`
  - 不能使用 `arguments.caller`
  - 进制 this 指向全局对象
  - 不能使用 `fn.caller` 和 `fn.arguments` 获取函数调用的堆栈
  - 增加了保留字 (`projected, static, interface`)

## ES6兼容性和新特性

### ES6兼容性

- [ES5兼容性](http://kangax.github.io/compat-table/es5/)
- [ES6兼容性](http://kangax.github.io/compat-table/es6/)

- ES6(ES2015) - IE10+ | Chrome | Firefox | 移动端 | NodeJS
- ES7(ECMA 2016)(http://www.ecma-international.org/ecma-262/7.0/)
  - 12**5
  - Array.includes()
- ES8(ECMA 2017)](http://www.ecma-international.org/ecma-262/8.0/)
  - await/async
- ES9(ECMA 2018)(http://www.ecma-international.org/ecma-262/9.0/)
  - rest/spread (替代wait/async)
  - 循环异步迭代
  - Promise.finally()
  - 增加正则
- ES10(ECMA 2019)

### 编译、转换

1. 在线转换
2. 提前编译

**babel==broswer.js**

## 变量/常量

### var 定义变量

- 可以重复声明
- 不能定义常量 `var`
- 不支持块级作用域 `if (true) { var a = 10;}`

- 缺点
  - 重复定义变量
  - 不能限制修改
  - 只有**函数级**作用于（没有**块级**作用于）

### let/const

> 最新浏览器和 NodeJS

- `let`
  - 不能重复定义，变量
  - 支持块级作用域
    - `for`(块级作用域)
    - `{块作用域}`
      - 没有预解析
    - 全局作用域容易变量名冲突
    - 块级作用域容易控制变量的使用
- `const`
  - 不能重复定义
  - 不能重复赋值

[let/const变量案例](./let_const/let_const.html)

## 解构赋值

> 左右两边必须一样，右边必须是有效数据；必须定义和赋值同步完成

## 作用域

- 传统
  - 函数级
- ES6
  - 块级级

[作用域案例](./scope/index.html)

## 函数

### 箭头函数

[案例](./function/arrows_function.js)

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

### 怎么确定箭头函数this

> 箭头函数没有自己的this且定死指向外层的this。this由**定义位置**决定执行环境

箭头函数this不能用于随着调用者不同this环境变量变化

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
  - 参数扩展：`func(1,2,3);function func(..args){}` 剩余参数数组
  - 参数展开：`let arr=[1,2,3];func(...arr);`
- 默认参数
  - `function f(a=1,b=2,c=3){...}`
  - `$('#div').animate({width:'200px}, 1000)`

- 展开操作符：
  - `let arr = [...arr1, ...arr2]`
  - `var arr = [].concat(arr1, arr2)`

- 获取最大值
  - `var max = Math.max.apply(Math, arr)`
  - `let max = Math.max(...arr)`

- [assign遍历对象合并](./array/assign.js)

## 数组

- [map 映射](./array/map.js)
- [filter 过滤器-返回新的数组，原数组不变](./array/filter.js)
- [find 查找某个元素值，不存在返回 undefined](./array/find.js)
- [findIndex 查找某个元素值元素，不存在返回-1](./array/findIndex.js)
- [some 有一个元素返回true，否则返回false](./array/some.js)
- [every 每一个元素都要符合返回true，否则返回false](./array/every.js)
- [forEach 迭代](./array/forEach.js)
- 上面的都可以修改 `this`
- [reduce 汇总](./array/reduce.js)
- [reduceRight 汇总](./array/reduce.js
- [array 示例](./array.html)

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

## set

> 去除重复的数组元素的类数组，只有 value 没有 key

```js
let set = new Set([1, 1, NaN, "aa", true, "aa", undefined])
console.log(set)

let arr = [NaN, NaN, 1,1,2,3,3,4]
let arr2 = ([...new Set(arr)])
console.log(arr2)

console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(+0, -0)) // false
console.log(+0 === -0) // true
```

- 方法
  - set.add()
  - set.clear()
  - set.delete()
  - set.has()
  - set.size
  - set.values()

## Symbol

> 新的基本数据类型

- 通过函数执行得到
- 不能使用 new 执行
- 唯一值
- 不能进行运算，因为不可以转数字，不可以进行字符串拼接，这些都会报错
- 可以转为布尔值
- 当做属性名的时候只能用`[""]`的形式
- `Object.getOwnPropertySymbols()`
- `Reflect.ownKeys` 方法可以返回所有类型的键名

```js
let sy1 = Symbol(111) // 只有唯一的值，与其他值肯定不同
```

## iterator

- 调用 Iterator 接口的场景
  - 结构赋值
  - 扩展运算符
  - Set Map
  - for...of
  - Array.from()
  - Promise.all()
  - Promise.race()
- 具备 Iterator 接口的数据结构
  - Array
  - Map
  - Set
  - String
  - TypedArray
  - 函数的 arguments 对象
  - NodeList 对象

```js

```

## 对象

- 对象的属性名和变量名一样可以省略属性名

[prototype、__proto__与constructor](https://blog.csdn.net/cc18868876837/article/details/81211729)

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

- `boolean str.startsWith('string')`
- `boolean str.endsWith('string')`
- `boolean str.includes('string') === (str.indexOf('string') !== -1)`
- `str 'a'.repeat(3) => aaa`
- `'abc'.padStart(5, '0') 00abc`
- `'abc'.padEnd(5, '0') abc00`

### 模板字符串

> 植入变量，任意折行

[字符串模板案例](./template_string/demo.js)

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

``` js
function show(){
  // this => document
}
let fn = show.bind(document)
fn()
```

**箭头优先级高于bind优先级**

- [OOP对象示例](./oop.html)

## promise

> 一步操作的最终结果。通过函数传入的then方法从而获取的Promise最终的值或Promise最终拒绝的原因。同步的方式编写异步

- 术语
  - `promise`：兼容promise规范then方法的对象或函数
  - `thenable`：then方法的对象或函数
  - `value`：任何JavaScript值(undefined, thenable, promise等)
  - `exception`：由`throw`表达式抛出来的值
  - `reason`：用于描述Promise被拒绝原因的值

- 三个状态
  - pendding(初始态：初始化成功，开始执行异步的任务)
    - fulfilled(成功态)
    - rejected(失败态) 有reason

```js
// 创建Promise的一个实例，立即会把当前函数体中的异步操作执行
// Promise是本身同步的，但它可以管理异步操作
// 先执行函数 () => {...}
new Promise((resolve, reject) => {
  // resolve: 当异步操作执行成功，执行 resolve 方法
  // reject: 当异步操作执行失败，执行 reject 方法
  setTimeout(() => {
    resolve(100)
  }, 1000)
  console.log(1); // first
}).then((val) => {
  // 第一个传递的函数时  resolve
  console.log(val)
}, (err)=>{
  // 第二个传递的函数时 reject
  console.log(err)
})
console.log(2); // second
```

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
])
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

安装runner模块

``` sh
# npm search yield-runner-blue
# cd project_name
# npm i yield-runner-blue
```

官方版runner的 **async_await**, ES7版本中新增了 `async` 和 `await`

- `Promise` 本质：等待异步操作结束
- `generator` 本质：无感处理异步操作
- `async` 本质：官网 runner

``` js
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

## SPA 单页应用

> 不刷新 —— 用ajax加载数据并渲染内容

## 移动端布局

1. `viewport`
2. `flex`
3. `rem`
4. 绝对不要用`px`

- 设计图大——`640px`
- `320px`

`html`的`font-size` => ?

- 基准宽度：`480px`
- 基准字体大小：`10px` -> ?
- `width:480px` -> `48rem`
- `height:55px` -> `5.5rem`

- `header {width:48rem; height:5.5rem}`

- 适配手机——JS：
  - 480/10=clientWidth/真实fontsize
  - 真实fontsize=clientWidth/48

## esmodule

```html
<script type="module" src="main.js"></script>
```

## babel

### babel编译方式

1. 在线编译
2. 工具编译

[在编编译babel](./babel/在线编译/index.html)

- 工具编译

```sh
mkdir app && cd app && npm init --y

# 安装babel工具，babel预设
npm i @babel/core @babel/cli @babel/preset-env -D
vim package.json
  "build": "babel src -d dest"
vim .babelrc
  {
    "presets": ["@babel/preset-env"]
  }

npm run build
```