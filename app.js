//Declaring all the variables and constants in the game
let suspect1 = 'Stuart';
let suspect2 = 'Liam';
let suspect3 = 'Leona';
let suspect4 = 'Dean';
const deadBody = 'Jay';
let enterName;
let playerName;
let beginGame;
let jayDead = 0; //Used for name easter egg
let roomsSearched = 0;
let Bio1; 
let Bio2; 
let Bio3; 
let Bio4;
let talkedTo = 0;
let roomCount = 0;
let clueA;
let clueB;
let clueC;
let clueD;
let clueE;
let choices;
let arrayFound = [];
let arrayRooms = [
    'Office', 'Kitchen', 'Lobby'
];
let arraychoice = [
    suspect1, suspect2, suspect3, suspect4
];

//Function for the final solution to the game, the user enters who they think had commit the murder
const userGuess = () => {
    let guessA = prompt(`Who do you think commited the murder? [${choices.join (" or ")}]`);
    guessB = guessA.charAt(0).toUpperCase();
    guessEnd = guessA.substring(1).toLowerCase();
    guess = guessB + guessEnd;
    if (guess == suspect1) {
        alert(`Congratulations you solved the murder`);
        alert(`${playerName} "Why Stuart? Why did you kill ${deadBody}?!!!!!!`);
        alert(`${suspect1} "He forgot my coffee again!!!! And for the last time!"`);
        alert(`Congratulations! You have solved the mystery! Well done!`);
        location = location; //reloads page to reset game
    } else {
        if((guess == suspect2) || (guess == suspect3) || (guess == suspect4)) {
        alert(`You guessed incorrectly!`);
        alert(`The murderer got away`);
        alert(`${guess} will now spend the rest of their life in jail`);
        alert(`Well Done!`);
        location = location; //reloads page to reset game
    } else {
        if(guess == playerName){
            alert(`You killed ${deadBody}? But that makes no sense!`);
            alert(`Try again`);
            userGuess();
            location = location; //reloads page to reset game
        } else {
        alert(`Invalid selection, please try again`);
        userGuess();
        }
    }
}
}

// function to count how many people have been spoken to and to move the game on once all 4 have been selected
const allSpoken = () => {
    if (talkedTo < 4) {
        pickSuspect();
    } else {
        return;
    }
}

// function to allow player to choose who they talk to
const pickSuspect = () => {
    let names = arraychoice.join(` `);
    let chosen = prompt(`Who do you want to talk to? [${names}]`);
    chosenName = chosen.charAt(0).toUpperCase();
    endOfChosen = chosen.substring(1).toLowerCase();
    chosenName = chosenName + endOfChosen;
    chosen = chosen.toLowerCase();
    if ((chosenName == suspect1) && (talkedTo <= 4)) {
        delete arraychoice[0];
        talkedTo++;
        alert(`${Bio1}`);
        allSpoken();
    } else {
        if ((chosenName == suspect2) && (talkedTo <= 4)) {
            delete arraychoice[1];
            talkedTo++;
            alert(`${Bio2}`);
            allSpoken();
        } else {
            if ((chosenName == suspect3) && (talkedTo <= 4)) {
                delete arraychoice[2];
                talkedTo++;
                alert(`${Bio3}`);
                allSpoken();
            } else {
                if ((chosenName == suspect4) && (talkedTo <= 4)) {
                    delete arraychoice[3];
                    talkedTo++;
                    alert(`${Bio4}`);
                    allSpoken();
                } else {
                    if (chosenName != arraychoice) {
                        alert(`Please choose someone in the room to speak to`);
                        allSpoken();
                    }
                }
            }
        }
    }
}

//function to count number of rooms checked, once two rooms have been check the game moves forward
const roomsChecked = () => {
    if (roomCount < 2) {
        pickRoom();
    } else {
        return;
    }
}

//function to allow player to pick room, each room is then removed for the array thus stopping repeat room visits
const pickRoom = () => {
    let rooms = arrayRooms.join(` `); //Create new array to display remaining room names without commas, hopefully will not display the undefined rooms
    let pickedRoom = prompt(`Pick a room to investigate (You can only visit two rooms) [${rooms}]`);
    pickedRoom = pickedRoom.toLowerCase();
    if (pickedRoom == 'office') {
        delete arrayRooms[0];
        roomCount++;
        alert(`You have found a clue! ${clueC}`);
        arrayFound.push(clueC);
        roomsChecked();
    } else {
        if (pickedRoom == 'kitchen') {
            delete arrayRooms[1];
            roomCount++;
            alert(`You have found a clue! ${clueD}`);
            arrayFound.push(clueD);
            roomsChecked();
        } else {
            if (pickedRoom == 'lobby') {
                delete arrayRooms[2];
                roomCount++;
                alert(`You have found a clue! ${clueE}`);
                arrayFound.push(clueE);
                roomsChecked();
            } else {
                if (pickedRoom != arrayRooms) {
                    alert(`Invalid room chosen, please try again`);
                    pickRoom();
                }
            }
        }
    }
}

//Function to search Jay's body for clues - only one choice will be accepted. 
const clothes = () => {
    alert(`${suspect1} "We should search the dead body for clues."`);
    alert(`${suspect1} "You search one item of clothing, I'll search the other"`)
    let input1 = prompt("Do you want to search Jay's jacket or trousers? [Jacket Trousers]");
    input1 = input1.toLowerCase();
    if (input1 == "trousers") {
        alert(`You've found a note in the trouser pocket`);
        alert(clueA);
        arrayFound.push(clueA);
    }
    else {
        if (input1 == "jacket") {
            alert(`You've found a receipt in the jacket pocket`);
            alert(clueB);
            arrayFound.push(clueB);
        }
        else {
            alert("Please pick either trousers or jacket");
            clothes();
        }
    }
}

