const assert = require('assert')
const http = require('http')
const server = require('./server')
const url = require('url')

describe('server', function () {
    it('starts', function (done) {
        srv = server.create()

        srv.listen(0, 'localhost', () => {
            const srvUrl = new url.URL('http://' + srv.address().address + ':' + srv.address().port + '/')

            http.get(srvUrl, function (res) {
                srv.close()
                done()
            }).on('error', (e) => {
                srv.close()
                done(e)
            })            
        }).on('error', function (err) {
            srv.close()
            done(err)
        })
    })
})
