const express=require('express')
const app=express()
const fs=require('fs')
const users=require('./MOCK_DATA.json')
const PORT=3000


// app.get('/users',(req,res)=>{
//     const html=`
//     <ul>
//     ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//     </ul>`
//     return res.send(html)
// })

app.use(express.urlencoded({extended:false}))


app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.route('/api/users/:id',).get((req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((user)=>user.id===id)
    return res.json(user)

}).patch((req,res)=>{
    const id=Number(req.params.id)
    const user_index=users.findIndex((user)=>user.id===id)
    const body=req.body 
    users[user_index]={...users[user_index],...body}
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err)=>{
        if(err){
            return res.json({message:'error updating user'})
        }
        return res.json({message:'success',user:users[user_index]})
    })
})
.delete((req, res) => {
    const id = Number(req.params.id)
    const user_index = users.findIndex((user) => user.id === id)
    if (user_index === -1) {
        return res.status(404).json({ message: 'no valid user' })
    }
    users.splice(user_index, 1)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ message: 'error deleting user' })
        }
        return res.json({ message: 'success' })
    })
})



app.post('/api/users',(req,res)=>{
    const body=req.body 
    users.push({...body,id:users.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({message:'success',id:users.length})
    })
})


app.listen(3000,()=>{
    console.log('server started')
})