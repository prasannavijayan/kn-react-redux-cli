'use strict'

const assert = require('assert')
const exec = require('child_process').exec
const mocha = require('mocha')
const rimraf = require('rimraf')
const spawn = require('child_process').spawn
const mkdirp = require('mkdirp')
const fs = require('fs-extra')
const path = require('path')

const binPath = path.resolve(__dirname, '../bin/kn-react-redux.js')
const tempDir = path.resolve(__dirname, '../temp')

describe('kn-react-redux cli', function () {

  mocha.before( function (done) {
    this.timeout(30000)
    cleanup(done)
  })

  mocha.after(function (done) {
    this.timeout(30000)
    cleanup(done)
  })

  describe('usage & help', function () {
    var dir

    mocha.before(function (done) {
      createEnvironment(function (err, newDir) {
        if (err) return done(err)
        dir = newDir
        done()
      })
    })

    mocha.after(function (done) {
      this.timeout(30000)
      cleanup(dir, done)
    })

    it('should usage', function (done) {
      run(dir, [], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should help for --help', function (done) {
      run(dir, ['--help'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should help for -h', function (done) {
      run(dir, ['-h'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

  })

  describe('create', function () {
    var dir

    mocha.before(function (done) {
      createEnvironment(function (err, newDir) {
        if (err) return done(err)
        dir = newDir
        done()
      })
    })

    mocha.after(function (done) {
      this.timeout(30000)
      cleanup(dir, done)
    })

    it('should create basic app', function (done) {
      run(dir, ['create'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should create basic app', function (done) {
      run(dir, ['create', 'react-redux-project'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should create basic app for with spaces', function (done) {
      run(dir, ['create', 'react redux project'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should create basic app for duplicate directory', function (done) {
      run(dir, ['create', 'react redux project'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

  })

  describe('init', function () {
    var dir

    mocha.before(function (done) {
      createEnvironment(function (err, newDir) {
        if (err) return done(err)
        dir = newDir
        done()
      })
    })

    mocha.after(function (done) {
      this.timeout(30000)
      cleanup(dir, done)
    })

    it('should init basic app', function (done) {
      run(dir, ['init'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should add for null', function (done) {
      run(dir, ['add'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should add a component', function (done) {
      run(dir, ['add', '--component', 'topbar-button'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should add a feature', function (done) {
      run(dir, ['add', '--feature', 'user'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should add a feature & [allow override]', function (done) {
      run(dir, ['add', '--feature', 'user', '--overwrite'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

    it('should remove a feature', function (done) {
      run(dir, ['remove', 'user'], function (err, stdout) {
        if (err) return done(err)
        assert.equal(err, null)
        done()
      })
    })

  })

})

function cleanup(dir, callback) {
  if (typeof dir === 'function') {
    callback = dir
    dir = tempDir
  }

  rimraf(tempDir, function (err) {
    callback(err)
  })
}

function createEnvironment(callback) {
  var num = process.pid + Math.random()
  var dir = path.join(tempDir, ('app-' + num))

  mkdirp(dir, function ondir(err) {
    if (err) return callback(err)
    callback(null, dir)
  })
}

function run(dir, args, callback) {
  var argv = [binPath].concat(args)
  var exec = process.argv[0]
  var stderr = ''
  var stdout = ''

  var child = spawn(exec, argv, {
    cwd: dir
  })

  child.stdout.setEncoding('utf8')
  child.stdout.on('data', function ondata(str) {
    stdout += str
  })
  /*child.stderr.setEncoding('utf8')
  child.stderr.on('data', function ondata(str) {
    process.stderr.write(str)
    stderr += str
  });*/

  child.on('close', onclose)
  child.on('error', callback)

  function onclose(code) {
    var err = null

    try {
      assert.equal(stderr, '')
      assert.strictEqual(code, 0)
    } catch (e) {
      err = e
    }

    callback(err, stdout.replace(/\x1b\[(\d+)m/g, '_color_$1_'))
  }
}