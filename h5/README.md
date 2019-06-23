# h5

## 了解 HTML5

> HTML5属于上一代HTML的新迭代语言，设计HTML5最主要的目的是为了在移动设备上支持多媒体！！！例如： `video` 标签和 `audio` 及 `canvas` 标记

## HTML5 新特性

- 取消了过时的显示效果标记  `<font></font>` 和 `<center></center>` ...
- 新表单元素引入
- 新语义标签的引入  
- `canvas`标签（图形设计）
  - `SVG/VML`
- 本地数据库（本地存储）
- `geolocation`
- `video/audio`
- `localStorage`
  - `cookie`：       小(4K)、浏览器和服务器共享
  - `localStorage`： 大(5M)、浏览器独享
- `*WebWorker`; 多进程
- `WebSQL、IndexedDB`——安全隐患; *W3C删掉了
- 文件操作、文件拖拽
- manifest文件; 前台控制缓存
  - *本地应用

### HTML5 跨平台

> 比如你开发了一款HTML5的游戏，你可以很轻易地移植到 UC 的开放平台、Opera 的游戏中心、Facebook 应用平台，甚至可以通过封装的技术发放到App Store或Google Play上，所以它的跨平台性非常强大，这也是大多数人对HTML5有兴趣的主要原因。

### HTML5 缺点

> pc 端浏览器支持不是特别友好，造成用户体验不佳

## 语义化标签

- header 头部区域
- footer 尾部区域
- main 主体区域
- section 区域
- article 独立区域
- aside 与内部无关的部分（广告）
- nav 导航区域
- figure 配图区域
  - figcaption 配图说明
- mark 标记
- time 事件标记
- progress 进度条

`cc:ie`

[语义化标签兼容低版本浏览器案例](./语义化标签兼容低版本浏览器/index.html)

## 新增表单元素

- 传统表单元素
  - input
  - type: {text/passwd/radio/checkbox/file/hidden/button/submit/reset}
  - select
  - textarea
  - button
  - form
  - label

**移动端沒有 key-down/key-up 事件，用input事件代替，表示正在操作当前表单元素（例如正在输入等）**

### 智能表单控件

```html
<input  type="email">
 email: 输入合法的邮箱地址
 url：  输入合法的网址
 number： 只能输入数字
 range： 滑块
 color： 拾色器
 date： 显示日期
 month： 显示月份
 week ： 显示第几周
 time：  显示时间
 search: 显示搜索
 tel: 手机号
```

### 表单属性

```html
  form属性
    autocomplete=on | off          自动完成
    novalidate=true | false        是否关闭校验

  input属性：
    *autofocus：自动获取焦点(一般用户搜索页面自动获取输入框表单)
    *placeholder: 占位符（提示信息）
    *required: 必填项
    multiple: 实现多选效果
    form: form标签的id属性值
    list:
      <input type="text" list="abc"/>
      <datalist id="abc">
        <option value="123">12312</option>
        <option value="123">12312</option>
        <option value="123">12312</option>
        <option value="123">12312</option>
      </datalist>

作业：
  - 自己解决required自定义提示信息
  - 预习和复习

留下的疑问：如何修改表单控件中的默认提示信息
  1. 表单验证触发oninvalid事件
  2. 通过setCustomValidity方法设置修改内容
```

## querySelectorAll VS getElementsBy

1. W3C 标准querySelectorAll 属于 W3C 中的 Selectors API 规范 [1]。而 getElementsBy 系列则属于 W3C 的 DOM 规范 [2]。

2. 浏览器兼容querySelectorAll 已被 IE 8+、FF 3.5+、Safari 3.1+、Chrome 和 Opera 10+ 良好支持 。getElementsBy 系列，以最迟添加到规范中的 getElementsByClassName 为例，IE 9+、FF 3 +、Safari 3.1+、Chrome 和 Opera 9+ 都已经支持该方法了。

3. 接收参数querySelectorAll 方法接收的参数是一个 CSS 选择符。而 getElementsBy 系列接收的参数只能是单一的className、tagName 和 name。代码如下 [3]：

