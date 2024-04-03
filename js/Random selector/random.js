let names = ["Brogomere", "Charlton", "Barrastone"];
position = Math.floor(Math.random()*3);
console.log(names[position]);

document.querySelector("h1").innerHTML = names[position] + " will open the gate.";
document.querySelector("ol").style.display = "none";


// for(let n = 0; n <= names.length; n++){
//     position = Math.floor(Math.random()*3);
//     console.log(names[position]);
// }