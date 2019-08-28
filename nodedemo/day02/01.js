var http = require("http");
http.createServer(function(req,res){
    if(req.url == "/favicon.ico"){
        return;
    }
})