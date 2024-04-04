let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence(){
    let  randomNumber = Math.floor(Math.random()*4);
    let randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);
       
    return  randomChosenColor;
}


console.log(nextSequence());
console.log(gamePattern);
