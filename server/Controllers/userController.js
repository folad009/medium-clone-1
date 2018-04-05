module.exports = {
  // WILL CHECK FOR A USER ON SESSION
  getUser: function(req, res, next) {
    const db = req.app.get("db");

    if (req.session.user) {
      db.getUser().then(response => {
        res.status(200).send(response);
      });
    } else {
      res.status(400).send("No user found");
    }
  },
  getUserInterests: function(req, res, next) {
    const db = req.app.get("db");

    db
      .userInterests([req.params.userid])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  getFollowing: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getFollowing([req.params.id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  follow: function(req, res, next) {
    const db = req.app.get("db");

    db
      .follow(req.body.followerID, req.body.followedID)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },

  getReadingList: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getReadingList([req.params.userid])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },

  addToReadingList: function(req, res, next) {
    const db = req.app.get("db");

    db
      .addToReadingList([req.body.userid, req.body.postid])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  addUserInterest: (req, res, next) => {
    const { body } = req;
    req.app
      .get("db")
      .addUserInterest([body.userid, body.category])
      .then(response => {
        req.app
          .get("db")
          .userInterests(body.userid)
          .then(response => res.status(200).send(response));
      })
      .catch(err => console.log(err));
  },
  removeUserInterest: (req, res, next) => {
    const { body } = req;
    console.log(body);
    req.app
      .get("db")
      .removeUserInterest([body.userid, body.category])
      .then(response => {
        req.app
          .get("db")
          .userInterests(body.userid)
          .then(response => res.status(200).send(response))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  },
  deleteFromReadingList: function(req, res, next) {
    const db = req.app.get("db");

    db
      .removeFromReadingList([req.params.readinglistid, req.params.userid])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  }
};
