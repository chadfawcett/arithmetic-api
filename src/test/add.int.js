import assert from 'assert'
import request from 'superagent'

describe('/add', () => {
  it('should respond with the sum of two integeres', (done) => {
    request.get(process.env.API + '/add')
    .query({ a: 1, b: 1 })
    .end((err, res) => {
      if (err) done(err)

      assert.equal(2, res.text)
      done()
    })
  })
})
