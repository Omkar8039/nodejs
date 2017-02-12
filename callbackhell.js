var fs=require("fs");
var filename="Desktop";
fs.exists(filename,function(exists)
{
	if(exists)
		 {
		 	fs.stat(filename,function(error,stats)
		 	{
		 		if(error)
		 		{
		 			console.log(error);
		 		}
		 	    if(stats.isFile())
		 	    {
		 	    	fs.readFile(filename,"utf8",function(error,data)
		 	    	{
		 	    		if(error)
		 	    		{
		 	    			console.log(error;
		 	    		}
		 	    		console.log(data);
		 	    	});
		 	    }
		 	});
		 }
	
       
});