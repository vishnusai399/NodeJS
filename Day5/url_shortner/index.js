const express=require('express')
const app=express()
const PORT=8000
const connectDB=require('./config')
require('dotenv').config()
const router=require('./routes/urlRoutes')



connectDB()
app.use(express.json())

app.use('/api/',router)

app.listen(PORT, ()=>{
    console.log('server started')
})