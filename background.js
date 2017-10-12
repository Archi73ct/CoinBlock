var active = true;
var pattern = "https://coin-hive.com/*";

function Blocked(requestDetails) {
	if(active){
		return {
			cancel: true
		};
	} else {
		return {
			cancel: false
		};
	}
}

browser.webRequest.onBeforeRequest.addListener(
	Blocked,
	{urls:[pattern], types:["script"]},
	["blocking"]
);

