
/**
 * Lousy router.
 *
 * @param {String} root (default /)
 * @return {Function}
 * @public
 */

module.exports = (root = '/') => {
  let path = root
  let pause = false
  /**
   * Return given url or go back up the path
   * when url equal to root.
   *
   * @param {String} url (default /)
   * @param {Boolean?} force
   * @public
   */

  return (url = '/', force) => {
    if (force) return url
    if (url.substring(0, root.length) !== root) {
      pause = true
      return url
    }
    if (url === root && path !== root) {
      if (pause) {
        pause = false
        return path
      }
      const arr = path.split('/')
      arr.pop()
      path = arr.join('/') || '/'
      return path
    }
    path = url
    return path
  }
}
