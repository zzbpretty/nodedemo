var express = require("express");
var app = express();
var mongoClient = require("mongodb").MongoClient;


//链接mongodb客户端
// app.get("/add",(req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         var dbName = db.db("adminuser");
//         dbName.collection("test").insert({"username":"wangjingfei"},(err)=>{
//         if(err){
//             throw err
//         }
//             res.end("插入成功")
//             db.close();

//         })
//     })
// })

// app.get("/update",(req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html;charset=utf8"})
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         var dbName = db.db("adminuser");
//         dbName.collection("test").update({"username":"wangjingfei"},{$set:{"username":"lijiyuans"}},(err)=>{
//             if(err){
//                 throw err;
//             }else{
//                 res.end("更改成功");
//                 db.close();
//             }
//         })
//     })
// })

// app.get("/del",(req,res)=>{
//     mongoClient.connect("mongodb://127.0.0.1:27017",(err,db)=>{
//         var dbName = db.db("adminuser");
//         dbName.collection("test").deleteOne({"username":"tom"},(err)=>{
//         if(err){
//             throw err
//         }else{
//             res.end("删除成功");
//             db.close();
//         }
//         })
//     })
// })





app.listen(3000,()=>{
    console.log("running...")
})