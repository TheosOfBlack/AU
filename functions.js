/////// Добавление кнопки
function addButton(elementBeforeInsert, buttonClass, workClickFunction){

	const root = document.createElement('div');
	const shadowRoot = root.attachShadow({mode: 'open'});
	
	const cssUrl = chrome.runtime.getURL('contentScript.css');
	
	shadowRoot.innerHTML = `<link rel="stylesheet" href="${cssUrl}"></link>`
	
	let myButton = document.createElement('button');
	myButton.innerText = '___';
	myButton.type = 'button';

	myButton.classList.add(buttonClass);
	
	shadowRoot.prepend(myButton);
	elementBeforeInsert.appendChild(root);

	///////// Функционал кнопки
	myButton.addEventListener('click', () => {

			workClickFunction();

		});
		///////// Функционал кнопки

		return myButton;
}
/////// Добавление кнопки