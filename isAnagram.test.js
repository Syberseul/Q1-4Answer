const { isAnagram } = require("./OneToFourSolution");

test("return true when string 1 and string 2 are anagram", () => {
  const str1 = "abc def";
  const str2 = "fed cba";
  const res = isAnagram(str1, str2);
  expect(res).toEqual(true);
});

test("return false when string 1 and string 2 are not anagram", () => {
  const str1 = "abc def";
  const str2 = "fed cbaa";
  const res = isAnagram(str1, str2);
  expect(res).toEqual(false);
});

test("return false when characters in string 1 and 2 are same but string 1 has empty space", () => {
  const str1 = "abc def";
  const str2 = "abcdef";
  const res = isAnagram(str1, str2);
  expect(res).toEqual(false);
});

test("return false if any one string is undefined", () => {
  const str = "abc def";
  const res = isAnagram(str);
  expect(res).toEqual(false);
});
