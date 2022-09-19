//* Methods
//* The function which present under an object is known as Methods in JS

function personInfo() {
    console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName: "Bhanu",
    age: 20,
    about: personInfo                           // Here about value is a function(aka method)
}
const person2 = {
    firstName: "Bunny",
    age: 18,
    about: personInfo
}
const person3 = {
    firstName: "Babblu",
    age: 17,
    about: personInfo
}

person1.about();                                //* This is the way to print the method values
person2.about();
person3.about();


const persona = {
    firstName: "Hrithik",
    age: 42,
    about: function () {                        // Writing function inside an object
        console.log(`Hello my name is ${this.firstName} and my age is ${this.age}`);        // this keyword is used to access the object variables
    }
}
console.log(persona.about());