clock.js [![Build Status](https://secure.travis-ci.org/gamestdio/clock.js.png?branch=master)](http://travis-ci.org/gamestdio/clock.js)
===

A simple clock/ticker implementation to track delta/elapsed time.

**1.9kb minified**

API
---

- clock.start()
- clock.stop()
- clock.tick()
- clock.elapsedTime
- clock.deltaTime

Usage example
---

```javascript
var Clock = require('clock.js')
var clock = new Clock()

setInterval(function() {
  clock.tick()
  console.log("Delta time: ", clock.deltaTime)
  console.log("Elapsed time: ", clock.elasedTime)
}, 1000 / 60)
```

License
---

MIT

