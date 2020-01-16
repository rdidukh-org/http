const assert = require('assert')
const mocha = require('mocha')
const http = require('http')
const server = require('./server')
const url = require('url')

mocha.describe('server', function () {
  var srv

  mocha.before(function(done) {
    srv = server.create()
    done()
  })

  mocha.it('works', function (done) {
    srv.listen(0, 'localhost', () => {
      const addr = srv.address()
      const srvUrl = new url.URL('http://' + addr.address + ':' + addr.port + '/')

      http.get(srvUrl, function (res) {
        assert.strictEqual(res.statusCode, 200)
        done()
      }).on('error', (err) => {
        done(err)
      })
    }).on('error', function (err) {
      done(err)
    })
  })

  mocha.after(function(done) {
    srv.close()
    done()
  })
})
