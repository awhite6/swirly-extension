chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        var message = chrome.tabs.sendMessage(tabs[0].id, {action: "open_dialog_box"}, function(response) {}); 
        
    });
});