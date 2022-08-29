const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return output;
  } else if (array.length % 2 !== 0) {
    output.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1], array[(array.length / 2)]);
  }
  return output;
};

module.exports = middle;
