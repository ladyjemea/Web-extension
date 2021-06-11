chrome.declarativeContent.onPageChanged.removeRules(void 0, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {
                urlMatches: ""
            }
        })],
        actions: [new chrome.declarativeContent.ShowPageAction]
    }]);
});