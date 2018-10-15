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