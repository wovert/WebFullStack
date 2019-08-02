const bf = Buffer.alloc(5);
console.log(bf);
bf[0] = 1;
bf[1] = 2;
bf[2] = 3;
bf[3] = 4;
bf[4] = 5;
bf[5] = 6;
console.log(bf);

//////////////////////////////////

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// 与 `arr` 共享内存。
const buf = Buffer.from(arr.buffer);

console.log(buf);
// 打印: <Buffer 88 13 a0 0f>

// 改变原先的 Uint16Array 也会改变 Buffer。
arr[1] = 6000;

console.log(buf);
console.log(arr);
// 打印: <Buffer 88 13 70 17>

