var express = require("express");
var router=require("./router1.js")
var app =express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static("./static"))
app.use(router.router)

app.listen(3000,()=>{
    console.log("running...")
})
