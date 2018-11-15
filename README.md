# Web Full-Stack

## 全栈

- Front-end
- 移动端(App)
- 混合(Hybrid App)
- 后台(API)
- 数据库
- 工具(Webpack)
- 部署
- Linux
- 版本
- 英文文档
- ...

1. 基础知识：ES6/ES7、HTML5/CSS3、数据交互 ...
2. 移动端：布局、touch、库
3. 图形：canvas、SVG/VML、Raphael、d3、echarts、WebGL ...
4. 游戏
5. 工具：版本控制、编译、打包、脚手架 ...
6. 后台：Node、express、KOA、爬虫 ...
7. 混合开课
8. 微信：公号、小程序
9. 三大框架：angular、vue、react
10. 数据结构、算法、设计模式

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

- 服务器：CentOS、Ubuntu
  - wamp、xampp、lnmp
  - putty、xshell
  - winSCP(Mac:yummy FtP, Linux:ssh)
- 设计：PS、SkecpUP、AI
- 手机虚拟机：夜深模拟器
- 数据库GUI：Navicat for mysql
- 虚拟机：VMware、VirtualBox
- 浏览器：Chrome/Firefox
- Windows: TortoiseSVN(Mac: SnailSVN, Linux:yum/apt)
- git for windows(Mac:git-scm, Linux:yum/apt)
- NodeJS v8.*
- phonegap-cli(npm安装phonegap-v6.5.2) 不要安装最新版本
- APIClound Studio 2
- MongoDB

## markdown

``` markdown
# 一级标题
## 二级标题
- 列表1
- 列表2

1. 有序1
2. 有序2

> 引用

**加粗**

|name|age|gender|
|---|---|--|
|Alice|20|male|

```

## 版本管理

- svn：中心服务器
  - SVN Checkout: 拉去远程项目
  - SVN Commit: 推送到中心服务器
  - SVN Update: 拉去中心服务器最新版本
- git: 去中心化
  - clone
  - add/commit/push
  - pull

## 编译和打包

- 编译：ES6 -> ES5 (babel工具)
- 打包：grunt, gulp (万能) => webpack(流行)
  - 编译：babel, browserify (模块打包)
  - 同步：browser-sync

## http

- GET 方式：有缓存
- POST方式：没缓存

### http 状态吗

- 301: 永久重定向
  - 第一次访问 360buy.com 服务器，服务器相应给客户端重定向到 jd.com 域名服务器。客户端再次请求jd.com域名服务器，接受向请求并响应。并把重定向地址缓存到客户端。
  - 第二次访问 360buy.com 因为是永久重定向且缓存到客户端重定向到 jd.com，所以请求 jd.com 域名服务器。
- 302：临时重定向

### base64

> http请求页面请求下载 html和base64图片一起下载，在客户端浏览器直接从内存中读取图片。
> 推荐使用小图片使用 base64，雪碧图不推荐使用 base64
> 地址都可以使用 base4

### [http2](https://tools.ietf.org/html/rfc7540)(实验性)

1. 强制 https
2. 性能更高-面向流(比面向字符更好)、头压缩、多路复用(多个请求走一个连接)
3. 双向通信-服务器推送(自带websocket)

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

## 模块化

模块=元件=组件

### 模块化解决方案

- 民间的: Sea.js, Require.js
  - CMD 规范
  - AMD 规范
- NodeJS模块化
- ES6模块化

- 打包、编译
  - ES6 => ES5 编译, babel
  - 打包 => browserify, 1.js/2.js/3.js => bundle.js
  - 压缩 => 163k => 32k

### 如何使用 sea.js

``` sh
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

### 创建 NodeJS 包

``` shell
创建包名
# mkdir mymath && cd mymath

创建包信息文件 package.json
# npm init
  project name:
  version:
  description:
  entry point: 包入口文件
  test command:
  git repository:
  keyworlds:
  author:
  licence:

# vim index.js
  module.exports = {
    sum(a,b) {
      return a + b;
    },
    divide(a,b) {
      return a/b;
    }
  }
```

### ES6

- ES6(babel编译)->ES5
- Webpack(编译ES6模块)

- cli: Common LIne

``` shell
全局安装babel-cli
# cnpm i -g babel-cli

# mkdir babel_es6 && cd babel_es6
# npm init
# mkdir {src,dist}
# cd src
# vim 1.js
  let a = 1;
  const b = 5;
  let arr = [{a, b}, {b, a}];
  arr.sort((json1, json2)=>{json1.a = json2.a});

  alert(arr[0].a);

# vim index.html
  <script src="./src/1.js"></script>

