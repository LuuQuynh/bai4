var db=require("../db")
var express=require('express')
var router=express.Router()
const shortid = require('shortid')
var bodyParser = require("body-parser");
var bodyParser = require("body-parser");
const { values } = require("../db");
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
module.exports.index=function (req, res) {
    res.render("views/users/index", { users: db.get("users").value() });
}
module.exports.search=function (req, res) {
    var q = req.query.q;
    var result = db
      .get("users")
      .value()
      .filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
      });
    res.render("views/users/index", {
      users: result,
    });
}
module.exports.create=function (req, res) {
    res.render("views/users/create");
 }
module.exports.create_id=function (req, res) {
    var id = req.params.id; //bỏ number đi để id nhận cả số và chữ
    console.log(typeof id);
  
    var user = db
      .get("users")
      .find(function (user) {
        return user.id === id || user.id === Number(id);// viết thêm vào đây bằng số bằng chữ
      })
      .value();
    console.log(user);
    res.render("views/users/view", {
      user: user,
    });
}
module.exports.post_create=function (req, res) {
    req.body.id=shortid.generate();
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
   db.get("users").push(req.body).write();
   res.redirect("/views/users");
}