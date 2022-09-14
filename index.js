const fs = require("fs");

const http = require("http");

fs.writeFile("index.html","<h1>Hello World</h1>\n<p>This is {Your name eg. Anand kumar,etc.}...</p>",(err)=>{
    console.log(err);
});
const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"text/html"});
    fs.readFile("index.html",(err,data)=>{
        res.end(data);
    });
})
server.listen(5000,()=>console.log("server is at 5000"));