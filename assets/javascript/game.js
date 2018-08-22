var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 10;
var userGuess = "";
var compGuess = "";

var compGuess = letters[Math.floor(Math.random() * letters.length)] 

console.log(compGuess);


document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase(); 
}
    console.log(userGuess);


document.onkeyup = function(event) {
    var userGuess = event.key;

    if(userGuess === compGuess){
        wins++;
    }else{
        guesses--;
    }

    if(guesses = 0){
        losses++
    }


document.getElementById('wins').innerHTML =  wins;
document.getElementById('losses').innerHTML =  losses;
document.getElementById('guesses').innerHTML =  guesses;
}


resetButton = function (onclick) {
    guesses = 10;
    userGuess = "";
    compGuess = "";
}


