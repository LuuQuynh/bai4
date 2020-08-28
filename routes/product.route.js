var express=require ("express");
var router=express.Router();

var db=require("../db");
var controller=require("../Controllers/product.controllers");
router.get('/',controller.showproduct);
module.exports=router;