import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let blogs = [];

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
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

app.get("/add", (req,res)=>{
    let page_title = "Add Blog"
    res.render("index.ejs", {page_title: page_title});
});

app.post("/submit", checkBlog, (req,res)=>{    
    res.render("main.ejs",{blogs: blogs});
    console.log(blogs);
});

app.get('/edit/:title', (req, res) => {
    let page_title = "Edit Blog";
    const blog = blogs.find(b => b.title === req.params.title);
    if (blog) {
        let counter = 0;
        counter++;
        res.render('edit', { blog ,page_title: page_title,counter:counter});
    } else {
        res.status(404).send('Blog not found');
    }
});

// Route to handle edit form submission
app.post('/edit', (req, res) => {
    const { blog_title, blog_content } = req.body;
    const index = blogs.findIndex(blog => blog.title === blog_title);
    if (index !== -1) {
        blogs[index] = { title: blog_title, content: blog_content };
        res.redirect('/');
    } else {
        res.status(404).send('Blog not found');
    }
});

app.post('/delete', (req, res) => {
    const titleToDelete = req.body.blog_title;
    blogs = blogs.filter(blog => blog.title !== titleToDelete);
    res.redirect('/');
});

app.get("/blogs/:title", (req,res)=>{
    console.log(req.body);
    const blog = blogs.find(b => b.title === req.params.title);

    if (blog){
        res.render('blog', { blog });
    }
    else{
        res.status(404).send('Blog Not Found');
    }
});

app.get("/myblogs", (req,res)=>{
    res.render("myblogs.ejs", {blogs:blogs});
});

app.get("/", (req,res)=>{
    res.render("main.ejs", {blogs:blogs});
});

app.listen(port, ()=>{
    console.log(`Server Listening on port ${port}`);
});