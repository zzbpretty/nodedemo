var express = require("express");
var app = express();
var router = express.Router();
//引入mongodb数据库
var db = require("./db")
//使用中间件body-parser处理post请求
var bodyParser = require("body-parser");
//处理post中json请求
app.use(bodyParser.json())
//处理post中字符串请求
app.use(bodyParser.urlencoded({extended: false}))


//注册接口
router.post("/register", (req, res) => {
    var regUser = {
        username: req.body.username,
        password: req.body.password,
        createAt: new Date(),
        updateAt: new Date(),
        phone: req.body.phone,
        email: req.body.email,
        tokenId: 1
    }
    var userDate = {
        username: req.body.username,
        password: req.body.password
    }
    db.find("userData",{},(err,data)=>{
        db.find("userData",userDate,(err,result)=>{
            console.log(result)
            if(result==""){
                db.add("userData", regUser, (err, result) => {
                    if (err) {
                        throw err
                    }
                    res.send("注册成功")
                })
            }else{
                res.send("用户名已存在")
            }
        })
    })

})



//登录接口
router.get("/login", (req, res) => {
    /*
    1.接受前端传输过来的值 query
    2.根据前端的值与数据库里面的用户数据进行对比 find()
        2.1判断是否存在用户
        2.2再与数据里面的数据进行对比
        2.3一致时返回成功
    3.前端进行登陆成功的跳转
    */

    //接受前端的值
    var userDate = {
        username: req.query.username,
        password: req.query.password
    }
    //进行数据库的检索
    //先把数据库里所有数据取出
    db.find("userData", {}, (err, data) => {
        db.find("userData", userDate, (err, result) => {
           if(result == ""){
               if(data[0].username!=req.query.username){
                    res.send("无此用户")
               }
               else{
                   res.send("密码错误")
               }
           }else{
               res.send("登陆成功")
           }
        })
    })
})
//使用路由
app.use(router);
app.listen(3000)