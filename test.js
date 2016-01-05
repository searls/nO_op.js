#!/usr/bin/env node

assert = require('assert')
require('./index')

assert.equal(O_o, undefined)
assert.equal(o_O, undefined)
assert.equal(O.o, undefined)
assert.equal(o.O, undefined)

someFunc = function(){ return 5; }
assert.equal(someFunc.o_(), someFunc)
assert.equal(someFunc().o_(), 5)
