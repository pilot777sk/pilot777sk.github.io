
$(document).ready(function(){
    $("#submit").hide();
    $(".start-Button").click(function() {
        $(".start-Button").hide();
        $(".start-Question").show();
        let audio = new Audio('assets/audio/the_star_spangled_banner_64kb.mp3');
      
        // countdown timer
        var number = 30;
        var intervalId;
        
        var questions = {
            questionsArray: [{
                question: "What year was Bill Clinton impeached?",
                a: "1999",
                b: "2000",
                c: "1998",
                d: "1997",
             },
             {
              question: "When did the Iraq war start?",
              a: "2003",
              b: "2005",
              c: "2001",
              d: "2004",
             },
            {
              question: "What year was Washington George Washington is elected president?",
              a: "1789",
              b: "1776",
              c: "1779",
              d: "1783",
             },
             {
              question: "When was the United States Postal Service created?",
              a: "1775",
              b: "1892",
              c: "1790",
              d: "1783",
             },
             {
              question: "who was the longest serving president?",
              a: "FDR Roosevelt ",
              b: "Jackson",
              c: "G. Bush",
              d: "Jefferson",
             },
             {
              question: "How many US Aircraft Carriers Sunken in World War 2 ?",
              a: "12",
              b: "6",
              c: "7",
              d: "4",
            }]
        };

        function run() {
            intervalId = setInterval(decrement, 1000);
            function decrement() {
                audio.play();
                number--;
                $("#submit").show();
                $("#count").html("<h2>" + number + "</h2>");
                if (number === 0) {
                    audio.pause();
                    stop();

                    alert("Time Up!");
                }
            }
            function stop() {
                clearInterval(intervalId);
            }
        }

        for(var i = 0; i < questions.questionsArray.length; i++){
            $("#questionQ").append("<div>" + questions.questionsArray[i].question + "</div><br>"
            + "<div><form><label class='radio-inline'><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].a + " id = 'disable1' " + i + ">" + questions.questionsArray[i].a + "</label></form></div>"
    
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].b + " id = 'disable2' " + i + ">" + questions.questionsArray[i].b + "</div>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].c + " id = 'disable3' " + i + ">" + questions.questionsArray[i].c + "</div>"
            + "<div><input type = 'radio' name = " + i + " value = " + questions.questionsArray[i].d + " id = 'disable4' " + i + ">" + questions.questionsArray[i].d + "</div><br>"
        );}

        $("#submit").click(function(){
            function answerKey(){
                var answers = {
                    answersArray:
                    [{answer0: "1999"},
                    {answer1: "2003"},
                    {answer2: "1789"},
                    {answer3: "1775"},
                    {answer4: "FDR Roosevelt"},
                    {answer5: "12"}]
                };
                var clickA = $("#disable1").click(function(){console.log($(this).attr("checked", true).val());});
                var clickB = $("#disable2").click(function(){console.log($(this).attr("checked", true).val());});
                var clickC = $("#disable3").click(function(){console.log($(this).attr("checked", true).val());});
                var clickD = $("#disable4").click(function(){console.log($(this).attr("checked", true).val());});
                if( clickA === answers.answersArray.answer0){
                    console.log("correct");
                }
                else if ( clickA != answers.answersArray.answer0){
                    console.log("incorrect");
                }
            }
            answerKey();
            
        });

        // Run the functions after start button click
        run();
    })


})


