const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let keys of Object.keys(object1)) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      if (!eqArrays(object1[keys], object2[keys])) {
        return false;
      }
    } else if (typeof object1[keys] === "object" && typeof object2[keys] === "object") {
      if (!eqObjects(object1[keys], object2[keys])) {
        return false;
      }
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;
};



module.exports = eqObjects;

