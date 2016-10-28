/*
 * Test the subtract function
 */

import assert from 'assert'
import subtract from './subtract'

describe('subtract', () => {
  it('should return the difference of two integers', () => {
    assert.equal(1, subtract(3, 2))
    assert.equal(3, subtract(6, 3))
    assert.equal(5, subtract(11, 6))
  })
})
