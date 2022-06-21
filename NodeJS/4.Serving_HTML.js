const http = require('http')
const fs = require('fs')

const fileContent = fs.readFileSync('/home/bunny/Desktop/SaxX/Full_Stack_Dev/Ecommerce/index.html')

//* This is the way to serve html files to server 
const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(fileContent)
})

server.listen(8000, '127.0.0.1', ()=>{
    console.log("Listening on port 8000")
})