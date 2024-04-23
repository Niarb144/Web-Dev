import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html");
});

app.use(bodyParser.urlencoded({extended: true}));

function bandName(req, res, next){
  const data = req.body;
  console.log("Request method: ", req.method, req.url);
  console.log(data.street + data.pet);
  
  res.send("<h1>Hi, your band name is: </h1> <h3>"+ data.street + data.pet + "</h3>");
  next();
}

app.use("/submit",bandName);

app.post("/submit", (req, res)=>{
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
