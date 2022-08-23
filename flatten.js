const eqArrays = function(arrayOne, arrayTwo) {
  let result = true;
  for (let i = 0; i < arrayOne.length; i++) {
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
  return output;
};

const flatten = function(array) {
  let output = [];
  for (let a of array) {
    if (Array.isArray(a)) {
      for (let items of a) {
        output.push(items);
      }
    } else {
      output.push(a);
    }
  }
  return output;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
const originalArray = [1, 2, [3, 4], 5, [6]];
const desiredArray = [1, 2, 3, 4, 5, 6];
console.log(assertArraysEqual(flatten(originalArray), desiredArray));