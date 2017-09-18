var scriptList = document.getElementsByTagName('script');
var matchingPatternMiner = /https:\/\/coin\-hive\.com\/lib\/*/;
var matchingPatternCapthca = /https:\/\/coin\-hive\.com\/capthca\/*/;

console.log("[CoinBlock] Found scripts: " + scriptList.length);

for (var i = scriptList.length - 1; i >= 0; i--) {
	if (matchingPatternMiner.test(scriptList[i].src) | matchingPatternCapthca.test(scriptList[i].src)) {
		console.log(scriptList[i].src);
		scriptList[i].src = "none";
		console.log(scriptList[i].src);
		console.log("[CoinBlock] Found content script");
		}
}

d