var assert = require("assert");
var Clock = require('../dist/index.js').default

describe('clock', function() {

  describe('#elapsedTime', function () {
    it('should return 0 when not initialized', function () {
      var clock = new Clock()
      assert.equal(0, clock.elapsedTime);
    });

    it('should return 1000 after one second', function (done) {
      var clock = new Clock()
      setTimeout(function() {
        clock.tick()
        if (clock.elapsedTime < 900 || clock.elapsedTime > 1100) { throw new Error("time error"); }
        done()
      }, 1000)
    });
  });

  describe('#deltaTime', function () {
    it('should return 0 when not initialized', function () {
      var clock = new Clock()
      assert.equal(0, clock.deltaTime);
    });

    it('should return delta after delay', function (done) {
      var clock = new Clock()
      assert.equal(0, clock.deltaTime);

      setTimeout(function() {
        clock.tick()
        if (clock.deltaTime < 5 || clock.deltaTime > 15) { throw new Error("time error"); }

        setTimeout(function() {
          clock.tick()
          if (clock.deltaTime < 15 || clock.deltaTime > 25) { throw new Error("time error"); }
          done()
        }, 20)

      }, 10)
    });
  });

  describe('#elapsedTime / auto-start', function () {
    it('should return 0 when not initialized', function () {
      var clock = new Clock(true)
      assert.equal(0, clock.elapsedTime);
    });

    it('should return 1000 after one second', function (done) {
      var clock = new Clock(true)
      setTimeout(function() {
        if (clock.elapsedTime < 900 || clock.elapsedTime > 1100) { throw new Error("time error"); }
        done()
      }, 1000)
    });
  });

});
