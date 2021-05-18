const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
// const sequelize = require("../../config/connection");
const withAuth = require("../../utils/auth");

// get all posts
router.get("/", (req, res) => {
    console.log("======================");
    Post.findAll({
      order: [["created_at", "DESC"]],
      attributes: [
        "id",
        "post_url",
        "title",
        "post_content",
        "created_at",
      ],
      include: [
        // include the Comment model here:
        {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    })
      .then((dbPostData) => res.json(dbPostData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Find posts by id param
router.get("/:id", (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id,
      },
      attributes: [
        "id",
        "post_url",
        "title",
        "post_content",
        "created_at",
      ],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
          include: {
            model: User,
            attributes: ["username"],
          },
        },
      ],
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with this id" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

// create a post
router.post("/", withAuth, (req, res) => {
    // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
    Post.create({
        title: req.body.title,
        post_content: req.body.post_content,
        post_url: req.body.post_url,
        user_id: req.session.user_id,
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
    console.log(err);
    res.status(500).json(err);
    });
});

// Update a post content by id param
router.put("/:id", withAuth, (req, res) => {
    Post.update(
      {
        post_content: req.body.post_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with this id" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});

// Delete a post by id param
router.delete("/:id", withAuth, (req, res) => {
    Post.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbPostData) => {
        if (!dbPostData) {
          res.status(404).json({ message: "No post found with this id" });
          return;
        }
        res.json(dbPostData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
});
  
module.exports = router;