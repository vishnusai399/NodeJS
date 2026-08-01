const Todo = require('../models/todo')
const todoSChema=require('../models/todo')
const express=require('express')
const router=express.Router()

const createHandler=async(req,res)=>{
    const list=await Todo.create(req.body)
    try{
        return res.status(201).json({message:'created successfully',data:list})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }

}

const getAllHandler=async(req,res)=>{
    const list=await Todo.find()
    if(!list){
        return res.status(404).json({message:'todo list not found'})
    }
    try{
        return res.status(200).json({message:'fetched successfully',data:list})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }

}
const getHandler=async(req,res)=>{
    const list=await Todo.findById(req.params.id)
    if(!list){
        return res.status(404).json({message:'todo list not found'})
    }
    try{
        return res.status(200).json({message:'fetched successfully',data:list})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }

}
const deleteHandler=async(req,res)=>{
    const list=await Todo.findByIdAndDelete(req.params.id)
    try{
        return res.status(200).json({message:'deleted successfully'})
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }

}
const updateHandler=async(req,res)=>{
    const list=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})

    
    try{
        return res.status(200).json(list)
    }
    catch(err){
        return res.status(500).json({message:err.message})
    }

}

module.exports={createHandler,getAllHandler,getHandler,updateHandler,deleteHandler}
