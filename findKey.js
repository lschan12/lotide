const findKey = function(object, callback) {
  for (let o in object) {
    if (callback(object[o])) {
      return o;
    }
  }
};

module.exports = findKey;

// Test Code
// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma"); // => "noma"

// assertEqual(findKey({
//   GreatSword: {damage: 50},
//   BattleAxe: {damage: 60},
//   LongSword: {damage: 30},
//   Dagger: {damage: 10},
// }, x => x.damage < 40), "LongSword");

