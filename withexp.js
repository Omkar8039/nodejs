var express=require("express");
var http=require("http");
var app=express();
app.get("/",function(req,res,next)
{
	res.send("Hello <strong>Omkar</strong>");
});
app.get("/om",function(req,res,next)
{
	res.send("Hello <strong>Om</strong>");
});
app.get("/om2",function(req,res,next)
{
	res.send("Hello<strong>Om3</strong>");

});
http.createServer(app).listen(9800);