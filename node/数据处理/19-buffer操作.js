let buffer = new Buffer('abc\r\nddasdfafd\r\ndfaerewtwert')
let buffer2 = new Buffer('\r\n')

console.log(buffer.indexOf(buffer2))