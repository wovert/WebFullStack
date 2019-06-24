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

### 布局结构标签及兼容处理

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

### 多媒体标签及属性介绍 - video/audio

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

## HTML5 API

- querySelectorAll()
- querySelector()

### querySelectorAll VS getElementsBy

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

### classList

- DOM.classList.add('类名')
- DOM.classList.remove('类名')
- DOM.classList.contains('类名')
- DOM.classList.toggle('类名')

[classList案例](./classList/index.html)

### 自定义属性

- data-自定义属性名
- 获取自定义属性名: DOM.dataset() 返回一个对象
  - DOM.dataset.属性名 || DOM.dataset[属性名]
- 设置自定义属性
  - DOM.dataset.自定义属性名=值 || DOM.dataset[自定义属性名] = 值

[dataset案例](./dataset/index.html)

### 文件读取

读取大文件按照流读取文件内容

- FileReader方法: 接口有3个用来读取文件方法返回结果在`result`中
  - readAsBinaryString 将文件都读取为**二进制编码**
  - readAsText 将文件读取为**文本**
  - readAsDataURL 将文件读取为**DataURL**

- FileReader 事件模型
  - onabort 中断时触发
  - onerror 出错时触发
  - onload 文件读取成功完成时触发
  - onloaded 读取完成触发，无论成功或失败
  - onloadstart 读取开始时触发
  - onprogress 读取中

[FileReader案例](./FileReader/index.html)

### 获取网络状态

- 获取当前网络状态：`window.navigator.onLine` 返回一个布尔值
- 网络状态事件：启动这个页面是不会触发ononline和onoffline事件的，得网络状态发生变化才触发
  - `window.ononline`
  - `window.onoffline`

### 获取地理定位

- 获取一次当前位置: `window.navigator.geolocation.getCurrentPosition(success, error)`
  - `coords.latitude` 维度
  - `coords.longitude` 经度

- 实时获取当前位置：`window.navigator.geolocation.watchPosition(success, error)`

- 原理
  - PC 端：通过 IP 地址定位；精度非常差
  - 移动：通过 GPS 定位；精度很高
- PC 端
  - IP 库
    - Chrome -> google.com    -> ?
    - IE     -> microsoft.com
- `watchPosition`           不断获取位置
- `clearWatch`
- `navigator.geolocation.getCurrentPosition` 获取地址位置（一次），调取手机内部的GPS定位系统获取当前手机所在的经纬度以及精准度等。

通过浏览器调取手机内部的软件或者硬件（缺点：性能和兼容性）

- IP 库：通过网络IP地址获取地理位置定位
- 基站
- gps

### localStorage

- 5M/域名
- 域名、跨域
- 极其方便
- 用途
  - 记录用户名
  - 保存草稿

- localStorage
  - 永久存储
  - 多窗口共享
  - 容量大约为**20M**
  - window.localStorage.setItem(key ,value)
  - window.localStorage.getItem(key)
  - window.localStorage.removeItem(key)
  - window.localStorage.clear()

- sessionStorage
  - 生命周期为关闭当前浏览器窗口
  - 可以在同一个窗口下访问
  - 数据大小为**5M**左右
  - 会话期间存储——浏览器一关就没
  - window.sessionStorage.setItem(key ,value)
  - window.sessionStorage.getItem(key)
  - window.sessionStorage.removeItem(key)
  - window.sessionStorage.clear()

### WebWorker

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

- CSS3新样式——动画、3D、transform
- canvas路径问题、像素操作、SVG、VML、图表库、d3
- 移动端布局、移动端touch
- 相关库——iscroll、hammer
- canvas高级应用
  - 游戏
  - WebGL

### 绘图工具

```text
  ☞ 介绍canvas画布
  ☞ 设置画布大小： 使用属性方式设置
  ☞ 解决画布重绘问题
    1. 设置一次描边
    2. 开启新的图层
```

### 绘图方法

```text
ctx.moveTo(x,y)    落笔
ctx.lineTo(x,y)    连线
ctx.stroke()	   描边

ctx.beginPath()；   开启新的图层

演示： strokeStyle="值"
线宽： linewidth="值"   备注：不需要带单位

线连接方式：   lineJoin: round | bevel | miter (默认)

线帽（线两端的结束方式）：  lineCap: butt(默认值) | round | square 

闭合路径： ctx.closePath()


--绘制一条直线演示代码

--作业：
  1. 从200,100的位置绘制宽为200高为150的矩形
  2. 准备一个600*400的画布，三等分这个画布，分别绘制正方形。直角三角形，梯形
```

### 渐变方案

```text
  ☞ 线性渐变
      var grd=ctx.createLinearGradient(x0,y0,x1,y1);
        x0-->渐变开始的x坐标
        y0-->渐变开始的y坐标
        x1-->渐变结束的x坐标
        y1-->渐变结束的y坐标

      grd.addColorStop(0,"black");      设置渐变的开始颜色
      grd.addColorStop(0.1,"yellow");   设置渐变的中间颜色
      grd.addColorStop(1,"red");        设置渐变的结束颜色

      ctx.strokeStyle=grd;
      ctx.stroke();

      备注：
         addColorStop(offse,color);
         中渐变的开始位置和结束位置介于0-1之间，0代表开始，1代表结束。中间可以设置任何小数

  ☞ 径向渐变
    ctx.createradialGradient(x0,y0,r0,x1,y1,r1);

    (x0,y0)：渐变的开始圆的 x,y 坐标

    r0：开始圆的半径

    (x1,y1)：渐变的结束圆的 x,y 坐标

    r1：结束圆的半径
```

