# Node 

## NodeJS和其他后台语言不同：

### 优点

1. nodejs的对象、语法跟JavaScript一模一样；利于前端人员用
2. 性能比其他语言更好；比如比PHP块80多倍
3. 前后台配合方便

### 缺点

1. Java极其丰富库支持

## NodeJS用处

1. 服务器——小型后台系统、中间层
2. 工具-测试、构建(grunt、gulp、WebPack...)、抓取
3. Nodejs搭建，Web服务器：http

## 运行NodeJS程序：

1. 盘符        d:
2. 进入目录    cd 目录
3. 运行        node xxx.js

## Node特性

1. nodejs和JavaScript差不多
2. 模块
3. http模块

``` js
let server=http.createServer(()=>{
  //有浏览器请求时执行的回调函数
});
server.listen(666);
```

`/favicon.ico`

1. 系统模块
2. 服务器完成——http、fs、流操作
3. WebSocket——socket.io
4. formData——ajax2.0、文件上传、进度
5. cors跨域

nodeJS作为中间层服务器，我想问为啥传统前端直接可以直接请求后台java或者php的接口，它还要用node作为中间层，这样的好处是什么？安全性、性能、前台交互

能否 简单说说 “爬虫”——抓取别人网站的数据

负载均衡是啥——架构师

`process.env.NODE_ENV` 老师有空可以讲讲这个吗

怎么代理跨域啊——反向代理

Node 只能用单cpu 是不是也是缺点——多进程

- 浅拷贝-复制一层
- 深拷贝-复制所有层

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

### 页面被运营商劫持，有什么办法可以解决么? HTTPS

### 进程之间怎么通信：

1. 管道
2. 共享内存
3. socket

### 单线程和非阻塞io不懂

- 阻塞IO：导致整个程序卡住不同

``` js
FILE *fp=fopen("a.txt", "r");
size = fread(buffer, sizeof(buffer), fp);   <-等待20s
fclose(fp);
```

- 非阻塞IO：继续往下执行，不卡

``` js
fs.readFile('a.txt', (err, data)=>{       <-等待0s
  console.log(data);
});
console.log('a');
```

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

## node有缓存的概念吗？

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

## 缓存

- 节省带宽费
- JS不支持多线程

### 第一重要、缓存策略

- Cache-Control： 服务器告诉浏览器是否缓存
  - no-cacahe： 服务器告诉浏览器不要缓存此页面
- expires： 缓存可以，但缓存时效是多长时间

### 第二重要、缓存实现过程：

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

``` sh
$ cnpm search mysql
$ cnpm install mysql
```

``` js
// 连接
let db=mysql.createConnection({host, port, user, password, database})

// 或者连接池 默认开启10个pool maxConnection: 10 最大连接池
let db = mysql.createPool({host, port, user, password, database, maxConnection: 10)

// 查询
db.query(sql, (err, data)=>{})




```