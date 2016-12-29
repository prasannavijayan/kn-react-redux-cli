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
$ kn-react-redux

  Usage: kn-react-redux [command] [options]


  Commands:

    create [dir]  Create a project for React
    init          Initialize a project for React

  Options:

    -h, --help         output usage information
    -V, --version      output the version number
    -n, --name <name>  project name
```

## Usage

### 1. Create a Project

```bash
kn-react-redux create react-redux-project
cd react-redux-project
npm i
```

### 2. Initial a Project

```bash
cd react-redux-project
kn-react-redux init
npm i
```

### 3. Run Scripts for Project

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