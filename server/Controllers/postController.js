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

  // WILL RETRIEVE SINGLE POST

  getPost: function (req, res, next) {
    const db = req.app.get("db");

    db
      .getPost([req.params.id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },

  // WILL RETRIEVE POSTS FROM CORRESPONDING CATEGORY
  getAllPostCategory: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getPostCategory([req.params.id])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },

  getCategories: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getCategories()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },

  getComments: function(req, res, next) {
    const db = req.app.get("db");
    db
      .getComments([req.params.id])
      .then(response => {
        res.status(200).send(response);
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
  },

  addComment: function(req, res, next) {
    const db = req.app.get("db");

    db
      .addComment(req.body.id, req.body.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  }
};
