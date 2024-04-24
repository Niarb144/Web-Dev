import express from "express";

const app = express();
const port  = 3000;

app.get("/", (req, res)=>{
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekend = days[0,6];
    const d = new Date();
    let day = days[d.getDay()];

    if(day === weekend){
        res.render("index.ejs", {
            dayName: day,
            dayType: "a weekend",
            advice: "Grab a drink and relax!",
        });
        console.log("Grab a drink and relaaaxx. It's stil " + day);
    }
    else{
        res.render("index.ejs", {
            dayName: day,
            dayType: "a weekday",
            advice: "Get back to work!",
        });
        console.log("Get to work! It's still " + day);
    }
});

app.listen(port, ()=>{
    console.log(`Server Listening on Port ${port}`);
});

