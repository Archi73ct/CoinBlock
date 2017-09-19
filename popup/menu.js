function checkState(message){
	console.log("Respone recieved");
	if(message.response == true) {
		document.getElementById('activator').style.color="white";
	}
	else {
		document.getElementById('activator').style.color="red";
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