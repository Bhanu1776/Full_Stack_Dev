//* Optional chaining 
// Mainly used for state management in React

const user  = {
    firstName: "Bhanu",
    // address: {houseNumber: '1234'}
}

console.log(user?.firstName);                   //* This will work as, If user exists then print firstName if it doesn't then print undefined instead of error
console.log(user?.address?.houseNumber);        // If we remove question mark, program will encounter an error
//                                                 So to be on a safer sides without getting errors we use optional chaining