const program = require('commander')
const _ = require('lodash')
const pkg = require('./package.json')
const init = require('./libs/init')
const create = require('./libs/create')
const version = pkg.version

program
  .version(version)

program
  .usage('[command] [options]')

program
  .command('create [dir]')
  .description('Create a project for React')
  .action( function (dir, options){
    const name = _.isString(program.name) ? program.name : undefined
    return create(dir, name);
  });

program
  .command('init')
  .description('Initialize a project for React')
  .action( function (dir, options){
    const name = _.isString(program.name) ? program.name : undefined
    return init(name)
  })

program
  .option('-n, --name <name>', 'project name')

// Parse and fallback to help if no args
if (_.isEmpty(program.parse(process.argv).args) && process.argv.length === 2) {
  program.help()
}