const flatten = function(array) {
  let output = [];
  for (let a of array) {
    if (Array.isArray(a)) {
      for (let items of a) {
        output.push(items);
      }
    } else {
      output.push(a);
    }
  }
  return output;
};

module.exports = flatten;

