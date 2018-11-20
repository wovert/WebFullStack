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