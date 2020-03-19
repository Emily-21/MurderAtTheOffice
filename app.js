//Declares Name to varibles so can be ajusted if needed
let suspect1 = 'Stuart';
let suspect2 = 'Liam';
let suspect3 = 'Leona';
let suspect4 = 'Dean';
const deadBody = 'Jay';

let enterName;
let playerName;
let beginGame;

let arrayRooms = [
    'office', 'kitchen', 'lobby'
];

//function to allow player to pick room, each room is then removed for the array thus stopping repeat room visits
const pickRoom = () => {
    let rooms = arrayRooms.join(` or `); //Create new array to display remaining room names without commas, hopefully will not display the undefined rooms
    let pickedRoom = prompt(`Pick a room to investigate ${rooms}`);
    if (pickedRoom.toLowerCase() == 'office') {
        delete arrayRooms[0];
        alert(`run office function`);
    } else {
        if (pickedRoom.toLowerCase() == 'kitchen') {
            delete arrayRooms[1];
            alert(`run kitchen function`);
        } else {
            if (pickedRoom.toLowerCase() == 'lobby') {
                delete arrayRooms[2];
                alert(`run lobby function`);
            } else {
                if (pickedRoom != arrayRooms) {
                    alert(`Invalid room chosen, please try again`);
                    pickRoom();
                }
            }
        }
    }
}
// function to allow player to choose who they talk to
let Bio1 = (`Hi I'm ${suspect1}, I couldn't have murdered ${deadBody} as I was in the pub from 5pm.`)
let Bio2 = (`Hi I'm ${suspect2}, I was working late all night in the office. I didn't see anything.`)
let Bio3 = (`Hi I'm ${suspect3}, I saw ${deadBody} as I left the office at 6pm.`)
let Bio4 = (`Hi I'm ${suspect4}, I had an urgent meeting with ${suspect1} at 6pm.`)

let arraychoice = [
    suspect1, suspect2, suspect3, suspect4
]

const pickSuspect = () => {
    let chosen = prompt(`Who do you want to talk to first ${arraychoice}`)
    if (arraychoice.toLowercase() == suspect1) {
        delete arraychoice(0)
        alert(`${Bio1}`)
    } else {
        if (arraychoice.toLowercase() == suspect2) {
            delete arraychoice(1)
            alert(`${Bio2}`)
        } else {
            if (arraychoice.toLowercase() == suspect3) {
                delete arraychoice(2)
                alert(`${Bio3}`)
            } else {
                if (arraychoice.toLowercase() == suspect4) {
                    delete arraychoice(3)
                    alert(`${Bio4}`)
                } else {
                    if (chosen != arraychoice) {
                        alert(`please choose someone in the room to speak to`)
                        pickSuspect()
                    }
                }
            }
        }
    }
}

//Functiomn to convert names with correct format and check the names do not clash with any of the predefined names, if they do it changed the predefined name to
//Robert or Roberta. Will refuse the name choice of Jay as Jay is dead.
const nameCheck = () => {
    enterName = prompt("Please enter your name: ");
    playerName = enterName.charAt(0).toUpperCase();
    endOfName = enterName.substring(1).toLowerCase();
    playerName = playerName + endOfName;
    if (playerName.length <= 2) {
        alert(`Name to Short`);
        nameCheck();
    } else {
        if (playerName == deadBody) {
            alert(`Sorry Jay is dead, please pick another name`);
            startGame();
        } else {
            if (playerName == suspect1) {
                suspect1 = 'Robert';
            } else {
                if (playerName == suspect2) {
                    suspect2 = 'Robert';
                } else {
                    if (playerName == suspect3) {
                        suspect3 = 'Roberta';
                    } else {
                        if (playerName == suspect4) {
                            suspect4 = 'Robert';
                        }
                    }
                }
            }
        }
    }
}

//Funciton to begin the game
const shallWe = () => {
    beginGame = prompt(`Shall we begin? [yes/no]`);
    if (beginGame.toLowerCase() == "no") {
        alert(`Goodbye ${playerName}`);
        location = location;
    } else {
        if (beginGame.toLowerCase() == "yes") {
            pickRoom();
        } else {
            if (beginGame != 'no' && beginGame != 'yes');
            alert(`Please Enter yes or no`)
            shallWe();
        }
    }
}

//You Died Function
const youDied = () => {
    alert(`YOU DIED!`);
    alert(`Jay's Death Will Go Unsolved`);
    alert(`Poor Jay :'(`);
    location = location;
}

//You Failed Function
const youFailed = () => {
    alert(`YOU FAILED!`);
    alert(`Jay's Death Will Go Unsolved`);
    alert(`Poor Jay :'(`);
    location = location;
}


//Function to begin the game
const startGame = () => {
    nameCheck();
    alert(`Hello ${playerName}, Welcome to a Murder at Office`);
    shallWe();
}