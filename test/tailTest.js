const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns a length of 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  it("returns `Lighthouse' for ['Hello', 'Lighthouse', 'Labs'] for result[0] after tail has been used on original array", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    let result = tail(words);
    assert.strictEqual(result[0], "Lighthouse");
  });
  it("returns `Labs' for ['Hello', 'Lighthouse', 'Labs'] for result[1] after tail has been used on original array", () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    let result = tail(words);
    assert.strictEqual(result[1], "Labs");
  });
});
