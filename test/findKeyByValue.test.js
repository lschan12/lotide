const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");

describe("#findKeyByValue", () => {
  it("should return 'drama' for {drama: 'The Wire',} as input and 'The Wire' as the parameter", () => {
    assert.strictEqual(findKeyByValue({drama: "The Wire"}, "The Wire"), "drama");
  })
  it("should return undefined for {drama: 'The Wire',} as input and 'That 70's Show' as the parameter", () => {
    assert.strictEqual(findKeyByValue({drama: "The Wire"}, "That 70's Show"), undefined);
  })
})
