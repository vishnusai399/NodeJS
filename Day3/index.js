const express=require('express')
const app=express()
const PORT=8000
const users=require('./MOCK_DATA.json')
const fs= require('fs')

//Routes
// app.get('/users',(req,res)=>{
//     const html=`
//     <ul>
//         ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
//     </ul>
//     `
//     res.send(html)
// })

//middleware

app.use(express.urlencoded({extended:false}))


//Rest apis

app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.route('/api/users/:id').get((req,res)=>{
    const id=Number(req.params.id)
    const user=users.find((user)=>user.id===id)
    if(!user){
        return res.status(404).json({message:'no user found'})
    }
    return res.json(user)

})
.patch((req, res) => {
    const id = Number(req.params.id)
    const index = users.findIndex((user) => user.id === id)

    if (index === -1) {
        return res.status(404).json({ message: 'no user found' })
    }

    const body = req.body

    users[index] = { ...users[index], ...body }

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error updating user' })
        }
        return res.json({ status: 'success', user: users[index] })
    })
})
.delete((req,res)=>{
    const id=Number(req.params.id)
    const index=users.findIndex((user)=>user.id===id)
    if (index===-1){
        return res.status(404).json({message:'no user found'})
    }
    users.splice(index,1)
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {    
        if (err) {
            return res.status(500).json({ message: 'Error deleting user' })
        }
        return res.json({ status: 'success' })
    });
})
app.post('/api/users/',(req,res)=>{
    const body=req.body
    users.push({...body,id:users.length+1})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:'success',id:users.length})

    })
})


app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})