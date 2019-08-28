/*
  art-template  模板引擎
  定义： javaScript的轻量型的模板引擎

  特点：语法简单  易上手

  语法：
  原始语法
  <%%>
  标准语法
  {{}}  插值表达式

*/

var http = require("http");
var art = require("art-template");
var fs = require("fs");
http.createServer((req,res)=>{
    var list = ["首页","新闻","关于"];
    fs.readFile("../day04/index.ejs/list.art",(err,data)=>{
        var template = data.toString();
        var str= art.render(template,{list:list})

        res.end(str);
    })
}).listen(3000,function(){
    console.log("running...")
})