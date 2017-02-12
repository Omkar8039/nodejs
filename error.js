process.on('uncaughtException',function(error)
{
  console.log('caug')
});
function showrunning()
 {
 	setTimeout(showrunning,1000);
 	console.log("Still running");
 	throw new error("Omkaarrrr");
 }
 showrunning();