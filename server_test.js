const assert = require('assert')
const server = require('./server')

request = {}
response = {}

result = server.request_listener(request, response)
