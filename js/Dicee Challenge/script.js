let randomNumber1 = Math.floor((Math.random()*6));
let dice =['dice1', 'dice2', 'dice3', 'dice4', 'dice5', 'dice6'];

let player1 = document.querySelector("img").getAttribute("src");
document.querySelector("img").setAttribute("src", "./images/" + dice[randomNumber1] + ".png");

console.log(randomNumber1); 