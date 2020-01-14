const url = require('url');

function _request_listener(req, res) {
    console.log(req.url)
    console.log(req.trailers)
    console.log('')
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}

module.exports = { 
    request_listener: _request_listener
}
