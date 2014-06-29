"use strict";

module.exports = yoify

var yoplait = require("yoplait")
var os = require("os")

var pending = []
console.yo = function scheduleYo(callback) {
  pending.push(callback)
}

function yoify(target, prefix, cb) {
  if (cb == null && typeof prefix === "function") {
    cb = prefix
    prefix = ""
  }
  if (cb == null) {
    cb = function () {}
  }
  prefix = (prefix != null) ? prefix + "~" : ""
  var from = prefix + os.hostname() + "~" + process.pid + "~" + Date.now()
  from = from.substr(0, 42)
  target = target.toUpperCase()

  function noyo(callback) {
    console.log("noyo", target)
    callback("no yo for you. ¯\\_(ツ)_/¯")
  }

  yoplait.newUser(from, yoplait.genUdid(), function(err, yoUser) {
    if (err) {
      console.yo = noyo
      return cb(new Error("Failed to setup yo user"))
    }

    console.yo = function (callback) {
      yoUser.sendYo(target, function (err) {
        if (err) {
          console.yo = noyo
          return callback("Can't yo " + target + " ¯\\_(ツ)_/¯")
        }
        console.log("yo %s", target)
        if (callback) {
          return callback()
        }
      })
    }

    for (var i = 0; i < pending.length; i++) {
      console.yo(pending[i])
    }
    return cb()
  })
}
