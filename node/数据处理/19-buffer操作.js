let buffer = new Buffer('abc\r\nddasdfafd\r\ndfaerewtwert')
let buffer2 = new Buffer('\r\n')

let c = Buffer.concat([buffer, buffer2])

console.log(c.toString())

console.log(buffer.indexOf(buffer2))