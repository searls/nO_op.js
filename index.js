// Dump globals everywhere.
global.o = global.o || {}
o.O = undefined
global.O = global.O || {}
O.o = undefined
global.o_O = undefined
global.O_o = undefined

//Add o_() to Function's prototype for the "judgmental tap" feature
Object.prototype.o_ = function(){
  return this
}

// It wouldn't feel very no-op'ey if require actually returned something.
module.exports = undefined
