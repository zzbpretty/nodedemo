// NODE =》nodedemo =》 day01 =》 01.js
//http 模块
//require 加载 引入 加载 http模块  服务模块
var http = require("http");  //创建服务器
http.createServer(function(req,res){
    //req = request  请求
    //res = response 结束响应
    // res.end((1+2+3+4+5).toString())
    //解决中文乱码
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
    res.end("我爱中国")
}).listen(3000);  //listen 监听端口