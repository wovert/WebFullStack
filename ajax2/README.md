# ajax2.0

## ajax1.0 与 Ajax2.0 区别

1. `formdata`(ajax2.0)：控制提交数据和文件上传
2. `CORS 跨域`(jsonp淘汰)

## formdata

``` js
let fd = new FormData()
fd.set(key, value)           // 会覆盖原key的值
fd.append(key, value)        // 不覆盖原key的值
fd.get(key) // return value
delete(key) // delete key

fd.set('user', 'blue'); // set user value is blue
fd.set('user', 'blue2'); // set user value is blue2
```

``` html
<form>
  <input type="text" name="user" value="blue" />
  <input type="text" name="user" value="blue2" />
</form>
```

## FormData —— 上传文件

1. `set、get、getAll、forEach、delete`
2. 服务器那边——跟普通`<form>`一样的

## Node

1. 原生
2. 库、框架

### express

1. 本体
2. 中间件(插件)

## RESTful：不是标准、不是协议、不是规范，是一种风格

1. 请求方式
2. 请求路径

| 请求方式 | 请求路径 | 说明 |
| -- | --- | -- |
| GET  | /user/:id     |  获取用户信息 |
| POST | /user         |  注册        |
| POST | /user/login   |  登陆        |
| POST | /user/ch_pass |  重置密码    |

1. 跨域 —— 不存在跨域这回事儿——浏览器对咱们的限制

`Access-Control-Allow-Origin: 域名||*`

- S: 验证 `headers['origin']` 认不认识
  - 认识=>`setHeader('Access-Control-Allow-Origin', '*')`
- C: 不需要做任何事儿

2. 拖拽上传

- 事件：
  - ondragenter       拖着东西进入
  - ondragleave       拖着东西离开
  - ondragover        悬停
  - ondrop            松手

## tapable

> 用于事件发布订阅执行的插件架构

程序调试：
1.debugger(浏览器)
2.打日志
  alert/console.log

## 预编译吗

### 1. 前台

- 系统自带的预编译：chrome、
- 自己做的预编译：polyfill-编译

## 2. 后台：Webpack-编译


