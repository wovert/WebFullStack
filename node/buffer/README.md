# buffer

> 二进制数据流，类似整数数组，大小固定

C++ 代码在 V8 堆外分配物理内存

操作文件或网络数据时，起始操作的是二进制数据流

- new Buffer(size 字节)
- new Buffer(array)
- new Buffer(string, [encoding])
