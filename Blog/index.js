import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

// app.use((req, res, next)=>{
//     blogs.forEach(blog => { 
//         let blogName = (`${blog.title}`);
//         console.log(blogName);
//         return blogName;
//     });
//     next();
// });

app.get("/add", (req,res)=>{
    let page_title = "Add Blog"
    res.render("index.ejs", {page_title: page_title});
});

app.post("/submit", (req,res)=>{
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let time = hour + ":" + minute;
    let date = day + "/" + (month+1) + "/"+ year;
    blogs.push({title: req.body["blog_title"], content: req.body["blog_content"], date: date, time:time});
    
    res.render("main.ejs",{blogs: blogs});
    console.log(blogs);
});

app.get("/blogs", (req,res)=>{
    console.log(req.body);
    res.render("blog.ejs",{blogs: blogs});
});

app.get("/", (req,res)=>{
    res.render("main.ejs", {blogs:blogs});
});

app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`);
});