var net=require("net");
var server=net.createServer(function(socket)
{

});
server.listen(0,"::1",function()
{
	var address=server.address();
	console.log(address);
});