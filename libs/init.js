const base = require('./base')

const init = (name) => {
  const __BASEDIR__ = process.env.PWD
  base.createApp(__BASEDIR__, name)
  base.createPackage(__BASEDIR__)
}

module.exports = init