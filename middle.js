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

const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return output;
  } else if (array.length % 2 !== 0) {
    output.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
  }
  return output;
};

// TEST CODE
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));
