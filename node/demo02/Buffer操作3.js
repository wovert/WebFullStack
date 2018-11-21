let b=new Buffer('abccc-=-dddder-=-qwerqwer');

Buffer.prototype.split=Buffer.prototype.split||function (b){
  let arr=[];

  let cur=0;
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
