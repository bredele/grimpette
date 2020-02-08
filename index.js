

module.exports = (root = '/') => {
  return (url = '/') => {
    const fragment = url.substring(0, root.length)
    if (fragment !== root) return url
    return root
  }
}
