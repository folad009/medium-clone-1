var expect = require("chai").expect;
var assert = require("chai").assert;

describe("gets all categories", function() {
  it("It returns true value", function() {
    var getCategories = require("./../src/ducks/reducer").getCategories;
    expect(getCategories()).to.be.ok;
  });
});
