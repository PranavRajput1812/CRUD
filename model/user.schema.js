const mongoose = require('mongoose')

//create Schema for DB
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required :[true,'Name is required'],
        trim : true,
        maxLength : [30,'Name should be less than 30 char']
    },
    email:{
        type : String,
        required : [true,'Email is required'],
        unique : true
    },
    password : String
    
    
})

module.exports =  mongoose.model('User',UserSchema)