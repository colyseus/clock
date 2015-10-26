var assert = require("assert");
var Clock = require('../index.js')

describe('clock', function() {

  describe('#elapsedTime', function () {
    it('should return 0 when not initialized', function () {
      let clock = new Clock()
      assert.equal(0, clock.elapsedTime);
    });

    it('should return 1000 after one second', function (done) {
      let clock = new Clock()
      setTimeout(function() {
        clock.tick()
        if (clock.elapsedTime < 950 || clock.elapsedTime > 1050) { throw new Error("time error"); }
        done()
      }, 1000)
    });
  });

  describe('#deltaTime', function () {
    it('should return 0 when not initialized', function () {
      let clock = new Clock()
      assert.equal(0, clock.deltaTime);
    });

    it('should return delta after delay', function (done) {
      let clock = new Clock()
      assert.equal(0, clock.deltaTime);

      setTimeout(function() {
        clock.tick()
        if (clock.deltaTime < 8 || clock.deltaTime > 15) { throw new Error("time error"); }

        setTimeout(function() {
          clock.tick()
          if (clock.deltaTime < 18 || clock.deltaTime > 22) { throw new Error("time error"); }
          done()
        }, 20)

      }, 10)
    });
  });

});
