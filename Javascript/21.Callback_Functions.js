//* Callback functions 
// Using one function in another function as a parameter


function myFunc2(name) {
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback) {
    console.log("hello there I am a func and I can..")
    callback("Bhanu");
}


myFunc(myFunc2);