console.yo
=====

[![NPM](https://nodei.co/npm/console.yo.png)](https://nodei.co/npm/console.yo/)

Yo from your node processes.

```js
require("console.yo")(yourYoUsername)
console.yo()
```

![screenshot](https://raw.github.com/brycebaril/console.yo/master/yoscreen.png)

API
===

`require("console.yo")(yourYoUser[, prefix[, callback])`
---

Hook `console` with a `yo` function that yos `yourYouUser` when called.

Optionally add a `prefix`. `callback` will be invoked with an error if it couldn't get set up.

`console.yo([callback])`
---

Yo from your process. If it couldn't yo, callback will be invoked with an error.

License
===

MIT
