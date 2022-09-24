// var y = new String("this");                                     // Another way to declare a string .. Advanced one!
//     console.log(y);

//     let employee = {
//         name: "Bunny",
//         salary: 100,
//         Age: 19,
//         "Profession": "Full Stack developer",
//     }
//     console.log(employee);

// let a = "Bunny"
// let b = 7
// console.log(a + b);

// console.log(typeof (a));

//* This is the way to change values which are declared using constant
// const a1 = {
//     name: "Bhanu",
//     age: 17
// }
// a1['name'] = "Bunny"
// a1['place'] = "Dombivli"
// console.log(a1);

// var h1;
// console.log(h1);

// let h2;
// console.log(h2);

// age = 3;
// if (age > 10 & age < 20) {
//     console.log("It does lie");
// }
// else {
//     console.log("Doesn't lie");
// }

// age = 11
// switch (age) {
//     case 10:
//         console.log('Ten');
//         break;
//     case 12:
//         console.log('Twelve');
//         break;
//     default:
//         console.log('Not ten');
//         break;
// }

// let no = 12;
// if (no % 2 == 0 || no % 3 == 0) {
//     console.log('Yes it is divisible');
// }
// else {
//     console.log('It is not divisible');
// }

// let age = 32;
// (age > 18) ? console.log('You can drive') : console.log('You cannot drive');

// function greet(name, greetText = "Greetings from JavaScript") {
//     console.log(greetText + " " + name);
//     console.log(name + " is a good boy");
// }


// let name = "Bunny";
// let name1 = "Shubham";
// let name2 = "Rohan";
// let name3 = "Sagar";
// let greetText1 = "Good Morning";
// greet(name2, greetText1, name2);

// let friends = ["Bunny", "Prajakta", "Yash", "Gauri", "Farhan", "Shaun"];
// for (let index = 0; index < friends.length; index++) {                  // In General For loop
//     console.log("Hello friend, " + friends[index]);
// }

// let friends = ["Bunny", "Prajakta", "Yash", "Gauri", "Farhan", "Shaun"];         //! Eazz to iterate in an array
// for (f of friends) {
//     console.log(f);
// }

//* To iterate in an array ==> forEach and for (of) is used 
//* To iterate in an object ==> for (in)

// let object = {
//     bunny: 90,
//     him: 39,
//     kedar: 34
// }

// for (marks in object) {
//     console.log(object[marks]);
// }

//! Tricky !! 
// for (i = 0; i < Object.keys(object).length; i++) {
//     console.log(object[Object.keys(object)[i]]);
// }

// let no = 4;
// let i;
// while (i != no) {
//     let i = prompt("Enter a number: ")
// }
// console.log('Correct number !!');

// function mean(arr) {
//     let sum = 0;
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//         avg = sum / 5;
//     }
//     console.log("The mean of those 5 numbers are " + avg);
// }

// let arr = [2, 3, 4, 5, 6];
// mean(arr);

// let str = "BhaNu"
// console.log(str.toLowerCase());

//* Includes in Javascript

// const sent = "Hello Bhanu here!"
// const word = "Bhanu"                    // if the word is present in sentence then it'll return true else false!
// console.log(sent.includes(word));
// console.log(sent.endsWith("here!"));
// console.log(sent.startsWith("hello"));

// let str = "Please give 1000rs"
// let amount = str.slice("Please give ".length)
// console.log(amount);
// let amt = amount.substr(0, 4)
// console.log(typeof (amt));
// console.log(Number.parseInt(amt));      // TO convert string into int .. we use Number.parseInt() func


// let final = str.replace('1', '2')
// console.log(final);

// let arr = [1, 2, 3, 4, 5, 6, 10, 20, 21]
// let n = arr.filter((x) => {
//     return x % 10 == 0;
// })
// console.log(n);

// const prompt = require("prompt-sync")();

// let c = prompt("Enter your name: ");
// console.log(c);

const users = [                                 // Object inside Array, Used in many real-world applications
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "Bhanu", lastName: "sunka", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "saxsena", age: 26 },
];

const userNames = users.map((user) => {
    return user.firstName;
});

console.log(userNames);

//* Filter and map array method combined example .. Interesting isn't it !?
// Find out First name of all the people whose age is less than 30

const output = users.filter((x) => x.age < 30).map((x) => x.firstName);             // Here the map func will work on the output of filter func !!
console.log(output);

const reduce = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc = curr.firstName;
    }
    return acc;
}, {})

console.log(reduce);