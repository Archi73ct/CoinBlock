function checkState(message){
	console.log("Respone recieved: " + message.response);
	if(message.response == true) {
		document.getElementById('activator').style.backgroundColor="#12bc00";
		document.getElementById('activator').innerHTML = "Activated";
	}
	else {
		document.getElementById('activator').style.backgroundColor="#d70022";
		document.getElementById('activator').innerHTML = "Deactivated";
	}
}



browser.runtime.sendMessage({"cmd": "requeststate"}).then(checkState);
console.log("Cheking state");

document.addEventListener("click", function(e) {
	if(!e.target.classList.contains("action")){
		return;
	}
	console.log("clicked activete");
	browser.runtime.sendMessage({"cmd": "switch"});
	browser.runtime.sendMessage({"cmd": "requeststate"}).then(checkState);
	
});