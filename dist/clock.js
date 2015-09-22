(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Clock = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Clock = (function () {
  function Clock() {
    var autoStart = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

    _classCallCheck(this, Clock);

    this.autoStart = autoStart;
    this.running = false;

    this.startTime = 0;
    this.oldTime = 0;
    this._elapsedTime = 0;

    this.now = typeof window !== "undefined" && window.performance && window.performance.now || Date.now;

    // auto-start
    if (this.autoStart) {
      this.start();
    }
  }

  _createClass(Clock, [{
    key: "start",
    value: function start() {
      this.startTime = this.now();
      this.oldTime = this.startTime;
      this.running = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.update();
      this.running = false;
    }
  }, {
    key: "update",
    value: function update() {
      var newTime = arguments.length <= 0 || arguments[0] === undefined ? this.now() : arguments[0];

      var diff = 0;

      diff = 0.001 * (newTime - this.oldTime);
      this.oldTime = newTime;

      this._elapsedTime += diff;

      return diff;
    }
  }, {
    key: "elapsedTime",
    get: function get() {
      this.update();
      return this._elapsedTime;
    }
  }, {
    key: "delta",
    get: function get() {
      return this.update();
    }
  }]);

  return Clock;
})();

exports["default"] = Clock;
module.exports = exports["default"];

},{}]},{},[1])(1)
});