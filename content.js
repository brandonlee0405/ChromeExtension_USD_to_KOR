var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Millennials/gi, 'Snake people');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}

chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "content.js"});
});
