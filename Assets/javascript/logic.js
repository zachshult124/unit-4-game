//need a function to start and end the game
startGame();
endGame();
//this will have to reset the players current score as well as the computers current score
//need a variable that holds the players current score
var userScore = 0;
//need a variable that holds the computers current score
var computerScore = 0;
//need a function that compares the two scores and returns a message that the user has won or a message that the user has lost
if (userScore > computerScore) {
    return
}


//need to set random numbers for each crystal during a given game 

//randomer function
function randomer() {
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
};




//need to have a variable that we can assign wins or losses 
var wins = 0;
var losses = 0;


//Need to have functions that add value to your score when you click on a crystal

$('blueCrystal').click(function () {
    userScore += crystalValue //need to test
})

$('redCrystal').click(function () {
    userScore += crystalValue //need to test
})

$('yellowCrystal').click(function () {
    userScore += crystalValue //need to test
})

$('greenCrystal').click(function () {
    userScore += crystalValue //need to test
})


//realize that i need a way to assign random values to crystals
// need a randomer function??

function randomer() {
    return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
};
      //returns a random number between 12 and 1
        //should assign this to a crystal value at the start of the game





