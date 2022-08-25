const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
  const findLongestArray = (arrayOne, arrayTwo) => {
    let combinedArray = [];
    combinedArray.push(arrayOne, arrayTwo);
    let longestArray = combinedArray.reduce((a, b) => a.length > b.length ? a : b);
    return longestArray;
  };
  let longestArray = (findLongestArray(arrayOne, arrayTwo));
  for (let i = 0; i < longestArray.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let output = "";
  if (eqArrays(arrayOne, arrayTwo)) {
    output += `✅✅✅ These two arrays are equal!`;
  } else {
    output += `🛑🛑🛑 These two arrays are not equal!`;
  }
  console.log(output);
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["hello", "darkness", "my", "old", "friend"];

const map = function(array, callback) {
  let result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

const results1 = map(words, word => word[0]);
const result2 = map(words2, word => word[0].toUpperCase());

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(result2, ["H", "D", "M", "O", "F"]);
