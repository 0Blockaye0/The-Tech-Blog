const router = require("express").Router();
// const sequelize = require("../config/connection");
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    res.render("add-post", { loggedIn: true });
  })
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
//   });

module.exports = router;

// addPost
