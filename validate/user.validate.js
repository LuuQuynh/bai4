module.exports.postCreate=function (req, res, next) {
    
    var errors=[];
    if(!req.body.name){
      errors.push("vui lòng nhập tên")
    }
    if(!req.body.phone){
      errors.push("vui lòng nhập điện thoại")
    }
    if(errors.length){
      res.render("views/users/create",{
        errors:errors,
        values:req.body
      });
      return;
    }
   next();
}
