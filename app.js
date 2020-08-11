var express = require("express");
var app = express();
var port = 4000;
var cookieParser = require('cookie-parser')
const body_parser = require("body-parser");
var userRoutes=require("./routes/user.router")
var authRoutes=require("./routes/auth.router")
app.set("view engine", "pug");
app.set("views", "./");

app.use(body_parser.json({ limit: "50mb" }));
app.use(body_parser.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser())


app.get("/", function (req, res) {
  res.send("<h1> HELLO</h1>");
});

app.get("/views", function (req, res) {
  res.render("views/index");
});

app.use('/views/users',userRoutes)
app.use('/views/auth',authRoutes)
app.listen(port, function () {
  console.log("server running port " + port);
});
