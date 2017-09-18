var scriptList = document.getElementsByTagName('script');
var matchingPattern = /https:\/\/coin\-hive\.com\/lib\/*/;

console.log("[CoinBlock] Found scripts: " + scriptList.length);

for (var i = scriptList.length - 1; i >= 0; i--) {
	if (matchingPattern.test(scriptList[i].src)) {
		console.log(scriptList[i].src);
		scriptList[i].setAttribute("src", "");
		console.log(scriptList[i].src);
		console.log("[CoinBlock] Found content script");
		}
}

