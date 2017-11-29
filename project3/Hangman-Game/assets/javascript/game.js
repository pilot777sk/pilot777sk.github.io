window.onload = function () {

  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  //var categories;         
  var words ;
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'
  var gamesPlayed = 0;    //played
  var gamesWon = 0;       // won score
  // Get elements
  var showLives = document.getElementById("mylives");
  var showGames = document.getElementById("scores");
  var showWins = document.getElementById("wins");


  // create alphabet ul
  function buttons() {
    myButtons = document.getElementById("buttons");
    letters = document.createElement("ul");

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = "alphabet";
      list = document.createElement("li");
      list.setAttribute('class', 'letter')
      list.id = "letter-" + alphabet[i];
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
       
    }
  }
   //'pick ramdom word' 

  var words =["turkey", "dinner", "family", "friends", "ham"]

  // Create geusses ul
  function result() {
    wordHolder = document.getElementById("hold");
    correct = document.createElement("ul");
    sound = document.getElementById("myAudio")
    sound.play();
    for (var i = 0; i < word.length; i++) {
      correct.setAttribute("id", "my-word");
      guess = document.createElement("li");
      guess.setAttribute("class", "guess");
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
  // Show lives
  function comments() {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      
      //showScore();
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        var won = true;
    
      }
    }
    if (won == true){
      gamesWon++;
    }
  }
 
  /// OnClick Function
  function check() {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      processUserInput(guess);

    }
  }  

  function processUserInput(letterPicked) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] === letterPicked) {
        guesses[i].innerHTML = letterPicked;
        counter += 1;
      } 
    }
    var j = (word.indexOf(letterPicked));
    if (j === -1) {
      lives -= 1;
      comments();
    
    } else {
      comments();
    }
    playSound();
    // End of code to be stripped out to new function
  }     


  // This is the keypress listener
  document.onkeyup = function(event) {
      var key = event.key.toLowerCase();
      document.getElementById("letter-"+key).setAttribute("class", "active");
      document.getElementById("letter-"+key).onclick = null;

      processUserInput(key);
      // process all the things
  }

  
  function playSound(){
      var sound = document.getElementById("myAudio");
      sound.play();
  }

  function showScore(){
      showGames.innerHTML = "Games Played: " + gamesPlayed;
      showWins.innerHTML = "Games Won: " + gamesWon;
  }
    
  // Play
  play = function () {

    word = words[Math.floor(Math.random() * words.length)];
    wordNew = word.replace(/\s/g, "-");
    console.log(word);
    buttons();
    guesses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    showScore();
    gamesPlayed ++;     
  } 

  play();
  

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
   
    play();
  }

}