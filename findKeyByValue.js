const findKeyByValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value);
};

module.exports = findKeyByValue;

// Alternative solution:

// const findKeyByValue = function(object, value) {
//   let objectKeys = Object.keys(object);
//   let objectValues = Object.values(object);
//   for (let v of objectValues) {
//     if (v === value) {
//       return objectKeys[objectValues.indexOf(v)];
//     }
//   }
// };

