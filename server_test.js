const assert = require('assert')
const http = require('http')
const server = require('./server')

srv = server.create()
srv.listen(() => {
    console.log('Started listening on ', srv.address())

    // TODO: run tests.
    srv.close()
})
