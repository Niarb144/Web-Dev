let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence(){
    let  randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
       
    return  randomChosenColor;
}

function buttonAnimation(button){
    $("#"+button).animate({
        opacity: 0.5
    });
}

$(".btn").on("click", function(event){
    var index = $(".btn").index(this);
    var buttonType = $(".btn")[index].id;
    console.log(buttonType + " button clicked whose index number is " + index);  

    makeSound(buttonType);
    buttonAnimation(buttonType);

    
});

// sound
function makeSound(buttonType){
    switch(buttonType){
        case "green" :
            var green = new Audio('./sounds/green.mp3');
            green.play();
            break;
        case "red" :
            var red = new Audio('./sounds/red.mp3');
            red.play(); 
            break;

        case "yellow" :
            var yellow = new Audio('./sounds/yellow.mp3');
            yellow.play(); 
            break;

        case "blue" :
            var blue = new Audio('./sounds/blue.mp3');
            blue.play();
            break;

        default : 
            var wrong = new Audio('./sounds/wrong.mp3');
            wrong.play();
            break;
    }
}



console.log(nextSequence());
console.log(gamePattern);


