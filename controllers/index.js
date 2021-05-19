const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const addpostRoutes = require('./addpost-routes');

// router.use('/addpost', addpostRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/addPost', addpostRoutes);
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;