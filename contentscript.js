chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    // use `url` here inside the callback because it's asynchronous!
    if(url.startsWith("chrome-extension") &&
        url.indexOf("/suspended.html#") > -1) {
            unsuspendurl = url.substr(url.lastIndexOf("&uri=")+5);


});