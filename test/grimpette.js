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

test('should return given url if index of root', assert => {
  assert.plan(1)
  const router = grimpette('/hello')
  assert.equal(router('/hello'), '/hello')
})

test('should return given url if not index of root', assert => {
  assert.plan(1)
  const router = grimpette('/foo')
  assert.equal(router('/hello'), '/hello')
})

// test('should change root path', assert => {
//   assert.plan(1)
//   const router = grimpette('/hello')
//   assert.equal(router(), '/hello')
// })
