//* how to clone array 


let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];             // By doing this even though if both array look same but they are allocated at different positions in heap
// let array2 = array1;                         // One way to clone array ..

// how to concatenate two arrays
// let array2 = array1.slice(0).concat(["item3", "item4"]);  // Another way to clone the array, Yet fastest!
// let array2 = [].concat(array1,["item3", "item4"]);        // Tricky way to clone array, not recommended!

//* spread operator
let oneMoreArray = ["item3", "item4"]
let array2 = [...array1, ...oneMoreArray];                  //* Best way to clone the array using spread operator(Most reliable)

array1.push("item3");

console.log(array1 === array2);                             // This is the way to check whether two arrays are same(identical) or not 
console.log(array1)
console.log(array2)