"use strict";

var test = require("tape")

var user = process.argv[2]
if (!user) {
  throw new Error("usage: node test/index.js YOUR_YO_ACCOUNT")
}

var yoify = require("../console_yo")

test("yo", function (t) {
  yoify(user, "testyo", function (err) {
    t.notOk(err)
    console.yo(function (err) {
      t.notOk(err, "no error, we yo'd")
      console.yo = undefined
      t.end()
    })
  })
})

test("no yo", function (t) {
  yoify("nosuchuser" + Date.now(), function (err) {
    console.yo(function (err) {
      t.ok(err, "no yo for you")
      t.end()
    })
  })
})
