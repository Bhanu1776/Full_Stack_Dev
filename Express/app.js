const express = require('express');                     // Importing Express module
const path = require("path");

const app = express();                                  //! Creating Express App , IMP !!!
const port = 8000;                                      // 80 port is reserved port for HTTP, Use 80 if working :)

// For serving static files
app.use('/static', express.static('static'))            // Here, /static is the url and static is the folder

// Set the template engine as pug
app.set('view engine', 'pug')                           //* To use pug template engine, This is necessary to include

// Set the views directory
app.set('views', path.join(__dirname, 'views'))         // views is the directory where we will store pug templates

// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Bunny', message: 'Thanks for being soo kind and humble <3 ' })
});

app.get("/", (req,res)=>{                               // "/","/about" these all are endpoints 
    res.status(200).send("This is the homepage of First Express app");
});
app.get("/about", (req,res)=>{
    res.send("This is the about page of First Express app");
});
app.post("/about", (req,res)=>{
    res.send("This is a post request about page of First Express app");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, ()=>{
    console.log(`The Application started successfully on port ${port}`);
})