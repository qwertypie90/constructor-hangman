var Letter = require('letter.js');


function word() {
    for (var i = 0; i < randomWord.length; i++) {
        this.word = randomWord[i]
        console.log(this.word)
        // some function from the letter contructor function that will take the letters and turn them up on one line as _'s
        // another function here that will spit out the random word on one line instead of each line every time it loops
    }
}