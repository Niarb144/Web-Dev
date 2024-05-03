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
    
    if (blogs.indexOf(newBlog) === -1) {
        blogs.push(newBlog);
        // alert(`New blog "${newBlog.title}" saved successfully!`);
        console.log(`New blog "${newBlog.title}" saved successfully!`);
    } else {
        console.log(`${newBlog.title} already exists in the veggies collection.`);
    }

    next();
  };

function deleteBlog(newBlog, req, res, next){
    // Index of the item you want to delete
    // const indexToDelete = this.blogs.indexOf(newBlog);

    const indexToDelete = blogs.findIndex(x => x.title === blog_title);

// Deleting one element at the specified index
    blogs.splice(indexToDelete, 1);
    console.log(blogs);
    next();
}

app.get("/add", (req,res)=>{
    let page_title = "Add Blog"
    res.render("index.ejs", {page_title: page_title});
});

app.post("/submit", checkBlog, (req,res)=>{    
    res.render("main.ejs",{blogs: blogs});
    console.log(blogs);
});

app.get("/edit", (req,res)=>{
    let page_title = "Edit Blog"
    res.render("edit.ejs", {blogs: blogs, page_title: page_title});
});

app.delete("/delete", deleteBlog, (req, res)=>{
    // res.render("blog.ejs", {blogs: blogs});
    console.log("Deleted Successfully");
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