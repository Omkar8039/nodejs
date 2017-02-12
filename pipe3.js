var mul=200;
process.stdin.on("data",function(data)
{
	var num=parseInt(data.toString(),10);
	console.log("Result is: "+(num*mul));

});
process.stdin.resume();