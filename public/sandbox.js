"use strict";
// let greet: Function;
// example 1
var greet;
//a and b variables don't matter it just says we have two parameters that have to be strings;
//ts infers it's returning void without having to explicitly write void
greet = function (name, greeting) {
    console.log(name + " says " + greeting);
};
// example 2
var calc;
//takes three params and returns a number
calc = function (numOne, numTwo, action) {
    if (action === "add") {
        // if the condition isn't met and doesn't have an else would return undefined which is not a number
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
var logDetails;
logDetails = function (ninja) {
    console.log(ninja.name + " is " + ninja.age + " years old");
};
