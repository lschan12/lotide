const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("should return [3, 5, 15, 18] for ('Lighthouse in the house', ['h']", () => {
    assert.deepEqual(letterPositions("lighthouse in the house")["h"], [3, 5, 15, 18])
  });
});

