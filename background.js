var active = true;
var pattern = ["https://coin-hive.com/*","https://crypto-loot.com/*"];

var defaultCounter = {
	count: 0
};

function onError(e){
	console.log(e);
}

function checkIfCounter(storedCounter) {
	if (!storedCounter.count) {
		browser.storage.local.set(defaultCounter);
	}
}

function updateCounter(c) {
	var oc = c.count;
	browser.storage.local.set({
		count: oc++
	});
}

const gettingStoredSettings = browser.storage.local.get();
gettingStoredSettings.then(checkIfCounter, onError);

function Blocked(requestDetails) {
	if(active){
		browser.storage.local.set({
			count: browser.storage.local.get().then(updateCounter, onError)
		});
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
	{urls:pattern, types:["script"]},
	["blocking"]
);

