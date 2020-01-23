var express = require("express");
var bodyparser = require("body-parser");
var app = express();

app.use(express.static(__dirname+"/Views"));
app.use(express.json());
app.use(bodyparser());

app.listen(7000, function(){
    console.log("Server is running on poert 7000");
});
app.get("/", function(req, res){
    res.sendFile(__dirname+"/views/index.html");
});
app.get("/todo", function(req, res){
    res.render("todo.json");
});
