var http = require("http");
var ejs = require("ejs");
var fs = require("fs");
/*
  ejs  模块引擎
  定义：嵌入javascript模板引擎
  特点：

  主要方法有：render 渲染  compiler  编译  template  模板
  ejs.render(template,data)  template  模板  data  数据(必须是对象)  作用：把数据渲染进模板中
  index.ejs
  <%   %>编译
  <%=  %>输出
  <%#  %>注释
  <%_  %>去除首位空格
  <%  _%>去除首位空格
*/

http.createServer((req,res)=>{
    // var datas = {
    //     num:8
    // }
    var list = ["首页","新闻","关于"]
    fs.readFile("../day04/index.ejs/index.ejs",(err,data)=>{
        var template = data.toString();
        var str = ejs.render(template,{list:list});
        console.log({list:list})
        res.end(str)
    })

}).listen(3000,function(){
    console.log("服务器已经挂起");
})