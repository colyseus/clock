class Clock {

  constructor ( autoStart = false ) {
    this.running = false

    this.deltaTime = 0
    this.currentTime = 0
    this.elapsedTime = 0

    this.now = (typeof(window) !== "undefined" && window.performance && (window.performance.now).bind(window.performance)) || Date.now
    this.start()

    // auto set interval to 60 ticks per second
    if (autoStart) {
      setInterval(this.tick.bind(this), 1000 / 60)
    }
  }

  start () {
    this.deltaTime = 0
    this.currentTime = this.now()
    this.elapsedTime = 0
    this.running = true
  }

  stop () {
    this.running = false
  }

  tick (newTime = this.now()) {
    this.deltaTime = newTime - this.currentTime;
    this.currentTime = newTime
    this.elapsedTime += this.deltaTime
  }

}

module.exports = Clock
