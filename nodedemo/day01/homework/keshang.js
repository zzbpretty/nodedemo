var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    var url = req.url;
    if(url == "/favicon.ico"){
        return;
    }
    else if(url == "/"){
        res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
        res.end("首页")
    }
    else if(url == "/red"){   // /red 路由
        res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
        fs.readFile("red.html",function(err,data){
            res.end(data);
        })
    }
    else if(url == "/red.css"){
        res.writeHead(200,{"Content-type":"text/css"})
        fs.readFile("red.css",function(err,data){
            res.end(data);
        })
    }
    else if(url == "/11.jpeg"){
        res.writeHead(200,{"Content-type":"image/jpg"})
        fs.readFile("11.jpeg",function(err,data){
            res.end(data);
        })
    }
}).listen(5000,function(){
    console.log("running")
})