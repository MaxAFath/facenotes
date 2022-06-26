const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionsSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new objectId()
    },
    reactionBody: {
        type: String,
        required: true,
        lenght: [280]
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        defult: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    }
},
    {
        toJSON: {
            getters: true
        }
    });

const ThoughtsSchema = new Schema({
    thoughtText: {
        type: String,
        trim: true,
        required: 'Your thought is required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reactions: [ReactionsSchema]
},

    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = { Thoughts };