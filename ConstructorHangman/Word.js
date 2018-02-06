// conneted with Letter.js
var Letter = require('./letter.js');

//Random words to guess.
function newWord() {
    this.wordArr = ['MICHIGAN','OHIO','WASHINGTON','FLORIDA','TEXAS','GEORGIA','IOWA','HAWAII',
    'ALASK','IDAHO','COLORADO','','OREGON'],
    this.randNum = Math.floor(Math.random() * wordArr.length ),
    this.chosenWord = wordArr[randNum],
};






//collection of letter from word
function Word(chosenWord) {
  this.chosenWord = chosenWord;  
  this.abcArray = [];
  this.beenFound = false;

  this.processWord = function() {
    // process the chosen word into an array
    for(var i = 0; i<this.chosenWord.length; i++){
      var newLetter = new Letter(this.chosenWord[i]);
      this.abcArray.push(newLetter);
    }
  };

  //Current word reveal 
  this.wordSolved = function() {
    if(this.abcArray.every(function(letter){
      return letter.appear === true;
    })){
      this.beenFound = true;
      return true;
    }
  };
	//if guessLetter matches Letter, the letter should be displayed
	//iterates through each letter to see if it matches the guessed letter
  this.checkGuess = function(guessedLetter) {
    var guesses = 0;    
    this.abcArray.forEach(function(letter){
      if(letter.lttr === guessedLetter){
        letter.appear = true;
        guesses++;
      }
    })
    return guesses;
  };

  // reveal-render the word based on if letters are found 
  this.wordRender = function() {
    var display = '';
    this.abcArray.forEach(function(letter){
      var currentLetter = letter.letterRender();
      display+= currentLetter;
    });
    return display;
  };
}

module.exports = Word;