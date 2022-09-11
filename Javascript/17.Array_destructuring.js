//* Array destructuring 
// Special feature in javascript

const myArray = ["value1", "value2", "value3", "value4"];

// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);


let [myvar1, myvar2, ...myNewArray] = myArray;      // This is array destructuring, From myArray assigning values in order
//                                                     In this case value1 got assigned to myvar1 and same with value2, and the rest values got stored in myNewArray Variable in an Array format
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
console.log(myNewArray);

let [v1, v2, , v4] = myArray                        // By this way we can skip any array value by inserting comma to it
console.log(v1, v2, v4);

let [, b2] = myNewArray;                            // Now, myNewArray is an array and we are skipping the first value form it ..
console.log(b2);