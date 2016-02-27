(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Clock = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = (function () {
  function Clock() {
    var autoStart = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

    _classCallCheck(this, Clock);

    this.running = false;

    this.deltaTime = 0;
    this.currentTime = 0;
    this.elapsedTime = 0;

    this.now = typeof window !== "undefined" && window.performance && window.performance.now.bind(window.performance) || Date.now;
    this.start();

    // auto set interval to 60 ticks per second
    if (autoStart) {
      setInterval(this.tick.bind(this), 1000 / 60);
    }
  }

  _createClass(Clock, [{
    key: "start",
    value: function start() {
      this.deltaTime = 0;
      this.currentTime = this.now();
      this.elapsedTime = 0;
      this.running = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.running = false;
    }
  }, {
    key: "tick",
    value: function tick() {
      var newTime = arguments.length <= 0 || arguments[0] === undefined ? this.now() : arguments[0];

      this.deltaTime = newTime - this.currentTime;
      this.currentTime = newTime;
      this.elapsedTime += this.deltaTime;
    }
  }]);

  return Clock;
})();

module.exports = Clock;

},{}]},{},[1])(1)
});