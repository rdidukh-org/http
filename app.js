const http = require('http');
const server = require('./server')

function request_listener(req, res) {

}

// create a server object listening on port 8080.
http.createServer(server.request_listener).listen(8080);
