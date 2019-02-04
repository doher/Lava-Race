let bodyMenu = document.getElementById('body-menu');

bodyMenu.addEventListener('click', function (eo) {
    let button = eo.target;

    if (button.className === 'add-btn') {
        createBodyMenuElement();
    }

    if (button.className === 'remove-btn') {
        removeBodyMenuElement(button);
    }
}, false);

function createBodyMenuElement() {
    let addButton = document.createElement('button'),
        removeButton = document.createElement('button'),
        input = document.createElement('input'),
        div = document.createElement('div');

    input.setAttribute('type', 'text');
    input.setAttribute('name', 'name');
    input.setAttribute('placeholder', 'Enter Name');

    removeButton.className = 'remove-btn';
    removeButton.innerHTML = '-';

    addButton.className = 'add-btn';
    addButton.innerHTML = '+';

    div.appendChild(addButton);
    div.appendChild(input);
    div.appendChild(removeButton);

    bodyMenu.appendChild(div);
}

function removeBodyMenuElement(e) {
    e.parentElement.remove();
}