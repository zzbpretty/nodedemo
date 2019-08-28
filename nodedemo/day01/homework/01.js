//浏览器中的JavaScript是没有文件操作的能力的
//但是Node中的JavaScript具有文件操作的能力

//fs是file-system的简写，就是文件系统的意思
//在Node中想进行文件操作，就必须引入fs这个核心模块
//在js这个核心模块中，就提供了所有文件操作相关的API
//例如：fs.readFile就是用来读取文件的

//1.使用require方法加载fs核心模块
var fs = require("fs");
var http = require("http");
var server = http.createServer();
//2.读取文件
//   第一个参数就是要读取的文件路径
//   第二个参数就是一个回调函数
//   成功： data 数据 error null ；失败：data null error 错误对象
server.on("request",function(req,res){
   var url = req.url;
   if(url =="/"){
    res.writeHead(200,{'Content-Type':'text/html'});
    var ns = fs.readFile("red.html",function(err,data){
        if(err){
            console.log(err);
            return;
        }
        res.end(data);
    })
    }
    else if(url != "/"){
        var surl = "."+url;
        var type = surl.substr(surl.lastIndexOf(".")+1,surl.length)  
        res.writeHead(200,{'Content-type':"text/"+type});
        var ns = fs.readFile(surl,function(err,data){
            if(err){
                console.log(err);
                return;
            }
            res.end(data);
        })
    }
})
server.listen(3000,function(){
    console.log("listen挂起");
})
