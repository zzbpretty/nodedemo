var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url == "/favicon.ico"){
        return;
    }
    var obj = url.parse(req.url,true).query;
    fs.writeFile("ziliao.txt","username:"+obj.username+"password:"+obj.password,{"flag":"a"},(err,data)=>{
        if(err){
            throw err;
        }
    })
    fs.readFile("denglu.html",(err,data)=>{
        res.end(data)
    })
}).listen(3100,function(){
    console.log("running");
})