import assert from "node:assert/strict";
import { test } from "node:test";
import { greet } from "./greet.js";

test("greet returns a greeting for a valid name", () => {
  assert.equal(greet("Ada"), "hello, Ada");
});

test("greet throws TypeError for empty string", () => {
  assert.throws(() => greet(""), TypeError);
});

test("greet throws TypeError for non-string input", () => {
  assert.throws(() => greet(null), TypeError);
  assert.throws(() => greet(undefined), TypeError);
  assert.throws(() => greet(42), TypeError);
});
