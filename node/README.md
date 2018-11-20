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
