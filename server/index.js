// REQUIRING DEPENDENCIES
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const strategy = require(`${__dirname}/strategy`);

const createInitialSession = require("./session");

// BRINGING IN CONTROLLERS
const postController = require(`${__dirname}/Controllers/postController`);
const userController = require(`${__dirname}/Controllers/userController`);

// PORT

const port = 3005;

// CREATING INSTANCE OF EXPRESS SERVER

const app = express();
app.use(json());
app.use(cors());

// CONNECTING TO HEROKU DATABSE
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

// CREATING A SESSION

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
  })
);
// app.use(createInitialSession)
// INITIALIZING PASSPORT

app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);

passport.serializeUser((profile, done) => {
  done(null, profile);
});

passport.deserializeUser((profile, done) => {
  done(null, profile);
});
// END POINTS

// GET

// GETS PROFILE
app.get("/api/profile/:id", userController.profile);
// GETS ALL POSTS
app.get("/api/posts", postController.getPosts);
// GETS SINGLE POST
app.get("/api/getpost/:id", postController.getPost);
// GETS ALL POSTS BY SINGLE USER
app.get("/api/userposts/:userid", postController.getUsersPosts);
// GETS COMMENTS FOR POST
app.get("/api/comments/:id", postController.getComments);
//GET ALL CATEGORIES
app.get("/api/categories", postController.getCategories);
// GETS ALL POSTS BY CATEGORY
app.get("/api/category/:id", postController.getAllPostCategory);
//GETS USERS INTERESTS
app.get("/api/interests/:userid", userController.getUserInterests);
// GETS FOLLOWING
app.get("/api/following/:id", userController.getFollowing);
// GETS FOLLOWERS
app.get("/api/followers/:id", userController.getFollowers);
//GETS USER READING LIST
app.get("/api/readinglist/:userid", userController.getReadingList);
app.get("/api/featured", postController.getFeaturedPosts);
// CHECKS FOR A USER ON SESSION
app.get("/api/user", (req, res, next) => {
  if (req.session.user) {
    app
      .get("db")
      .getUser([req.session.user.authid])
      .then(response => {
        res.status(200).send(response);
      });
  } else {
    res.status(400).send("No user found");
  }
});

// POST

// ADDS POSTS
app.post("/api/addpost", postController.addPost);
// LETS USER FOLLOW ANTOHER USER
app.post("/api/follow/add", userController.follow);
// ADDS COMMENT
app.post("/api/addcomment", postController.addComment);
// ADD USER INTEREST
app.post("/api/userinterest", userController.addUserInterest);

// POST USER CLAPS

app.post("/api/userclap", postController.addUserClap);

// ADDS POST TO USER'S READING LIST
app.post("/api/addreadinglist", userController.addToReadingList);

// PUT

// EDITS POST
app.put("/api/editpost", postController.editPost);
app.put("/api/editbio", userController.editBio);

// ADD CLAPS TO POST RATING
app.put("/api/clap/:id", postController.addClap);

//ADD CLAPS TO COMMENTS
app.put("/api/commentClap/:id", postController.addCommentClap);
// DELETE

// DELETES POST
app.delete("/api/delete/:id", postController.deletePost);
//REMOVES POST FROM USER'S READING LIST
app.delete(
  "/api/readinglist/remove/:userid/:readinglistid",
  userController.deleteFromReadingList
);
// REMOVES CATEGORY FROM USER'S INTERESTS
app.delete(
  "/api/userinterest/:userid/:category",
  userController.removeUserInterest
);
// UNFOLLOWS USER
app.delete("/api/unfollow/:id", userController.unfollow);

// AUTHENTICATION
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/me",
    failureRedirect: "/login",
    failureFlash: true
  })
);

app.get("/me", function (req, res, next) {
  if (!req.user.id) {
    res.redirect("/login");
  } else {
    app
      .get("db")
      .getUser([req.user.id])
      .then(response => {
        if (!response[0]) {
          if (req.user.hasOwnProperty("displayName") === false) {
            app
              .get("db")
              .addUser([
                req.user.id,
                req.user.name.givenName,
                req.user.name.familyName,
                req.user.picture
              ])
              .then(response => {
                req.session.user = {
                  userid: response[0].id,
                  authid: response[0].authid
                };
                res.redirect("http://localhost:3000");
              });
          } else {
            let name = req.user.displayName;
            let split = req.user.displayName.split(" ");
            let firstname = split[0];
            let lastname = split[1];

            app
              .get("db")
              .addUser([req.user.id, firstname, lastname, req.user.picture])
              .then(response => {
                req.session.user = {
                  userid: response[0].id,
                  authid: response[0].authid
                };
                res.redirect("http://localhost:3000");
              });
          }
        } else {
          req.session.user = {
            userid: response[0].id,
            authid: response[0].authid
          };
          res.redirect("http://localhost:3000");
        }
      });
  }
});

app.get("/api/logout", (req, res, next) => {
  req.session.destroy();
  next();
  res.status(200);
});

// SERVER LISTENING

app.listen(port, () => {
  console.log(`Currently listening on port #${port}`);
});
