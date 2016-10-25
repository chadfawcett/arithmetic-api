import assert from 'assert'
import request from 'superagent'

describe('/add', () => {
  it('should respond with the sum of two integeres', () => {
    request.get(process.env.API + '/add')
    .query({ a: 1, b: 1 })
    .end((err, res) => {
      assert.equal(2, res.body)
    })
  })
})
