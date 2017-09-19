var active = false;


function checkState(message){
	console.log("Respone recieved");
	if(message.response == true) {
		checkAndBlock();
	}
	else {
		return;
	}
}

browser.runtime.sendMessage({"cmd": "requeststate"}).then(checkState);
console.log("Requesting extention states");

function checkAndBlock() {
	var scriptList = document.getElementsByTagName('script');
	var iframeList = document.getElementsByTagName('iframe');

	var matchingPatternMiner = /https:\/\/coin\-hive\.com\/lib\/*/;
	var matchingPatternCapthca = /https:\/\/coin\-hive\.com\/captcha\/*/;

	console.log("[CoinBlock] Found scripts: " + scriptList.length);
	console.log("[CoinBlock] Found iframes: " + iframeList.length);

	if (scriptList.length >= 1) {
		for (var i = scriptList.length - 1; i >= 0; i--) {
			if (matchingPatternMiner.test(scriptList[i].src) | matchingPatternCapthca.test(scriptList[i].src)) {
				console.log(scriptList[i].src);
				scriptList[i].src = "none";
				console.log(scriptList[i].src);
				console.log("[CoinBlock] Found content script");
				}
		}
	}
	if (iframeList.length >= 1) {
		for (var i = iframeList.length - 1; i >= 0; i--) {
			if (matchingPatternMiner.test(iframeList[i].src) | matchingPatternCapthca.test(iframeList[i].src)) {
				console.log(iframeList[i].src);
				iframeList[i].src = "none";
				console.log(iframeList[i].src);
				console.log("[CoinBlock] Found content script");
				}
		}
	}
}