const MAX_PLAYERS_NUMBER = 4,
    MIN_PLAYERS_NUMBER = 2,
    PLAYERS_NUMBER = {};

let bodyMenu = document.getElementById('game-menu'),
    ul = document.getElementById('body-game-menu');

bodyMenu.addEventListener('click', function (eo) {
    let button = eo.target,
        input = document.getElementsByName('playerName'),
        inputLength = input.length;

    if (button.className === 'add-player-btn') {

        if (inputLength < MAX_PLAYERS_NUMBER) {
            createBodyMenuElement();
        }
    }

    if (button.className === 'remove-player-btn') {

        if (inputLength > MIN_PLAYERS_NUMBER) {
            removeBodyMenuElement(button);
        }
    }

    if (button.className === 'close-game-menu-btn') {
        let gameMenu = button.parentElement;

        removeBodyMenuElement(gameMenu);
    }

    if (button.className === 'start-game-btn') {
        if (inputLength >= MIN_PLAYERS_NUMBER) {
            for (let i = 0; i < inputLength; ++i) {
                let errorMessage = document.getElementById('error-message-menu');

                if (!input[i].value.trim()) {
                    input[i].className = 'error';
                    errorMessage.innerHTML = 'Введите Имя Игрока';
                    console.log('Поля с имнами должны быть заполнены!');
                    return;
                }

                input[i].className = null;
                errorMessage.innerHTML = null;

                PLAYERS_NUMBER[i + 1] = input[i].value.trim();
            }
        }
    }
}, false);

function createBodyMenuElement() {
    let li = document.createElement('li'),
        addButton = document.createElement('button'),
        input = document.createElement('input'),
        removeButton = document.createElement('button');

    addButton.innerHTML = '+';
    addButton.className = 'add-player-btn';

    input.type = 'text';
    input.name = 'playerName';
    input.placeholder = 'Enter Name';

    removeButton.innerHTML = '-';
    removeButton.className = 'remove-player-btn';

    li.appendChild(addButton);
    li.appendChild(input);
    li.appendChild(removeButton);
    ul.appendChild(li);
}

function removeBodyMenuElement(item) {
    item.parentElement.remove();
}