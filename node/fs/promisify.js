const fs = require('fs')
const promisify = require('util').promisify

const read = promisify(fs.readFile)

// read('./promisify.js').then(data => {
//   console.log(data.toString())
// }).catch(e => {
//   console.log(e)
// })

async function test() {
  try {
    const content = await read('./promisify.js')
    console.log(content.toString());
  } catch (e) {
    console.log(e)    
  }
}

test()