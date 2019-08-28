var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        return;
    }
    //创建文件夹  mkdir
    //删除文件夹  rmdir
    //读取文件夹  readdir
    //判断是否是文件夹  exists
    //判断是文件夹还是文件  stat

    // fs.mkdir("aa",(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end("success")
    // })

    // fs.rmdir("aa",(err)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end("success")
    // })

    // fs.readdir("../day02",(err,data)=>{
    //     if(err){
    //         throw err;
    //     }
    //     res.end(data.toString())
    // })
    
    // fs.exists("homework",(exists)=>{
    //     if(exists){
    //     console.log("文件夹已存在")
    //     res.end("go1")
    // }
    //     else{
    //         fs.mkdir("aa",(err)=>{
    //             res.end("success")
    //         })
    //     }
    // })


  
    fs.stat("../day02/02.js",(err,stats)=>{
        //console.log(stats.isDirectory)
        console.log(stats.isFile())
        res.end("success");
    })
   

}).listen(3000,function(){
    console.log("running")
})