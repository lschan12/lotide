const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    }
    if (!eqObjects(object1[keys], object2[keys])) {
      return false;
    }
  }
  return true;
};




// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 })); // => false
