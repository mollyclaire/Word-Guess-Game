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

function start() {
    // Resets the guesses back to 0
    guessesRemaining = 10;

    // A word is chosen randomly from the artistList array
   chosenWord = artistList[Math.floor(Math.random() * artistList.length)];
   console.log(chosenWord);

    // The word is broken down into letters
   lettersinChosenWord = chosenWord.split(""); 

   // The .length property here will tell us how many letters/blanks are in the word
   numBlanks = lettersinChosenWord.length; 

   // Reset both arrays from potential previous round
   dashesAndLetters = [];
   wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    dashesAndLetters.push("_");
  }
}
start() 


// MAIN PROCESSES
//------------------------------------------------------------------------




