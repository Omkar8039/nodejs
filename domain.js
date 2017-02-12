var fs=require("fs");
var domain=require("domain").create();
domain.run(function(){
	fs.readFile("omkar.txt","utf8",function(error,data){
		if(error)
		{
			throw error;
		}
		console.log(data);
		domain.dispose();
	});
});
domain.on("error",function(error)
{
	console.log("The xception was caught!");
});