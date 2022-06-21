const mod = require('./6.mod')                  // By this way, I can't access the function present in that module
console.log(mod.name)                           // Objects can be useable by this way
// console.log(mod.add(3,4));                   // As i'm trying to access this func with the help of mod, this not gonna work!

const average = require('./6.mod');             // To access the specific func we have to declare a variable with the same name as func
console.log(average([3,4]))

// console.log(add[4,3]);                          // Now I cannot access the add() func, bcoz i've not imported module with the func name and 
                                                  // The second reason is, I've not mentioned module.exports=add in the module