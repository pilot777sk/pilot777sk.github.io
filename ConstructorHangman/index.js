// conneted with Letter.js
var Word = require('./Word.js');
var prompt = require('prompt');

console.log('USA States Hangman game');
console.log('Try to guess the Letters');
console.log('==============')
// Create an input prompt
// "Play" starts  game
prompt.start();

// The word bank should be an Oject
States = {
		wordBank:['michigan', 'ohio', 'washington', 'florida', 'texas', 'georgia', 'iowa', 'hawaii','alaska', 'idaho', 'colorado','oregon'],
        correct: 0,
        tries: 10,
        selectWord: null, 
// Generate random word form the wordBank-Random words to guess.
        startGame: function (newWord) {
        	this.resetTries();
        	this.selectWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]),
        	this.selectWord.processWord(),
        	this.promptUser();
		},
		resetTries: function(){
			this.tries = 10;

		},  
		promptUser: function(){
			var player = this;
			prompt.get(['guessedLetter'], function(err, result){
				console.log("you gussed:" + result.guessedLetter);
				var totalGuessed = player.selectWord.checkGuess(result.guessedLetter);


			if (totalGuessed == 0) {
				console.log("Incorrect");
				player.tries--;

			} else {
					console.log("correct");
					if(player.selectWord.checkGuess()){
						console.log("Winner");
						console.log('==============');
						return;
					}

			}
			console.log('Remaining Tries:' + player.tries);
			console.log('==============');
			if((player.tries>0)&& (player.selectWord.beenFound == false)){
					player.promptUser();

			}
			else if(player.tries == 0){
				console.log('Its Over', player.selectWord.chosenWord);

			}else{
				console.log(player.selectWord.wordReveal());
			}
		


		});

	}

};

States.startGame();










// Displays current word as blanks


// Key prompt to input Letter


// Check Letter against current word array,
// if a match push correct letter guessed array and reveal correct letter
// if not a match iterate guesses ++ and push guessed array



// Key prompt to choose another Letter

// If all letters match won


// 	Display the remaining guesses 


// if all guesses used loss