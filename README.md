# @colyseus/clock

A simple clock/ticker implementation to track delta/elapsed time.

API
---

- `new Clock([useInterval=false])`
- `clock.start([useInterval=false])`
- `clock.stop()`
- `clock.tick()`
- `clock.elapsedTime`
- `clock.deltaTime`
- `clock.currentTime`

Usage example
---

There's two ways you can use clock.js: manual or automatic.

**Automatic**

By initializing `Clock` with `true` as the first argument, a interval will be
created, in which `tick()` is called 60 times per second.

```typescript
import Clock from '@colyseus/clock';
let clock = new Clock(true);
```

You can also call `start(true)` to create the interval.

```javascript
import Clock from '@colyseus/clock';
let clock = new Clock();
clock.start(true);
```

**Manual usage**

You call `tick()` manually in your existing loop.

```typescript
import Clock from '@colyseus/clock';
var clock = new Clock();

setInterval(function() {
  clock.tick();
  console.log("Delta time: ", clock.deltaTime);
  console.log("Elapsed time: ", clock.elapsedTime);
  console.log("Current time: ", clock.currentTime);
}, 1000 / 60);
```


License
---

MIT
