var fs=require("fs");
var path="omkar.txt";

fs.stat(path,function(error,stats)
{
  if(error)
  {
  	console.log("stat error: "+error.message);

  }
  else
  {
  	console.log(stats);
  }
});