const http = require('http')
const qs = require('querystring')
const server = http.createServer()
const port = 8080
server.listen(port)

// Scheme://host:port/path?query#hash
let count = 0
server.on('request', (req, res) => {
	const url = req.url
	const queryString = url.substr(url.indexOf('?') + 1, url.length)
	const query = qs.parse(queryString)
	res.statusCode = 200
	console.log(url)
	console.log(query)
	res.end(`welcome to my homepage.${count++}`)  
})