浏览器访问 demo-import.html, Chrome能访问，IE10-不能访问


解决浏览器不支持ES6问题
# vim package.json
  "scripts": {
    "build": "babel src -d dist"
  }

1.创建.babelrc 配置文件(presets:预设, env指的是浏览器环境，可以指定特定的浏览器，默认是ES5浏览器)
# vim .babelrc
  {
    "presets": ["env"]
  }

2. 下载babel包
# cnpm i babel-preset-env --save-dev
# vim package.json
  
  开发模式，项目依赖于babel-preset-env 模块
  "devDependencies": {
    "babel-preset-env": "^1.7.0"
  }

# npm run build

比较src/1.js与dist/1.js文件

ES6文件: src/1.js
ES5文件: dist/1.js

```

#### babel-preset-env

> A Babel prest for each enviroment. 给各种环境提供 babel 预设

[babel-preset-env 详解](https://npm.taobao.org/package/babel-preset-env)

#### babel 不能编译 import 模块

``` shell
# mkdir src/mod/math.js
# vim math.js
  let a = 10;
  let b = 20;
  let sum = a + b;
  export {
    sum
  }
# vim src/1.js
  import mod from './mod/math';
  console.log(mod.sum);

# npm run build
  > babel_es6@1.0.0 build C:\development\WebFullStack\babel_es6
  > babel src -d dist

  src\1.js -> dist\1.js
  src\mod\math.js -> dist\mod\math.js

访问地址会提示不支持 require

```

**Webpack 可以解决 babel 不能编译 import 模块文件**

## HTML5

- geolocation
- video,audio
  - WebSocket 推送 + video
  - canvas + video
- localStorage, sessionStorage
- webSQL/IndexedDB
- WebWorker 多线程
- 文件操作、拖拽
- manifest 离线应用
  - 被APP取代了
- canvas
- File - 拖拽、读取

### drop

- FileReader
- reader.onload = function(){}
- reader.onerror = function(){}
- reader.readAs[Text/DataURL/ArrayBuffer/BinarySTring]

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

### canvas

1. 性能高-大型动画或游戏
2. 画图

- getContext('2d'); 图像上下文接口
- beginPath()
- closePath()
- moveTo()
- lineTo()
- stroke()
- strokeStyle
- lineWidth
- fill
- fillStyle

- shape
  - rectangle 矩形
    - 路径画法：rect(x,y,w,h)
    - 直接出图：storkRect(), fillRect()
  - arc 弧形
    - arc(x,y,r,startAg,endAg,是否为逆时针)
- font
  - baseline 极限(ac/d底部对齐，但g不对齐)

- canvas 属性设置决定图像大小；CSS样式决定图像显示大小（图像会拉伸）
- canvas 图像画完了之后会固定，不能修改（canvas不会保存任何图形信息）
  - 动画：插了重画
  - canvas 没有事件
- gd.clearRect(0, 0, o.width, o.height); // 删除整个画布，删除一个像素与删除几万像素一样



## 数据交互

- [http 协议](https://tools.ietf.org/rfc/rfc2616.txt)
  - 无状态
  - 连接过程
    - 1.客户端请求连接
    - 2.服务器端接受连接并响应给客户端
    - 3.客户端请求资源
  - 消息头
    - header
    - body
- form 表单
- ajax
  - 官方提供的，且默认不能跨域
  - 单向
- jsonp 民间提供的，可以跨域；不推荐使用
- websocket
  - 双向通信

## 语法糖

- C++运算符重载
  - arr1+arr2 编译成 arr1.concat(arr2)
  - arr1+arr2+arr3 编译成 arr1.concat(arr2).concat(arr3)

### generator的本质

``` js
function *show() {
  let a = 12;
  let data = yield $.ajax('data/1.txt');
  let b = 5;
  let data2 = yield $.ajax('data/1.txt')
  return a + b;
}

/***************** 编译成以下代码 ********************/

function show() {
  let a = 12;
  $.ajax('data/1.txt').then(res=>{
    let data1 = res;
    let b = 5;

    $.ajax('data/2.txt').then(res=>{
      let data2 = res;
      return a + b;
    })
  })
}

