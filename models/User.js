const {schema, model, Schema} = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: String,
        trim: true,
        unique:true,
        required: 'Your name is required'
    },
    email:{
        type: String,
        required: 'email is required',
        unique:true,

    },
    thoughts:{

    },
    friends:{
        //type:
    }

})