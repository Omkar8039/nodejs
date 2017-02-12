var http=require("http");
http.createServer(function(req,res)
{
	res.writeHead("hello<strong>HTTP</strong>!");
	res.end("Helolo omkar");

}).listen(7100);
console.log("Server started at port 6700...");