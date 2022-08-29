const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should return true comparing { a: {z: '1'}, b: '1'} and { a: {z: '1'}, b: '1'}", () => {
    assert.isTrue(eqObjects({ a: { z: "1" }, b: "1" }, { a: { z: "1" }, b: "1" }));
  });
  it("should return false comparing { a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }", () => {
    assert.isFalse(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }));
  });
  it("should return true comparing { c: '1', d: ['3', 3] }, { d: ['2', 3], c: '1' }", () => {
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
  });
});
