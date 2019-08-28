//ejs  art-template
var express = require("express");
var ejs = require("ejs");
var path = require("path")
var app = express();
//set 设置  engine引擎
app.set("views",path.join(__dirname,"/view"))
app.set("view engine","ejs")

app.get("/",(req,res)=>{
    var list = ["首页","新闻","关于"];
    res.render("index.ejs",{
        list:list
    })
})

app.listen(3000,()=>{
    console.log("running...")
})
