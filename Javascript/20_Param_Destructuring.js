//* Parameter destructuring 
// Frequently used in React

const person = {
    firstName: "Bhanu",
    gender: "male",
    age: 20
}

// In General we write like this ..
// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


function printDetails({ firstName, gender, age }) {         // As like arrays and objects, we can also use destructuring in functions too.. 
    console.log(firstName);
    console.log(gender);
    console.log(age);
}

printDetails(person);