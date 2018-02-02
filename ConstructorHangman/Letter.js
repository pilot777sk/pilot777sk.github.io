// contstructor for underlying character or place holder
console.log("this is the letter file");

Letter.prototype.prntReveal = function prntReveal() {
    if (this.show) {
        return this.letter;
    } else {
        return '_';
    }
};

// compair letter input to blank space
function Letter(letter) {
    this.letter = letter;
    if (this.letter == ' ') {
        this.show = true;
    } else {
        this.show = false;

    }
}


module.exports = {
    Letter
};