```

### Promise 本质

1. 当状态改变的时候-调用之前挂起的 then 队列
2. then执行的时候调用其参数

- [promiss语法糖](./es6/custom-promise.html)

## websocket

> 数据交互

- webSocket 原生

- 性能高
- 双向-数据实时性
- HTML5(IE9)
- socket.io
- 可以跨域

### socket.io

> 用于前台和后台模块

- socket.io 原理

- 传输二进制数据
  - http传输文本

- 服务端必须基于http服务，然后创建ws服务
- 客户端连接服务

#### socket 用途

- 聊天室
- 视频直播(视频采集问题，兼容浏览器)
- 视频点播

``` shell
# cnpm install socket.io
```

- browser < - http -> server
  - 缺陷：无状态协议

- websocket 协议基于 http协议

- sock.emit(name, param1, param2) 用于发送
- sock.on(name, function(param){}) 用于接收

#### 客户端代码

``` html
<!-- 自动引入 node_modules/socket.io/lib/client.js-->
<script src="http://localhost:8080/socket.io/socket.io.js"></script>
<script>
  const SOCK_URL = 'ws://localhost:8080/';
  let sock = io.connect(SOCK_URL);
  // 向服务器端发送数据
  sock.emit('a', 12, 5);
  // 接受服务器端发送的数据
  sock.on('ttt', function(num){
    console.log(`接受到了服务其发送的数据：${num}`);
  });
</script>
```

#### 服务端代码

``` js
const http = require('http')
const io = require('socket.io')
const PORT = 8080;

// 1. 创建http服务
let httpServer = http.createServer();

// 监听服务端口
httpServer.listen(PORT);

// 2. 创建websocket服务
let socketServer = io.listen(httpServer);

// 监听 websocket 连接
socketServer.on('connection', function(sock){
  sock.on('a', function(num1, num2){
    console.log(`接受到了浏览器发送的数据：${num1}, ${num2}`);
  });  

  setInterval(function(){
    sock.emit('ttt', Math.random());
  }, 500)
})
```

## Node

### Node features

- 性能高(比Java高86倍)
- 跨端编程(前段-后端)
- 适合适合前段入门

- Node(小型项目，工具，中间层语言[前台与后台的中间])
- Java(服务区安全/可伸缩性)，大型项目
- PHP(简单易用)
- .NET(老程序员)

## 聊天室

1. 用户注册、登录 
2. 发言->其他人
3. 离线消息

- 数据
  - 用户数据
  - 消息

- 数据库
  - 关系型数据库：MysQL, Oracle
    - 优点：强大(9)
    - 缺点: 性能低(7.5)
  - 文件型数据库：SQLite
    - 优点：简单
    - 缺点：支持不了庞大的应用，没法存储特别多数据
  - 文档型数据库在： MongoDB
    - 优点：直接存储对象本身
    - 缺点：不够严谨，性能偏低
  - 空间型数据库：坐标、位置
  
  - NoSQL：Redis、Memcached、Bigtable(Google)、hypertable
    - 性能(9)
  - hive(比NoSQL强大)

### npm 的 mysql 模块

安装 mysql 模块

`$ cnpm install mysql -D`

### 接口

- 用户注册：/reg?user=xx&pass=xx
  - {"code":0,"msg":"信息"}
- 用户登录：/login?user=xx&pass=xx
  - {"code":0,"msg":"信息"}

- 请求文件
  - /1.html
  - /1.js

- 请求接口
  - /reg?xx
  - /login?xx

## 多语言

> 后台路由切换

- 中文: domain.com/cn
- 中文: domain.com/cn

## ajax2.0 支持 IE0+

1. FormData(容器)
2. 文件上传、上传进度劲啊空（依赖FormData的set方法）
3. CORS 跨域
4. ajax 长连接

``` js
// 上传文件完成
xhr.upload.onload = function(){
  console.log('上传完成');
}

// 进度变化
xhr.upload.onprogress = function(ev){
  console.log(ev.loaded + '/' + ev.total);
}
```

### CORS跨域

- 初衷：乱用别人的服务器
- 问题：浏览器怎么知道跨域认可
- 解决：浏览器+服务器配置

#### ajax1.0 方式

``` js
// 服务器配置
res.setHeader('Access-Control-Allow-Origin', '*');
```

- xhr.send('字符串')

#### ajax2.0 方式

- 请求头信息比 ajax1.0 多了 origin 头信息参数
- origin 是浏览器自动带过来的

``` js
let allowHosts = ['baidu.com','taobao.com', 'google.com'];
if(allowHosts.indexOf(req.headers['origin']) != -1) {
  res.setHeader('Access-Control-Allow-Origin', '*');
}
```

- xhr.send(formData)
- xhr.send(Blob) 二进制数据
- xhr.send(Buffer) 二进制数据

### chrome浏览器同步提示语

[Deprecation] Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience.
不赞成在主线程上的同步使用 XMLHttpRequest，因为它会对最终用户的体验造成不利影响

Failed to load http://localhost:8080/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
服务器返回Access-Control-Allow-Origin头信息就可以进行跨域

### jsonp 跨域

