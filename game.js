//Random actions performed by the GAME ITESELF
buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(document).on("keypress", function() {
  if (!started) {
    $("h1").text("level " + level);
    nextSequence();
    started = true;
  }
});

// Actions performed by the PLAYER
$(".btn").on("click", function() {
  var userChosenColour = $(this).attr("id"); // 'this' will not come in ""
  userClickedPattern.push(userChosenColour);
  playsound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});
// Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
// You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress
// Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel) {
  //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.


  if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success")
    if (userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000)
    }
  }
  else
  {
    console.log("wrong");
    playsound("wrong"); // Functions can take strings as input
    $(document.body).addClass("game-over");
    setTimeout(function(){
      $(document.body).removeClass("game-over");
    },200)
    // Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $("h1").text("Game Over, Press Any Key to Restart")
    startOver();
  }
}


// Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.

function nextSequence() {
  userClickedPattern=[];
  level++;
  $("h1").text("level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour);

  //Animate flash in random Chosen buttonColours
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  // Add the sound in the randomly selected buttonColours
  playsound(randomChosenColour);
  // OR level+=1;
}

// RESTART THE GAME
// Create a new function called startOver()
function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}


function playsound(name) {
  var audio = new Audio("sounds/" + name + '.mp3');
  audio.play();
}
// Add Animations to User Clicks
function animatePress(currentColour) {
  $("." + currentColour).addClass("pressed");
  setTimeout(function() {
    $("." + currentColour).removeClass("pressed");
  }, 100);
}
