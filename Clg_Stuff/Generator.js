// define a generator function
function* generator_function() {

}

// creating a generator
const generator_obj = generator_function();

// generator function
function* generatorFunc() {

    console.log("1. code before the first yield");
    yield 100;

    console.log("2. code before the second yield");
    yield 200;
}

// returns generator object
const generator = generatorFunc();

console.log(generator.next());