const base = require('./base')
const _ = require('lodash')

const __BASEDIR__ = process.cwd()

const remove = (name) => {
  base.removeFeature(__BASEDIR__, name)
}

module.exports = remove