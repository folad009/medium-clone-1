// const assert = require("chai").assert;
// const expect = require("chai").expect;
import { assert } from "chai";
import app from "./app";
// const app = require("./app");
// const reducer = require("./reducer");
// const reducer = require("../src/ducks/reducer");

describe("App", function() {
  it("app should return hello", function() {
    assert.equal(app(), "hello");
  });
});
// describe(' ', function(){})
