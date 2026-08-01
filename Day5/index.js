const express=require('express')
const connectDB=require('./config')
const app=express()
const PORT=3000
const router=require('./routes/todoRoutes')

require('dotenv').config()

connectDB()
app.use(express.json())
app.use('/api/',router)

app.listen(PORT,()=>{
    console.log('server started')
})
