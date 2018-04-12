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
  profile: function(req, res, next) {
    const db = req.app.get("db");

    db
      .profile([req.params.id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
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
  getFollowers: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getFollowers([req.params.id])
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

  unfollow: function(req, res, next) {
    const db = req.app.get("db");

    db
      .unfollowUser(req.params.followerid, req.params.followedid)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  editBio: function(req, res, next) {
    const db = req.app.get("db");

    db
      .editBio([req.body.id, req.body.bio])
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
      .addToReadingList([req.body.userid, req.body.id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  addUserInterest: (req, res, next) => {
    const { body } = req;
    console.log("add body", body);

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
    const { params } = req;
    console.log("remove params", params);
    req.app
      .get("db")
      .removeUserInterest([params.userid, params.category])
      .then(response => {
        req.app
          .get("db")
          .userInterests(params.userid)
          .then(response => res.status(200).send(response))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  },
  deleteFromReadingList: function(req, res, next) {
    const db = req.app.get("db");

    db
      .removeFromReadingList([req.params.userid, req.params.postid])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  getUserClaps: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getUserClaps([req.params.id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  }
};
