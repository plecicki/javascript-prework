function playGame(playerInput) {
    clearMessages()

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove.localeCompare(argPlayerMove) == 0) {
            printMessage('Remis!');
        } else {
            let WIN_MESSAGE = 'Ty wygrywasz!';
            let LOSE_MESSAGE = 'Ja wygrywam!';
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage(WIN_MESSAGE);
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage(WIN_MESSAGE);
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage(WIN_MESSAGE);
            } else {
                printMessage(LOSE_MESSAGE);
            }
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}

function addEventsForButtons() {
    let rockButton = document.getElementById('play-rock');
    let paperButton = document.getElementById('play-paper');
    let scissorsButton = document.getElementById('play-scissors');

    rockButton.addEventListener('click', function(){playGame('1')});
    paperButton.addEventListener('click', function(){playGame('2')});
    scissorsButton.addEventListener('click', function(){playGame('3')});
}

addEventsForButtons();
