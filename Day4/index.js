const express=require('express')
const app=express()
const PORT=8000
const connectDB=require('./config')
const userRoutes=require('./routes/userRoutes')

require('dotenv').config();
app.use(express.json())
connectDB()
app.use('/api/users',userRoutes)
app.listen(PORT,()=>console.log('server started'))