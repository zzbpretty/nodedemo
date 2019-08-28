//fs
var http = require("http");
var fs = require("fs");
http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        return;
    }
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    //读文件 readFile(url,[option],callback)   异步
    //     readFileSync()  同步
    fs.readFile("text.txt",(err,data)=>{
        res.end(data);
    })

    //写文件 writeFile(url,data,[option],callback)
    //option: flag a(append) r(read) w(write)
    fs.writeFile("text1.txt","我是你爸爸",{"flag":"a"},(err,data)=>{
        if(err){
            throw err;
        }
        res.end("success");
    })

}).listen(3000,function(){
    console.log("running")
})