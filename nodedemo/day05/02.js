var express = require("express");
var router=require("./router.js")
var app =express();
app.use(express.static("./static"))
app.use(router.router)

app.listen(3000,()=>{
    console.log("running...")
})


//postman post的工具