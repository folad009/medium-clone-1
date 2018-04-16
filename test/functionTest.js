var expect = require("chai").expect;
var assert = require("chai").assert;
var should = require("chai").should;
var axios = require("axios");
let promise;
var reducer = require("./../src/ducks/reducer");
var getCategories = require("./../src/ducks/reducer").getCategories;
var getUserInterests = require("./../src/ducks/reducer").getUserInterests;
var getAllPosts = require("./../src/ducks/reducer").getAllPosts;
var getUserFollowing = require("./../src/ducks/reducer").getUserFollowing;

const initialState = {
  user: {},
  userFollowing: [],
  userInterests: [],
  categories: [],
  posts: [],
  readingList: []
};

describe("Get Category function of reducer", function() {
  it("It returns true value", function() {
    expect(getCategories()).to.be.ok;
  });
  it("Calls the correct action type to the reducer", function() {
    expect(getCategories().type).to.eql("GET_CATEGORIES");
  });
});

describe("User interest method on the reducer", function() {
  it("It returns true value", function() {
    expect(getUserInterests()).to.be.ok;
  });
  it("Calls the correct action type to the reducer", function() {
    expect(getUserInterests().type).to.eql("GET_USER_INTERESTS");
  });
});

describe("Gets all posts", function() {
  it("Calls the correct action type to the reducer", function() {
    expect(getAllPosts().type).to.eql("GET_ALL_POSTS");
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

  it("calls the correct action type on the reducer", function() {
    var getUser = require("./../src/ducks/reducer").getUser;
    expect(getUser().type).to.eql("GET_USER");
  });
});

describe("get user following", function() {
  it("User following returns a true value", function() {
    expect(getUserFollowing()).to.be.ok;
  });
  it("Calls the correct action type on the reducer", function() {
    expect(getUserFollowing().type).to.eql("GET_USER_FOLLOWING");
  });
  it("expects reducer call to return promise", function() {
    axios
      .get("/api/userfollowing/37")
      .then(response => {
        expect(response.data).to.be.a("string");
      })
      .catch(err => expect(err));
  });
});

describe("test Reading List ", function() {
  it("adds to reading list ", function() {
    var addToReadingList = require("./../src/ducks/reducer").addToReadingList;
    expect(addToReadingList()).to.be.ok;
  });

  it("Calls the correct action type to the reducer", function() {
    var addToReadingList = require("./../src/ducks/reducer").addToReadingList;
    expect(addToReadingList().type).to.eql("ADD_TO_READING_LIST");
  });
  it("deletes from reading list", function() {
    var deleteFromReadingList = require("./../src/ducks/reducer")
      .deleteFromReadingList;
    expect(deleteFromReadingList()).to.be.ok;
  });

  it("Calls the correct action type to the reducer", function() {
    var deleteFromReadingList = require("./../src/ducks/reducer")
      .deleteFromReadingList;
    expect(deleteFromReadingList().type).to.eql("DELETE_FROM_READING_LIST");
  });
});