```js
var c1 = document.querySelectorAll('.b1 .c');
var c2 = document.getElementsByClassName('c');
var c3 = document.getElementsByClassName('b2')[0].getElementsByClassName('c');
```

需要注意的是，querySelectorAll 所接收的参数是必须严格符合 CSS 选择符规范的

[Selectors API Level 2](https://www.w3.org/TR/selectors-api2/)

[Document Object Model Core](https://www.w3.org/TR/DOM-Level-3-Core/core.html)

[http://jsbin.com/cuduyigi/1/edit?html,js,console](http://jsbin.com/cuduyigi/1/edit?html,js,console)

[http://jsbin.com/mabefihi/1/watch?html,js,console](http://jsbin.com/mabefihi/1/watch?html,js,console)

[Demo 1: http://jsbin.com/daduziba/1/watch?html,js,outputDemo](http://jsbin.com/daduziba/1/watch?html,js,outputDemo)

[http://jsbin.com/xuvodipo/1/watch?html,js,output](http://jsbin.com/xuvodipo/1/watch?html,js,output)

[Document Object Model HTML](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-75708506)

## classList

- DOM.classList.add('类名')
- DOM.classList.remove('类名')
- DOM.classList.contains('类名')
- DOM.classList.toggle('类名')

## geolocation

- 原理
  - PC端：通过IP地址定位；精度非常差
  - 移动：通过GPS定位；精度很高
- PC端
  - IP库
    - Chrome -> google.com    -> ?
    - IE     -> microsoft.com

- `watchPosition`           不断获取位置
- `clearWatch`
- `navigator.geolocation.getCurrentPosition` 获取地址位置（一次），调取手机内部的GPS定位系统获取当前手机所在的经纬度以及精准度等。

通过浏览器调取手机内部的软件或者硬件（缺点：性能和兼容性）

- IP 库：通过网络IP地址获取地理位置定位
- 基站
- gps

## 多媒体标签及属性介绍 - video/audio

[多媒体标签案例](./多媒体标签/index.html)

```html
<video></video> 视频
  属性：controls 显示控制栏
  属性：autoplay 自动播放
  属性：loop  设置循环播放

<audio></audio>  音频
  属性：controls 显示控制栏
  属性：autoplay 自动播放
  属性：loop  设置循环播放
  video标签支持的格式 http://www.w3school.com.cn/html5/html_5_video.asp
  多媒体标签在网页中的兼容效果方式

<video>
  <source src="trailer.mp4">
  <source src="trailer.ogg">
  <source src="trailer.WebM">
</video>
```

## localStorage

> 5M/域名

- 域名、跨域
- 极其方便
- 用途
  - 记录用户名
  - 保存草稿
- localStorage    永久存储
- sessionStorage  会话期间存储——浏览器一关就没

## WebWorker

> Web 多进程(没用过)

- 主进程——UI进程
- 子进程——工作进程

1. 不能控制UI的东西；数据交互OK
2. 子进程不能再创建子进程
3. 跨域

- 多进程——更充分发挥计算机资源（内存×、IO×、网络×、CPU√）
- 基本没用

- WebSQL    ×
- IndexedDB ×

- 画图：
  - canvas      位图——放大失真      HTML5标准
  - SVG         矢量图——无限缩放    不是HTML5的东西，是一个独立标准
  - VML         矢量图             IE的矢量图

## canvas

> 图形绘制

- 路径操作
  - 相当于选区——没有效果，还需后续操作
  - 闭合 —— 一定要用 `closePath`
- 边线：`stroke()`
- 填充：`fill()`

- 线宽：`lineWidth`
- 线色：`strokeStyle`
- 填充颜色：`fillStyle`

``` js
Uncaught DOMException: Failed to execute 'postMessage' on 'Worker': HTMLDocument object could not be cloned.
```

- 多线程：共享存储空间——多个进程之间传引用
- 多进程：各自独享存储空间——复制一份给子线程

### canvas用途

1. 图表 —— `echarts.js`
2. 游戏
3. 滤镜

----

- CSS3新样式——动画、3D、transform
- canvas路径问题、像素操作、SVG、VML、图表库、d3
- 移动端布局、移动端touch
- 相关库——iscroll、hammer
- canvas高级应用
  - 游戏
  - WebGL
