console.log(Buffer.alloc(10)) // <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(Buffer.alloc(20)) // <Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>
console.log(Buffer.alloc(5, 1)) // <Buffer 01 01 01 01 01>
console.log(Buffer.allocUnsafe(5, 1)) // <Buffer 31 53 6c 69 63>

console.log(Buffer.from([1, 2, 3])) // <Buffer 01 02 03>
console.log(Buffer.from('test')) // <Buffer 74 65 73 74>
console.log(Buffer.from('test', 'base64')) // <Buffer b5 eb 2d>


console.log(Buffer.byteLength('test')) // 4
console.log(Buffer.byteLength('中国')) // 6

console.log(Buffer.isBuffer({})) // false
console.log(Buffer.isBuffer(Buffer.from([1, 2, 3]))) // true

const b1 = Buffer.from('this')
const b2 = Buffer.from('is ')
const b3 = Buffer.from('a ')
const b4 = Buffer.from('test ')
const b5 = Buffer.from('!')

const bf = Buffer.concat([b1, b2, b3, b4, b5])
console.log(bf) // <Buffer 74 68 69 73 69 73 20 61 20 74 65 73 74 20 21>

console.log(bf.length); // 15字节数

const buf2 = Buffer.alloc(10);
buf2[0] = 2;
console.log(buf2.length) // 10

console.log(bf.toString('base64')) // dGhpc2lzIGEgdGVzdCAh

console.log('-----------')

const bf2 = Buffer.allocUnsafe(10)
console.log(bf2) // <Buffer 01 00 00 00 00 00 00 00 f8 6f>
console.log(bf2.fill(10, 2, 6)) // <Buffer 01 00 0a 0a 0a 0a 00 00 f8 6f>

const bf4 = Buffer.from('test')
const bf5 = Buffer.from('test')
const bf6 = Buffer.from('test!')

console.log(bf4.equals(bf5)) // true
console.log(bf4.equals(bf6)) // false

console.log(bf4.indexOf('es')) // 1
console.log(bf4.indexOf('esa')) // -1

////////////////////////////////////

const buffer = Buffer.from('中文字符串')
const StringDecoder = require('string_decoder').StringDecoder
const decoder = new StringDecoder('utf8')

for (let i = 0; i < buffer.length; i += 5) {
  const b = Buffer.allocUnsafe(5)
  buffer.copy(b, 0, i)

  console.log(b.toString())
}

for (let i = 0; i < buffer.length; i += 5) {
  const b = Buffer.allocUnsafe(5)
  buffer.copy(b, 0, i)

  console.log(decoder.write(b))
}
