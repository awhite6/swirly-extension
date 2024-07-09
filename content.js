// OK SO from the background we need to recognize when the button has been  clicked
//  send that event HERE
//  WHICH THEN GOES AND inserts a script into the dom that will change all the values of the input tags

// getting event from clicking on button
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message)
    // change the dom here?
    var script = document.createElement('script');
    script.src = chrome.runtime.getURL('swirly.js');
    script.onload = function() { this.remove(); };
    // see also "Dynamic values in the injected code" section in this answer
    (document.head || document.documentElement).appendChild(script);
    return true
});

function test() {
    var s = document.createElement('script');
    s.src = chrome.runtime.getURL('swirly.js');
    s.onload = function() { this.remove(); };
    // see also "Dynamic values in the injected code" section in this answer
    (document.head || document.documentElement).appendChild(s);
    console.log("this is the big boy test")
}