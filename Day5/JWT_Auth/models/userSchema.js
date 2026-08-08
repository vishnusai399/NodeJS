const mongoose=require('mongoose')


const userDetails=new mongoose.Schema({
    email:{
        required:true,
        type:String,
        unique:true
    },
    firstName:{
        required:true,
        type:String,
    },
    lastName:{
        type:String,
    },
    password:{
        type:String,
        required:true
    }

})

module.exports=mongoose.model("User",userDetails)