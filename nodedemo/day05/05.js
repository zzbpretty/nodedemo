//session
var express = require("express");
var session = require("express-session");
var app = express();
app.use(session({
    name:"bin",                   //session 的名称  默认为connect_id
    secret:"bin",                 //签名 防止信息被篡改
    resave:false,                 //强制保存为session值
    cookie:("name","value",{maxAge:90000,httpOnly:true}),
    saveUninitialized:true        //初始化
}))

app.get("/set",(req,res)=>{
    req.session.username = "ttt";
    res.send();
})

app.get("/get",(req,res)=>{
    if(req.session.username == "ttt"){
        res.send("欢迎"+req.session.username+"光顾")
    }else{
        res.end("gg")
    }
})

app.listen(3000,()=>{
    console.log("running...")
})