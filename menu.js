const MAX_PLAYERS_NUMBER = 4,
    MIN_PLAYERS_NUMBER = 2,
    PLAYERS_NUMBER = {};

let bodyMenu = document.getElementById('game-menu'),
    ul = document.getElementById('body-game-menu');

bodyMenu.addEventListener('click', function (eo) {
    let button = eo.target,
        li = document.getElementsByClassName('player');

    if (button.className === 'add-player-btn') {

        if (li.length < MAX_PLAYERS_NUMBER) {
            createBodyMenuElement();
        }
    }

    if (button.className === 'remove-player-btn') {

        if (li.length > MIN_PLAYERS_NUMBER) {
            removeBodyMenuElement(button);
        }
    }

    if (button.className === 'close-game-menu-btn') {
        let gameMenu = button.parentElement;

        removeBodyMenuElement(gameMenu);
    }

    if (button.className === 'start-game-btn') {
        if (li.length >= MIN_PLAYERS_NUMBER) {
            console.log("START GAME!!!", li.length);
        }
    }
}, false);

function createBodyMenuElement() {
    let li = document.createElement('li'),
        addButton = document.createElement('button'),
        input = document.createElement('input'),
        removeButton = document.createElement('button');

    li.className = 'player';

    addButton.innerHTML = '+';
    addButton.className = 'add-player-btn';

    input.name = 'playerName';
    input.placeholder = 'Enter Name';
    input.type = 'text';

    removeButton.innerHTML = '-';
    removeButton.className = 'remove-player-btn';

    li.appendChild(addButton);
    li.appendChild(input);
    li.appendChild(removeButton);
    ul.appendChild(li);
}

function removeBodyMenuElement(e) {
    e.parentElement.remove();
}