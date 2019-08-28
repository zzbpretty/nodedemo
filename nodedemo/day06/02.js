var express = require("express");
var app = express();

var db = require("./db.js")
app.get("/add",(req,res)=>{
    db.add("test",{"username":req.query.username},(err,data)=>{
        if(err){
            throw err;
        }
        res.send(data)
    })
})

// app.get("/del",(req,res)=>{
//     db.del("test",{"username":"zzb"},(err,data)=>{
//         if(err){
//             throw err;
//         }
//         res.send(data)
//     })
// })

// app.get("/update",(req,res)=>{
//     db.update("test",{"username":"zzb"},{$set:{"username":"zmr"}},(err,data)=>{
//         if(err){
//             throw err;
//         }
//         res.send(data)
//     })
// })

// app.get("/find",(req,res)=>{
//     db.find("test",{},(err,data)=>{
//         if(err){
//             throw err;
//         }
//         res.send(data)
//     })
// })

app.listen(3000,()=>{
    console.log("running...")
})