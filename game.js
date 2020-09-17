var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var level=0;

//start the game by key press
$(document).one("keypress",function(event){
  nextSequence(event);
  $("#level-title").html("LEVEL"+level);

})

function nextSequence() {
  level++;
    $("#level-title").html("LEVEL"+level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  playsound(randomChosenColour);
animatePress(randomChosenColour);
}

$(".btn").on("click", function() {
  var userChosenColour = this.id;
  console.log(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

  playsound(userChosenColour);
  animatePress(userChosenColour);
});



function playsound(name){
  //audio
  switch (name) {
    case "green":
      var greenAudio = new Audio("sounds/green.mp3");
      greenAudio.play();
      break;

    case "blue":
      var blueAudio = new Audio("sounds/blue.mp3");
      blueAudio.play();

    case "yellow":
    var yellowAudio = new Audio("sounds/yellow.mp3");
    yellowAudio.play();

    case "red":
      var redAudio = new Audio("sounds/red.mp3");
      redAudio.play();

    default:
      console.log("no audio");
  }
}
//  ANIMATION
function animatePress(currentColour){

  $("."+currentColour).addClass("pressed");
  setTimeout(function(){
    $(".btn").removeClass("pressed")
  }, 100);
  console.log("100");
}

function checkAnswer(currentLevel){
  if (userClickedPattern.length= gamePattern.length){
    console.log("Success")
  }
  else{
    console.log("Failure")
  }
}






// buttonColours=["red","blue","green","yellow"];
// gamePattern=[];
// function nextSequence(){
//   var randomNumber=Math.floor(Math.random()*4);
//   var randomChosenColour=buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//   // use Jquery to select button and have the same Id as that of the randomChosenColour
//
//   $(".randomChosenColour").click(fumction(){
//     $(".randomChosenColour").addClass("flash");
//     setTimeOut(function(){
//       $(".randomChosenColour").removeClass("flash");
//     },200);
//   });
//
//
//
//
// }
