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
      clock.start()
      setTimeout(function() {
        var elapsedTime = clock.elapsedTime
        if (elapsedTime < 0.9 || elapsedTime > 1.1) { throw new Error("time rror"); }
        done()
      }, 1000)
    });
  });

  describe('#delta', function () {
    it('should return 0 when not initialized', function () {
      let clock = new Clock()
      assert.equal(0, clock.delta);
    });

    it('should return delta after delay', function (done) {
      let clock = new Clock()
      assert.equal(0, clock.delta);

      setTimeout(function() {
        let delta = clock.delta
        if (delta < 0.008 || delta > 0.019) { throw new Error("time rror"); }

        setTimeout(function() {
          let delta = clock.delta
          if (delta < 0.018 || delta > 0.119) { throw new Error("time rror"); }
          done()
        }, 20)

      }, 10)
    });
  });

});
