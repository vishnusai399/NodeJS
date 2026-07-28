const http=require('http')
const fs=require('fs')
const url=require('url')

const myServer= http.createServer((req,res)=>{
    if (req.url==='/favicon.ico') return res.end()
    const log=`${Date.now()},${req.url} new req received\n`
    const myUrl=url.parse(req.url,true) 
    console.log(myUrl)
    fs.appendFile('./log.txt',log,(err,data)=>{
        switch(myUrl.pathname){
            case '/':
                res.end('home page')
                break
            case '/about':
                const username=myUrl.query.myname
                res.end(`hi , ${username}`)
                break 
            case '/search':
                const search=myUrl.query.search_query
                res.end('here are ur results'+ search)
            default:
                res.end('404 not found')
                break
        }
        
    })
})

myServer.listen(8000,()=>{
    console.log('server started')
})