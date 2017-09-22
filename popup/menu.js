function checkState(message){
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


document.addEventListener("click", function(e) {
	if(!e.target.classList.contains("action")){
		return;
	}
	browser.runtime.sendMessage({"cmd": "switch"});
	browser.runtime.sendMessage({"cmd": "requeststate"}).then(checkState);
	
});