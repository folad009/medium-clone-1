// REQUIRING DEPENDENCIES
require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");

// PORT

const port = 3005;

// CREATING INSTANCE OF EXPRESS SERVER

const app = express();
app.use(json());
app.use(cors());

// CONNECTING TO HEROKU DATABSE
massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("dbInstance", db);
  })
  .catch(console.log({ message: "Connection to database failed" }));

// CREATING A SESSION

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }
  })
);

// SERVER LISTENING

app.listen(port => {
  console.log(`Currently listening on port #${port}`);
});
