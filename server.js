const http = require('http')

function create() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(req.url)
    res.end()
  })
}

module.exports = {
  create: create
}
