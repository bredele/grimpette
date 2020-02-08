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

test('should go back when url equal to root', assert => {
  assert.plan(4)
  const router = grimpette('/foo')
  assert.equal(router('/foo/bar/beep'), '/foo/bar/beep')
  assert.equal(router('/foo'), '/foo/bar')
  assert.equal(router('/foo'), '/foo')
  assert.equal(router('/foo'), '/foo')
})

test('should force url', assert => {
  assert.plan(1)
  const router = grimpette('/foo')
  router('/foo/bar/beep')
  assert.equal(router('/foo', true), '/foo')
})

test('should pause and resume router', assert => {
  assert.plan(4)
  const router = grimpette('/foo')
  router('/foo/bar/beep/boop')
  assert.equal(router('/foo'), '/foo/bar/beep')
  assert.equal(router('/hello/world'), '/hello/world')
  assert.equal(router('/foo'), '/foo/bar/beep')
  assert.equal(router('/foo'), '/foo/bar')
})
