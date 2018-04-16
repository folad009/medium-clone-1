var expect = require("chai").expect;
var assert = require("chai").assert;
var axios = require("axios");
var shallow = require("enzyme").shallow;

describe("gets all categories", function() {
  it("It returns true value", function() {
    var getCategories = require("./../src/ducks/reducer").getCategories;
    expect(getCategories()).to.be.ok;
  });
});

describe("gets all posts", function() {
  it("It returns true value", function() {
    var getAllPosts = require("./../src/ducks/reducer").getAllPosts;
    expect(getAllPosts()).to.be.ok;
  });
});

describe("retrieves user", function() {
  it("retreives user", function() {
    var getUser = require("./../src/ducks/reducer").getUser;
    expect(getUser()).to.be.ok;
  });
});

describe("test Reading List ", function() {
  it("adds to reading list ", function() {
    var addToReadingList = require("./../src/ducks/reducer").addToReadingList;
    expect(addToReadingList()).to.be.ok;
  });
  it("deletes from reading list", function() {
    var deleteFromReadingList = require("./../src/ducks/reducer")
      .deleteFromReadingList;
    expect(deleteFromReadingList()).to.be.ok;
  });
});
