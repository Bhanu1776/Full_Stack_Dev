console.log('This is a Module');                // This is the module that we are going to import in other programs ..
                                                // To use modules in js we use Express which is a sub-sequent tool of node itself
                                                
function average(arr){                          // Simple function that finds the average of numbers present in an array
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

function add(a,b){                              // Other program cannot use this func, bcoz we didn't mentioned about module.exports
    let total;
    total=a+b;
    return total;
}
module.exports = average;                       // This is important! without this line the other programs cannot access this func ..
module.exports.name = "Bunny";                  // module.exports is an object with key: name and value: "Bunny"
