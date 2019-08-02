const fs = require('fs')
const rs = fs.createReadStream('./readstream.js')

rs.pipe(process.stdout);

