const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let objectKeys = Object.keys(object);
  let objectValues = Object.values(object);
  for (let v of objectValues) {
    if (v === value) {
      return objectKeys[objectValues.indexOf(v)];
    }
  }
};

// Alternative solution:

const altFindKeyByValue = function(object, value) {
  return Object.keys(object).find(key => object[key] === value);
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(altFindKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(altFindKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);