const express=require('express')
const router=express.Router()
const User=require('../models/user')

router.get('/',async(req,res)=>{
    try{
        const users=await User.find()
        return res.status(200).json(users)
        console.log(users)
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
})
router.get('/:id',async(req,res)=>{
    try{
    const user=await User.findById(req.params.id)
    if(!user){
        return res.status(404).json({message:'user not found'})
    }
    return res.status(200).json(user)}
    catch(err){
        return res.status(500).json({message:err.message})
    }
})


router.put('/:id',async(req,res)=>{
    try{
    const user=await User.findByIdAndUpdate(req.params.id,req,body,{new:true,runValidators:true})
    if(!user){
        return res.status(404).json({message:'user not found'})
    }
    return res.status(200).json(user)}
    catch(err){
        return res.status(500).json({message:err.message})
    }
})

router.post('/',async(req,res)=>{
    try{
        console.log(req.body)
        const user=await User.create(req.body)
        console.log(user)
        return res.status(201).json(user)
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const user=await User.findByIdAndDelete(req.params.id)
        if(!user){
        return res.status(404).json({message:"user not found"})

        }
        return res.status(200).json({message:"successfully deleted"})
    }

    catch(err){
        return res.status(500).json({message:err.message})
    }
})

module.exports=router