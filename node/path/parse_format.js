const { parse, format } = require('path')

const filePath = '/usr/local/node_modules/n/package.json'

const res = parse(filePath)

console.log(res);

console.log(format(res))