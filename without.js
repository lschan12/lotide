const without = function(source, itemsToRemove) {
  let output = source;
  for (let i of itemsToRemove) {
    if (output.includes(i)) {
      output.splice(output.indexOf(i), 1);
    }
  }
  return output;
};

module.exports = without;

// Test Code

// console.log(without([1, 2, 3], [1])) // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
// const testWords = ["testing", "one", 2, "three"];
// let newTestWords = without(testWords, [1, "2", 2, 60, "hello"]);
// console.log(assertArraysEqual(newTestWords, [testWords]));


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
