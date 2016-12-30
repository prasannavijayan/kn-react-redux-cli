const fs = require('fs-extra')
const path = require('path')
const _ = require('lodash')
const encoding = 'utf-8'

const createPackage = (dir, name, author) => {
  var pkg = {}
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

const addComponent = (dir, name) => {
  var component = readFile('tpl/tools/features/component.js')
  var className = fileNameToClassName(name)
  component = component.replace(/\<ClassName\>/g, className)
  console.log(`Add Component ${name}`)
  fs.mkdirsSync(path.resolve(dir, `src/components/${name}`))
  writeFile(path.resolve(dir, `src/components/${name}/index.js`), component, true)
}

exports.addComponent = addComponent

const addFeature = (dir, name, replace, route) => {
  var component = readFile('tpl/tools/features/component.js')
  var container = readFile('tpl/tools/features/container.js')
  var _route = readFile('tpl/tools/features/route.js')
  var className = fileNameToClassName(name)
  component = component.replace(/\<ClassName\>/g, className)
  container = container.replace(/\<ClassName\>/g, className)
  _route = _route.replace(/\<ClassName\>/g, className).replace(/\<RoutePath\>/g, route)
  console.log(`Add Feature ${name}`)
  fs.mkdirsSync(path.resolve(dir, `src/features/${name}`))
  writeFile(path.resolve(dir, `src/features/${name}/component.js`), component, replace)
  writeFile(path.resolve(dir, `src/features/${name}/container.js`), container, replace)
  writeFile(path.resolve(dir, `src/features/${name}/index.js`), _route, replace)
  copyFile('tpl/tools/features/action.js', path.resolve(dir, `src/features/${name}/action.js`), replace)
  copyFile('tpl/tools/features/constant.js', path.resolve(dir, `src/features/${name}/constant.js`), replace)
  copyFile('tpl/tools/features/reducer.js', path.resolve(dir, `src/features/${name}/reducer.js`), replace)
  copyFile('tpl/tools/features/initialState.js', path.resolve(dir, `src/features/${name}/initialState.js`), replace)
  updateRoute(dir)
}

exports.addFeature = addFeature

const updateRoute = (dir) => {
  const features = fs.readdirSync(path.resolve(dir, `src/features`))
  const headerStr = '// ------------------------------------\n' +
                    '// Routes & Reducers\n' +
                    '// ------------------------------------\n'
  var importFeatures = ``
  var exportFeatures = '\nexport const Routes = [\n'
  var importReducers = ''
  var exportReducers = '\nexport const Reducers = {\n'
  features.map( (item, i) => {
    var routeName = fileNameToClassName(item)
    var reducerName = routeName + 'Reducer'
    if (/\./.test(routeName)) return
    importFeatures += `import ${routeName} from './${item}'\n`
    exportFeatures += `  ${routeName},\n`
    importReducers += `import ${reducerName} from './${item}/reducer'\n`
    exportReducers += `  ${routeName}: ${reducerName},\n`
  })
  exportFeatures += `]\n`
  exportReducers += `}`
  const routeStr = headerStr + importFeatures + importReducers + exportFeatures + exportReducers
  writeFile(path.resolve(dir, `src/features/index.js`), routeStr, true)
}

const fileNameToClassName = (name) => 
  _.upperFirst(name.replace(/\-(\w)/g, (x) => x.slice(1).toUpperCase() ))

const readFile = (_path) => 
  fs.readFileSync(path.resolve(__dirname, _path), encoding)

const writeFile = (_path, _data, replace) => {
  const isTrue = fs.existsSync(_path)
  if (isTrue && !replace) {
    console.log(`Warning: ${_path} Existed。`)
    return
  }
  fs.writeFileSync(_path, _data, {encoding})
}

const copyFile = (_path, _dest, replace) => {
  const isTrue = fs.existsSync(_dest)
  if (isTrue && !replace) {
    console.log(`Warning: ${_dest} Existed。`)
    return
  }
  fs.copySync(path.resolve(__dirname, _path), _dest)
}

