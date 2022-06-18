
const fs = require("fs");                       //* Fs(File System) is a built in module

let text = fs.readFileSync("Temp.txt","utf-8");     // Reading the file and utf-8 is an encoding
console.log(text);

text = text.replace("Bhanu", "Bunny");              // This is the way to replace any content in a file
console.log(text);

fs.writeFileSync("Temp2.txt",text);                 // writing the content in specified file .. Do note: It overwrites the existing content
console.log('New File created pls check in directory!');

//* List of all built-in modules in NODEJS
// https://www.w3schools.com/nodejs/ref_modules.asp