// Saves options to chrome.storage.sync.
function save_options() {
  var OldVal = document.getElementById('OldWord').value;
  var NewVal = document.getElementById('NewWord').value;
  chrome.storage.sync.set({
    tempOld: OldVal,
    tempNew: NewVal
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1500);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    tempOld: ' ',
    tempNew: ' '
  }, function(items) {
    document.getElementById('OldWord').value = items.tempOld;
    document.getElementById('NewWord').value = items.tempNew;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
