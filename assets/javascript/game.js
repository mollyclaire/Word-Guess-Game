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
   lettersInChosenWord = chosenWord.split(""); 
   console.log(lettersInChosenWord);

   // The .length property here will tell us how many letters/blanks are in the word
   numBlanks = lettersInChosenWord.length; 

   // Reset both arrays from potential previous round
   dashesAndLetters = [];
   wrongGuesses = [];

    // A dash is created (or pushed into the dashesAndLetters array) for every number that is held in numBlanks
    for (var i = 0; i < numBlanks; i++) {
    dashesAndLetters.push("_");
    }
    // console.log(dashesAndLetters);

    // Rendering to the page here!
    document.getElementById('guesses-left').innerHTML = guessesRemaining;
    // The .join method here will create blank spaces (and not commas) between the letters
    document.getElementById('word-blanks').innerHTML = dashesAndLetters.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

}

function compareLetters(letter) {
    console.log(lettersInChosenWord)
    // Boolean to test whether the letter exists in the chosen word or not
    var letterInWord = false;

    // Loop through the word to see if the letter exists at all
    for (var i=0; i < numBlanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;
        }
    }
    
    // If the letter is there, replace the dash in the dashesAndLetters array with the letter
    if (letterInWord) {
        for (var j=0; j < numBlanks; j++) {
            if (chosenWord[j] === letter) {
                dashesAndLetters[j] = letter;
            }
        }
    }
    
    // If the letter is not in the word, push that letter in the wrongGuesses array and decrease number of guesses left
    else {
        wrongGuesses.push(letter);
        guessesRemaining--;
    }
}

function roundComplete() {

    console.log("Dashes and Letters:" + dashesAndLetters)
    console.log("Letters in Chosen Word:" + lettersInChosenWord)
    // Update the HTML to reflect the new number of guesses. Also update the correct guesses.
  document.getElementById("guesses-left").innerHTML = guessesRemaining;
  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = dashesAndLetters.join(" ");
  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

   // If we have gotten all the letters to match the solution...
   if (lettersInChosenWord.toString() === dashesAndLetters.toString()) {
    // ..add to the win counter & give the user an alert.
    wins++;
    alert("You win!");

    // Update the win counter in the HTML & restart the game.
    document.getElementById("win-counter").innerHTML = wins;
    start();
  }

    // If we've run out of guesses..
    else if (guessesRemaining === 0) {
        // Add to the loss counter.
        losses++;
        // Give the user an alert.
        alert("You lose");
    
        // Update the loss counter in the HTML.
        document.getElementById("loss-counter").innerHTML = losses;
        // Restart the game.
        start();
      }
}


// MAIN PROCESSES
//------------------------------------------------------------------------
start();

// If a user presses a key...
document.onkeyup = function(event) {
    // and that key is a letter...
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      // The toLowerCase method will change any letter pressed to lower case
      var letterGuessed = event.key.toLowerCase();
      // The letter is then run through the compareLetters function
      compareLetters(letterGuessed);

      // Runs the code after each round is done.
      roundComplete();
    }
  };



