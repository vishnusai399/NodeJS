const {createHandler,getAllHandler,getHandler,updateHandler,deleteHandler}= require('../controllers/todoController')
const express=require('express')
const router=express.Router()

router.get('/todo',getAllHandler)
router.get('/todo/:id',getHandler)
router.post('/todo',createHandler)
router.put('/todo/:id',updateHandler)
router.delete('/todo/:id',deleteHandler)

module.exports=router

