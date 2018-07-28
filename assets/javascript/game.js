var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var computerGuess = [];


window.onload = function() {
  var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess);
  console.log(computerGuess[0]);
}

document.onkeyup = function(event) {
  var playerGuess = event.key;
  guessedLetters.push(playerGuess);
  console.log(computerGuess[0]);

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
  wins++;
  guessesLeft = 9;
  guessedLetters.length = 0;
  computerGuess.length = 0;
  var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess);
  console.log(computerGuess[0]);
}

else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
  guessesLeft = guessesLeft-1;
}

else {
  losses++;
  guessesLeft = 9;
  guessedLetters.length = 0;
  computerGuess.length = 0;
  var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  computerGuess.push(compGuess);
  console.log(computerGuess[0]);
}

var html = "<p>Guess what letter I'm thinking of</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses Left: " + guessesLeft + "</p>" +
          "<p>Your Guesses so far: " + guessedLetters + "</p>";
 
document.querySelector("#game").innerHTML = html;

}