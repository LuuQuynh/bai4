var db=require("../db")
var md5 = require('md5');

module.exports.login=function (req, res) {
    res.render("views/auth/login")}
module.exports.post_login=function(req,res){
    // console.log(req)
    var email=req.body.email;
    var password=req.body.password;
    var user = db
    .get("users")
    .find(function (user) {
      return user.email ===email ;// viết thêm vào đây bằng số bằng chữ
    })
    .value();
    
    if(!user){
        res.render("views/auth/login",{
            errors:['user does not exit'],values:req.body
        });
    
        return;
    }
    var hask=md5(password);
    if(user.password !==hask){
        res.render("views/auth/login",
        {errors:[
            'wrong password'
        ],values:req.body
    });
        return;

    }
    res.cookie("userID",user.id,{signed:true});
    res.redirect('/views/users');
}