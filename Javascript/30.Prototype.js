function hello() {
    console.log("hello world");
}

// In JavaScript function is also an object!

console.log(hello.name);                        // In this way we can print the function name, which is kinda useless

//* We can add our own properties 
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);

//* name property ---> tells function name;
// function provides more useful properties.


console.log(hello.prototype);                   //* Prototype in js is actually using a free space of functions to create an empty object

// only functions provide prototype property

hello.prototype.abc = "abc";                    // Setting up the prototype with key and values
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {            // Adding func is also possible, bcoz prototype is as same as objects ..
    return "lalalla";
};
console.log(hello.prototype.sing());            // This is the actual way to print the prototype values