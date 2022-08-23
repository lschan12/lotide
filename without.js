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

const without = function(source, itemsToRemove) {
  let output = source;
  for (let i of itemsToRemove) {
    if (output.includes(i)) {
      output.splice(output.indexOf(i), 1);
    }
  }
  return output;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const testWords = ["testing", "one", 2, "three"];
let newTestWords = without(testWords, [1, "2", 2, 60, "hello"]);
console.log(assertArraysEqual(newTestWords, [testWords]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
