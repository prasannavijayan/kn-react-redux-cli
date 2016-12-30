const base = require('./base')
const path = require('path')
const _ = require('lodash')
const fs = require('fs-extra')

const create = (dir, name) => {
  if (!_.isString(dir) || dir.length === 0) {
    console.log('Path must be completed')
    return
  }
  const BASEDIR = /^([a-zA-Z]{1}\:\\)/.test(dir) ? dir : path.resolve(process.cwd(), dir)
  const __BASEDIR__ = BASEDIR.replace(/\s/g, '_')
  const isTrue = fs.existsSync(__BASEDIR__)
  if (isTrue) {
    console.log('The directory already exists.')
    return
  }
  base.createApp(__BASEDIR__, name)
  base.createPackage(__BASEDIR__)
}

module.exports = create