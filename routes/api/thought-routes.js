const router = require('express').Router();
const{
    addthought,
    removeReply,
    addReply,
    removeThought
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

router.route(':/thoughtId').post(addthought);

router
    .route('/:thoughtId/:reactionId')
    .put(addReply)
    .delete(removeThought);

router.route('/:thoughtId/:reactionId/:replyId').delete(removeReply);

module.exports = router;