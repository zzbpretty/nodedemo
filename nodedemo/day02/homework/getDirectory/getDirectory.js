var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        return
    }
    fs.readdir("../../../day02",(err,data)=>{
        for(let i=0;i<data.length;i++){
            fs.stat("../../../day02/"+data[i],(err,stats)=>{
                if(stats.isDirectory()){
                    console.log(data[i])
                }
            })
        }
        res.end();

    })
}).listen(3000,function(){
    console.log("running")
})

/*
let 
块级作用域 不能重复定义 暂时性死区
const 常量(不可更改)
*/