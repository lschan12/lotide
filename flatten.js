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

module.exports = flatten;

// Test Code

// console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
// const originalArray = [1, 2, [3, 4], 5, [6]];
// const desiredArray = [1, 2, 3, 4, 5, 6];
// console.log(assertArraysEqual(flatten(originalArray), desiredArray));