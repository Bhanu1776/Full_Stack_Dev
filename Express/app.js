const express = require('express');                     // Importing Express module

const app = express();                                  //! Creating Express App , IMP !!!
const port = 8000;                                      // 80 port is reserved port for HTTP, Use 80 if working :)

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