const { regEx } = require("./OneToFourSolution");

test("return true when phone number starts with +61", () => {
  const res = regEx("+61411234567");
  expect(res).toEqual(true);
});

test("return false when phone number starts with +61 but the length is wrong", () => {
  const res = regEx("+614112345671");
  expect(res).toEqual(false);
});

test("return true when phone number starts with 0", () => {
  const res = regEx("0411234567");
  expect(res).toEqual(true);
});

test("return false when phone number starts with 0 but the length is wrong", () => {
  const res = regEx("04112345671");
  expect(res).toEqual(false);
});

test("return false when input contains other than number", () => {
  const res = regEx("041123456i");
  expect(res).toEqual(false);
});
