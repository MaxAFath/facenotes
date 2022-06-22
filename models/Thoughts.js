const {Schema, model} = require('mongoose');

const ThoughtsSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: 'Your thought is required'
    },
    Thought:{
        type: String,
        trim: true,
        required: ""
    }
})

module.exports = { Thoughts};