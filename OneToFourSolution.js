// Run 'node OneToFourSolution.js' to check.

// Question No.1
// Write a function that finds the largest and smallest numbers in an array
const findLgAndSmNumber = (arr) => {
  if (arr.length > 0) {
    let lg = arr[0];
    let sm = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > lg) lg = arr[i];
      if (arr[i] < sm) sm = arr[i];
    }

    return { sm, lg };
  }
  return false;
};

// Question No.2
// Write a function that removes duplicate characters from string. Provide at least 2 possible solutions. Which is best in your option? Why?
// Option 1:
const rmvDupChar1 = (str) => {
  const arr = str.split("");
  const res = [];
  arr.forEach((char) => {
    if (!res.includes(char)) res.push(char);
  });
  return res.join("").replace(",", "");
};

// Option 2:
const rmvDupChar2 = (str) => {
  return [...new Set(str)].join("");
};
// The second one would be better as on one hand it requires quite a small amount of code and on the other hand, all elements in a Set CANNOT be duplicated, which means it was introduced to solve this issue.

// Question No.3
// Write a function that checks if two strings are Anagram
const isAnagram = (str1, str2) => {
  if (str1 !== undefined && str2 !== undefined) {
    const sort1 = str1.split("").sort().join("");
    const sort2 = str2.split("").sort().join("");
    return sort1 === sort2 ? true : false;
  }
  return false;
};

// Question No.4
// Write a RegEx to match an Australian mobile phone
const regEx = (phone) => {
  const regEx =
    /^\({0,1}((0|\+61)(2|3|4|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
  return phone.match(regEx) ? true : false;
};

module.exports = {
  findLgAndSmNumber,
  rmvDupChar1,
  rmvDupChar2,
  isAnagram,
  regEx,
};
