var active_default;
var active = active_default;


function updateState(message, sender, sendResponse) {
	if(message.cmd == "switch") {
		if(active == true){ active = false; }
		if(active == false) { active = true; }
	}

	if(message.cmd == "requeststate"){
		sendResponse({response: active});
	}
}

browser.runtime.onMessage.addListener(updateState);