module.exports = {
  // WILL CHECK FOR A USER ON SESSION
  getUser: function(req, res, next) {
    const db = req.app.get("db");
    console.log(req.session.user);
    if (req.session.user) {
      db.getUser().then(response => {
        res.status(200).send(response);
      });
    } else {
      res.status(400).send("No user found");
    }
  }
};
