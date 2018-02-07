// conneted with Letter.js
var Letter = require('./Letter.js');



//collection of letter from word
function Word(chosenWord) {
    this.chosenWord = chosenWord;
    this.abcArray = [];
    this.beenFound = false;

    this.processWord = function() {
        // process the chosen word into an array
        for (var i = 0; i < this.chosenWord.length; i++) {
            var newLetter = new Letter(this.chosenWord[i]);
            this.abcArray.push(newLetter);
            //console.log(this.abcArray);
        }
    };

    //Current word reveal 
    this.letSolved = function() {
        this.beenFound = this.abcArray.every(function(letter) {
            return letter.appear; // "appear" is defind in Letter.js
        });
        return this.beenFound; //true

    };
    //if guessLetter matches Letter, the letter should be displayed
    //iterates through each letter to see if it matches the guessed letter
    this.checkGuess = function(guessedLetter) {
        var guesses = 0;
        for (var i = 0; i < this.abcArray.length; i++) {
            if (this.abcArray[i].lttr === guessedLetter) {  // "lttr is defind in Letter.js"
                this.abcArray[i].appear = true;  // "appear" is defind in Letter.js
            	
                guesses++;
            }
				
        }
        return guesses;
		
    };

    // reveal-render the word based on if letters are found 
    this.wordReveal = function() {
        var display = '';
        for (var i = 0; i < this.abcArray.length; i++) {
            display += this.abcArray[i].letterReveal();
        }
        return display;
    };
}
//var test = new Word ('case');
//test.processWord();
//test.checkGuess(process.argv[2]);


//console.log(test.chosenWord);



module.exports = Word;