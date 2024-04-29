import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

blogs.forEach(blog => { 
    let blogName = (`${blog.title}`);
});

app.use(bodyParser.urlencoded({extended:true}));

app.get("/add", (req,res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req,res)=>{
    blogs.push({title: req.body["blog_title"], content: req.body["blog_content"]});
    
    res.render("main.ejs",{blogs: blogs});
    console.log(blogs);
});

app.get("/"+ blogName, (req,res)=>{
    console.log(req.body);
    res.render("blog.ejs");
});

app.get("/", (req,res)=>{
    res.render("main.ejs", {blogs:blogs});
});

app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`);
});