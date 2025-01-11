const playGame = function(playerInput) {
    clearMessages()

    const ROCK = 'kamień', PAPER = 'papier', SCISSORS = "nożyce", UKNOWN_MOVE = "nieznany ruch";

    const getMoveName = function(argMoveId) {
        if (argMoveId == 1) {
            return ROCK;
        } else if (argMoveId == 2) {
            return PAPER;
        } else if (argMoveId == 3) {
            return SCISSORS;
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return UKNOWN_MOVE;
        }
    }

    const displayResult = function(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if (argComputerMove.localeCompare(argPlayerMove) == 0) {
            printMessage('Remis!');
        } else {
            const WIN_MESSAGE = 'Ty wygrywasz!';
            const LOSE_MESSAGE = 'Ja wygrywam!';
            if (argComputerMove == ROCK && argPlayerMove == PAPER) {
                printMessage(WIN_MESSAGE);
            } else if (argComputerMove == PAPER && argPlayerMove == SCISSORS) {
                printMessage(WIN_MESSAGE);
            } else if (argComputerMove == SCISSORS && argPlayerMove == ROCK) {
                printMessage(WIN_MESSAGE);
            } else {
                printMessage(LOSE_MESSAGE);
            }
        }
    }

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}

const addEventsForButtons = function() {
    const rockButton = document.getElementById('play-rock');
    const paperButton = document.getElementById('play-paper');
    const scissorsButton = document.getElementById('play-scissors');

    rockButton.addEventListener('click', function(){playGame('1')});
    paperButton.addEventListener('click', function(){playGame('2')});
    scissorsButton.addEventListener('click', function(){playGame('3')});
}

addEventsForButtons();
