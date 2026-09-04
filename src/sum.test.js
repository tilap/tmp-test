import assert from "node:assert/strict";
import { test } from "node:test";
import { sum } from "./sum.js";

test("sum returns the sum of two finite numbers", () => {
  assert.equal(sum(2, 3), 5);
  assert.equal(sum(-1, 1), 0);
  assert.equal(sum(0.1, 0.2), 0.30000000000000004);
  assert.equal(sum(-4, -6), -10);
});

test("sum throws TypeError for non-number arguments", () => {
  assert.throws(() => sum("1", 2), TypeError);
  assert.throws(() => sum(1, "2"), TypeError);
  assert.throws(() => sum(null, 2), TypeError);
  assert.throws(() => sum(1, undefined), TypeError);
  assert.throws(() => sum(true, 2), TypeError);
  assert.throws(() => sum(1, {}), TypeError);
});

test("sum throws TypeError for non-finite numbers", () => {
  assert.throws(() => sum(NaN, 2), TypeError);
  assert.throws(() => sum(1, NaN), TypeError);
  assert.throws(() => sum(Infinity, 2), TypeError);
  assert.throws(() => sum(1, -Infinity), TypeError);
});
