import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use((req, res, next)=>{
    blogs.forEach(blog => { 
        let blogName = (`${blog.title}`);
        console.log(blogName);
        return blogName;
    });
    next();
});

app.get("/add", (req,res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req,res)=>{
    blogs.push({title: req.body["blog_title"], content: req.body["blog_content"]});
    
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