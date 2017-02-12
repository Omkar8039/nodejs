var fs=require("fs");
var path=__dirname+"/ok";
fs.mkdir(path,function(error)
{
	if(error)
	{
		console.log("mkdir error: "+error);
	}
	else
		 {
		 	console.log("Succesfuley made");
		 }
});