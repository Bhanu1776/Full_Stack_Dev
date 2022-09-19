//* All about Object.create &&  __proto

const obj1 = {
    key1: "value1",
    key2: "value2"
}


//* __proto__
// In official ecmascript documentation __proto__ is written as [[prototype]]
// Both __proto__ & [[prototype]] are exactly same!!


// But prototype is completely different fron __proto__


// 1st way to create empty object
// const obj3 = {};
//* Second way to create empty object
const obj2 = Object.create(obj1);               // This will create empty object with obj1 prototype
obj2.key3 = "value3";                           // Adding up values in obj2
console.log(obj2);
console.log(obj2.__proto__);                    //* Check the output!!

//* With the help of __proto__, We can actually access the mentioned object keys and values if it doesn't exist in current object!
