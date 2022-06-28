const{Schema, model} = require('mongoose');
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

const Reaction = model('Reaction', ReactionsSchema);

module.exports = Reaction;