const base = require('./base')

const ADD_COMPONENT = 'component'
const ADD_FEATURE   = 'feature'
const __BASEDIR__ = process.cwd()

const add = (type, name, replace, route) => addUtil[type](name, replace, route)

const addUtil = {
  [ADD_COMPONENT]: (name) => {
    base.addComponent(__BASEDIR__, name)
  },
  [ADD_FEATURE]: (name, replace, route) => {
    base.addFeature(__BASEDIR__, name, replace, route)
  }
}

module.exports = add