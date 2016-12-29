const fs = require('fs-extra')
const path = require('path')

const createPackage = (dir, name, author) => {
  var pkg = {}
  //const tpl = fs.readJSONSync(path.resolve(__dirname, 'tpl/package.json'))
  const tpl = require('./tpl/package.json')
  pkg.name = name || 'react-redux-project'
  pkg.version = '1.0.0'
  pkg.description = ''
  pkg.main = 'index.js'
  pkg = Object.assign(pkg, tpl)
  console.log('Creating package.json')
  fs.writeJSONSync(path.resolve(dir, 'package.json'), pkg)
}

exports.createPackage = createPackage

const createApp = (dir, name) => {
  console.log('Creating app')
  fs.copySync(path.resolve(__dirname, 'tpl/app'), dir)
}

exports.createApp = createApp