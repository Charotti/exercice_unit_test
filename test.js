// const even = require("./math");
const formDate = require("./math");

// test("if provided parameter is even return true", () => {
//   const result = even(4);
//   expect(result).toBe(true);
// });

// test("if provided parameter is odd number return false", () => {
//   const result = even(3);
//   expect(result).toBe(false);
// });
// test("if provided parameter is string return false", () => {
//   const result = even("str");
//   expect(result).toBe(false);
// });

// test("if provided parameter is a string representing even number return true", () => {
//   const result = even("24");
//   expect(result).toBe(true);
// });
// test("change date format from yyyy-mm-dd to dd/mm/yyyy", () => {
//   const result = formDate("2022-04-01");
//   expect(result).toBe("01/04/2022");
// });

test("if format of the parameter is not date return null", () => {
  const result = formDate("455551111111111");
  expect(result).toBe(null);
});
