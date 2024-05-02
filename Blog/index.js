import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

function checkBlog(req, res, next) {
    let data = req.body;
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let time = hour + ":" + minute;
    let date = day + "/" + (month+1) + "/"+ year;
    let newBlog = {title: data["blog_title"], content: data["blog_content"], date: date, time:time};
    
    if (blogs.indexOf(newBlog[newBlog.title]) === -1) {
        blogs.push(newBlog);
        console.log("Blog saved successfully");
    } else {
        alert("Blog title already used");
        console.log(`${newBlog[newBlog.title]} already exists in the veggies collection.`);
    }

    next();
  };

app.get("/add", (req,res)=>{
    let page_title = "Add Blog"
    res.render("index.ejs", {page_title: page_title});
});

app.post("/submit", checkBlog, (req,res)=>{    
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