
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD3A7JEpZSX0EYlwblXe5_M0R2x9dpDHpc",
    authDomain: "train-schedule-437fa.firebaseapp.com",
    databaseURL: "https://train-schedule-437fa.firebaseio.com",
    projectId: "train-schedule-437fa",
    storageBucket: "train-schedule-437fa.appspot.com",
    messagingSenderId: "838721837895"
};
firebase.initializeApp(config);

var dataRef = firebase.database();  

  // input submit button for addNewTrain
$("#addTrain").on("click", function(){
    event.preventDefault();
  //update Global variables from input fields
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destNameInput").val().trim();
  var frequency = $("#freqInput").val().trim();
  var timeInput = $("#trainTimeInput").val().trim();
  
  var arrival;
  var minAway;
  // New train Obeject placeholder
  var addNewTrain = {
    name: trainName,
    dest: destination,
    time: timeInput,
    freq: frequency,
    

  }
  // sending recently added input data up to firebase for storage
  dataRef.ref().push(addNewTrain);

  console.log(addNewTrain.name);
  console.log(addNewTrain.dest);
  console.log(addNewTrain.time);
  console.log(addNewTrain.freq);
  

   //clear input boxes
  $("#trainNameInput").val("");
  $("#destNameInput").val("");
  $("#trainTimeInput").val("");
  $("#freqInput").val("");
  
   
  

});  
     
 
dataRef.ref().on("child_added", function(childSnapshot){

// update global variables with last added train info

  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var timeInput = childSnapshot.val().time;
  var frequency = childSnapshot.val().freq;
  

  console.log(trainName);
  console.log(destination);
  console.log(timeInput);
  console.log(frequency);

// moment time inputs and conversions

  var actual = moment().format("HH:mm");
  console.log(actual);
  var timeConverted = moment(timeInput, "hh:mm").subtract(1, "years");
  console.log(timeConverted);

  var differenceCov = moment().diff(moment(timeConverted), "minutes");

  var nextToGo = differenceCov % frequency;
  console.log(nextToGo);

  var timeToGo = frequency - nextToGo;

  var arrival = moment().add(timeToGo, "minutes").format("HH:mm");
  console.log(arrival);




  $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td><td>" + arrival + "</td><td>" + timeToGo + "<td></tr>");
});
  



