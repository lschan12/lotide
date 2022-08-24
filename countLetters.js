const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let result = {};
  for (let s of string) {
    if (result[s]) {
      result[s] += 1;
    } else {
      result[s] = 1;
    }
  }
  return result;
};

const result1 = countLetters("lhl")
const result2 = countLetters("hello")

assertEqual(result1["l"], 2);
assertEqual(result2["l"], 2);
