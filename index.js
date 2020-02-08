

module.exports = (root = '/') => {
  let path = root
  return (url = '/', force) => {
    if (force) return url
    if (url === root && path !== root) {
      const arr = path.split('/')
      arr.pop()
      path = arr.join('/') || '/'
      return path
    }
    path = url
    return path
  }
}
