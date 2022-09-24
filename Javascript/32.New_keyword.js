//* new keyword 
// 1.) this = {}
// 2.) return {} 


// constructor function 
function CreateUser(firstName, lastName, email, age, address) {         // Func name first letter has to be in capital!
    this.firstName = firstName;                                         // With the help of new keyword, we don't actually need to create link with __proto__
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}
CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
    return this.age >= 18;
}
CreateUser.prototype.sing = function () {
    return "la la la la ";
}


const user1 = new CreateUser('Bhanu', 'Sunka', 'Bhanu@gmail.com', 18, "my address");            //! Syntax
const user2 = new CreateUser('Osama', 'Shaikh', 'Osama@gmail.com', 19, "my address");
const user3 = new CreateUser('Harsh', 'Dalle', 'harsh@gmail.com', 17, "my address");
console.log(user1);
console.log(user1.is18());