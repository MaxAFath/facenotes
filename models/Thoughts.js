const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
    reactions: {
        type: Array
    }
},
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = { Thoughts };