// Create an array of words
var artistList = ["Picasso", "Rothko", "Pollock", "Warhol", "Monet", "Degas"]; 

// Create an empty array of dashes
var dash = [];

// Create an empty array of guessed letters
var guessedLetters = [];

// Computer randomly selects one word
var randomGuess = artistList[Math.floor(Math.random() * artistList.length)];
console.log(randomGuess);

// Declare variables for text that will be replaced within HTML
var winsText = document.getElementById("winsText");
var lettersGuessedText = document.getElementById("lettersGuessedText");
var numbersGuessedText = document.getElementById("numbersGuessedText");

// Declare variables to hold the number of wins and guesses remaining
var wins = 0;
var guessesRemaining = 10;

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
        if (correctLetter != -1) {
        dash.push(correctLetter);
        // correctLetter = artistList.indexOf(element, correctLetter + 1);
        } else {
        guessedLetters.push(userGuess);
        }

        console.log(dash);

}

// The number of guesses remaining decreases one number
// If the letter is in the word, a dash is replaced with the letter that was guessed 
// Else, the letter appears in the "Letters Already Guessed" list
// The user presses another letter key
// The above steps are repeated UNTIL
// All letters have been guessed and the user wins
// Else, the user runs out of remaining guess and they lose
// If the user wins, the page resets
// If the user loses, alert "You lost!"

// This might search for a letter:

// var indices(dash) = [];
// var array(artistList) = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element(randomGuess) = 'a';
// var (ids)correctLetter = artistList.indexOf(randomGuess);
// while (correctLetter != -1) {
//   dash.push(correctLetter);
//   correctLetter = artistList.indexOf(element, correctLetter + 1);
// }
// console.log(dash);