/* 1.实现登录注册功能

客户端=>前端
<form>
    submit=> username password
</form>
服务端=》后端


假设一个数据库
username=admin password=123

数据库 mysql mongodb
*/
var http = require("http");
var url = require("url");
var fs = require("fs");
http.createServer((req,res)=>{
    var data =[{
        "username":"admin",
        "password":123
    },{
        "username":"super",
        "password":456
    },{
        "username":"tom",
        "password":123
    }]
    var userInfo = url.parse(req.url,true).query;
    var index = 0;
    for(let i = 0;i<data.length;i++){
        if(userInfo.username==data[i].username&&userInfo.password==data[i].password){
            index++;
        }
    }
    if(index==1){
        res.end("success")
    }else{
        res.end("fail")
    }
 
   
}).listen(3000,function(){
    console.log("running")
})