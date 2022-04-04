const even = require("./math");

// test("if provided parameter is even return true", () => {
//   const result = even(4);
//   expect(result).toBe(true);
// });

// test("if provided parameter is odd number return false", () => {
//   const result = even(3);
//   expect(result).toBe(false);
// });
test("if provided parameter is string return false", () => {
  const result = even("str");
  expect(result).toBe(false);
});

test("if provided parameter is a string representing even number return true", () => {
  const result = even("24");
  expect(result).toBe(true);
});
