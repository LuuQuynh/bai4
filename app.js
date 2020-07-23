var express = require("express");
var app = express();
var port = 4000;
var cookieParser = require('cookie-parser')

var userRoutes=require("./routes/user.router")
app.set("view engine", "pug");
app.set("views", "./");

app.use(cookieParser())

app.get("/", function (req, res) {
  res.send("<h1> HELLO</h1>");
});

app.get("/views", function (req, res) {
  res.render("views/index");
});

app.use('/views/users',userRoutes)
app.listen(port, function () {
  console.log("server running port " + port);
});
