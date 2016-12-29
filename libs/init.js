const base = require('./base')

const init = (name) => {
  const __BASEDIR__ = process.cwd()
  base.createApp(__BASEDIR__, name)
  base.createPackage(__BASEDIR__)
}

module.exports = init