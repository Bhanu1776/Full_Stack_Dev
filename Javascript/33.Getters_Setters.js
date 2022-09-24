//* Getter and setters 

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName() {                            // get will change the function into a property! while printing out we doesn't need to mention ();
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person("harshit", "sharma", 5);
// console.log(person1.fullName());
// console.log(person1.fullName);               // This is will work as same as upper one, when we 'get' the function.
// person1.fullName = "Bhanu Sunka";
// console.log(person1);