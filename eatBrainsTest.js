var eatBrains = require('./eatBrains');
var assert = require('assert');


describe("The eatBrains() function :)", function() {
  it("should return 🤷‍♂️ when called with not humans", function() {
    assert.equal(eatBrains('not humans'), '🤷‍♂️', "humans are supposed to be tasty");
  });
  it("should return 🤗 when we give it humans", function() {
    assert.equal(eatBrains('humans'), '🤗', "humans are supposed to be tasty");
  });
  it("should return 😢 when we give it dog", function() {
    assert.equal(eatBrains('dog'), '😢');
  });
  it("should return 😻 when we give it dog", function() {
    assert.equal(eatBrains('cat'), '😻');
  });
  it("should return 😻 when we give it dog", function() {
    assert.equal(eatBrains('CAT'), '😻');
  });
});

