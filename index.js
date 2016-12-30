const program = require('commander')
const _ = require('lodash')
const pkg = require('./package.json')
const init = require('./libs/init')
const create = require('./libs/create')
const add = require('./libs/add')
const version = pkg.version

program
  .version(version)

program
  .usage('[command] [options]')

program
  .command('create [dir]')
  .description('Create a project for React')
  .action( function (dir, options) {
    const name = _.isString(program.name) ? program.name : undefined
    return create(dir, name);
  });

program
  .command('init')
  .description('Initialize a project for React')
  .action( function (dir, options) {
    const name = _.isString(program.name) ? program.name : undefined
    return init(name)
  })

program
  .command('add')
  .description('Add a file to the project')
  .action( function (dir, options) {
    var _type, _name
    if (_.isString(program.component)) {
      _type = 'component'
      _name = program.component
    }
    else if (_.isString(program.feature)) {
      _type = 'feature'
      _name = program.feature
    }
    const route = _.isString(program.route) ? program.route : ''
    add(_type, _name, program.replace, route)
  })

program
  .option('-n, --name <name>', 'project name')
  .option('-c, --component <name>', 'component name')
  .option('-f, --feature <name>', 'feature name')
  .option('-r, --route <route-path>', 'set route path')
  .option('--replace', 'Whether to replace the file')

// Parse and fallback to help if no args
if (_.isEmpty(program.parse(process.argv).args) && process.argv.length === 2) {
  program.help()
}