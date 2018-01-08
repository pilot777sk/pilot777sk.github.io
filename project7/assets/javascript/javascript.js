
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3A7JEpZSX0EYlwblXe5_M0R2x9dpDHpc",
    authDomain: "train-schedule-437fa.firebaseapp.com",
    databaseURL: "https://train-schedule-437fa.firebaseio.com",
    projectId: "train-schedule-437fa",
    storageBucket: "",
    messagingSenderId: "838721837895"
  };
  firebase.initializeApp(config);
  //Global variables
  var dataRef = fireBase.database();

  var trainName = "";
  var destination = "";
  var trainTime = "";
  var frequency = "";
  var arrival = "";
  var minAway = "";

  // input data button click

  $("addTrain").on("click", function(event){
    event.preventDefault();

  // sending recently added input data up to firebase for storage

  trainName = $("#trainNameInput").val().trim();
  destination = $("#destNameInput").val().trim();
  trainTime = moment($("#trainTimeInput").val().trim() "HH:mm").format(x);
  frequency = $("#freqInput").val().trim();


  dataRef.ref().push({
    Train Name: trainName,
    Destination: destination,
    Time: trainTime,
    Frequency: frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
 
dataRef.ref().on("child_added", function(childSnapshot){
  console.log(childSnapshot.val().trainName);
  console.log(childSnapshot.val().destination);
  console.log(childSnapshot.val().trainTime);
  console.log(childSnapshot.val().frequency);
  });
  //clear input boxes
  $("#trainNameInput").val("");
  $("#destNameInput").val("")
  $("#trainTimeInput").val("")
  $("#freqInput").val("")


  $("#train-table > tbody").append("<tr><td>" + trainName + "<tr><td>" + destination + "<tr><td>" + trainTime + "<tr><td>" + trainTime + "<tr><td>");

  
});



