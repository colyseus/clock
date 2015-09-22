export default class Clock {

  constructor ( autoStart = true ) {
    this.autoStart = autoStart
    this.running = false

    this.startTime = 0
    this.oldTime = 0
    this._elapsedTime = 0

    this.now = (typeof(window) !== "undefined" && window.performance && window.performance.now) || Date.now

    // auto-start
    if (this.autoStart) { this.start() }
  }

  start () {
    this.startTime = this.now()
    this.oldTime = this.startTime
    this.running = true
  }

  stop () {
    this.update()
    this.running = false
  }

  get elapsedTime () {
    this.update()
    return this._elapsedTime
  }

  get delta () {
    return this.update()
  }

  update (newTime = this.now()) {
    var diff = 0;

    diff = 0.001 * ( newTime - this.oldTime )
    this.oldTime = newTime

    this._elapsedTime += diff

    return diff
  }

}
