const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const thoughtRoutes = require('./thought-routes.js');


router.use('/users', userRoutes);
router.use('throughts', thoughtRoutes);

module.exports = router;