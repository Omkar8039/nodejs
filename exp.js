var http=require("http");
http.createServer(function(req,res)
{
	if(req.url==="/"&&req.method=="GET")
	{
		res.writeHead(200,{
			"Content-Type":"text/html"
		});
		res.end("Hello <strong>Omkar</strong>");


	}
	else if(req.url==="/om"&&req.method=="GET") {
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end("Hello <strong>omkar</strong> second");
	}

	
}).listen(8790);
console.log("SErver started at 8790....")