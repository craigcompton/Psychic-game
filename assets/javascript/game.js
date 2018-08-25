// establishing the variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var userGuess;
var compGuess;
var lettersGuessed = [];

// loading the functions? I thought that was I was trying to do, but .....  well.  It doesn't work.

reset();
show();

// this is where the user was to press a key and then it was to appear on the page, but it doesn't.

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
 
    console.log(userGuess);

    if (userGuess === compGuess) {
        win();
    } else if (guesses === 0) {
        lose();
    } else {
        wrong();
    }
    show();
}

// the function 'show()' was suppsed to update the html, but nothing appears no the page.

function show() {
document.getElementById("wins").appendChild;
document.getElementById("losses").appendChild;
document.getElementById("guesses").appendChild;
document.getElementById("lettersGuessed").appendChild;

}

// when the user pressed a key 'win()' was supposed iterate  

function win() {
wins++;
reset();
}

// same with 'lose()'

function lose() {
losses++;
reset();
}

// 'wrong(letter)' was supposed tally the guesses, show the guesses on the web page, but it just populates the array with 'undefined' 

function wrong(letter) {
guesses--;
lettersGuessed.push(userGuess);
console.log(userGuess);
console.log(lettersGuessed);
}

function reset() {
guesses = 10;
lettersGuessed = [];
compGuess = letters[Math.floor(Math.random() * letters.length)];
console.log("The letter is: " + compGuess);
}

