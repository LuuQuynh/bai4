require('dotenv').config();
var express = require("express");
var app = express();
var port = 4000;
const cookieParser = require('cookie-parser')
const body_parser = require("body-parser");
var userRoutes=require("./routes/user.route")
var authRoutes=require("./routes/auth.route")
var productRoutes=require("./routes/product.route")
var middleware=require("./middleware/auth.middleware")
var sessionmiddleware=require("./middleware/session.middleware")
var cartRoutes=require('./routes/cart.route')
app.set("view engine", "pug");
app.set("views", "./");

app.use(body_parser.json({ limit: "50mb" }));
app.use(body_parser.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionmiddleware);
app.use(express.static('public'))

app.get("/", function (req, res) {
  res.send("<h1> HELLO</h1>");
});

app.get("/views", function (req, res) {
  res.render("views/index");
});

app.use('/views/users',middleware.requireAuth,userRoutes)
app.use('/views/auth',authRoutes)
app.use('/views/products',productRoutes)
app.use('/views/cart',cartRoutes)
app.listen(port, function () {
  console.log("server running port " + port);
});

