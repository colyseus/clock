clock.js [![Build Status](https://secure.travis-ci.org/gamestdio/clock.js.png?branch=master)](http://travis-ci.org/gamestdio/clock.js)
===

A simple clock/ticker implementation to track delta/elapsed time.

**2kb minified**

API
---

- clock.start()
- clock.stop()
- clock.tick()
- clock.elapsedTime
- clock.deltaTime
- clock.currentTime

Usage example
---

Clock won't tick automatically by default. You should call `clock.tick()` inside
your rendering/update interval.

```javascript
var Clock = require('clock.js')
var clock = new Clock()

setInterval(function() {
  clock.tick()
  console.log("Delta time: ", clock.deltaTime)
  console.log("Elapsed time: ", clock.elapsedTime)
  console.log("Current time: ", clock.currentTime)
}, 1000 / 60)
```

... or you could initialize `Clock` with `true` as the first parameter, which
will create an interval to call `tick()` 60 times per second:

```javascript
var clock = new Clock(true)
// ...
console.log("Delta time: ", clock.deltaTime)
```

License
---

MIT
