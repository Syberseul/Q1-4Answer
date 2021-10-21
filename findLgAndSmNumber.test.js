const { findLgAndSmNumber } = require("./OneToFourSolution");

test("return smallest and largest with a non-empty array", () => {
  const arr = [1, 2, 3, 4, 60, 76, 9, -3, 10];
  const res = findLgAndSmNumber(arr);

  expect(res).toEqual({ sm: -3, lg: 76 });
});

test("return smallest and largest when both smallest and largest are same", () => {
  const arr = [2, 2, 2, 2, 2, 2];
  const res = findLgAndSmNumber(arr);

  expect(res).toEqual({ sm: 2, lg: 2 });
});

test("return smallest and largest when the length of the array is 1", () => {
  const arr = [1];
  const res = findLgAndSmNumber(arr);
  expect(res).toEqual({ sm: 1, lg: 1 });
});

test("return false when the length of the array is empty", () => {
  const arr = [];
  const res = findLgAndSmNumber(arr);
  expect(res).toEqual(false);
});
