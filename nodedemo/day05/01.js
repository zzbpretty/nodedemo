var express = require("express");
var app =express();
var router = require("./router.js")

app.use(router.router);

app.listen(3000,()=>{
    console.log("running...")
})