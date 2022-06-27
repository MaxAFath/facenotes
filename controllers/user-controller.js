const {User, Thought, Reaction} = require('../models');

const UserController ={
    getAllUsers(req, res){
        User.find({})
    },
    
}