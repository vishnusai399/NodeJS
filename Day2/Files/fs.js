const fs=require('fs')
const os=require('os')

// console.log(2)
// console.log(3)
// fs.writeFileSync('./test.txt','hi this is ksnfdk')
// console.log(4)

// console.log(2)
// console.log(3)

// fs.writeFile('./test.txt','hello world',(err)=>{})
// console.log(4)

// const results=fs.readFileSync('./contacts.txt',"utf-8")
// console.log(results)

// fs.readFile('./contacts.txt',"utf-8",(err,results)=>{
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log(results)

//     }
// })

// fs.appendFileSync('./test.txt','hi i am nodejs')
// fs.appendFile('./test.txt','i am learning about files',(err)=>{})
// fs.unlinkSync('./contacts.txt')
// fs.copyFileSync('./test.txt','./copy.txt')

console.log(os.cpus().length)