const { basename, dirname, extname } = require('path')

const file = '/usr/local/bin/index.js'
console.log(basename(file)) // index.js
console.log(dirname(file)) // /usr/local/bin
console.log(extname(file)) // .js