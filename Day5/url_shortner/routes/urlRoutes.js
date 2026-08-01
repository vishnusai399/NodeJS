const express=require('express')

const router=express.Router()
const {shortHandler, getHandler,getAnalytics}=require('../controllers/urlControllers')

router.post('/url',shortHandler)
router.get('/url/:id',getHandler)
router.get('/url/analytics/:id',getAnalytics)




module.exports=router
