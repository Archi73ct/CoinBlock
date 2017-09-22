var active = true;
var pattern = "https://coin-hive.com/*";

function redirect(requestDetails) {
	return {
		cancel: true
	};
}

browser.webRequest.onBeforeRequest.addListener(
	redirect,
	{urls:[pattern], types:["script"]},
	["blocking"]
  );

function switch_active () {
	
}

browser.browserAction.onClicked.addListener(switch_active);