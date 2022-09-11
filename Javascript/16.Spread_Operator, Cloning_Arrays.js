//* how to clone array 

let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];             // By doing this even though if both array look same but they are allocated at different positions in heap
// let array2 = array1;                         // One way to clone array ..

// how to concatenate two arrays
// let array2 = array1.slice(0).concat(["item3", "item4"]);  // Another way to clone the array, Yet fastest!
// let array2 = [].concat(array1,["item3", "item4"]);        // Tricky way to clone array, not recommended!

//* spread operator in Arrays
// Spread values into an array[] or an object{}, values can be any array values or string values or an object key-values..
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];                  //* Best way to clone the array using spread operator(Most reliable)

array1.push("item3");

console.log(array1 === array2);                             // This is the way to check whether two arrays are same(identical) or not 
console.log(array1)
console.log(array2)

// Interesting Example
const newArray = [..."123456789"];      // Now as the spread operator name sounds, All the values will be spread in an array but in string format not in int.. Try in output!
console.log(newArray);


//* Spread operator in objects
const obj1 = {
    key1: "value1",
    key2: "value2",
};
const obj2 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
};

const newObject1 = { ...obj2, ...obj1, key69: "value69" };      // This is the way to spread obj (key,values) into an another object
console.log(newObject1);

// Interesting example
const newObject2 = { ..."abcdefghijklmnopqrstuvwxyz" };         //* Now this is not going to work as like an array, To understand better check OUTPUT!!
console.log(newObject2);
const newObject3 = { ...["item1", "item2"] };