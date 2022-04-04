const even = require("./math");

test("if number is even", () => {
  const result = even(4);
  expect(result).toBe(true);
});
