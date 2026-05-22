const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("Processing request");
    res.writeHead(200);
    res.end("Welcome to 8000");
});
server.listen('8000',()=>{});



