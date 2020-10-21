// let greet: Function;

// example 1
let greet: (a: string, b: string) => void;
//a and b variables don't matter it just says we have two parameters that have to be strings;
//ts infers it's returning void without having to explicitly write void

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;
//takes three params and returns a number
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    // if the condition isn't met and doesn't have an else would return undefined which is not a number
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

// example 3
let logDetails: (obj: { name: string; age: number }) => void;

//type alias person
type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
