# kn-react-redux-cli

This is a React and Redux engineering rapid generation tool

Reference and modify from [React Redux Starter Kit][starterkit-url] & [Rekit][rekit-url]

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Codecov Status][codecov-image]][codecov-url]
[![dependencies Status][dependencies-image]][dependencies-url]
[![Gratipay][licensed-image]][licensed-url]

## Install

```bash
npm i -g kn-react-redux-cli
```

## Commands

```bash
$ krr

  Usage: krr [command] [options]


  Commands:

    create [dir]           Create a project for React
    init                   Initialize a project for React
    add [options]          Add a file to the project
    remove [feature-name]  remove a feature to the project

  Options:

    -h, --help                output usage information
    -V, --version             output the version number
    -n, --name <name>         project name
    -c, --component <name>    component name
    -f, --feature <name>      feature name
    -r, --route <route-path>  set route path
    --replace                 Whether to replace the file
```

## Usage

### 1. Create a Project

```bash
krr create react-redux-project
cd react-redux-project
npm i
```

### 2. Initial a Project

```bash
cd react-redux-project
krr init
npm i
```

### 3. Add a Component to Project

```bash
cd react-redux-project
krr add --component button
```

### 4. Add a Feature to Project

```bash
cd react-redux-project
krr add --feature user --route user
```

### 5. Remove a Feature to Project

```bash
cd react-redux-project
krr remove user
```

### 6. Run Scripts for Project

```bash
# Run a development environment
npm run dev
# Compile project
npm run compile
# Compile project for desktop
npm run compile:desktop
# Test project
npm run test
```

## Project structure

```
|-- project name
|    |-- bin
|    |    |-- compile.js
|    |    |-- dev-server.js
|    |    |-- ...
|    |-- config
|    |    |-- environments.config.js
|    |    |-- karma.config.js
|    |    |-- project.config.js
|    |    |-- webpack.config.js
|    |    |-- ...
|    |-- public
|    |    |-- favicon.ico
|    |    |-- humans.txt
|    |    |-- robots.txt
|    |    |-- ...
|    |-- server
|    |    |-- main.js
|    |    |-- ...
|    |-- src
|    |    |-- components
|    |    |    +-- page-not-found
|    |    |    |-- ...
|    |    |-- containers
|    |    |    |-- app.js
|    |    |    |-- root.js
|    |    |    |-- ...
|    |    |-- features
|    |    |    |-- home
|    |    |    |    |-- action.js
|    |    |    |    |-- component.js
|    |    |    |    |-- constant.js
|    |    |    |    |-- container.js
|    |    |    |    |-- index.js
|    |    |    |    |-- initialState.js
|    |    |    |    |-- reducer.js
|    |    |    |    |-- ...
|    |    |    +-- feature-1
|    |    |    +-- feature-2
|    |    |    |-- index.js
|    |    |    |-- ...
|    |    |-- store
|    |    |    |-- configureStore.js
|    |    |    |-- reducers.js
|    |    |    |-- routeConfig.js
|    |    |    |-- ...
|    |    |-- index.html
|    |    |-- main.js
|    |    |-- ...
|    |-- tests
|    |    +-- components
|    |    +-- containers
|    |    +-- features
|    |    |-- .eslintrc
|    |    |-- test-bundler.js
|    |    |-- ...
|    |-- .eslintrc
|    |-- package.json
|    |-- ...
```

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).


[starterkit-url]: https://github.com/davezuko/react-redux-starter-kit
[rekit-url]: https://github.com/supnate/rekit
[npm-image]: https://img.shields.io/npm/v/kn-react-redux-cli.svg
[npm-url]: https://www.npmjs.org/package/kn-react-redux-cli
[downloads-image]: https://img.shields.io/npm/dm/kn-react-redux-cli.svg
[downloads-url]: https://npmjs.org/package/kn-react-redux-cli
[travis-image]: https://travis-ci.org/thondery/kn-react-redux-cli.svg?branch=master
[travis-url]: https://travis-ci.org/thondery/kn-react-redux-cli
[codecov-image]: https://img.shields.io/codecov/c/github/thondery/kn-react-redux-cli/master.svg
[codecov-url]:   https://codecov.io/github/thondery/kn-react-redux-cli?branch=master
[dependencies-image]: https://david-dm.org/thondery/kn-react-redux-cli/status.svg
[dependencies-url]: https://david-dm.org/thondery/kn-react-redux-cli
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: ./LICENSE