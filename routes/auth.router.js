var express=require('express')
var router=express.Router()
var db = require('../db')
var controller=require("../Controllers/auth.controllers")

router.get("/login",controller.login)
router.post('/login',controller.post_login)
module.exports=router;