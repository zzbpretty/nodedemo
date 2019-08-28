var http = require("http");
var fs = require("fs"); // file system 文件系统 作用：操作文件
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});  //响应头
    if(req.url == "/"){
        var ns = fs.readFile("kobe.html",function(err,data){
            if(err){
                return;
            }
            res.end(data);
        })
    }
    else if(req.url != "/"){
        var surl = "."+req.url;
        var type = surl.substr(surl.lastIndexOf(".")+1,surl.length)  
        res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
        var ns = fs.readFile(surl,function(err,data){
            if(err){
                console.log(err);
                return;
            }
            res.end(data);
        })
    }
}).listen(4000,function(){
    console.log("listen挂起")
})