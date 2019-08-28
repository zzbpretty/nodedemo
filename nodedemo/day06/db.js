var mongoClient=require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017";
function ConnectDB(callback){
    //设置客户端连接地址   mongo客户端
    mongoClient.connect(url,(err,mongo)=>{
    //设置新建数据库库名
    var dbName = mongo.db("adminuser")
    //如果报错，执行的函数
    if(err){
        callback(err,null)
    }
    //未出错执行的函数
    callback(err,mongo,dbName)
    })

}
exports.add = function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).insert(json,function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close();
        })
    })
}

exports.del = function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).deleteOne(json,function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close();
        })
    })
}

exports.update = function(collectionName,json,json1,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).update(json,json1,function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close();
        })
    })
}

exports.find=function(collectionName,json,callback){
    ConnectDB(function(err,mongo,dbName){
        dbName.collection(collectionName).find(json).toArray(function(err,result){
            if(err){
                callback(err,null)
            }
            callback(err,result)
            mongo.close();
        })
    })
}