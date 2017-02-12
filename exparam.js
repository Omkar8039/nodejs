var express=require("express");
var http=require("http");
var app=express();
app.get("/:name",function(req,res,next)
{
	 if(req.params.name=="Abhishek")
	 {
	res.send("java developer " +req.params.name);
	   }
	 else if(req.params.name=="Nilotpal")
	 	 {
	 	 	res.send("Faad coder "+req.params.name);
	 	 }
	  else if(req.params.name=="Dorker bhaiya")
	  	 {
	  	 	res.send("Coolest developer "+req.params.name);
	  	 }
	  else 
	  	 {
	  	 	res.send("Fuck offfffff noob you are nothing..");
	  	 }

}); 
http.createServer(app).listen(9079);
console.log("Server started at port 9070....");