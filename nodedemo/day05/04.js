//cookie-parser
//可以存储二级域名
var express = require("express");
var cookie = require("cookie-parser")
var app = express();
app.use(cookie())
app.get("/",(req,res)=>{
    var data = res.cookie("name","tom",{maxAge:9000,httpOnly:true})
    res.end("cookie设置成功");
})
app.get("/login",(req,res)=>{
    //如何取出cookie的值？
    var data1 = req.cookies.name;
    console.log(data1)
    res.end("I get it")
})
app.listen(3000,()=>{
    console.log("running...")
})
/*
Cookie：浏览器端的本地储存  大小:4k
页面最多出现次数： 20
max-Age      过期时间
expires      过期时间
domain       域名
path         路径   在该路径下才可以访问当前缓存
httpOnly     设置https或http
secure       安全设置
*/