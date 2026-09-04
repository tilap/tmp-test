export function greet(name) {
  if (typeof name !== "string" || name === "") {
    throw new TypeError("name must be a non-empty string");
  }
  return `hello, ${name}`;
}
