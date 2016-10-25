/*
 * Test the add function
 */

import assert from 'assert'
import add from './add'

describe('add', () => {
  it('should return the sum of two integers', () => {
    assert.equal(2, add(1, 1))
  })
})
