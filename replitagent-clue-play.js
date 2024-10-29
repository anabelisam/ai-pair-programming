const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define the list of words
const words = ["apple", "banana", "orange", "grape", "watermelon"];

// Select a random word from the list
let wordToGuess = words[Math.floor(Math.random() * words.length)];

// Initialize the game state
let guessesAllowed = 6;
let guessesMade = [];
let correctGuesses = 0;

// Create the display string with underscores for each letter in the word
let displayString = "_".repeat(wordToGuess.length);

// Function to get the user's guess
function getGuess() {
  readline.question("Guess a letter: ", (guess) => {
    // Validate the guess (make sure it's a single letter)
    while (guess.length !== 1 || !isNaN(guess) || guessesMade.includes(guess)) {
      readline.question("Please enter a single letter you haven't guessed yet: ", (newGuess) => {
        guess = newGuess;
      });
    }

    // Check if the guess is correct
    let isCorrect = checkGuess(guess);

    // Update the game state
    updateGameState(guess, isCorrect);

    // Display the current state of the game
    displayGameState();

    // Continue playing the game
    playGame(); // Call playGame again after the guess
  });
}

// Function to check if the guess is correct
function checkGuess(guess) {
  let isCorrect = false;
  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === guess) {
      isCorrect = true;
      correctGuesses++;
      displayString = displayString.substring(0, i) + guess + displayString.substring(i + 1);
    }
  }
  return isCorrect;
}

// Function to update the game state
function updateGameState(guess, isCorrect) {
  // Add the guess to the list of guesses made
  guessesMade.push(guess);

  // Update the number of guesses allowed
  if (!isCorrect) {
    guessesAllowed--;
  }
}

// Function to display the current state of the game
function displayGameState() {
  // Display the current word with revealed letters
  console.log("Word: " + displayString);

  // Display the number of guesses remaining
  console.log("Guesses remaining: " + guessesAllowed);

  // Display the user's previous guesses
  console.log("Guesses made: " + guessesMade.join(", "));
}

// Function to handle the end of the game
function endGame(isWon) {
  if (isWon) {
    console.log("Congratulations, you guessed the word!");
  } else {
    console.log("You ran out of guesses! The word was: " + wordToGuess);
  }
  // Prompt the user to play again
  if (confirm("Play again?")) {
    resetGame();
    playGame(); // Start a new game if the user wants to play again
  } else {
    console.log("Thanks for playing!");
  }
}

// Function to reset the game state
function resetGame() {
  // Select a new random word
  wordToGuess = words[Math.floor(Math.random() * words.length)];

  // Reset the game state variables
  guessesAllowed = 6;
  guessesMade = [];
  correctGuesses = 0;

  // Create a new display string with underscores
  displayString = "_".repeat(wordToGuess.length);
}

// Start the game
function playGame() {
  displayGameState();
  if (guessesAllowed > 0 && correctGuesses < wordToGuess.length) {
    getGuess(); 
  } else {
    endGame(correctGuesses === wordToGuess.length);
  }
}

playGame();