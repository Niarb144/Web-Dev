let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

$(document).one("keypress", function(event){
    console.log("Key has been pressed to start the game");
    nextSequence();
});

function nextSequence(){
    level++;
    $("#level-title").text("Level " + (level));
    let  randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    makeSound(randomChosenColor);
    buttonAnimation(randomChosenColor);
    
    console.log(randomChosenColor);
}

// Button Animation
function buttonAnimation(button){
    $("#"+button).animate({
        opacity: 0.5
    });

    $("#"+button).animate({
        opacity: 1.0 
    });   
    
}

// Button click event
$(".btn").on("click", function(){
    var index = $(".btn").index(this);
    var buttonType = $(".btn")[index].id;
    console.log(buttonType + " button clicked whose index number is " + index); 
    checkAnswer(buttonType); 

    userClickedPattern.push(buttonType);
    console.log(userClickedPattern);

    makeSound(buttonType);
    buttonAnimation(buttonType);    
});

// sound
function makeSound(sound){
    var audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel){
    if (currentLevel === gamePattern[0]){
        alert("Success");
    }
    else{
        alert(" Wrong");
    }
}

console.log(gamePattern);


