const crypto=require('crypto');

let obj=crypto.createHash('md5');

//obj.update('123456');

obj.update('123');
obj.update('4');
obj.update('56');

console.log(obj.digest('hex'));
