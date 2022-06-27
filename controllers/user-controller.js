const {User, Thought, Reaction} = require('../models');

const userController ={
    getAllUsers(req, res){
        User.find({})
         .populate({
            path:'comments',
            select: '-__v'
         })
         .selct('-__v')
         .sort({_id:-1})
         .then(dbFaceData => res.json(dbFaceData))
         .catch(err =>{
            console.log(err);
            res.sendStatus(400);
         });
    },

    getUserById({params}, res){
        User.findOne({_id: params.id})
        .populate({
            path:'comments',
            select: '-__v'
         })
         .selct('-__v')
         .sort({_id:-1})
         .then(dbFaceData => res.json(dbFaceData))
         .catch(err =>{
            console.log(err);
            res.sendStatus(400);
         });
    },

    createUser({body}, res){
        User.create(body)
         .then(dbFaceData => res.json(dbFaceData))
         .catch(err =>{
            console.log(err);
            res.sendStatus(400);
         });
    },

    updateUser({ params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators:true})
         .then(dbFaceData =>{
            if(!dbFaceData){
                res.status(400).json({message:'No user found with this ID'})
                return;
            }
            res.json(dbFaceData);
         })
         .catch(err => res.json(err));
    },

    deleteUser({params}, res){
        User.findOneAndDelete({_id: params.id})
         .then(dbFaceData => res.json(dbFaceData))
         .catch(err => res.json(err));
    }
    
};

module.exports = userController;