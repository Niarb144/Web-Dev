let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

function nextSequence(){
    let  randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
    makeSound(randomChosenColor);
    
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

nextSequence();
console.log(gamePattern);

