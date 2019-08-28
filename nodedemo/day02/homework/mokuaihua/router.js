// router.js 路由
function showIndex(req,res){
    res.end("首页")
}
function showNew(req,res){
    res.end("new")
}
function showAbout(req,res){
    res.end("about")
}
// module.exports = {
//     showIndex:showIndex,
//     showNew:showNew,
//     showAbout:showAbout,
// }
exports.showIndex=showIndex;
exports.showAbout=showAbout;
exports.showNew=showNew;