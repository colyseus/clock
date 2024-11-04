import { it, describe, expect } from "vitest";

import Clock from "./index.js";
import { setTimeout } from "timers/promises";

describe("clock", function () {
  describe("#elapsedTime", function () {
    it("should return 0 when not initialized", function () {
      const clock = new Clock();
      expect(0).equal(clock.elapsedTime);
    });

    it("should return 1000 after one second", async function () {
      const clock = new Clock();
      await setTimeout(1000);
      clock.tick();
      expect(clock.elapsedTime).toBeGreaterThanOrEqual(900);
      expect(clock.elapsedTime).toBeLessThanOrEqual(1100);
    });
  });

  describe("#deltaTime", function () {
    it("should return 0 when not initialized", function () {
      const clock = new Clock();
      expect(clock.deltaTime).toBe(0);
    });

    it("should return delta after delay", async function () {
      const clock = new Clock();
      expect(clock.deltaTime).toBe(0);

      await setTimeout(10);
      clock.tick();
      expect(clock.deltaTime).toBeGreaterThanOrEqual(5);
      expect(clock.deltaTime).toBeLessThanOrEqual(15);

      await setTimeout(20);

      clock.tick();
      expect(clock.deltaTime).toBeGreaterThanOrEqual(15);
      expect(clock.deltaTime).toBeLessThanOrEqual(25);
    });
  });

  describe("#elapsedTime / auto-start", function () {
    it("should return 0 when not initialized", function () {
      const clock = new Clock(true);
      expect(clock.elapsedTime).toBe(0);
    });

    it("should return 1000 after one second", async function () {
      const clock = new Clock(true);
      await setTimeout(1000);

      expect(clock.elapsedTime).toBeGreaterThanOrEqual(900);
      expect(clock.elapsedTime).toBeLessThanOrEqual(1100);
    });
  });
});
