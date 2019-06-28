# express

- 数据
  - GET => req.query
  - POST => body-parser

- 线程
  - 同一个进程之内的线程之间共享内存、共享计数器
  - 性能高
  - 安全性低

- 进程
  - 每个进程有自己的独立的内存、独立的计数器
  - 性能低
  - 安全性高

- JS: new Worker()
- Node：cluster.fork()

- 多进程、多线程
- 基于事件
  - epoll

- post：body-parser
- 文件上传：
  - 原生：multiparty
  - express:multer

- cookie：存储在浏览器，请求服务器的时候，会顺便发给服务器
  - 不安全的

- session：存储在服务器，不是独立的，基于cookie
  - 安全问题：session 劫持(解决：缩短有效期)
  - 存在cookie里的session-ID,也叫做 token
- cookie不跨域
  - 子域名可以访问父域名cookie
  - 父域名不能访问子域名cookie
- path：cookie识别位置

- cookie 安全
  - 签名：
    - s:99.8.Tal7fIJ2XOtDac3lVhJNEONm3De97RXTHjrEeci7TvQ
    - s:值.签名

  - 99.8
    - s:99.8.Tal7fIJ2XOtDac3lVhJNEONm3De97RXTHjrEeci7TvQ

- session
- cookie-session

- 中间件
  - get(url, fn)
  - post(url, fn)
  - use(url, fn)

  - get(fn) 所有get请求
  - post(fn) 所有post请求
  - use(fn) 所有请求

- session存储位置
  - `%TEMP%`
- mysql 存储session: `express-mysql-session`
