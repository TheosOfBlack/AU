const ButtonAddHiddenToggle = document.querySelector('.addHiddenToggle');

ButtonAddHiddenToggle.addEventListener("click", function() {
  // Отправляем сообщение контентному скрипту
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { action: "addHiddenToggle" });
  });
});