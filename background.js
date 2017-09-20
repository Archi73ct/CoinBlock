var active_default = false;
var active = null;


function updateState(message, sender, sendResponse) {
	if(message.cmd == "switch") {

		if(active == true){ active = false; }

		else if(active == false) { active = true; }

		else{active=active_default;}
	}

	if(message.cmd == "requeststate"){
		sendResponse({response: active});
	}
}

browser.runtime.onMessage.addListener(updateState);