chrome.tabs.onUpdated.addListener((tabId, tab) => { //listener that checks if it is the youtube tab 
  if (tab.url && tab.url.includes("youtube.com/watch")) {
    const queryParameters = tab.url.split("?")[1];//for unique id
    const urlParameters = new URLSearchParams(queryParameters); // api interface  defines utility methods to work with the query string of a URL.

    chrome.tabs.sendMessage(tabId, { // sends a message to the content.js 
      type: "NEW",
      videoId: urlParameters.get("v"), //after v=
    });
  }
});
