var http = require("http");
var querystring = require("querystring")  //查询字符串

var obj = querystring.parse("name=tom&age=12") //反序列化 转对象
var obj1 = querystring.stringify({"name":"tom","age":12}) //序列化 转字符串
var obj2 = querystring.escape("name='小明'")   //转码
var obj3 = querystring.unescape("name%3D'%E5%B0%8F%E6%98%8E'") //解码
console.log(obj)
console.log(obj1)
console.log(obj2)
console.log(obj3)
