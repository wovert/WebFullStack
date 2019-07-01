# 服务端渲染

```js
// admin
router.get('')

// 所有
router.get('*')
```

## 服务端渲染 pug/ejs

1. 安全性
2. SEO

## 客户端渲染 Vue/React

1. 节约流量
2. 用户体验

## 服务端模板

- pug(jade) 侵入式（破坏HTML结构）
- ejs 非侵入式(语法与ecma类似)

```js
/admin/login      '/admin'+'/login'
/news             '/'+'/news'
```

浏览器警用缓存（第二次访问时附带参数）

```html
<meta http-equiv="pragram" content="no-cache">
<meta http-equiv="cache-control" content="no-cache, must-revalidate">
<meta http-equiv="expires" content="0">
```
