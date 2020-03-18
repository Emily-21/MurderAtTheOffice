let suspect1 = 'Stuart';
let suspect2 = 'Liam';
let suspect3 = 'Leona';
let suspect4 = 'Dean';
const deadBody = 'Jay';

let playerName;
let beginGame;


const startGame = () => {
let playerName = prompt("Please enter your name: ");
// if(playerName.length <= 2) {
// alert(`Name to Short`);
// startGame();
// }

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

alert(`${suspect1} ${suspect2} ${suspect3} ${suspect4}`)
alert(`Hello, ${playerName} Welcome to a Murder at Code Nation`);
let beginGame = prompt(`Shall we begin? [yes/no]`);
if(beginGame.toLowerCase == "no") {
    alert(`Screw you ${playerName}`);
} else {
    alert(`test`);
}
}
