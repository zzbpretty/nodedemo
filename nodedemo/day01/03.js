var http = require("http");
var fs = require("fs"); // file system 文件系统 作用：操作文件
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});  //响应头
    if(req.url == "/"){
        res.end("首页");
    }else if(req.url == "/red"){
        fs.readFile("red.html",function(err,data){
            res.end(data);
        })
    }else if(req.url == "/green"){
        fs.readFile("green.html",function(err,data){
            res.end(data);
        })
    }
}).listen(3000,function(){
    console.log("listen挂起")
})