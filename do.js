var domain=require("domain");
function showRunning()
{
	function exceptionHandler(error)
	{
		console.log('Caught exception',+error);
	}
	d=domain.create();
	d.on('error',exceptionHandler)
	setTimeout(showRunning,1000);
	d.enter();
	console.log('SSSSSS');
	throw new Error("omkarrrrrr");
	d.exit();
}
showRunning();


