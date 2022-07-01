const mongoose = require('mongoose');
main().catch(err => console.log(err));                      // This line defines, If we get any error in the main func simply print the error in terminal..

async function main() {
  await mongoose.connect('mongodb://localhost:27017/bunny');
  // console.log('We are connected successfully');          // From line 1 these are the main codes to establish a connection
                                                            
//* Schema is basically a set of rules that we are defining while storing data in mongodb..   -- The very first step!
const BSchema = new mongoose.Schema({
  name: String                                              // We added rule that, name has to be in string format only!
});

//* Creating a method                                       // We add method to save data into the database, Now with the help of methods Function will exposed on each document instance..
BSchema.methods.speak = function speak() {                  //! NOTE: methods must be added to the schema before compiling it with mongoose.model()
  const greeting = "My name is: " + this.name               // Whenever we speak any object this greeting is going to append at start of every document value
  console.log(greeting);
};

//* The next step is compiling our schema into a Model.     -- Second step preferably
const BModel = mongoose.model('Student', BSchema);          // A model is a class with which we construct documents. 
                                                            //* We created a model and Collection(Table) named Student
                                                            // In this case, each document will be a Student with properties and behaviors as declared in our schema.
                                                            // Collection names will always get saved in plural form .. So Do Note !!

//* This is the way to create objects 
const Names = new BModel({name: "Osama"});                 // Now, with the help of model an object is created 
await Names.save();                                        //* This command is used to save the objects in database
Names.speak();                                             // To print the object we use speak() func, only and only if we created methods

// const Names1 = new BModel({ name: 'Bhanu' });            
// console.log(Names1);                                    // We have not saved the data till now in the database. 

const ToPrint = await BModel.find();                       //* This is the way to print the objects from database
console.log(ToPrint);

// await BModel.find({ name: /^Bhanu/ });                     // This is the way to filter our Students by name
} 


//* Mongoose Official documentation to refer ==> https://mongoosejs.com/docs/