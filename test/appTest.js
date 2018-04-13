const assert = require("chai").assert;
const expect = require("chai").expect;
const app = require("./app");

describe("App", function() {
  it("app should return hello", function() {
    assert.equal(app(), "hello");
    expect(true).to.be.ok;
  });
});
// describe(' ', function(){})
