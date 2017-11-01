var alpha = "abcdefghijklmnopqrstuvwxyz";
var randomLetter = alpha[Math.floor(Math.random() * alpha.length)]
var numGuess = 9;

var wins = 0;
var losses = 0;
var guessedLetter = [];



document.onkeyup = function(event) {



    var userGuess = event.key;
    guessedLetter.push(userGuess);

    var computerLetter = randomLetter

    if (userGuess == computerLetter) {
        wins++;
        numGuess = 9;
        guessedLetter = [];

    }

    else {

        numGuess--;
    }

    if (numGuess == 0) {
        losses++;
        numGuess = 9;
        guessedLetter = [];

    }









    var html =
        "<h1>Psychic Game!</h1>" +

        "<p>Guess what I'm thinking of</p>" +
        "<p>Wins:" + wins + "</p>" +
        "<p>Losses:" + losses + "</p>" +
        "<p>Guesses left:" + numGuess + "</p>" +
        "<p>Your guesses so far:" + guessedLetter.join(", ") + "</p>"


    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;
}
