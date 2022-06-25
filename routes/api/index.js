const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/user', userRoutes);
router.use('/comments', commentRoutes);

module.exports = router;