let suspect1 = 'Stuart';
let suspect2 = 'Liam';
let suspect3 = 'Leona';
let suspect4 = 'Dean';
const deadBody = 'Jay';

let enterName;
let playerName;
let beginGame;

const nameCheck = () => {
enterName = prompt("Please enter your name: ");
playerName = enterName.charAt(0).toUpperCase();
endOfName = enterName.substring(1).toLowerCase();
playerName = playerName + endOfName;//enterName.substring(1);
if(playerName.length <= 2) {
alert(`Name to Short`);
nameCheck();
} else {
    if(playerName == deadBody) {
        alert(`Sorry Jay is dead, please pick another name`);
        startGame();
    } else {
        if(playerName == suspect1) {
            suspect1 = 'Bob';
        } else {
            if(playerName == suspect2) {
                suspect2 = 'Bob';
            } else {
                if(playerName == suspect3) {
                    suspect3 = 'Bob';
                } else {
                    if(playerName == suspect4) {
                        suspect4 = 'Bob';
                    }
                }
            }
        }
    }
}
}

const shallWe = () => {
beginGame = prompt(`Shall we begin? [yes/no]`);
if(beginGame.toLowerCase() == "no") {
    alert(`Screw you ${playerName}`);
} else {
    if(beginGame.toLowerCase() == "yes") {
    alert(`test`);
    } else {
        if(beginGame != 'no' && beginGame != 'yes');
        alert(`Please Enter yes or no`)
        shallWe();
    }
}
}

const startGame = () => {
nameCheck();
alert(`Hello, ${playerName} Welcome to a Murder at Code Nation`);
shallWe();
}