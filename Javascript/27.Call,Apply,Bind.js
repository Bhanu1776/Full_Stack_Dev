
const user1 = {
    firstName: "Bhanu",
    age: 18,
    about: function about(hobby, favMusician) {
        console.log(this.firstName, this.age, hobby, favMusician);
    }
    // about(hobby, favMusician) {              // Short Syntax to write methods
    //     console.log(this.firstName, this.age, hobby, favMusician);
    // }
}
const user2 = {
    firstName: "Bunny",
    age: 19,
}

//* Call
user1.about.call(user2);                        // This is the way to call other object func.. Observe properly!

//* Apply                                       //* This works same as Call method, only the arguments will be passed in an Array!
user1.about.apply(user1, ["guitar", "bach"]);

//* Bind                                        // Bind usually stores the value in a specific function
const func = user1.about.bind(user2, "guitar", "mojito");
func();


//* Arrow function (this) different behavior
const user3 = {
    firstName: "Hrithik",
    age: 48,
    about: () => {
        console.log(this.firstName, this.age);          // 'this' actually works different in arrow function, checks surrounding value
    }
}

user1.about(user3);