// explicit types
let character: string; // initializes without a value but infers a string
let age: number;
let isLoggedIn: boolean;

// age = '30'; // error, we've explicitly given age a number type
age = 30;

// isLoggedIn = 25; // error
isLoggedIn = true;

// arrays
let ninjas: string[] = []; // initialize with an empty array

// ninjas = [10,23]; // error
// ninjas = ["yoshi", "mario"];

// ninjas.push("shaun"); // cannot push something into this array if it wasn't declared as an array

// union types
let mixed: (string | number)[] = []; // use a union parameter
mixed.push("hello");
mixed.push(20);
// mixed.push(false); //error
console.log(mixed);

let uid: string | number; //don't have to use parenthesis if not in front of array
uid = "123";
uid = 123;
// uid = false; // error

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = "hello"; // error
ninjaOne = []; // will work because an array is an object

// declares the type of object
let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

// ninjaTwo = {} // errors, needs all the properties from above with values
ninjaTwo = { name: "mario", age: 20, beltColour: "black" };
