var express=require('express')
var router=express.Router()
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })


const shortid = require('shortid')

router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var db = require('../db')
var controller=require("../Controllers/user.controllers")
var validate=require("../validate/user.validate")
router.get("/",controller.index)
router.get("/search", controller.search)
router.get("/create", controller.create)
router.get("/cookie", function(req,res,next){
  console.log('Cookies: ', req.cookies)
  res.cookie("user-id",12345);
  res.send("su dung cokkie")

})
  
router.get("/:id", controller.create_id)
router.post("/create",
  upload.single('avatar'),
  validate.postCreate, 
  controller.post_create)
  module.exports=router;