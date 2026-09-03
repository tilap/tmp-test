import assert from "node:assert/strict";
import { test } from "node:test";
import { sum } from "./sum.js";

test("sum returns the sum of two finite numbers", () => {
  assert.equal(sum(1, 2), 3);
  assert.equal(sum(0, 0), 0);
  assert.equal(sum(-1, 1), 0);
  assert.equal(sum(1.5, 2.5), 4);
});

test("sum throws TypeError for non-finite numbers", () => {
  assert.throws(() => sum(Infinity, 1), TypeError);
  assert.throws(() => sum(1, -Infinity), TypeError);
  assert.throws(() => sum(NaN, 1), TypeError);
  assert.throws(() => sum(1, NaN), TypeError);
});

test("sum throws TypeError for non-number arguments", () => {
  assert.throws(() => sum("1", 2), TypeError);
  assert.throws(() => sum(1, "2"), TypeError);
  assert.throws(() => sum(null, 2), TypeError);
  assert.throws(() => sum(1, undefined), TypeError);
  assert.throws(() => sum({}, 2), TypeError);
});
