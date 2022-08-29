const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe("#assertEqual", () => {
  it("should return false for 'Lighthouse Labs' and 'Bootcamp'", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });
  it("should return true for 1 and 1", () => {
    assert.isTrue(assertEqual(1, 1));
  });
  it("should return true for 'Hello' and 'Hello'", () => {
    assert.isTrue(assertEqual("Hello", "Hello"));
  });
  it("should return false for 2 and 4'", () => {
    assert.isFalse(assertEqual(2, 4));
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Hello", "Hello");
// assertEqual(2, 4);

