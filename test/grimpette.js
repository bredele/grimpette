/**
 * Dependencies
 */

const test = require('tape')
const grimpette = require('..')


test('should return the root route', assert => {
  assert.plan(1)
  const router = grimpette()
  assert.equal(router(), '/')
})
