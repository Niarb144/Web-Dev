let randomNumber1 = Math.floor((Math.random()*6));
let randomNumber2 = Math.floor((Math.random()*6));
let dice =['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];

let player1 = document.getElementById("player1").getAttribute("src");
document.getElementById("player1").setAttribute("src", "./images/" + dice[randomNumber1] + ".png");

let player2 = document.getElementById("player2").getAttribute("src");
document.getElementById("player2").setAttribute("src", "./images/" + dice[randomNumber2] + ".png");

if(randomNumber1 > randomNumber2){
    let message = document.querySelector("h1").innerHTML = "Player 1 Wins!";
    console.log("Player 1 wins");
}
else if( randomNumber2 > randomNumber1){
    let message = document.querySelector("h1").innerHTML = "Player 2 Wins!";
    console.log("Player 2 wins");
}
else if( randomNumber1 === randomNumber2){
    let message = document.querySelector("h1").innerHTML = "Draw";
    console.log("Draw");
}

console.log(dice[randomNumber1]); 
console.log(dice[randomNumber2]);