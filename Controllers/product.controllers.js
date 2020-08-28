var db=require("../db");
var express=require("express");
var router=express.Router();
module.exports.showproduct=function(req,res){
    var page=parseInt(req.query.page)||1;
    var perpage=8;
    var start=(page-1)*perpage;
    var end=page*perpage;
    res.render('views/products/products', { products: db.get("products").value().slice(start,end) });
}
