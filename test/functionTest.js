var expect = require("chai").expect;
var assert = require("chai").assert;
var should = require("chai").should;
let promise;
var getCategories = require("./../src/ducks/reducer").getCategories;

describe("Get Category function of reducer", function() {
  it("It returns true value", function() {
    expect(getCategories()).to.be.ok;
  });
  it("Calls the correct action type to the reducer", function() {
    expect(getCategories().type).to.eql("GET_CATEGORIES");
  });
});
