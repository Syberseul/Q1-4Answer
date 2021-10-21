const { rmvDupChar1, rmvDupChar2 } = require("./OneToFourSolution");

// test rmvDupChar1
test("return result string with only one word", () => {
  const str = "striing";
  const res = rmvDupChar1(str);

  expect(res).toEqual("string");
});

test("return result string with multiple words", () => {
  const str = "this is the test string";
  const res = rmvDupChar1(str);
  expect(res).toEqual("this erng");
});

// test rmvDupChar2
test("return result string with only one word", () => {
  const str = "striing";
  const res = rmvDupChar2(str);

  expect(res).toEqual("string");
});

test("return result string with multiple words", () => {
  const str = "this is the test string";
  const res = rmvDupChar2(str);
  expect(res).toEqual("this erng");
});
