var express = require("express");
var bodyParser = require("body-parser");
/*
  中间件：路由中间  第三方中间件
  body-parser     处理post请求
*/
var app = express();
//使用中间件
app.use(bodyParser.urlencoded({extended:false}));   //针对post方式处理字符串
app.use(bodyParser.json());                         //针对post方式处理json
//使用静态资源
app.use(express.static("../day04"))


app.get("/",(req,res)=>{
    res.send("首页")
})
app.get("/list",(req,res)=>{
    res.send(req.query.username)
})

app.post("/dopost",(req,res)=>{
    console.log(req.body)
    res.send("dopost"+req.body.username)
})

app.listen(3000,function(){
    console.log("running..")
})

/*
express:
1.路由路径不区分大小写
2.获取动态路由参数 通过params =》只可接受get传过来的值
3.use 使用
4.get 请求方式
5.post 请求方式
*/
