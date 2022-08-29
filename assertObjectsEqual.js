const eqObjects = require("./eqObjects");

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

module.exports = assertObjectsEqual;

