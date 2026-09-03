export function sum(a, b) {
  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    !Number.isFinite(a) ||
    !Number.isFinite(b)
  ) {
    throw new TypeError("Both arguments must be finite numbers");
  }

  return a + b;
}
