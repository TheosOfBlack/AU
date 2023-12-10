//// Получение собщение при клике на кнопку в расширение "ДОБАВЛЕНИЕ ТУМБЛЕРА ДЛЯ СКРЫВАТИЯ ОБЪЕКТОВ"
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "addHiddenToggle") {
		
		const hiddenToggle = addButton(document.body, '.hiddenToggle', ()=>{
			console.log('pu');
		});



  }
});
//// Получение собщение при клике на кнопку в расширение "ДОБАВЛЕНИЕ ТУМБЛЕРА ДЛЯ СКРЫВАТИЯ ОБЪЕКТОВ"

