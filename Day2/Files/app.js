const http=require('http')
const fs=require('fs')
const url=require('url')



const myServer=http.createServer((req,res)=>{
    if (req.url==='/favicon') return res.end()
    const logs=`${Date.now()} ${req.url} new req received\n`
    fs.appendFile('./applogs.txt',logs,(err,data)=>{
        const myUrl=url.parse(req.url,true)
        console.log(myUrl)
        switch(myUrl.pathname){
            case '/':
                res.end('home page')
                break
            case '/about':
                username=myUrl.query.username
                res.end(`hi ${username}`)
                break
            case '/search':
                const search=myUrl.query.search_query
                res.end(`here are ur result ${search}`)
            default:
                res.end('404 not found')
                break
        }

        
    })
})

myServer.listen(3000,()=>{
    console.log('server started')
})