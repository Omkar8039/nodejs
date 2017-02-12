var Stream=require("stream");
var stream=new Stream();
var duration=5*1000;
var end=Date.now()+duration;
var interval;
stream.readable=true;
interval=setInterval(function()
{
	var now=Date.now();
	console.log("Emmiting a data event");
	stream.emit("data",new Buffer("Omkar"));
	if(now>=end)
	{
		console.log("Emitting an end event");
		stream.emit("end");
		clearInterval(interval);
	}
},1000);