var express=require('express')
var router=express.Router()
var db=require("../db");
var controller=require("../Controllers/cart.controllers");
router.get('/add/productId',controller.addtoCart);
module.exports=router;