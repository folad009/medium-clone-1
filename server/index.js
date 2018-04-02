// REQUIRING DEPENDENCIES
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const strategy = require(`${__dirname}/strategy`);

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

// GETS ALL POSTS
app.get("/api/getposts", postController.getPosts);
app.get("/api/getuser", (req, res, next) => {
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

// ADDS POST
app.post("/api/addpost", postController.addPost);

// PUT

// DELETE

// AUTHENTICATION
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/me",
    failureRedirect: "/login",
    failureFlash: true
  })
);

app.get("/me", function(req, res, next) {
  if (!req.user.id) {
    res.redirect("/login");
  } else {
    app
      .get("db")
      .getUser([req.user.id])
      .then(response => {
        if (!response[0]) {
          app
            .get("db")
            .addUser([
              req.user.id,
              req.user.name.givenName,
              req.user.name.familyName
            ])
            .then(response => {
              req.session.user = {
                userid: response[0].id,
                authid: response[0].authid
              };
              res.status(200).send(req.session.user);
            });

          next();
        } else {
          req.session.user = {
            userid: response[0].id,
            authid: response[0].authid
          };
          res.status(200).send(req.session.user);
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
