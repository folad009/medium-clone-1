module.exports = {
  // WILL RETRIEVE ALL POSTS
  getPosts: function (req, res, next) {
    const db = req.app.get("db");

    db
      .getPosts()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(res.status(400));
  },

  // WILL ADD POST TO POST TABLE

  addPost: function (req, res, next) {
    const db = req.app.get("db");

    console.log(req.body)
    if (req.body.categories === "") {
      req.body.categories = null;
    }
    db
      .addPost(req.body.title, req.body.body, req.body.categories)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  }
};
