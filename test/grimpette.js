/**
 * Dependencies
 */

const test = require('tape')
const grimpette = require('..')


test('should return root path', assert => {
  assert.plan(1)
  const router = grimpette()
  assert.equal(router(), '/')
})

test('should change root path', assert => {
  assert.plan(1)
  const router = grimpette('/hello')
  assert.equal(router(), '/hello')
})

test('should return root if given root is the same', assert => {
  assert.plan(1)
  const router = grimpette('/hello')
  assert.equal(router('/hello'), '/hello')
})
