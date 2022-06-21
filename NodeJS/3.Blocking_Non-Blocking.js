//* Synchronous or blocking
// - line by line execution

//* Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire
// Example:

const fs = require("fs");
fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(data);                              //* Callback is fired .. As it is compulsory
});
console.log("This is a message");

