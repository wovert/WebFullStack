const { normalize } = require('path')

console.log(normalize('/usr//loal/bin')) // \usr\local\bin
console.log(normalize('/usr//loal/../bin')) // \usr\bin