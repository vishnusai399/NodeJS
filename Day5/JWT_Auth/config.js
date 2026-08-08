const mongoose=require('mongoose')

const connectDB=async(req,res)=>{
    try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('connected to DB')

    }
    catch(err){
    console.log(err)
    }
}
module.exports=connectDB