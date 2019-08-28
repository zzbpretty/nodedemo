var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        return;
    }
    // rename 改名
    fs.rename("text2.txt","textg.txt",(err,data)=>{
        if(err){
            throw err;
        }
        res.end("success");
    })
    // unlink 删除
    fs.unlink("textg.txt",(err,data)=>{
        if(err){
            throw err;
        }
        res.end("success")
    })

}).listen(3000,function(){
    console.log("running")
})