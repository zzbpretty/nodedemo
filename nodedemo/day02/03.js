var http = require("http");
var url = require("url");
console.log(url.parse("1"))
var obj = url.resolve("http://127.0.0.1:3000/a/d","/b/c")
console.log(obj)
var object= url.format({  
  protocol: null,
  slashes: null,
  auth: null,
  host: "http://127.0.0.1:3000",
  port: "3000",
  hostname: "http://127.0.0.1",
  hash: null,
  search: '?username=1919',
  query: 'username=1919',
  pathname: '/',
  path: '/?username=1919',
  href: '/?username=1919' 
})
console.log(object)