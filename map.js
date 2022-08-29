const map = function(array, callback) {
  let result = [];
  for (let item of array) {
    result.push(callback(item));
  }
  return result;
};

module.exports = map;

// Test Code

// const words = ["ground", "control", "to", "major", "tom"];
// const words2 = ["hello", "darkness", "my", "old", "friend"];
// const results1 = map(words, word => word[0]);
// const result2 = map(words2, word => word[0].toUpperCase());

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
// assertArraysEqual(result2, ["H", "D", "M", "O", "F"]);
