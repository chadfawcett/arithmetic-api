import assert from 'assert'
import request from 'superagent'

describe('/subtract', () => {
  it('should respond with the difference of two integeres', (done) => {
    request.get(process.env.API + '/subtract')
    .query({ a: 5, b: 2 })
    .end((err, res) => {
      if (err) done(err)

      assert.equal(3, res.text)
      done()
    })
  })
})
