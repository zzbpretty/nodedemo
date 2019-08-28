var http = require("http");
var url = require("url")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
    if(req.url == "/favicon.ico"){
        return;
    } 
    var obj = url.parse(req.url,true).query;  //true代表转化为对象   url.parse()相当于js里的window.location   
    console.log(url.parse(req.url));
    res.end("接收前端传输过的用户名为:"+obj.username)
}).listen(3000,function(){
    console.log("running")
})



//window.location    search=>? hash=># url=>port host(主机)=>hostname(主机名)
//url里面常用的方法： 
//1.parse   url.parse("http://127.0.0.1")  作用：解析url地址，返回一个对象 
//          url.parse(req.url) 按照字符串格式去解析  url.parse(req.url,true) 按照对象格式去解析
//          
//  1)protocol  端口域
//  2)slashes
//  3)auth     权限
//  4)host     主机
//  5)port     端口
//  6)hostname 主机名
//  7)hash     #后面的值
//  8)search   ?后面的值(包含？)
//  9)query    获取get方式传输过来的字符串
//  10)path    完整路径
//  11)pathname /路径
//  12)href    页面跳转路径

//2.resolve    拼接   作用：对地址进行字符串拼接 
//             第一个参数为主内容 第二个参数的路由会替换当前路径的一级路由

//3.format    格式化  作用：把对象格式成一个字符串