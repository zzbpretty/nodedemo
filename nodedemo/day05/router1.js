var express = require("express");
var router = express.Router();

router.post("/loginpost",(req,res)=>{
    //数据库存放的内容
    var data={
        username:"admin",
        password:1234
    }
    //数据库返回的内容
    var data1 = {};
    if(req.body.username==data.username&&req.body.password==data.password){
        res.end("success")
    }
    else{
        res.end("err")
    }

})
exports.router = router;
