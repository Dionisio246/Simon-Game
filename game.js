var buttonColors = ['sq-green', 'sq-yellow', 'sq-red', 'sq-blue'];
var gamePattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 3);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("." + randomChosenColor).addClass("square-highlight");
}

nextSequence();