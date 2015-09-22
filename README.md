clock.js
===

A simple clock/ticker implementation to track elapsed/delta time.

**2.1kb minified**

API
---

- clock.start()
- clock.stop()
- clock.elapsedTime
- clock.delta

Usage example
---

```javascript
var Clock = require('clock.js')
var clock = new Clock()

function step(timestamp) {
  console.log("Delta time: ", clock.delta)
  console.log("Elapsed time: ", clock.elasedTime)
  requestAnimationFrame(step);
}

step()
```

License
---

MIT

