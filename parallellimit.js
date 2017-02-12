var async=require("async");
async.parallelLimit({
	one:function(callback)
	{
		setTimeout(function()
		{
           console.log("Hello 1");
           callback(null,1);
		},300);
	},
	two:function(callback)
	{
		setTimeout(function()
		{
         console.log("Hello 2");
         callback(null,2);
		},200);
	},
	three:function(callback)
	{
		setTimeout(function()
		{
         console.log("Hello 3");
         callback(null,3);
		},100);
	}
},2,function(error,results)
{
	console.log(results);
});