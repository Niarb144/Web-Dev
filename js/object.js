// Constructor Function
function Bellboy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var bellBoy1 = new Bellboy("Timmy", 19, true, ["French", "English"]);
var bellBoy2 = new Bellboy("Jimothy", 19, true, ["Chinese", "English"])

console.log(bellBoy1);