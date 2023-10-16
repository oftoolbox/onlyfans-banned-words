// background.js

// Event handler for the extension icon click
chrome.action.onClicked.addListener(function (tab) {
  // Perform an action when the icon is clicked
  // For example, open a popup page or interact with a content script
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: function () {
      // Your code to interact with the content script or perform other actions
    },
  });
});
