let categories = {
  art: 1,
  food: 2,
  music: 3,
  sports: 4,
  crime: 5,
  business: 6,
  technology: 7,
  space: 8,
  health: 9,
  fitness: 10,
  politics: 11
};

module.exports = {
  // WILL RETRIEVE ALL POSTS
  getPosts: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getPosts()
      .then(response => {
        res.status(200).json(response);
      })
      .catch(res.status(400));
  },

  // WILL RETRIEVE SINGLE POST

  getPost: function(req, res, next) {
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

  getUsersPosts: function(req, res, next) {
    const db = req.app.get("db");

    db
      .getPostsByUser([req.params.userid])
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

  getUserClapsOnComments(req, res) {},
  getFeaturedPosts(req, res, next) {
    req.app
      .get("db")
      .getFeaturedArticles()
      .then(response => res.status(200).json(response))
      .catch(response => res.status(400));
  },
  // WILL ADD POST TO POST TABLE

  addPost: function(req, res, next) {
    const db = req.app.get("db");
    let split = req.body.categories.split(",");
    function sortcat(postid, arr) {
      for (let i = 0; i < split.length; i++) {
        for (let cat in categories) {
          if (cat === arr[i]) {
            db.addPostCategory([postid, categories[cat]]);
          }
        }
      }
    }
    if (req.body.categories === "") {
      req.body.categories = null;
    }
    db
      .addPost([
        req.session.user.userid,
        req.body.title,
        req.body.body,
        req.body.categories,
        req.body.img
      ])
      .then(response => {
        sortcat(response[0].id, split);
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  editPost: function(req, res, next) {
    const db = req.app.get("db");

    db
      .editPost([req.body.id, req.body.title, req.body.body])
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },
  //CHANGE CLAP RATING
  addClap: function(req, res) {
    const db = req.app.get("db");

    db
      .addClap([req.body.claps, req.params.id])
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(err));
  },

  addComment: function(req, res, next) {
    const db = req.app.get("db");
    db
      .addComment(req.session.user.userid, req.body.id, req.body.body)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  },

  addCommentClap: function(req, res) {
    const db = req.app.get("db");

    db
      .addCommentClap([req.body.claps, req.params.id, req.body.postid])
      .then(r => {
        console.log(r);
        res.status(200).send(r);
      })
      .catch(err => res.status(500).send(err));
  },
  deletePost: function(req, res, next) {
    const db = req.app.get("db");

    db
      .deletePost(req.params.id)
      .then(response => {
        res.status(200).send(response);
      })
      .catch(res.status(400));
  }
};
