var db=require("../db")

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
    console.log(user);
    if(!user){
        res.render("views/auth/login",{
            errors:['user does not exit']
        });
    
        return;
    }
    if(user.password !==password){
        res.render("views/auth/login",
        {errors:[
            'wrong password'
        ]
    });
        return;

    }
    res.redirect('/views/users');
}