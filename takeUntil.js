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

const takeUntil = function(array, callback) {
  let result = [];
  for (let a of array) {
    if (callback(a)) {
      return result;
    } else {
      result.push(a);
    }
  }
  return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
