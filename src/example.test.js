import assert from "node:assert/strict";
import { test } from "node:test";

// One passing test so `npm test` and CI are green on a fresh copy.
test("the test runner is wired", () => {
  assert.equal(1 + 1, 2);
});