### 填充效果

``` js
ctx.fill();      设置填充效果
ctx.fillstyle="值"; 设置填充颜色
```

### 非零环绕原则

绘制一个如下图形

![52647078286](assets/1526470782861.png)

``` text
☞ 非零环绕原则：
  1. 任意找一点，越简单越好
  2. 以点为圆心，绘制一条射线，越简单越好（相交的边越少越好）
  3. 以射线为半径顺时针旋转，相交的边同向记为+1，反方向记为-1，如果相加的区域等于0，则不填充。
  4. 非零区域填充

☞ 非零环绕原则案例：
```

### 绘制虚线

```text
原理：
  设置虚线其实就是设置实线与空白部分直接的距离,利用数组描述其中的关系

  例如： [10,10]  实线部分10px 空白部分10px

  例如： [10,5]  实线部分10px 空白部分5px

  例如： [10,5,20]  实线部分10px  空白5px  实线20px  空白部分10px 实线5px 空白20px....

绘制：
  ctx.setLineDash(数组);
  ctx.stroke();

  例如：
    ctx.moveTo(100, 100);
    ctx.lineTo(300, 100);
    ctx.setLineDash([2,4]);
    ctx.stroke();

  注意：
      如果要将虚线改为实线，只要将数组改为空数组即可。
```

### 绘制动画效果

``` text
  ☞ 绘制一个描边矩形： content.strokeRect(x,y,width,height) 
  ☞ 绘制一个填充矩形： content.fillRect(x,y,width,height)  
  ☞ 清除： content.clearRect(x,y,width,height)  

  ☞ 实现动画效果：
    1. 先清屏
    2. 绘制图形
    3. 处理变量
```

### 绘制文本

``` text
  ☞ 绘制填充文本
    content.fillText(文本的内容,x,y)
  
  ☞ 绘制镂空文本
    content.strokeText();

  ☞ 设置文字大小：
    content.font="20px 微软雅黑"
    备注： 该属性设置文字大小，必须按照cssfont属性的方式设置

  ☞ 文字水平对齐方式【文字在圆心点位置的对齐方式】
    content.textalign="left | right | center"
  
  ☞文字垂直对齐方式
    content.textBaseline="top | middle | bottom | alphabetic(默认)"
  
  ☞文字阴影效果
    ctx.shadowColor="red";  设置文字阴影的颜色
    ctx.ShadowOffsetX=值;   设置文字阴影的水平偏移量
    ctx.shadowOffsetY=值;   设置文字阴影的垂直偏移量
    ctx.shadowBlur=值;      设置文字阴影的模糊度
```

### 绘制图片

```text
☞
  //将图片绘制到画布的指定位置
  content.drawImage(图片对象,x,y);

☞
  //将图片绘制到指定区域大小的位置  x,y指的是矩形区域的位置，width和height指的是矩形区域的大小
  content.drawImage(图片对象,x,y,width,height);

☞
  //将图片的指定区域绘制到指定矩形区域内
  content.drawImage(图片对象,sx,sy,swidth,sheight,dx,dy,dwidth,dheight);

  sx,sy 指的是要从图片哪块区域开始绘制，swidth，sheight 是值 截取图片区域的大小
  dx,dy 是指矩形区域的位置，dwidth,dheight是值矩形区域的大小


  解决图片绘制到某一个区域的按原比例缩放绘制：
    绘制宽：绘制高==原始宽：原始高
```

### 绘制圆弧

```text
☞
  content.arc(x,y,radius,startradian,endradian[,direct]);
    x,y    圆心的坐标

        radius 半径

        startradian   开始弧度

        endradian     结束弧度

        direct        方向（默认顺时针 false）   true 代表逆时针

☞ 0度角在哪？
  以圆心为中心向右为0角 顺时针为正，逆时针为负

☞ 备注：
    角度 和 弧度的关系： 角度:弧度= 180:pi

      特殊值

        0度 = 0弧度

        30度 = π/6   (180度的六分之一)

        45度 = π/4

        60度 = π/3

        90度 = π/2

        180度 = π

        360度 = 2π

☞ 绘制圆上任意点：
  公式：
        x=ox+r*cos( 弧度 )

        y=oy+r*sin( 弧度 )


      ox: 圆心的横坐标

      oy: 圆心的纵坐标

      r： 圆的半径
```

### 平移【坐标系圆点的平移】

```js
ctx.translate(x,y);

   特点：
      通过该方法可以将原点的位置进行重新设置。

   注意：
       1. translate(x,y) 中不能设置一个值

       2. 与moveTo(x,y) 的区别：

            moveTo(x,y) 指的是将画笔的落笔点的位置改变，而坐标系中的原点位置并没有发生改变

            translate(x,y) 是将坐标系中的原点位置发生改变
```

### 旋转【坐标系旋转】

```js
ctx.rotate(弧度)
```

### 伸缩

```text
 ctx.scale(x,y)
  备注：
      沿着x轴和y轴缩放
      x,y 为倍数  例如： 0.5  1
```

