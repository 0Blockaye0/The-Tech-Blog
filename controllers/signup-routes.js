const router = require('express').Router();
// const { Post, User, Comment } = require('../models');




router.get("/", (req, res) => {
    res.render("signup");
})
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
//   });

router.get



module.exports = router;