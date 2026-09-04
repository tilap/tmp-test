export function greet(name) {
  if (typeof name !== "string" || name === "") {
    throw new TypeError();
  }
  return `hello, ${name}`;
}
