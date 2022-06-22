const {schema, model, Schema} = require('mongoose');

const UserSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: 'Your name is required'
    },

    
})