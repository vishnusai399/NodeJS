const express=require('express')
const app=express()
const PORT=3000


//routes 
app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.get('/users',(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`
    return res.json(html)
})


app.get('/api/users/:id',(req,res)=>{
    const id=req.query.params
    const user=users.find((user)=>user.id===id)
    return res.json(user)
})



app.listen(PORT,()=>{
    console.log('server started')
})