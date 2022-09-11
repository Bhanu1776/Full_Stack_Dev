//* Difference between dot and bracket notation

const person = {
    name: "Bhanu",
    age: 20,
    "Top hobbies": ["guitar", "sleeping", "listening music"]     //* This is the way to add two words in key!
}
console.log(person["Top hobbies"]);                  // To print double worded this is the way to print the values!
// console.log(person.Top hobbies);                  // We can't do this, Dot(.) operator doesn't work for string key, So in that case use Brackets

const key = "email";                                    // The question is to add this variable key and value in person object
person[key] = "harshitvashisth@gmail.com";              //* This is the way to add specific variable key values in an object
console.log(person);