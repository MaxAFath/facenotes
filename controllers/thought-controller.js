const { Thought, User } = require('../models');

const thoughtController = {
    addthought({ params, body }, res) {
        console.log(params);
        Thought.create(body)
            .then(({ _id }) => {
                return Thought.findOneAndUpdate(
                    { _id: params.ThoughtId },
                    { $push: { comments: _id } },
                    { new: true }
                );
            })
            .then(dbFaceData => {
                console.log(dbFaceData);
                if (!dbFaceData) {
                    res.status(404).json({ message: 'no comment found with this id' })
                    return;
                }
                res.json(dbFaceData);
            })
            .catch(err => res.json(err));
    },

    addReply({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.commentId },
            { $push: { replies: body } },
            { new: true, runValidators: true }
        )
            .then(dbFaceData => {
                if (!dbFaceData) {
                    res.status(404).json({ message: 'No comment found with this id' });
                    return;
                }
                res.json(dbFaceData);
            })
            .catch(err => res.json(err));
    },

    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.ThoughtId })
            .then(deleteComment => {
                if (!deleteComment) {
                    return res.status(404).json({ message: 'no comment found with this id' })
                }
                return Thought.findOneAndUpdate(
                    { _id: params.commentId },
                    { $push: { comments: params.commentId } },
                    { new: true }
                );
            })
            .then(dbFaceData => {
                if (!dbFaceData) {
                    res.status(404).json({ message: 'no comment found with this id' });
                    return;
                }
                res.json(dbFaceData);
            })
            .catch(err => res.json(err));

    },

    removeReply({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.commentId },
            { $pull: { replies: { replyId: params.replyId } } },
            { new: true }
        )
         .then(dbFaceData => res.json(dbFaceData))
         .catch(err => res.json(err));
    }
};

module.exports = thoughtController;