//* IMP AF!!

const userMethods = {                           // Storing all the func key values 
    about: function () {
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18: function () {
        return this.age >= 18;
    },
    sing: function () {
        return 'toon na na na la la ';
    }
}
function createUser(firstName, lastName, email, age, address) {         // Created one function to create several users..
    const user = Object.create(userMethods);        // Creating object with the help of __proto__, bcoz don't actually want to call funcs
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;                                // Returning the object whenever func gets called!
}

const user1 = createUser('Bhanu', 'Sunka', 'Bhanu@gmail.com', 17, "my address");
const user2 = createUser('harsh', 'Dalle', 'Dalle@gmail.com', 19, "my address");
const user3 = createUser('Osama', 'Shaikh', 'Gamdu@gmail.com', 10, "my address");
console.log(user1);                             // Proper object has been created!
console.log(user1.about());
// console.log(user3.sing());