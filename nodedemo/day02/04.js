var http = require("http");
var url =require("url");
http.createServer((req,res)=>{
    var obj=url.resolve("http://127.0.0.1:3000","/red")
    // obj = http://127.0.0.1:3000/red
}).listen(3000);