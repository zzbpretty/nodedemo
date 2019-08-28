//  接口编写文件
var express = require("express");
var router = express.Router();
router.get("/login",(req,res)=>{
    //数据库存放的内容
    var data={
        username:"admin",
        password:123
    }
    //数据库返回的内容
    var data1 = {};
    if(req.query.username==data.username&&req.query.password==data.password){
        res.end("success")
    }
    else{
        res.end("err")
    }

})
// module.exports={
//     router:router
// }
exports.router = router;