$(document).ready(function() {
    // GLOBAL VARIABLES
    var showGame = $("#visibleGame");
    var showEndGame = $("#visibleEndGame");
    var time = 50;
    var intervalId;
  
    // COUNTERS
    var correct = 0;
    var incorrect = 0;
   
  
    // BUTTON ACTIONS
    $("#startGame").on("click", function() {
      startGame();
    })
  
    $("#doneGame").on("click", function() {
      doneGame();
    })
  
    // BEGIN GAME
    function startGame() {
    
      $("#startGame").replaceWith(showGame);
      // timer start
      intervalId = setInterval(function() {
        time--;
        $("#timer").html("Time Remaining: " + time);
        if (time == 0) {
          doneGame();
        }
      }, 1000);
    }
  
    // END GAME
    function doneGame() {
  
      clearInterval(intervalId);
  
      if ($("#correct1").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      if ($("#correct2").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      if ($("#correct3").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      if ($("#correct4").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      if ($("#correct5").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      if ($("#correct6").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      if ($("#correct7").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      if ($("#correct8").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }

      if ($("#correct9").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }

      if ($("#correct10").prop("checked")) {
        correct++;
      } else {
        incorrect++;
      }
  
      // score at the end
      $("#visibleGame").replaceWith(showEndGame);
      $("#correct").html(correct);
      $("#incorrect").html(incorrect);
    }


    var myAudio = new Audio("The Simpsons.mp3");
    myAudio.play();
  
  
  });