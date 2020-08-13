var db=require("../db");
module.exports.requireAuth=function(req,res,next){
  
    if(! req.signedCookies.userID){
        res.redirect('auth/login');
        return;
    }
    var user = db
    .get("users")
    .find(function (user) {
      return user.id ===req.signedCookies.userID ;
    })
    .value();
    
    console.log(user);
    if(!user){
        res.redirect('auth/login');
    }
    res.locals.user=user;
    next();
}