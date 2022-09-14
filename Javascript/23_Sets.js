//* 1) Iterables 
// jispe hum for of loop laga sakein
//* string , array are iterable 

//Strings are iterables
const firstName = "Bhanu";
for(let char of firstName){
    console.log(char);
}

// Arrays are iterables
const items = ['item1', 'item2', 'item3'];
for(let item of items){
    console.log(item);
}

//* Objects are not iterables, for of loop doesn't give the required objects elements 


//* 2) Array like object 
// Jinke pas length property hoti hai 
// aur jiko hum index se access kar sakte hai
//* example :- string 

const secondName = "sunka";
console.log(secondName.length);
console.log(secondName[2]);


//* 3) Sets in JS
// Sets are iterable
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
//* unique items only (no duplicates allowed)

const numbers = new Set([1,2,3]);               //* This is the way to declare sets in JS
numbers.add(4);                                 // This is the way to add numbers in a Set
numbers.add(5);
numbers.add(6);
numbers.add(items);                             // Adding whole array in a sets

//* This is the way to check if the element is present in a string(has keyword)
if(numbers.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}

//* As sets are iterables we can use for of loop to get the values 
for(let number of numbers){
    console.log(number);
}

const myArray = [1,2,4,4,5,6,5,6];              // Check output to understand
const uniqueElements = new Set(myArray);
let length = 0;
for(let element of uniqueElements){
    length++;
}

console.log(length);        