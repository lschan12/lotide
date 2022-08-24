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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keys of Object.keys(object1)) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false;
      }
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  let output = "";
  if (eqObjects(actual, expected)) {
    output += `✅✅✅ ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    output += `🛑🛑🛑 ${inspect(actual)} !== ${inspect(expected)}`;
  }
  console.log(output);
};

assertObjectsEqual({a: [1, 2, 3]}, {a: [1, 2, 3]});