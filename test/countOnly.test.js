const countOnly = require("../countOnly");
const assert = require("chai").assert;

describe("#countOnly", () => {
  it("should return an object", () => {
    assert.isObject(countOnly(["Karl", "Salima", "Agouhanna"], {"Karl": true, "Salima": true, "Agouhanna": false,}))
  })
  it("should return a count of 1 for Karl with ['Karl'] as the array input, and {'Karl': true,} as the object inpnut", () => {
    const arrInput = ["Karl"];
    const objInput = {"Karl": true};
    let result = countOnly(arrInput, objInput)
    assert.strictEqual(result["Karl"], 1);
  });
});

