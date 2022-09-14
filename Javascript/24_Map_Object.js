//* Maps
// map is an iterable
// store data in ordered fashion
// store key value pair (like object)
// duplicate keys are not allowed like objects

//* Difference between maps and objects
// Objects can only have string or symbol as key**
// In maps you can use anything as key** like array, number, string 

//* object literal 
// In objects keys has to be string or symbols!

const person1 = {
    firstName : "Bhanu",
    age: 7,
    1:"one"                                     // Here 1 as a key is not valid, still js takes this as a string
}
for(let key in person1){
    console.log(typeof key);
}
console.log('\n');



//* Maps in JS
const person = new Map();                       //* This is the way to declare Maps in JS
person.set('firstName', 'Bhanu');               // This is the way to add key-values in maps 
person.set('age', 7);
person.set(1,'one');
person.set([1,2,3],'onetwothree');              // As maps have the properties of storing any kind of data in key, Here array is stored in key
person.set({1: 'one'},'onetwothree');           // Here object is  in key
console.log(person);
// console.log(person.firstName);               // As like objects in this way we cannot get the values in map ..
console.log(person.get('firstName'));           //* To get any key->value, we have to use get method

for(let key of person.keys()){
    console.log(key, typeof key);
}

for(let [key, value] of person){                //* Destructuring, As key-values are stored in the form of array in Maps
    console.log(Array.isArray(key));            //* This is the way to check whether an element is array or not..
    console.log(key, value)
}
console.log('\n');



// const person1 = {
//     id: 1,
//     firstName: "Bhanu"
// }
// const person2 = {
//     id: 2,
//     firstName: "Bunny"
// }

// const extraInfo = new Map();
// extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(userInfo);
// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
// console.log(extraInfo.get(person2).gender);