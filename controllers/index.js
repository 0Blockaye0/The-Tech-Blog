const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const addpostRoutes = require('./addpost-routes');
const signupRoutes = require('./signup-routes');


router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/addPost', addpostRoutes);
router.use('/signup', signupRoutes);
module.exports = router;