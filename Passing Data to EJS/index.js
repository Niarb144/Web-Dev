import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
let displayText = "Enter your name below";  

app.get("/", (req, res) => {
  res.render("index.ejs", {display: displayText});
});

app.post("/submit", (req, res) => {
  let letters = req.body["fName"].length + req.body["lName"].length;
let resultText = `There are ${letters} letters in your name`;
  res.render("index.ejs", {display: resultText})
  console.log(req.body["fName"].length + req.body["lName"].length);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
