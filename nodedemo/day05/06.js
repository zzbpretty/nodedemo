/*
  跨域解决方式：
*/
var express = require("express");
var app = express();
app.all("*",(req,res,next)=>{
    //允许所有域名进行访问
    res.header("Access-Control-Allow-origin","*")
    //定义内容类型
    res.header("Access-Control-Allow-Content","content-type")
    //定义允许跨域访问的请求方式
    res.header("Access-Control-Allow-Method","GET","POST","PUT","PATCH","DELETE","OPTIONS")
    //继续执行
    next();
})