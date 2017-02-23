const base = require('./base')

const ADD_COMPONENT = 'component'
const ADD_FEATURE   = 'feature'
const __BASEDIR__ = process.cwd()

const add = (type, name, overwrite, route) => addUtil[type](name, overwrite, route)

const addUtil = {
  [ADD_COMPONENT]: (name, overwrite) => {
    base.addComponent(__BASEDIR__, name, overwrite)
  },
  [ADD_FEATURE]: (name, overwrite, route) => {
    base.addFeature(__BASEDIR__, name, overwrite, route)
  }
}

module.exports = add