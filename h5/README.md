# h5

- geolocation——定位
- video、audio
- localStorage
  - cookie：       小(4K)、浏览器和服务器共享
  - localStorage： 大(5M)、浏览器独享
- *WebWorker; 多进程
- WebSQL、IndexedDB——安全隐患; *W3C删掉了
- 文件操作、文件拖拽 √
- canvas——画图;
  - SVG/VML
- manifest文件; 前台控制缓存
  - *本地应用

## geolocation —— 定位

- 原理
  - PC端：通过IP地址定位；精度非常差
  - 移动：通过GPS定位；精度很高
- PC端
  - IP库
    - Chrome -> google.com    -> ?
    - IE     -> microsoft.com

- getCurrentPosition      获取位置(1次)
- watchPosition           不断获取位置
- clearWatch

## localStorage：5M/域名

- 域名、跨域
- 极其方便
- 用途：
  - 记录用户名
  - 保存草稿

- localStorage    永久存储
- sessionStorage  会话期间存储——浏览器一关就没

## WebWorker——Web多进程(没用过)

- 主进程——UI进程
- 子进程——工作进程

### WebWorker

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

- 路径操作：
  - 相当于选区——没有效果，还需后续操作
  - 闭合——一定要用closePath
- 边线：stroke()
- 填充：fill()

- 线宽：lineWidth
- 线色：strokeStyle
- 填充颜色：fillStyle

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
