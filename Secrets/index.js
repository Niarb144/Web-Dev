//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from 'express';
import {dirname} from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

function checkPassword(req, res, next){
    const password = "Jinkazama";
    const inputPass = req.body;
    if(password === inputPass.password){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.send("<h1>Oops 404 Error</h1>");
    }
    next();
}

app.use("/check",checkPassword);

app.post("/check", (req, res)=>{
    console.log(req.body);
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
