const http = require('http')
const urlLib = require('url')
const querystring = require('querystring')

http.createServer( (req, res) => {
  console.log(req.headers['my-origin-blue'])

  //if(req.headers['origin']=='null' || /^https?:\/\/(\w+\.)+abc\.com/.test(req.headers['origin'])){
  if (req.headers['origin']=='null' || req.headers['origin'].startsWith('http://localhost')) {
    res.setHeader('Access-Control-Allow-Origin', '*')
  }

  let {pathname: url, query: get} = urlLib.parse(req.url, true)

  let arr = []
  req.on('data', data => {
    arr.push(data)
  });
  req.on('end', () => {
    let post = querystring.parse(Buffer.concat(arr).toString())

    console.log(url, get, post)

    res.write('asdfasdf')
    res.end()
  })
}).listen(8080)
