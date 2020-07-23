var express=require('express')
var router=express.Router()
const shortid = require('shortid')
var bodyParser = require("body-parser");
var bodyParser = require("body-parser");
router.use(express.json()); // for parsing application/json
router.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var db = require('../db')
var controller=require("../Controllers/user.controllers")
var validate=require("../validate/user.validate")
router.get("/",controller.index)
router.get("/search", controller.search)
router.get("/create", controller.create)
  
router.get("/:id", controller.create_id)
router.post("/create",validate.postCreate, controller.post_create)
  module.exports=router;