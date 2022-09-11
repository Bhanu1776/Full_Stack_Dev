//* Nested destructuring 
//* In simple terms, Destructuring means breakdown
// Extracting values from Array->Object->Values

const users = [
    { userId: 1, firstName: 'Bhanu', gender: 'male' },
    { userId: 2, firstName: 'Osama', gender: 'male' },
    { userId: 3, firstName: 'Falguni', gender: 'Female' },
]

const [{ firstName }, , { gender: user3gender }] = users;           // For gender we assigning different variable name
console.log(firstName);
console.log(`User 3 gender: ${user3gender}`);