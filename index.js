const program = require('commander')
const _ = require('lodash')
const pkg = require('./package.json')
const init = require('./libs/init')
const create = require('./libs/create')
const add = require('./libs/add')
const remove = require('./libs/remove')
const version = pkg.version

program
  .version(version)

program
  .usage('[command] [options]')

program
  .command('create [dir]')
  .description('Create a project for React')
  .action( dir => {
    if (!_.isString(dir) || dir.length === 0) {
      var opts = _.last(program.args).options
      var desc = _.last(program.args)._description
      help('create [dir]', desc, opts)
      return
    }
    const name = _.isString(program.name) ? program.name : undefined
    return create(dir, name)
  })

program
  .command('init')
  .description('Initialize a project for React')
  .action( () => {
    const name = _.isString(program.name) ? program.name : undefined
    return init(name)
  })

program
  .command('add')
  .description('Add a file to the project')
  .option('-c, --component <name>', 'component name')
  .option('-f, --feature <name>', 'feature name')
  .option('-r, --route <route-path>', 'set route path')
  .option('--replace', 'Whether to replace the file')
  .action( () => {
    var _type, _name
    if (_.isString(program.component)) {
      _type = 'component'
      _name = program.component
    }
    else if (_.isString(program.feature)) {
      _type = 'feature'
      _name = program.feature
    }
    if (!_name) {
      var opts = _.last(program.args).options
      var desc = _.last(program.args)._description
      help('add [options]', desc, opts)
      return
    }
    const route = _.isString(program.route) ? program.route : ''
    return add(_type, _name, program.replace, route)
  })

program
  .command('remove [feature-name]')
  .description('remove a feature to the project')
  .action( name => {
    if (!_.isString(name) || name.length === 0) {
      var opts = _.last(program.args).options
      var desc = _.last(program.args)._description
      help('remove [feature-name]', desc, opts)
      return
    }
    return remove(name)
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

function outOption(flags, len, description) {
  var str = flags
  for (var i = flags.length; i < len; i++) {
    str += ' '
  }
  return `    ${str}  ${description}`
}

function help(usage, description, options) {
  console.log(`\n` +
              `  Usage: ${usage}\n\n` +
              `  ${description}\n\n` +
              `  Options:\n`)
  const flags = _.map(options, 'flags').sort( (a, b) => b.length - a.length )
  const maxlength = options.length > 0 ? flags[0].length : '-h, --help'.length
  console.log(outOption('-h, --help', maxlength, 'output usage information'))
  options.map( opt => {
    console.log(outOption(opt.flags, maxlength, opt.description))
  })
  console.log('\r')
}