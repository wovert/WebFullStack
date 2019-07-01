# Node

## [About Node](https://nodejs.org/en/about/)

> As an **asynchronous event driven** JavaScript runtime, Node is designed to build **scalable network applications**. In the following "hello world" example, many connections can be handled concurrently. Upon each connection the callback is fired, but if there is no work to be done, Node will sleep.Node 是基于异步事件驱动的 JavaScript 运行，Node 设计了构建可伸缩的网络应用。在下面的 "hello world" 实例中，很多连接可能会产生并发处理。在每个连接上回调会被触发，但如果没有工作要做，Node 会进入睡眠状态。

This is in contrast to today's more common concurrency model where OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node are free from worries of dead-locking the process, since there are no locks. Almost no function in Node directly performs I/O, so the process never blocks. Because nothing blocks, scalable systems are very reasonable to develop in Node. 这与当今更常见的并发在操作系统线程使用上进行对比。基于线程网络是相对低效和使用起来非常困难。而且，node的用户不同担心死锁的线程，因为 node 没有阻塞。几乎在node中没有函数直接运行 I/O，所以进程永远不会阻塞。因为没有阻塞，可伸缩系统非常非常容易在node中发挥。

If some of this language is unfamiliar, there is a full article on [Blocking vs Non-Blocking](https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/). 如果有些语言不熟悉，这里有一个关于阻塞与非阻塞的全文。

Node is similar in design to, and influenced by, systems like Ruby's Event Machine or Python's Twisted. Node takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems there is always a blocking call to start the event-loop. Typically behavior is defined through callbacks at the beginning of a script and at the end starts a server through a blocking call like EventMachine::run(). In Node there is no such start-the-event-loop call. Node simply enters the event loop after executing the input script. Node exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user. Node 设计上类似于，像Ruby的 Event Machine 或 Python's Twisted 的系统受影响。Node 进一步尝试了事件模型。它将一个事件循环作为一个运行时结构，而不是作为一个库。在其他的系统中总是有一个阻塞调用开始的事件循环。典型的行为是通过脚本开头的回调来定义的，并且在结束时通过像EventMachine：：run（）的阻塞调用启动服务器。在 Node 中没有想这样开始事件循环调用。Node 在执行输入之后简单的进入事件循环。当没有更多的回调函数时，node会退出事件循环。这个行为像浏览器的 javaScript - 事件循环从用户中隐藏。

HTTP is a first class citizen in Node, designed with streaming and low latency in mind. This makes Node well suited for the foundation of a web library or framework. 在Node 中 HTTP 是一等公民，设计时考虑到流媒体和低延迟。这是的node非常适用于一个 web 库或框架。

Just because Node is designed without threads, doesn't mean you cannot take advantage of multiple cores in your environment. Child processes can be spawned by using our child_process.fork() API, and are designed to be easy to communicate with. Built upon that same interface is the cluster module, which allows you to share sockets between processes to enable load balancing over your cores. 仅仅是因为 Node 没有线程，这并不意味着在你的环境中不能使用多核。子进程可以通过 child_process.for() 接口来使用，并且被设计易于与之通信。在相同的接口上构建的是集群模块，它允许您在进程之间共享套接字，以便在核心上实现负载平衡。

https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

### 优点

- 利于前端人员用: nodejs的对象、语法跟JavaScript一模一样；
- 性能比其他语言更好: 比如比 PHP 块80多倍
- 前后台配合方便

### 缺点

1. Java极其丰富库支持

## NodeJS用处

- 中间层: 传统前端直接可以直接请求后台java或者php的接口，它还要用node作为中间层，这样的好处是什么？
  - 安全性
  - 性能
  - 前后台交互
  - 降低主服务器复杂度
- 小型服务
- 工具
  - 测试
  - 构建(grunt、gulp、WebPack、gulp)
  - 抓取

中间层 VS 中间件

## Node 环境安装

### Windows 下安装 Node 环境

