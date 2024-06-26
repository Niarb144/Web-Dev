let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

$(document).one("keypress", function(event){
    console.log("Key has been pressed to start the game");
    nextSequence();
});

function nextSequence(){
    userClickedPattern = [];

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

    checkAnswer(userClickedPattern.length-1);
});

// sound
function makeSound(sound){
    var audio = new Audio("./sounds/" + sound + ".mp3");
    audio.play();
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("The two values are " + gamePattern + " " + userClickedPattern);

        if (userClickedPattern.length === gamePattern.length){
            // Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
              nextSequence();
            }, 1000);
    
          }
    }
    else{
        console.log(" Wrong button");
        let sound = new Audio("./sounds/wrong.mp3");
        makeSound(sound);
        gameOver();
    }
}

function gameOver(){
    $(document).addClass("game-over");
        setTimeout(function(){
            $(document).removeClass("game-over");
        }, 200);
    
    $("h1").text("Game Over. Press any key to restart");
    
    $(document).one("keypress", function(){
        location.reload();
    })
}

console.log(gamePattern);


