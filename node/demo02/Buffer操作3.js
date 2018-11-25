let b=new Buffer('abccc-=-dddder-=-qwerqwer');

// 二进制切分
Buffer.prototype.split=Buffer.prototype.split||function (b){
  let arr=[];

  let cur=0; // 当前位置
  let n=0;
  while((n=this.indexOf(b, cur))!=-1){
    arr.push(this.slice(cur, n));
    cur=n+b.length;
  }

  arr.push(this.slice(cur));

  return arr;
};

let arr=b.split('-=-');
console.log(arr);

console.log(arr.map(buffer=>buffer.toString()));
