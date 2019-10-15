// GLOBAL VARIABLES 
//------------------------------------------------------------------------
// An array of words
var artistList = ["picasso", "rothko", "pollock", "warhol", "monet", "degas"]; 
// The randomly chosen word will be held in this string
var chosenWord = "";
// An array that will hold the individual letters of the chosen word
var lettersInChosenWord = [];
// This will be the number of blanks we show based on the solution
var numBlanks = 0;
// An empty array that will hold a mix of blank and solved letters (ex: 'n, _ _, n, _').
var dashesAndLetters = [];
// This array will hold the incorrect guesses
var wrongGuesses = [];

// Variables to hold the number of wins and guesses remaining
var wins = 0;
var losses = 0;
var guessesRemaining = 10;

// FUNCTIONS
//------------------------------------------------------------------------
// Computer randomly selects one word
var randomGuess = artistList[Math.floor(Math.random() * artistList.length)];
console.log(randomGuess);

// MAIN PROCESSES
//------------------------------------------------------------------------


// Declare variables for text that will be replaced within HTML
var winsText = document.getElementById("winsText");
var lettersGuessedText = document.getElementById("lettersGuessedText");
var numbersGuessedText = document.getElementById("numbersGuessedText");

// Dashes appear on the page based on the number of letters in the chosen word
var dashes = function createDashes() {
    for (i = 0; i < randomGuess.length; i++) {
        dash.push("-");
    }
    return dash; // Why do I need to return here?
}
console.log(dashes());

// User guesses and presses any letter key to start the game
document.onkeyup = function(event) {
    var userGuess = event.key;
// Searches for a correct letter within a random word (chosen by the computer)
    var correctLetter = artistList.indexOf(randomGuess);
// If the letter is in the word, a dash is replaced with the letter that was guessed 
        if (correctLetter != -1) {
        dash.push(correctLetter);
        } else { // Else, the letter appears in the "Letters Already Guessed" list
        guessedLetters.push(userGuess);
        }
        console.log(correctLetter);

// The number of guesses remaining decreases one number

}

// This function governs what happens when the user makes an incorrect guess (that they haven't guessed before)
function updateGuesses(letter) {
    if (guessedLetters.indexOf(letter) === -1 && lettersInWord.indexOf(letter) === -1) {
        this.guessLetters.push(letter);
        this.guessesRemaining--;

        document.querySelector("numbersGuessedText").innerHTML = guessesRemaining;
        document.querySelector("lettersGuessedText").innerHTML = guessedLetters.join(", ");
    }
}

