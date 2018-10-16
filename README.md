# Web Full-Stack

## 常用软件

- 编辑器：atom(插件)、Visual Studio Code、Sublime
  - atom
    - Ctrl+Shift+p -> install Packages
      - language-vue
      - markdown-preview-plush
        - Ctrl+Shift+m 打开预览
      - linter
      - script
      - ternimal-plush 命令行工具
      - 

- 服务器：CentOS、Ubuntu
  - wamp、xampp、lnmp
  - putty、xshell
  - winSCP(Mac:yummy FtP, Linux:ssh)
- 设计：PS、SkecpUP、AI
- 手机虚拟机：夜深模拟器
- 数据库GUI：Navicat for mysql
- 虚拟机：VMware、VirtualBox
- 浏览器：Chrome/Firefox
- TortoiseSVN(Mac: SnailSVN, Linux:yum/apt)
- git(Mac:git-scm, Linux:yum/apt)
- NodeJS
- phonegap-cli(npm安装phonegap-v6.5.2) 不要安装最新版本
- APIClound Studio 2
- MongoDB

## markdown

|name|age|gender|
|---|---|--|
|Alice|20|male|

## node

``` shell
升级NodeJS到最新版本
# npm i -g n

```

### npm 

> 后台包管理器

- node_moudles/下载的包

### bower

> 前台包管理器

``` shell
# cnpm i -g bower
# bower i -g vue@2
# bower i -g angular
  bower_components/angular(包名)
  报名.map 打开调试器(F12)的时候下载 包名.map
```

### phonegap

``` shell
# cnpm i -g phonegap@6.5.2

```


## ES6兼容性和新特性

### ES6兼容性

- [ES5兼容性](http://kangax.github.io/compat-table/es5/)
- [ES6兼容性](http://kangax.github.io/compat-table/es6/)

- ES6(ES2015) - IE10+ | Chrome | Firefox | 移动端 | NodeJS

### 编译、转换

1. 在线转换
2. 提前编译

babel==broswer.js

## let/const

### 箭头函数

- 只有一个函数参数可以省略()
- 只有一个return语句可以省略{}

### 函数参数

- 参数扩展/展开，必须放在最后一个参数位置上
  - 参数扩展：func(1,2,3);function func(..args){} 剩余参数数组
  - 参数展开：let arr=[1,2,3];func(...arr);
- 默认参数
  - `function f(a=1,b=2,c=3){...}`
  - `$('#div').animate({width:'200px}, 1000)`

### 数组

- map 映射
- reduce 汇总
- filter 过滤器
- forEach 迭代

### 字符串

- startsWith()
- endsWith()
- `字符串模板${v}`

### promise

> 同步的方式编写异步

``` javascript
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
  Promise.all([$.ajax({/*...*/}), $.ajax({/*...*/})]).then(results=>{
    // 对了
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

### generator

> generator:生成器, generate: 生成, generator 函数中间可以停

``` javascript
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

``` javascript
function *show() {
  ...
  let data1 = yield $.ajax('a.txt');
  ....
  let data2 = yield $.ajax('b.txt');
  ....
}
```

### runner

``` shell
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

- [runner用法](./es6/runner.html)
- [async/wait用法](./es6/async_await.html)

### 面向对象

``` javascript
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

``` shell
# bower install react
# bower install babel
```

### json

> 必须使用双引号

``` javascript
encodeURIComponent(JSON.stringify({a:12,b:5})) // json对象转换字符串
decodeURIComponent(JSON.parse('{"a":12,"b":5}')) // 字符串转换json对象
```

- JSON简写
  - key和value值一样，可以仅留一个
  - 方法：删除 `:function`

## 模块化

模块=元件=组件

### 模块化解决方案

- 民间的: Sea.js, Require.js
  - CMD 规范
  - AMD 规范
- NodeJS模块化
- ES6模块化

### 如何使用 sea.js

``` shell
安装seajs
# bower i seajs
```

SeaJS: 按需引用，解决依赖

``` javascript
// 定义模块
define(function(require, exports, module){

  let a = 12;
  let b = 5;
  // 导出模块
  exports.a = a;
  exports.b = b;
});

// 引用模块
seajs.use(['./mod1.js', './mod2.js'], function(mod1,mod2) {
  console.log(mod1.a);
  console.log(mod1.b);
  console.log(mod2.a);
})

// 按需加载
if(xxxx) {
  seajs.use();
} else {
  seajs.use();
}
```

[seajs示例](./seajs/index.html)

### [NodeJS 模块化实例](./nodex/index.js)

## HTML5

- geolocation
- video,audio
- localStorage, sessionStorage
- webSQL/IndexedDB
- WebWorker 多线程
- 文件操作、拖拽
- manifest
- canvas

### geolocation - 定位

- PC: 通过IP地址获取定位
  - 精度比较低
  - 下载IP地址库
    - Chrome 浏览器请求 Google IP库
- mobile: 通过GPS获取定位

### WebWorker

``` javascript
let v1 = document.getElementById('value1');
let v2 = document.getElementById('value2');

// 创建子进程
let w = new WebWorker('1.js');

// 发送数据
w.postMessage({v1,v2});

// 接受
on.message = function(e){
  console.log(e.data.sum);
}

```

1.js 文件

``` javascript
// 1.js 接受postMessage参数
this.onmessage = function(e) {
  console.log(e.data);//{v1,v2}
  
  // 执行任务
  let sum = e.data.v1 + e.data.v2
  
  // 返回
  this.postMessage(sum);

}
```

访问必须使用真实服务器地址(不能异步请求数据1.js)

- 主进程：UI进程
- 子进程（工作进程）：看不见的；只能完成计算，数据请求这些操作

#### 优势

- 多个进程同时工作
- 防止主进程卡住

#### 缺点

- 不能执行任何 UI 操作；子进程只能执行计算型任务
