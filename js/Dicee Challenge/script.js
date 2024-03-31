let randomNumber1 = Math.floor((Math.random()*6));
let randomNumber2 = Math.floor((Math.random()*6));
let dice =['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];

let player1 = document.getElementById("player1").getAttribute("src");
document.getElementById("player1").setAttribute("src", "./images/" + dice[randomNumber1] + ".png");

let player2 = document.getElementById("player2").getAttribute("src");
document.getElementById("player2").setAttribute("src", "./images/" + dice[randomNumber2] + ".png");

console.log(randomNumber1); 
console.log(randomNumber2);