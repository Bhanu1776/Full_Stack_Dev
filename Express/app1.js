const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

//* EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))    // Step 1:- For serving static files
app.use(express.urlencoded())                   // This line is used to convert the input html to express format


//* PUG SPECIFIC STUFF
app.set('view engine', 'pug')                   // Step 2:- Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Step 3:- Set the views directory
 

//* ENDPOINTS
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely";      // Initializing variables to pass html content
    const params = {'title': 'PubG is the best game', "content": con};                   //! Do note the syntax
    res.status(200).render('/home/bunny/Desktop/SaxX/Full_Stack_Dev/Express/views/index.pug', params);                                        // Passing the index file and variables
})

app.post('/', (req, res)=>{                     // Input values will be stored in objects
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)      // Storing all the inputs in output.txt file

    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})


//* START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
