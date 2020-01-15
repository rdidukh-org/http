const assert = require('assert')
const mocha = require('mocha')
const http = require('http')
const server = require('./server')
const url = require('url')

// TODO: https://medium.com/caffeine-and-testing/async-testing-with-mocha-with-callbacks-and-promises-5d0002661b3f

mocha.describe('server', function () {
  mocha.it('starts', function (done) {
    const srv = server.create()

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
