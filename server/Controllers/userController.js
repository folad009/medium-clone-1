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
  }
};
