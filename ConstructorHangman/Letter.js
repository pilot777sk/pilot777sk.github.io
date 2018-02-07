console.log("this is the letter file");





// input letter and compare to word CONSTRUCTOR
var Letter = function(lttr) {
    this.lttr = lttr;
    this.appear = false;

    this.letterReveal = function() {
        if (this.lttr == ' ') {
            this.appear = true;
            return '  ';
        }
        if (this.appear === false) {
            return ' _ ';
        } else {
            return this.lttr;
        }

    };
};

// export to word.js
module.exports = Letter;




// create dictionary to randomly chooose the word to run through Letter.js constructor
