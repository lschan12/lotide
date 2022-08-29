const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayOne, arrayTwo) {
  let output = "";
  if (eqArrays(arrayOne, arrayTwo)) {
    output += `✅✅✅ These two arrays are equal!`;
  } else {
    output += `🛑🛑🛑 These two arrays are not equal!`;
  }
  return output;
};

module.exports = assertArraysEqual;


