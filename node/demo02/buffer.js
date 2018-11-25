let a=new Buffer('abc');
let b=new Buffer('ddd');

let c=Buffer.concat([a, b]);

console.log(c);
