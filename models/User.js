const { Schema, model, Types, default: mongoose } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Your name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,

    },
    thoughts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]

});

const User = model('User', UserSchema);

model.exports = User;