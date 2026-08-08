const express=require('express')
const connectDB = require('./config')
const router = require('./routes/userRoutes')
const app=express()
const PORT=8000 

require('dotenv').config()



connectDB()

app.use(express.json())

app.use('/',router)

app.listen(PORT,()=>
    console.log('server started')
)