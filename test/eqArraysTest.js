const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArray", () => {
  it("should return true when comparing [1, 2, 3] and [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });
  it("should return false when comparing [1, 2, 3] and [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });
  it("should return false when comparing ['1', '2', '3'] and ['3', '2', '1']", () => {
    assert.isFalse(eqArrays(['1', '2', '3'], ['3', '2', '1']));
  });
  it("should return true when comparing ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(['1', '2', '3'], ['1', '2', '3']));
  });
  it("should return true when comparing [[2, 3], [4]] and [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });
  it("should return false when comparing [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });
  it("should return false when comparing [[2, 3], [4]] and [[2, 3], [4, 5]]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});

