//* Question to Add key and values from variables into an object

const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "myValue1";
const value2 = "myValue2";

//* Easiest way to solve this is using computed properties
const obj1 = {
    [key1]: value1,
    [key2]: value2
};
console.log(obj1);
console.log("\n");

//* General way to solve this problem
const obj = new Object();
// const obj = {};          // This can also be done to create an object, this means creating an empty object
obj[key1] = value1;
obj[key2] = value2;

console.log(obj);