//function to create bio and clues based off name choices generate in the nameCheck function
const createStuff = () =>{
    arraychoice = [
        suspect1, suspect2, suspect3, suspect4
    ];
    choices = [suspect1, suspect2, suspect3, suspect4];
    Bio1 = (`Hi I'm ${suspect1}, I couldn't have murdered ${deadBody} as I was in the pub from 5pm.`);
    Bio2 = (`Hi I'm ${suspect2}, I was working late all night in the office. I didn't see anything.`);
    Bio3 = (`Hi I'm ${suspect3}, I saw ${deadBody} as I left the office at 6pm.`);
    Bio4 = (`Hi I'm ${suspect4}, I had an urgent meeting with ${suspect1} at 6pm.`);
    clueA = (`A note that reads "Team meet up at 7pm - everyone must attend!"`)
    clueB = (`A receipt for one small Starbucks Americano`);
    clueC = (`A note from ${suspect1} that reads "${deadBody} get three coffees - make sure mine is a Latte Macchiato"`);
    clueD = (`An Amazon receipt for delivery of Advanced Nodejs Reference.`);
    clueE = (`The sign-in sheet shows ${suspect1}, ${suspect2} and ${deadBody} were the only ones in the building at 8pm`);
}

//Functiomn to convert names with correct format and check the names do not clash with any of the predefined names, if they do it change the predefined name to
//Robert or Roberta. Will refuse the name choice of Jay as Jay is dead.
const nameCheck = () => {
    enterName = prompt("Please enter your name: ");
    playerName = enterName.charAt(0).toUpperCase();
    endOfName = enterName.substring(1).toLowerCase();
    playerName = playerName + endOfName;
    if(playerName.length <= 2) {
    alert(`Name to Short`);
    nameCheck();
    } else {
        if((playerName == deadBody) && (jayDead == 0)) {
            alert(`Sorry ${deadBody} is dead, please pick another name`);
            jayDead++;
            nameCheck();
        } else { 
            if((playerName == deadBody) && (jayDead == 1)) {
                alert(`I said ${deadBody} is dead, PICK ANOTHER NAME`);
                jayDead++;
                nameCheck();
            } else {
                if((playerName == deadBody) && (jayDead == 2)) {
                    alert(`Really? You want to be the dead guy?`);
                    jayDead++;
                    nameCheck();
                } else {
                    if((playerName == deadBody) && (jayDead == 3)) {
                        alert(`Fine, you're the dead guy`);
                        alert(`and now there's nobody to solve the murder`);
                        alert(`Happy now?`);
                        alert('Goodbye dead person'); 
                        jayDead = 0;
                        nameCheck();
                    } else {
                        if(playerName == suspect1) {
                            suspect1 = 'Robert';
                            createStuff();
                        } else {
                            if(playerName == suspect2) {
                                suspect2 = 'Robert';
                                createStuff();
                            } else {
                                if(playerName == suspect3) {
                                    suspect3 = 'Roberta';
                                    createStuff();
                                } else {
                                    if(playerName == suspect4) {
                                        suspect4 = 'Robert';
                                        createStuff();
                                    } else {
                                        createStuff();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//Function to begin the game
const shallWe = () => {
    beginGame = prompt(`Shall we begin? [yes no]`);
    if (beginGame.toLowerCase() == "no") {
        alert(`Goodbye ${playerName}`);
        location = location;
    } else {
        if (beginGame.toLowerCase() == "yes") {
            return;
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
    shallWe();
    alert(`Hello ${playerName}, Welcome to a Murder at the Office`);
    alert(`${playerName} "What a lovely morning, I can't wait to get to work and catch up with all my friends"`);
    alert(`${playerName} "Hmm, it seems very quiet out here today, I wonder where everyone is?"`);
    alert(`You arrive at the office to find four people stood around something on the floor`);
    alert(`You walk over to find out what is going on`);
    alert(`As you approach you notice the thing on the floor is a body!`);
    alert(`${playerName} "Oh No! What has happened?!"`);
    alert(`${suspect3} "It's ${deadBody}! He's dead!!!"`);
    alert(`${suspect4} "Somebody has murdered him!"`);
    alert(`${suspect1} "Who would do such a terrible thing?"`);
    alert(`${suspect2} "Who will solve this horrible crime? Maybe you can help?"`);
    pickSuspect();
    clothes();
    alert(`${playerName} "I found a clue! ${arrayFound}"`);
    alert(`${playerName} "I wonder what that could mean?"`);
    alert(`${playerName} "${suspect1} did you find anything?"`);
    alert(`${suspect1} "I didn't find anything"`);
    alert(`Hmm... that seems suspicious`);
    alert(`${suspect4} "We need more clues, maybe if we search around we'll find some"`);
    alert(`${suspect3} "Excellent idea, let's get started!"`);
    pickRoom();
    alert(`${playerName} "Ok I've searched two rooms and found the following clues:"`)
    alert(`${arrayFound.join(" and ")}`);
    alert(`Whilst reviewing the clues you have found that the police have arrived`);
    alert(`Time to show off your detective skills to the professionals`);
    userGuess();
    location = location;
}