1. 下载 [nvm](https://github.com/coreybutler/nvm-windows/releases) 并配置环境变量

2. 配置 node 和 npm 镜像源

``` shell
nvm node_mirror https://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

3. 安装 node

``` shell
# nvm install [VERSION]
# nvm list 查看已安装的 node 版本列表
# nvm use [VERSION] 使用指定 node 版本
# node -v 查看使用 Node 版本
```

4. 安装npm 配置镜像源

```sh
npm i nrm -g
nrm use taobao
```

### node模块包版本

- ^major.x.x major最新版本
- ~major.minor.x major.minor最新版本
- latest 最新版
- x.x.x 固定版本

### 卸载Node

- 且在 Node本身
- 用户目录下的 `node_modules`

## Node模块

1. http模块
2. 断言——assert
3. 二进制——Buffer; File System
4. C++ Addons - N-API
5. 多进程: Child Processes/Cluster/Process
6. Crypto——签名: md5、sha
7. http: HTTP/HTTPS, HTTP/2
8. OS
9. Path
10. Events事件队列; async
11. Query Strings; URL
12. 网络: TCP-稳定  Net, UDP-快, UDP/Datagram
13. 域名解析: DNS, Domain
14. 流操作——Stream; 连续数据都是流——视频流、网络流、文件流、语音流
15. TLS/SSL; 加密、安全
16. ZLIB——gz; 压缩

## 如何理解进程和线程

1. 进程
2. 线程

- 进程拥有独立的执行空间、存储
- 同一个进程内的所有线程共享一套空间、代码

- 多进程   成本高(慢)；安全(进程间隔离)；进程间通信麻烦；写代码简单
- 多线程   成本低(快)；不安全(线程要死一块死)；线程间通信容易；写代码复杂

- 多进程   慢、简单、安全     PHP、Node
- 多线程   快、复杂、脆弱     Java、C

### 程序员-内功

1. 算法
2. 设计模式
3. 架构

页面被运营商劫持，有什么办法可以解决么? **HTTPS**

### 进程之间怎么通信

1. 管道
2. 共享内存
3. socket

### 单线程和非阻塞io不懂

- 阻塞IO：导致整个程序卡住不同

``` js
FILE *fp = fopen("a.txt", "r")
size = fread(buffer, sizeof(buffer), fp)   // 等待20s
fclose(fp)
```

- 非阻塞IO：继续往下执行，不卡

``` js
fs.readFile('a.txt', (err, data)=>{       // 等待0s
  console.log(data)
})
console.log('a')
```

## HTTP协议

- HTTP 1.0 RFC-1945
- HTTP 1.1 RFC-2616 持久链接
- HTTPS RFC-2818 安全协议
- HTTP 2.0 RFC-7540 加密、头部压缩、服务器推送、管线操作

- HTTP报文结构
  - header <= 32K
  - body <= 2G

- 状态码
  - 1xx 信息
  - 2xx 成功
  - 3xx 重定向
  - 4xx 请求错误
  - 5xx 服务器错误

- 请求方法
  - GET 读取数据
    - 数据在URL参数里
    - 容量小 <= 32K
  - POST 写数据
    - 容量大
  - PUT 更新数据
  - DELETE 删除数据

- 数据通信
  - GET
  - POST
    - 普通数据-querystring
    - 文件数据-?

- 表单的三种POST：
  - 1.text/plain 用的很少，纯文字
  - 2.application/x-www-form-urlencoded  默认  url编码方式，xxx=xxx&xxx=xx...
  - 3.multipart/form-data 上传文件内容

```js
'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryM6LAl36zbCckMuAg',

------WebKitFormBoundarybn84x6qDrrd3GKXj\r\n
Content-Disposition: form-data; name="username"\r\n
\r\n
user\r\n
------WebKitFormBoundarybn84x6qDrrd3GKXj\r\n
Content-Disposition: form-data; name="password"\r\n
\r\n
password\r\n
------WebKitFormBoundarybn84x6qDrrd3GKXj\r\n
Content-Disposition: form-data; name="f1"; filename="upload.txt"\r\n
Content-Type: text/plain\r\n
\r\n
admin\r\n
123456\r\n
------WebKitFormBoundarybn84x6qDrrd3GKXj--\r\n
\r\n
```

```text
<分隔符>\r\n字段信息\r\n\r\n内容\r\n<分隔符>\r\n字段头\r\n\r\n内容\r\n<分隔符>\r\n字段头\r\n\r\n内容\r\n<分隔符>--

解析数据：

1.用"<分隔符>"切开数据
[
  空,
  \r\n数据描述\r\n\r\n数据值\r\n,
  \r\n数据描述\r\n\r\n数据值\r\n,
  \r\n数据描述1\r\n数据描述2\r\n\r\n<文件内容>\r\n,
  --\r\n
]

2.丢弃头尾元素
[
  \r\n数据描述\r\n\r\n数据值\r\n,
  \r\n数据描述\r\n\r\n数据值\r\n,
  \r\n数据描述1\r\n数据描述2\r\n\r\n<文件内容>\r\n,
]

3.丢弃每一项的头尾\r\n
[
  数据描述\r\n\r\n数据值,
  数据描述\r\n\r\n数据值,
  数据描述1\r\n数据描述2\r\n\r\n<文件内容>,
]

4.用第一次出现的"\r\n\r\n"切分
  普通数据：[数据描述, 数据值]
  或
  文件数据：[数据描述1\r\n数据描述2, <文件内容>]

5.判断描述的里面有没有"\r\n"
  有——文件数据：[数据描述1\r\n数据描述2, <文件内容>]
  没有——普通数据：[数据描述, 数据值]

6.分析"数据描述"

--------------------------------------------------------------------------------

对Buffer数据进行：
1.查找    indexOf()
2.截取    slice(s, e)     [s, ..., e-1]
          slice(s)
3.切分    split


流：
读一点、发一点

--------------------------------------------------------------------------------

流：
1.读取流     fs.createReadStream、req
2.写入流     fs.createWriteStream、res
3.读写流     压缩、加密

启动器
forever

npm i forever -g

forever start server.js
forever list
forever restart server.js
forever stop serer.js
forever stopall
forever start server.js -l c:/a.log -e c:/err.log -a
  -l: log
  -e: error
  -a: append
--------------------------------------------------------------------------------

1.POST的File数据
2.流、gz

--------------------------------------------------------------------------------

1.数据库
2.缓存
3.多进程服务器
4.接口、做东西

流的底层原理是不是还是readfile？
生态者/消费者模型

面向字节的设备   ->  键盘      -> 一个字一个字处理
面向流的设备     ->  网卡      -> 一块一块处理
```

## 数据通信

### fetch

> Fetch API 提供了一个获取资源的接口（包括跨域请求）。任何使用过 XMLHttpRequest 的人都能轻松上手，但新的API提供了更强大和灵活的功能集。

- 原生的，替换XHR

### jsonp

### FormData

### 前端把加密数据传到后台，后台怎么进行校验的

> 签名

### 怎么加密 VS 怎么解密

> 极其成熟的算法——`RSA`

老师能说说web性能吗
1.
2.

### `on`监听是一直轮寻吗; 有性能优化吗

> 不是，监听、通知、回调、异步

### `sip2 协议`，这是现在接口的标准协议吗

### 讲下Graphql么？

### 可以用assert

ctrl+c退出是不是会被监测到，上次在生产环境用了，被批评了。。

### 前端容灾 都包括啥: 磁盘镜像(增量)

## node有缓存的概念

### node的垃圾回收、JavaScript的gc、Java的gc

1. 只要某个东西不再使用了，释放掉所占据的内存

C语言

``` c
int *arr=(int*)malloc(sizeof(int)*100);
...
...
...
...
free(arr);      //程序员自己动手释放

忘了释放

内存泄漏
```

``` js
Person p=new Person();
Person p2=p;
p   -> 空
p2  -> 间

p=Null;   //还剩1个
...
...
...
p2=Null;  //还剩0个
```

### 重新发布程序后，浏览器每次需要ctrl+r来强制刷新，如何做到F5刷新就可以获取最新资源呢？

1. 后台配置
2. `<script src="a.js?t=2018012323"></script>`

### 服务器的缓冲池怎么理解

> 最近使用的、最常使用的资源(文件、数据)，直接留在内存里

- 策略->缓冲命中率

### 简单讲讲SSO、OAuth

### 安全性：99.9%的漏洞都是懒

1. 一切来自前台的数据都不可信
2. 前后台都得进行数据校验

- 前台校验：用户体验
- 后台校验：安全性

### 数据库介绍

1. 关系型数据库——MySQL、Oracle（最常见、最常用; 数据之间是有关系的）
2. 文件型数据库——sqlite; 手机通讯录等简单小的数据量(Android设备通信录)
3. 文档型数据库——MongoDB; 直接存储异构数据——方便

- MySQL     80%         免费    绝大多数普通应用
  - 性能很高、安全性很高
  - 容灾略差
- Oracle                要钱    金融、医疗
  - 容灾特别强
- NoSQL   没有复杂的关系、对性能有极高的要求
- redis、memcached、hypertable、bigtable

### 表单的 POST

1. `text/plain` 纯文本
2. `application/x-www-form-urlencoded` 默认, name=value&xxx=xxx
3. `multipart/form-data`  上传文件内容

### uuid

`cnpm install uuid -S -D`

- devDependencies: 开发环境模块 -D --save-dev
- dependencies: 生产环境模块 -S --save

## http 传输内容类型

- content-type: application/json
  - {"a": 1, "b": {"c": 2}}
- content-type: urlencode
  - encodeURIComponent('{"a":1, "b":{"c":2}}')
- http content-range 断点续传

## 服务端怎么判断文件类型

1. 为什么要判断-没必要
2. 简单版：扩展名；较真版：分析文件结构

## websocket

- 性能高(二进制)
- 双向数据通信

### socket.io

- 简单方便
- 兼容IE5
- 自动数据解析

```js
if (req, url === '/socket.io/socket.io.js') {
  fs.readFile('node_modules/socket.io/node...')
}
```

### 原生socket.io

```http
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
Sec-WebSocket-Key: HlnvJUWMQqnxjCYuRey/AA== 校验的Key
Sec-WebSocket-Version: 13 版本
Upgrade: websocket 使用websocket
```

## 缓存

- 节省带宽费
- JS不支持多线程

### 第一重要、缓存策略

- Cache-Control： 服务器告诉浏览器是否缓存
  - no-cacahe： 服务器告诉浏览器不要缓存此页面
- expires： 缓存可以，但缓存时效是多长时间

### 第二重要、缓存实现过程

1. 第一次S->C："Last-Modified: Sat, 02 Dec 2017 04:03:14 GMT"
2. 第二次C->S："If-Modified-Since: Sat, 02 Dec 2017 04:03:14 GMT"
3. 第二次S->C：200 || 304

- 服务端擅长使用秒
- 客户端JS使用毫秒
  - 可能出现误差，所以服务端毫秒转换为秒计算

19.5K * 1024 = 19968
90

- writeHeader 直接输出，setHeader 还没有输出，先设置信息
- writeHeader 之后再设置 SetHeader 会报错

## 多进程

- 多线程：性能高；复杂，考验程序员
- 多进程：性能略低，简单、对程序员要求低

- Node.js 默认：单进程、单线程
  - 实现多进程

- 主进程：负责派生子进程（cluster模块）
- 子进程：干活(process模块)

## Node 中使用数据库

- 文件型：简单-access/sqlite
- 关系型：MySQL、Oracle
- 分布式：MongoDB
- NoSQL: Redis, Memcache

```sh
npm search mysql
npm install mysql
```

``` js
// 连接数据库
let db = mysql.createConnection({host, port, user, password, database})

// 或者连接池 默认开启10个pool maxConnection: 10 最大连接池
let db = mysql.createPool({host, port, user, password, database, maxConnection: 10)

// 查询
db.query(sql, (err, data)=>{})

db.query('start transaction(); ')
db.query('SELECT (); UPDATE();')
db.query('commit();')
```

- co-mysql
- multiparty
- mysql

## 自定义模块

- 第三方框架
  - `commander` 命令行开发工具
  - `chalk` 命令行样式风格控制器
  - `inquirer` 交互式命令行工具

```sh
npm i commander -S
```

