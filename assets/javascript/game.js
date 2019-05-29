// Create an array of words
var artistList = ["Picasso", "Rothko", "Pollock", "Warhol", "Monet", "Degas"];
// Computer randomly selects one word
var randomGuess = artistList[Math.floor(Math.random() * artistList.length)];
console.log(randomGuess);
// Dashes appear on the page based on the number of letters in the chosen word
var dash = [];
var dashes = function createDashes() {
    for (i = 0; i < randomGuess.length; i++) {
        dash.push("-");
    }
    return dash;
}
console.log(dashes());
// User guesses and presses any letter key to start the game
    // The number of guesses remaining decreases one number
// If the letter is in the word, a dash is replaced with the letter that was guessed 
// Else, the letter appears in the "Letters Already Guessed" list
// The user presses another letter key
    // The above steps are repeated UNTIL
// All letters have been guessed and the user wins
// Else, the user runs out of remaining guess and they lose
// If the user wins, the page resets
// If the user loses, alert "You lost!"

