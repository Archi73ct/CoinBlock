var counter = document.getElementById("counter");
const countGetter = browser.storage.local.get();
countGetter.then(updateCounter, onError)

function onError(e){
    console.log(e);
}

function updateCounter(c) {
    counter.innerText = c.count;
}
