# koa

- JDK 1.8
- Python 2.7
- Android Studio
- ADK 28
- AVD 28

- express：基于回调的方法
- KOA：
  - v1  generator
  - v2  过渡版   generator&async
  - v3  async/await

- express
  - server.get('/a')
  - server.post('/a')

- koa不带路由
  - koa-router

---------

- get
- post
- all

---------

- 嵌套路由：
  - /user
    - /company
    - /
    - /admin
- /news
  - /sport
  - /woman
- /cart

---------

## 路由

1. 嵌套
2. 参数

http://www.sohu.com/news/4432234

用?id=xxx传参和/:id有什么区别？倾向于用/:id吗？

- urlencoded      http://aaa.com/user?a=12&b=5
- params          http://aaa.com/user/12/5

  - urlencoded      params
  - 顺序灵活         死的
  - 可省略           死的
  - 不利于SEO        利于SEO

---------

- ctx.params
- ctx.query
- ctx.method
- ctx.url

---------

`server.context`：相当于`ctx`的`prototype`

---------

- ctx.request
- ctx.response
- ctx.method      请求方法
- ctx.url
- ctx.path
- ctx.query       get数据
- ctx.ip          客户端的IP
- ctx.headers     请求头
- ctx.throw(code, msg)
- ctx.assert(条件, code, msg)
- ctx.state=305;
- ctx.redirect()
- ctx.attachment()

---------

- koa-static
- koa-better-body
  - ctx.request.fields

- cookie是自带的

## 渲染

1. 服务端渲染
2. 客户端渲染
