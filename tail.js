const assertEqual = require("./assertEqual");

const tail = function(array) {
  let output = array.slice(1, array.length);
  return output;
};
module.exports = tail;


