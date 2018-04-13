const assert = require("chai").assert;
const app = require("./app");
const reducer = require("../src/ducks/reducer");

describe("App", function() {
  it("app should return hello", function() {
    assert.equal(app(), "hello");
  });
});
