"use strict";
var Clock = (function () {
    function Clock(autoStart) {
        if (autoStart === void 0) { autoStart = false; }
        this.running = false;
        this.deltaTime = 0;
        this.currentTime = 0;
        this.elapsedTime = 0;
        this.now = (typeof (window) !== "undefined" && window.performance && (window.performance.now).bind(window.performance)) || Date.now;
        this.start();
        // auto set interval to 60 ticks per second
        if (autoStart) {
            setInterval(this.tick.bind(this), 1000 / 60);
        }
    }
    Clock.prototype.start = function () {
        this.deltaTime = 0;
        this.currentTime = this.now();
        this.elapsedTime = 0;
        this.running = true;
    };
    Clock.prototype.stop = function () {
        this.running = false;
    };
    Clock.prototype.tick = function (newTime) {
        if (newTime === void 0) { newTime = this.now(); }
        this.deltaTime = newTime - this.currentTime;
        this.currentTime = newTime;
        this.elapsedTime += this.deltaTime;
    };
    return Clock;
}());
module.exports = Clock;
