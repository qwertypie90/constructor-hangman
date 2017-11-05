var inquirer = require("inquirer");
var prompt = require("prompt");

var wordArray = ["hate", "loser", "text", "despacito", "goodbye", "frick"];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var answerArr = [];
var s;
var guessesLeft = 7;

// console.log(randomWord)

var prompt = function() {
    var that = this
    // if the length of the team array is 3 or higher, no more questions will be asked
    inquirer.prompt([{
        name: "play",
        type: "confirm",
        message: "Let's Play Hangman! RIGHT?"
    }]).then(function(answer) {
        if (answer.play) {
            start()
        } else {
            console.log("You're ugly AF");
        }
    })
}

function letter(letter) {
	// i legitimately have no idea what this function is supposed to do
	this.lets = "_"
}

function start() {
word()
// once the word is set - a function to listen for the user input

// if the letter the user input is the same as a letter in the word - then have that letter appear -- and back to listen for user input
// else -- guessesLeft counter -- and listen for user input

// if word === word then console.log("congrats you won!")
}


prompt()

