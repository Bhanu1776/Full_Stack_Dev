//* Array methods in Javascript

const users = [                                 // Object inside Array, Used in many real-world applications
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "Bhanu", lastName: "sunka", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "saxsena", age: 26 },
];

//* 1) ForEach Method
// Refer program no 7 i.e Loops in js..

//* Map Method
// Map method usually apply function to each and every element in an array and creates a new array with all changes
const userNames = users.map((users) => {
    return users.firstName;
});
console.log(userNames);
console.log("\n");



//* Filter Method
// Filter method usually filter elements in an array and creates a new array with all the changes
const filter = users.filter((users) => {
    if (users.age > 30) {
        return users;
    }
})
console.log(filter);
console.log("\n");



//* Reduce Method
// The func used in reduce method always takes two parameters (accumulator,current) and initial value of accumulator!
const reduce = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc = curr.firstName;
    }
    return acc;
}, {})
console.log(reduce);
console.log("\n");



//* Filter and map array method combined example .. Interesting isn't it !?
// Find out First name of all the people whose age is less than 30
const output = users.filter((x) => x.age < 30).map((x) => x.firstName);             // Here the map func will work on the output of filter func !!
console.log(output);
console.log("\n");



//* Sort Method 
// Sort method sorts the array based on ASCII values 
// For sorting, One func with two parameters has to be passed
// This will change the original array unlike map, filter and reduce methods
// 0-9 ==> 48-57
// A-B ==> 65-90
// a-b ==> 97-122

const Names = ['bhanu', 'abcd', 'osamma', 'sarvesh', 'aabc', 'ABC', 'farhan'];
Names.sort();
console.log(Names);                             // Here names are sorted as capital letters first then small letters (Based on ASCII values)

const numbers = [5, 9, 1200, 410, 3000];        //* Check output to understand better

numbers.sort((a, b) => {                        // Callback func
    return b - a;                               // b-a will return result in descending order
});
numbers.sort((a, b) => a - b);                  // a-b will return result in ascending order
console.log(numbers);                           // In sort method, Numbers in an array doesn't consider as an integer they consider as a string. So that's the reason the sorting seems different!

//* Working of this func
// 1200,410 
// a-b ---> 790
// a-b ---> positive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 

// Example
const products = [
    { productId: 1, produceName: "p1", price: 300 },
    { productId: 2, produceName: "p2", price: 3000 },
    { productId: 3, produceName: "p3", price: 200 },
    { productId: 4, produceName: "p4", price: 8000 },
    { productId: 5, produceName: "p5", price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price
});

// HighToLow
const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});
console.log(lowToHigh);
console.log("\n");



//* Find Method

const users2 = [
    { userId: 1, userName: "Bhanu" },
    { userId: 2, userName: "Osama" },
    { userId: 3, userName: "Falguni" },
    { userId: 4, userName: "Farhan" },
    { userId: 5, userName: "Harsh" },
];

const myUser = users2.find((user) => user.userId === 3);
console.log(myUser);
console.log("\n");



//* Every Method
// Every method usually calls func to every element in an array
// Always returns value in boolean format
// Every method is usually used to find out the whole array result not for a specific element.

const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 35000 },
]

const ans = userCart.every((cartItem) => cartItem.price < 30000);
console.log(ans);
console.log("\n");



//* Some Method
// kya ek bhi number esa hai jo even hai 
// Returns value in boolean
// InShort, If any one element in an array satisfies the condition then it'll return true

const userCart1 = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 35000 },
    { productId: 3, productName: "macbook", price: 25000 },
]
const ans1 = userCart1.some((cartItem) => cartItem.price > 100000);
console.log(ans1);
console.log("\n");



//* Fill Method

// Use case 1:-
// const myArray = new Array(10).fill(0);
// console.log(myArray);

// Use case 2:-
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
myArray.fill(0, 2, 5);                          //* value , start , end 
console.log(myArray);
console.log("\n");




//* Splice Method
// To DELETE or TO INSERT in an array we use Splice method
// This will also change an original array
//* start , delete , insert                 -- Follow this pattern

const myArray1 = ['item1', 'item2', 'item3'];

//* Delete
const deletedItem = myArray1.splice(1, 2);
console.log("deleted item", deletedItem);

//* Insert
myArray1.splice(1, 0, 'inserted item');

//* Insert and delete simultaneously
const Item = myArray1.splice(1, 2, "inserted item1", "inserted item2")
console.log("deleted item", Item);
console.log(myArray1); 