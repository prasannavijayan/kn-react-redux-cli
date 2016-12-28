const base = require('./base')
const path = require('path')
const _ = require('lodash')

const create = (dir, name) => {
  if (!_.isString(dir) || dir.length === 0) {
    console.log('Path must be completed')
    return
  }
  const BASEDIR = /^([a-zA-Z]{1}\:\\)/.test(dir) ? dir : path.resolve(process.env.PWD, dir)
  const __BASEDIR__ = BASEDIR.replace(/\s/g, '_')
  console.log(__BASEDIR__)
  base.createApp(__BASEDIR__, name)
  base.createPackage(__BASEDIR__)
}

module.exports = create