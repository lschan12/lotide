const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (Array.isArray(arrayOne[i]) && Array.isArray(arrayTwo[i])) {
      eqArrays(arrayOne[i], arrayTwo[i]);
    }
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]))// => false

// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false

