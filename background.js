var active_default = false;
var active = null;
var pattern = "https://coin-hive.com/*";

function redirect(requestDetails) {
	console.log("Cancelled bitch!");
	return {
		
		cancel: true
	};
}

function updateState(message, sender, sendResponse) {
	if(message.cmd == "switch") {
		console.log("memed");

		if(active == true){ active = false; }

		else if(active == false) { active = true; }

		else{active=active_default;}
	}

	if(message.cmd == "requeststate"){
		sendResponse({response: active});
	}
}

browser.webRequest.onBeforeRequest.addListener(
	redirect,
	{urls:[pattern], types:["script"]},
	["blocking"]
  );

browser.runtime.onMessage.addListener(updateState);