/*
 * Test the subtract function
 */

import assert from 'assert'
import subtract from './subtract'

describe('subtract', () => {
  it('should return the difference of two integers', () => {
    assert.equal(1, subtract(3, 2))
  })
})
